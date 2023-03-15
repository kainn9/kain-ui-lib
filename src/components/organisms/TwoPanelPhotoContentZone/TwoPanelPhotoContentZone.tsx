import { type FC } from "react"
import { uiWrapper } from "../../../hoc/uiWrapper"

interface TwoPanelPhotoContentZoneProps {
  className?: string
}

const TwoPanelPhotoContentZone: FC<TwoPanelPhotoContentZoneProps> = ({ className }) => {
  return <div className={`${className ?? ""}`} data-testid="two-panel-photo-content-zone">Hello World!</div>
}

const wrappedTwoPanelPhotoContentZone = uiWrapper(TwoPanelPhotoContentZone)

export { wrappedTwoPanelPhotoContentZone as TwoPanelPhotoContentZone, type TwoPanelPhotoContentZoneProps }
