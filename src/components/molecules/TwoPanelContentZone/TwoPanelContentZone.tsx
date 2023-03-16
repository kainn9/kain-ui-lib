import { type ReactElement, type FC } from "react"
import { kulCx, nullFalseOrUndefined, uiWrapper } from "../../../util"
import { useWindowDimensions } from "../../../hooks"
import "./twoPanelContentZone.scss"

interface TwoPanelContentZoneProps {
  className?: string
  zoneTwoHeight?: number
  zoneTwoWidth: number
  zoneTwoOffsetX: number
  zoneTwoOffsetY: number
  zoneOneContent: ReactElement

  zoneOneHeight?: number
  zoneOneWidth: number
  zoneTwoContent: ReactElement

  previewBorders: boolean
  increment?: number
  overrideDefaultScaling?: boolean

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
  previewBorders,
  overrideDefaultScaling,
  increment
}) => {
  const { width } = useWindowDimensions()
  const inc = increment ?? 36

  const zoneOneOverFlow = width - inc < zoneOneWidth

  const twoPanelOverFlow = width < (zoneTwoWidth + zoneOneWidth)
  const offsetXAdjustment = (((zoneTwoWidth + zoneTwoOffsetX) - width + inc))

  const calcOffsetHori = (): number => {
    if (twoPanelOverFlow && !zoneOneOverFlow) return (zoneTwoOffsetX - offsetXAdjustment)

    if (zoneOneOverFlow) return 0

    return zoneTwoOffsetX
  }

  const TwoPanelContentZoneStyle = {
    maxWidth: "100%",
    width: zoneOneOverFlow && nullFalseOrUndefined(overrideDefaultScaling) ? width - inc : (zoneTwoWidth + zoneTwoOffsetX),
    justifyItems: "start"
  }

  const zoneTwoStyle = {
    border: (previewBorders ?? false) ? "2px solid red" : "",
    height: zoneTwoHeight ?? "fit-content",
    width: zoneOneOverFlow && nullFalseOrUndefined(overrideDefaultScaling) ? width - inc : zoneTwoWidth,
    marginLeft: nullFalseOrUndefined(overrideDefaultScaling) ? calcOffsetHori() : zoneTwoOffsetX,
    marginTop: zoneOneOverFlow && nullFalseOrUndefined(overrideDefaultScaling) ? 20 : -zoneTwoOffsetY
  }

  const zoneOneStyle = {
    border: (previewBorders ?? false) ? "2px solid red" : "",
    height: zoneOneHeight ?? "fit-content",
    width: zoneOneOverFlow && nullFalseOrUndefined(overrideDefaultScaling) ? width - inc : zoneOneWidth
  }

  return (
    <div
      className={kulCx("content-zone__card-zone", className)}
      style={TwoPanelContentZoneStyle}
      data-testid="two-panel-zone"
    >

      <div className={kulCx("content-zone__zone-one", className)} style={zoneOneStyle}>
        {zoneOneContent}
      </div>

      <div className={kulCx("content-zone__zone-two", className)} style={zoneTwoStyle}>
        {zoneTwoContent}
      </div>
    </div>
  )
}

const wrappedTwoPanelContentZone = uiWrapper(TwoPanelContentZone)

export { wrappedTwoPanelContentZone as TwoPanelContentZone, type TwoPanelContentZoneProps }
