import { type ReactElement, type FC, useState, type CSSProperties } from "react"
import { uiWrapper, kulCx, nullFalseOrUndefined } from "../../../util"
import "./imageLink.scss"

interface ImageLinkProps {
  className?: string
  src: string
  height?: number
  width?: number
  icon?: ReactElement
  href?: string
  hoveredAlwaysOn?: boolean
  customHoverStyles?: CSSProperties
  fit?: "contain" | "cover" | "fill" | "none" | "scale-down"
}

const ImageLink: FC<ImageLinkProps> = ({
  className,
  src,
  height,
  width,
  icon,
  href,
  hoveredAlwaysOn,
  customHoverStyles,
  fit
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const showHoveredStyles: boolean = !nullFalseOrUndefined(hoveredAlwaysOn) || isHovered

  const style = {
    height: nullFalseOrUndefined(height) ? "100%" : height,
    width: nullFalseOrUndefined(width) ? "100%" : width,
    objectFit: fit
  }

  const imageHoverStyles = Object.assign({
    transform: "scale(1.3)",
    cursor: "pointer",
    filter: "brightness(0.6)"
  }, customHoverStyles)

  const imageStyles = showHoveredStyles ? { ...style, ...imageHoverStyles } : style

  const iconHoverStyles = {
    opacity: 1,
    transform: "scale(3)",
    cursor: "pointer"
  }
  return (
    <div
      className={kulCx("image-link-container", className)}
      onMouseEnter={() => { setIsHovered(true) }}
      onMouseLeave={() => { setIsHovered(false) }}
      data-testid="image-link-container"
      onClick={() => { window.location.href = href ?? "#" }}
    >
      <div
        className={kulCx("image-link-icon", className)}
        style={showHoveredStyles ? iconHoverStyles : {}}
        data-testid="image-link-icon"
      >
        {icon}
      </div>
      <img
        style={imageStyles}
        src={src}
        className={kulCx("image-link-image", className)}
        data-testid="image-link-img"
      />
    </div>
  )
}

const wrappedImageLink = uiWrapper(ImageLink)

export { wrappedImageLink as ImageLink, type ImageLinkProps }
