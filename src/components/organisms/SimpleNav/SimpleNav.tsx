import { type ReactElement, type FC } from "react"
import "./simpleNav.scss"
import { uiWrapper } from "../../../hoc/uiWrapper"

interface NavProps {
  className?: string
  padding?: number
  gap: number
  direction: "row" | "column"
  height: number
  alignment: "start" | "end" | "center" | "stretch"
  justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit" | "left" | "right"
  position: "static" | "relative" | "fixed" | "absolute" | "sticky"
  customStyle?: Record<string, string>
  reverse?: boolean
  links?: ReactElement[]
}

const SimpleNav: FC<NavProps> = ({
  className,
  links,
  gap,
  direction,
  reverse,
  customStyle,
  alignment,
  height,
  padding,
  justify,
  position
}) => {
  const style = {
    gap: `${gap}px`,
    flexDirection: (reverse ?? false) ? `${direction}-reverse` : direction,
    alignItems: alignment,
    height: `${height}px`,
    padding: (padding !== null && padding !== undefined) ? `${padding}px` : null,
    justifyContent: justify,
    position
  }

  return (
    <div
      className={`kain-ui-s-nav ${className ?? ""}`}
      // as React.CSSProperties handles type bug around flex-direction
      // see: https://github.com/cssinjs/jss/issues/1344#issuecomment-734402215
      style={{ ...style as React.CSSProperties, ...customStyle }}
      data-testid="simple-nav"
    >
      {links}
    </div>
  )
}

const WrappedSimpleNav = uiWrapper(SimpleNav)

export { WrappedSimpleNav as SimpleNav, type NavProps }
