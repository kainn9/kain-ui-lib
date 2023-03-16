import { type CSSProperties, type FC, type ReactElement } from "react"
import { nullFalseOrUndefined, uiWrapper, kulCx } from "../../../util"
import "./animContainer.scss"

const anims = {
  revealFromTop: "reveal-from-top",
  revealFromBottom: "reveal-from-bottom",
  revealFromLeft: "reveal-from-left",
  revealFromRight: "reveal-from-right"
}

interface AnimContainerProps {
  className?: string
  anim: keyof typeof anims
  children: ReactElement
  delay?: number
  freezeAtFinalFrame?: boolean
  customStyle?: CSSProperties
}

const AnimContainer: FC<AnimContainerProps> = ({
  className,
  anim,
  children,
  delay,
  freezeAtFinalFrame,
  customStyle
}) => {
  const animClass = anims[anim]
  const animPrefixClass = "anim-container__"

  let style = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    animationDelay: nullFalseOrUndefined(delay) ? "0s" : `${delay!}ms`,
    animationFillMode: nullFalseOrUndefined(freezeAtFinalFrame) ? "" : "forwards"
  }

  style = { ...customStyle, ...style }

  return (
    <div
      className={kulCx(`anim-container ${animPrefixClass}${animClass}`, className)}
      data-testid="anim-container"
      style={style}
    >
      {children ?? "PlaceHolder"}
    </div>
  )
}

const wrappedAnimContainer = uiWrapper(AnimContainer)

export { wrappedAnimContainer as AnimContainer, type AnimContainerProps }
