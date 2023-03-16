import { type ReactElement, type FC, useState, cloneElement, type CSSProperties } from "react"
import "./simpleNav.scss"
import { kulCx, uiWrapper, nullFalseOrUndefined, findAndModifyRootLinkOnClick } from "../../../util"
import { useWindowDimensions } from "../../../hooks"

interface mobileSettings {
  iconLink: ReactElement
  justify: "left" | "right" | "center"
  translationOffsetX?: number
  translationOffsetY?: number
}

interface NavProps {
  className?: string
  padding?: number
  gap: number
  direction: "row" | "column"
  height?: number
  width?: number
  alignment: "start" | "end" | "center" | "stretch"
  justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit" | "left" | "right"
  offsetRight?: number
  offsetLeft?: number
  customStyleInner?: CSSProperties
  customStyleOuter?: CSSProperties
  reverse?: boolean
  mobileSettings?: mobileSettings
  bgColor?: string
  links?: ReactElement[]
  logo?: ReactElement
}

// So this nav has become...not so simple
const SimpleNav: FC<NavProps> = ({
  className,
  links,
  bgColor,
  gap,
  direction,
  reverse,
  customStyleInner,
  customStyleOuter,
  alignment,
  height,
  width,
  padding,
  justify,
  offsetRight,
  offsetLeft,
  mobileSettings,
  logo
}) => {
  const { isMobile } = useWindowDimensions()

  const [mobileMenuOn, setMobileMenuOn] = useState(false)

  const toggleMobileMenu = (): void => {
    setMobileMenuOn((ps) => !ps)
  }

  const containerStyle = {
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    paddingRight: nullFalseOrUndefined(offsetRight) ? "0px" : offsetRight!,
    paddingLeft: nullFalseOrUndefined(offsetLeft) ? "0px" : offsetLeft!,
    backgroundColor: nullFalseOrUndefined(bgColor) ? "" : bgColor,

    height: nullFalseOrUndefined(height) ? "fit-content" : height!,
    width: nullFalseOrUndefined(width) ? "100%" : width!,
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
    position: "fixed"
  }
  const style = {
    gap,
    flexDirection: (reverse ?? false) ? `${direction}-reverse` : direction,
    alignItems: alignment,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    padding: nullFalseOrUndefined(padding) ? null : padding!,
    justifyContent: justify,
    width: "100%"
  }

  let mobileLinks = links

  // Needs to be tested more

  if (!nullFalseOrUndefined(mobileSettings)) {
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    style.justifyContent = mobileSettings!.justify
    mobileSettings!.iconLink = cloneElement(mobileSettings!.iconLink, { onClick: toggleMobileMenu })

    mobileLinks = mobileLinks!.map((li: ReactElement) => {
      return findAndModifyRootLinkOnClick(li, setMobileMenuOn, false)[0]
    })
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  }

  return (
    <>
      <div
        className={kulCx("s-nav", className)}
        style={{ ...containerStyle as React.CSSProperties, ...customStyleOuter }}
        data-testid="simple-nav"
      >
        {logo}
        <div
          className={kulCx("s-nav__inner", className)}
          // as React.CSSProperties handles type bug around flex-direction
          // see: https://github.com/cssinjs/jss/issues/1344#issuecomment-734402215
          style={{ ...style as React.CSSProperties, ...customStyleInner }}
        >

          {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            !nullFalseOrUndefined(mobileSettings) && isMobile ? mobileSettings!.iconLink : links
          }

        </div>
      </div>
      {!nullFalseOrUndefined(mobileSettings) && isMobile
        ? (
            <SimpleNav
              className={kulCx("s-nav s-nav-mobile", className)}
              width={200}
              padding={20}
              gap={30}
              direction={"column"}
              alignment={"start"}
              justify={"left"}
              links={mobileLinks}
              reverse
              customStyleInner={{
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                backgroundColor: nullFalseOrUndefined(bgColor) ? "" : bgColor!
              }}
              customStyleOuter={{
                transition: "all 0.7s ease",
                transform: mobileMenuOn ? `translate(${0 - (mobileSettings?.translationOffsetX ?? 0)}px, ${0 - (mobileSettings?.translationOffsetY ?? 0)}px)` : "translate(400px, 0px)",
                visibility: mobileMenuOn ? "visible" : "hidden",
                position: "fixed",
                right: "0"
              }}
            />
          )
        : (null)
      }
    </>
  )
}

const WrappedSimpleNav = uiWrapper(SimpleNav)

export { WrappedSimpleNav as SimpleNav, type NavProps }
