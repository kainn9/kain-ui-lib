import { type FC } from "react"
import { kulCx, uiWrapper, getFromScscModule, nullFalseOrUndefined } from "../../../util"
import { Text, type TextProps } from "../../atoms"
import { colors } from "../../../styles/scssVars/colors/index"
import "./glowText.scss"

type themeGlowKeys = keyof typeof themeGlowOpts

interface GlowTextProps extends TextProps {
  glowColor?: string
  themeGlow?: themeGlowKeys
}

const themeGlowOpts = {
  purp: "purp-theme-glow",
  purpPul: "purp-pul-theme-glow",
  blue: "blue-theme-glow",
  bluePul: "blue-pul-theme-glow",
  pink: "pink-theme-glow",
  pinkPul: "pink-pul-theme-glow",
  green: "green-theme-glow",
  greenPul: "green-pul-theme-glow"
}

const GlowText: FC<GlowTextProps> = ({
  className,
  themeGlow,
  glowColor,
  color,
  themeColor,
  font,
  size,
  headingLevel,
  children
}) => {
  const isThemeGlowSelected = (): boolean => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return !nullFalseOrUndefined(themeGlow) && themeGlow!.length > 0
  }

  const style = {
    textShadow: !isThemeGlowSelected() ? `${glowColor ?? "yellow"} 4px 0 10px` : undefined
  }

  const selectedThemeColor = getFromScscModule(colors, themeColor as string)

  return (
    <div
      data-testid="glow-text"
      className={kulCx(`glow-text ${isThemeGlowSelected() ? themeGlowOpts[themeGlow as themeGlowKeys] : ""}`, className)}
      style={style}
    >
      <Text
        font={font}
        size={size}
        headingLevel={headingLevel}
        color={!isThemeGlowSelected() ? (selectedThemeColor ?? color) : "#fff"}
      >
       {children}
      </Text>
    </div>
  )
}
const wrappedGlowText = uiWrapper(GlowText)

export { wrappedGlowText as GlowText, type GlowTextProps, themeGlowOpts }
