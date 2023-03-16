import { type ReactElement, type FC, type CSSProperties } from "react"
import { uiWrapper, kulCx, nullFalseOrUndefined } from "../../../util"
import "./simpleCard.scss"

interface SimpleCardProps {
  className?: string
  color: string
  height?: number
  hFit?: boolean
  width?: number
  children: ReactElement
  padding: number
  customStyles?: CSSProperties
}

const SimpleCard: FC<SimpleCardProps> = ({
  className,
  color,
  height,
  width,
  children,
  padding,
  customStyles,
  hFit
}) => {
  const style = {
    backgroundColor: color,
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    height: nullFalseOrUndefined(height) ? "100%" : height!,
    width: nullFalseOrUndefined(width) ? "100%" : width!,
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
    padding
  }

  if (!nullFalseOrUndefined(hFit)) style.height = "fit-content"

  return (
    <div
      className={kulCx("simple-card", className)}
      style={{ ...style, ...customStyles }}
      data-testid="simple-card"
    >
      {children}
    </div>
  )
}

const WrappedSimpleCard = uiWrapper(SimpleCard)

export { WrappedSimpleCard as SimpleCard, type SimpleCardProps }
