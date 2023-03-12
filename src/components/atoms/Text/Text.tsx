import { type FC } from "react"
import { uiWrapper } from "../../../hoc/uiWrapper"
import { getFromScscModule } from "../../../util/scssModuleHelper"
import { colors, type colorName } from "../../../scssVars/colors"

interface TextProps {
  themeColor?: colorName
  color?: string
  font: keyof typeof fonts
  size?: keyof typeof sizes
  /**
   * children prop
   * (this comment is required for the storybook children option to render ¯\ (ツ) /¯)
   * see: https://github.com/storybookjs/storybook/issues/9921#issuecomment-655436418
   */
  children: string
  headingLevel?: number
}

const fonts = {
  georgia: "Georgia, 'Times New Roman', Times, serif",
  sans: "sans-serif",
  roboto: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
}

const sizes = {
  sm: 14,
  md: 18,
  lg: 24,
  xl: 30,
  xxl: 36,
  xxxl: 48,
  xxxxl: 60,
  bingBong: 72, // These last three are NyKnicks basketball jokes btw
  smokinOnThatBostonPack: 84,
  traeYoungNotValidInDyckman: 150
}

const Text: FC<TextProps> = ({ themeColor, color, font, size, headingLevel, children }) => {
  const selectedThemeColor = getFromScscModule(colors, themeColor as string)

  const Tag = headingLevel !== undefined && headingLevel !== null && headingLevel > 0 && headingLevel < 4
    ? `h${headingLevel}` as keyof JSX.IntrinsicElements
    : "p" as keyof JSX.IntrinsicElements

  const style = {
    color: selectedThemeColor ?? color,
    fontFamily: fonts[font],
    fontSize: sizes[size ?? "sm"]
  }

  return (
    <Tag
      className="kain-ui-text"
      style={style}
      data-testid="kain-ui-text"
    >
      {
        children !== undefined && children !== null && children.length > 0
          ? children
          : "Hey no text was passed, so heres some placeholder text!"
      }
    </Tag>
  )
}

const wrappedText = uiWrapper(Text)

export { wrappedText as Text, fonts, sizes, type TextProps }
