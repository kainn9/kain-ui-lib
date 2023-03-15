import { type ReactElement, type FC, useState } from "react"
import { uiWrapper } from "../../../hoc/uiWrapper"
import { GlowText, type GlowTextProps } from "../"
import { Text } from "../../atoms"
import "./link.scss"

interface LinkProps extends Omit<GlowTextProps, "children"> {
  className?: string
  children?: ReactElement | string
  childrenBeforeContent?: boolean
  content: string
  useGlowText?: boolean
  hoverStyles?: Record<string, string>
  customStyles?: Record<string, string>
  onClick: () => void
}

const Link: FC<LinkProps> = ({
  className,
  children,
  childrenBeforeContent,
  content,
  useGlowText,
  font,
  size,
  color,
  glowColor,
  headingLevel,
  themeGlow,
  hoverStyles,
  customStyles,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const TextComponent = (useGlowText ?? false) ? GlowText : Text

  const handleMouseEnter = (): void => {
    setIsHovered(true)
  }

  const handleMouseLeave = (): void => {
    setIsHovered(false)
  }
  hoverStyles = { ...hoverStyles, transition: "all 0.5s ease" }

  return (
    <div
      style={customStyles}
      className={`kain-ui-link ${className ?? ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-testid="kain-ui-link"
    >
      {(childrenBeforeContent ?? false) ? children : null}
      <TextComponent
        customStyles={isHovered ? hoverStyles : {}}
        font={font}
        size={size}
        color={color}
        glowColor={glowColor}
        headingLevel={headingLevel}
        themeGlow={themeGlow}
      >
        {content}
      </TextComponent>
      {(childrenBeforeContent ?? false) ? null : children}
    </div>
  )
}

const wrappedLink = uiWrapper(Link)

export { wrappedLink as Link, type LinkProps }
