import { type FC, type ReactElement } from "react"
import { uiWrapper } from "../../../hoc/uiWrapper"
import "./animContainer.scss"

const anims = {
  revealFromTop: "reveal-from-top",
  revealFromBottom: "reveal-from-bottom",
  revealFromLeft: "reveal-from-left",
  revealFromRight: "reveal-from-right"
}

export interface AnimContainerProps {
  anim: keyof typeof anims
  children: ReactElement
  delay?: number
  freezeAtFinalFrame?: boolean
  customStyle?: Record<string, string>
}

const AnimContainer: FC<AnimContainerProps> = ({
  anim,
  children,
  delay,
  freezeAtFinalFrame,
  customStyle
}) => {
  const animClass = anims[anim]
  const animPrefixClass = "anim-container__"

  let style = {
    animationDelay: delay !== undefined && delay != null ? `${delay}ms` : "0s",
    animationFillMode: (freezeAtFinalFrame ?? false) ? "forwards" : ""
  }

  style = { ...customStyle, ...style }

  return (
    <div
      className={"anim-container " + animPrefixClass + animClass}
      data-testid="anim-container"
      style={style}
    >
      {children}
    </div>
  )
}

const wrappedAnimContainer = uiWrapper(AnimContainer)

export { wrappedAnimContainer as AnimContainer }
