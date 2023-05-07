import { type ReactElement, type FC, useState, type CSSProperties } from "react"
import { uiWrapper, kulCx, nullFalseOrUndefined } from "../../../util"
import "./tabContainer.scss"

interface VerticalModeOptions {
  width: string
}

interface TabProps {
  className: string
  tabName: ReactElement | string
  bgColor: string
  fontColor: string
  height: number
  active: number
  id: number
  highlight: string
  onClick: () => void
  verticalOpts?: VerticalModeOptions
}

interface TabContainerProps {
  className?: string
  height?: number
  width?: number
  bgColor: string
  tabHeaders: ReactElement[] | string[]
  tabContent: ReactElement[]
  tabBgColor: string
  tabfontColor: string
  tabHeight?: number
  tabGap?: number
  tabPadding?: number
  contentPadding?: number
  font?: string
  tabActiveHighlight: string
  contentHeight?: number
  fontSize?: number
  verticalOpts?: VerticalModeOptions
  tabQpKey?: string
  tabClickCb?: () => void
}

const Tab: FC<TabProps> = ({
  className,
  tabName,
  bgColor,
  fontColor,
  height,
  active,
  id,
  highlight,
  onClick,
  verticalOpts

}) => {
  const isVertical = !nullFalseOrUndefined(verticalOpts)
  const { width: verticalWidth } = verticalOpts ?? {}

  const style: CSSProperties = {
    backgroundColor: bgColor,
    color: fontColor,
    height,
    borderBottom: active === id && !isVertical ? `2px solid ${highlight}` : "",
    borderLeft: active === id && isVertical ? `2px solid ${highlight}` : "",
    flexGrow: isVertical ? 0 : 1,
    width: isVertical ? verticalWidth : ""
  }

  return (
    <div
      data-testid={`tab-${id}`}
      className={`${kulCx("tab-container__tab", className)}`}
      style={style}
      onClick={onClick}
    >
      {tabName}
    </div>
  )
}

const TabContainer: FC<TabContainerProps> = ({
  className,
  height,
  width,
  tabContent,
  tabHeaders,
  tabBgColor,
  tabfontColor,
  bgColor,
  tabHeight,
  tabPadding,
  tabGap,
  tabActiveHighlight,
  contentHeight,
  font,
  fontSize,
  contentPadding,
  verticalOpts,
  tabQpKey,
  tabClickCb
}) => {
  const queryParams = new URLSearchParams(window.location.search)
  const tabFromQp = queryParams.get(tabQpKey ?? "")

  const isVertical = !nullFalseOrUndefined(verticalOpts)
  const { width: verticalWidth } = verticalOpts ?? {}

  const [active, setActive] = useState(qpSafe(tabFromQp ?? "", tabHeaders.length))

  const handleTabClick = (i: number): void => {
    setActive(i)

    if (!nullFalseOrUndefined(tabQpKey)) {
      const queryParams = new URLSearchParams(window.location.search)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      queryParams.set(tabQpKey!, (i + 1).toString())

      const newUrl = window.location.pathname + "?" + queryParams.toString()
      window.history.pushState(null, "", newUrl)
    }

    tabClickCb?.()
  }

  const style: CSSProperties = {
    height,
    width,
    backgroundColor: bgColor,
    display: isVertical ? "flex" : "block"

  }

  const tabContainerStyle: CSSProperties = {
    gap: tabGap ?? 10,
    padding: tabPadding ?? 10,
    fontFamily: font,
    fontSize,
    width: isVertical ? verticalWidth : "",
    flexDirection: isVertical ? "column" : "row",
    alignItems: isVertical ? "start" : "",
    justifyContent: isVertical ? "start" : ""
  }

  const containerStyle: CSSProperties = {
    height: contentHeight,
    padding: contentPadding ?? 10,
    alignItems: isVertical ? "flex-start" : ""
  }

  return (
   <div
    style ={style}
     className={`${kulCx("tab-container", className)}`}
     data-testid="tab-container"
   >
     <div
      className={`${kulCx("tab-container__tab-container", className)}`}
      style={tabContainerStyle}
    >
      {
        tabHeaders.map((th: string | ReactElement, i) =>
          <Tab
            className={className ?? ""}
            tabName={th} key={i}
            bgColor={tabBgColor}
            fontColor={tabfontColor}
            height={tabHeight ?? 50}
            id={i}
            active={active}
            highlight={tabActiveHighlight}
            onClick={() => { handleTabClick(i) }}
            verticalOpts={verticalOpts}
           />
        )
      }
     </div>

     <div
        className={`${kulCx("tab-container__content-container", className)}`}
        style={containerStyle}
     >
      {tabContent[active]}
      </div>

   </div>
  )
}

const qpSafe = (qp: string, max: number): number => {
  const qpParsed = parseInt(qp, 10)
  if ((!isNaN(qpParsed) && qpParsed <= max) && qpParsed > 0) {
    return qpParsed - 1
  } else {
    return 0
  }
}
const wrappedTabContainer = uiWrapper(TabContainer)

export { wrappedTabContainer as TabContainer, type TabContainerProps, type VerticalModeOptions }
