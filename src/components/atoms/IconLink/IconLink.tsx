import { useState, type FC } from "react"
import { uiWrapper, kulCx } from "../../../util"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { type SizeProp, type IconProp } from "@fortawesome/fontawesome-svg-core"
import "./iconLink.scss"

interface IconLinkProps {
  className?: string
  faIcon: IconProp
  color: string
  size: SizeProp
  hoverColor: string
  onClick: () => void
}

const IconLink: FC<IconLinkProps> = ({ className, faIcon, color, size, hoverColor, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
   <div
     className={`${kulCx("icon-link", className)}`}
     data-testid="icon-link"
     onMouseEnter={() => { setIsHovered(true) }}
     onMouseLeave={() => { setIsHovered(false) }}
     onClick={onClick}

     style = {isHovered ? { color: hoverColor, transition: "all 0.5s ease" } : { color }}
   >
     <FontAwesomeIcon icon={faIcon} size={size}/>
   </div>
  )
}

const wrappedIconLink = uiWrapper(IconLink)

export { wrappedIconLink as IconLink, type IconLinkProps }
