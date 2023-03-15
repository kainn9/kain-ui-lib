import { type ReactElement, type FC } from "react"
import { uiWrapper } from "../../../hoc/uiWrapper"

import "./twoPanelContentZone.scss"

interface TwoPanelContentZoneProps {
  className?: string
  zoneTwoHeight: number
  zoneTwoWidth: number
  zoneTwoOffsetX: number
  zoneTwoOffsetY: number
  zoneOneContent: ReactElement

  zoneOneHeight: number
  zoneOneWidth: number
  zoneTwoContent: ReactElement

  previewBorders: boolean
  justify: "center" | "start" | "end"

}

const TwoPanelContentZone: FC<TwoPanelContentZoneProps> = ({
  className,
  zoneTwoHeight,
  zoneTwoWidth,
  zoneTwoOffsetX,
  zoneTwoOffsetY,
  zoneTwoContent,
  zoneOneHeight,
  zoneOneWidth,
  zoneOneContent,
  justify,
  previewBorders
}) => {
  const TwoPanelContentZoneStyle = {
    maxWidth: `${zoneTwoWidth + zoneOneWidth}px`,
    justifyItems: justify
  }
  const zoneTwoStyle = {
    border: (previewBorders ?? false) ? "2px solid red" : "",
    height: `${zoneTwoHeight}px`,
    width: `${zoneTwoWidth}px`,
    marginRight: -zoneTwoOffsetX,
    marginTop: zoneTwoOffsetY
  }
  const zoneOneStyle = {
    border: (previewBorders ?? false) ? "2px solid red" : "",
    height: `${zoneOneHeight}px`,
    width: `${zoneOneWidth}px`
  }

  return (
    <div
      className={`content-zone__card-zone ${className ?? ""}`}
      style={TwoPanelContentZoneStyle}
      data-testid="two-panel-zone"
    >

      <div className="content-zone__zone-one" style={zoneOneStyle}>
        {zoneOneContent}
      </div>

      <div className="content-zone__zone-two" style={zoneTwoStyle}>
      {zoneTwoContent}
      </div>
    </div>
  )
}

const wrappedTwoPanelContentZone = uiWrapper(TwoPanelContentZone)

export { wrappedTwoPanelContentZone as TwoPanelContentZone, type TwoPanelContentZoneProps }
