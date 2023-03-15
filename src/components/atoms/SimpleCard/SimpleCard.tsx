import { type ReactElement, type FC } from "react"
import "./simpleCard.scss"
import { uiWrapper } from "../../../hoc/uiWrapper"

interface SimpleCardProps {
  className?: string
  color: string
  height?: number
  width?: number
  children: ReactElement
  padding: number
  customStyles: Record<string, string>
}

const SimpleCard: FC<SimpleCardProps> = ({
  className,
  color,
  height,
  width,
  children,
  padding,
  customStyles
}) => {
  const style = {
    backgroundColor: color,
    height: height !== null && height !== undefined ? `${height}px` : "100%",
    width: width !== null && width !== undefined ? `${width}px` : "100%",
    padding: `${padding}px`
  }

  return (
    <div
      className={`simple-card ${className ?? ""}`}
      style={{ ...style, ...customStyles }}
      data-testid="simple-card"
    >
      {children}
    </div>
  )
}

const WrappedSimpleCard = uiWrapper(SimpleCard)

export { WrappedSimpleCard as SimpleCard, type SimpleCardProps }
