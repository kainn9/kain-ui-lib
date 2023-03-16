import { type FC } from "react"
import { kulCx, uiWrapper } from "../../../util"
import { Text, SimpleCard, TwoPanelContentZone, ImageLink } from "../../../components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"

import colors from "../../../styles/scssVars/colors/colors.module.scss"
import "./githubPhotoAndTextContentZone.scss"

import demoPhoto from "../../../localAssets/demoPhoto.jpg"
interface GithubPhotoAndTextContentZoneProps {
  className?: string
  hoveredAlwaysOn?: boolean
  increment?: number

  zoneOneHeight: number
  zoneOneWidth: number

  zoneTwoHeight: number
  zoneTwoWidth: number
  zoneTwoOffsetX: number
  zoneTwoOffsetY: number
}

const ZoneOne: FC<{ hoveredAlwaysOn: boolean }> = ({ hoveredAlwaysOn }) => {
  return (
    <SimpleCard color="white" padding={0}>
      <ImageLink
        src={demoPhoto}
        className="kain-ui-lib gpatcz-photo"
        hoveredAlwaysOn={hoveredAlwaysOn}
        icon={
          <>
            <FontAwesomeIcon icon={faSquareGithub} size="2xl" color="black" />
            <Text
              font={"sans"}
              color="white"
              size="sm"
              customStyles={{
                fontSize: "7px"
              }}
          >
              View on Github
          </Text>
        </>
        }
      />
    </SimpleCard>
  )
}

const ZoneTwo: FC = () => {
  return (
    <SimpleCard color={colors["purple-darkest"]} padding={30} hFit>
      <Text font={"sans"} color={colors["purple-lightest"]} size="md">
        Lorum Ipsom nopson lopsom gopsom. Labo nabo lentil fentil. Gemo Baha naemi logo be
        guro topo rovbii. Densoi shamou, goooo nopoi loaoap foooi shindop.
        Lorum Ipsom nopson lopsom gopsom. Labo nabo lentil fentil. Gemo Baha naemi logo be
        guro topo rovbii. Densoi shamou, goooo nopoi loaoap foooi shindop.
        Lorum Ipsom nopson lopsom gopsom. Labo nabo!
      </Text>
    </SimpleCard>
  )
}

const GithubPhotoAndTextContentZone: FC<GithubPhotoAndTextContentZoneProps> = ({
  className,
  zoneOneHeight,
  zoneOneWidth,
  zoneTwoHeight,
  zoneTwoWidth,
  zoneTwoOffsetX,
  zoneTwoOffsetY,
  hoveredAlwaysOn,
  increment
}) => {
  return (
    <TwoPanelContentZone
      className={kulCx("github-photo-and-text-content-zone", className)}
      zoneTwoHeight={zoneTwoHeight}
      zoneTwoWidth={zoneTwoWidth}
      zoneTwoOffsetX={zoneTwoOffsetX}
      zoneTwoOffsetY={zoneTwoOffsetY}
      zoneOneContent={<ZoneOne hoveredAlwaysOn={hoveredAlwaysOn ?? false} />}
      zoneOneHeight={zoneOneHeight}
      zoneOneWidth={zoneOneWidth}
      zoneTwoContent={<ZoneTwo />}
      previewBorders={false}
      increment={increment}
    />
  )
}

const wrappedGithubPhotoAndTextContentZone = uiWrapper(GithubPhotoAndTextContentZone)

export { wrappedGithubPhotoAndTextContentZone as GithubPhotoAndTextContentZone, type GithubPhotoAndTextContentZoneProps }
