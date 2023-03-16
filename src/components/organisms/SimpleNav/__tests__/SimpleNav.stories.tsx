import { type ComponentStory, type ComponentMeta } from "@storybook/react"
import { type FC } from "react"
import { SimpleNav } from ".."
import { Link } from "../../../../components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faLaptopCode, faUser, faHamburger } from "@fortawesome/free-solid-svg-icons"
import colors from "../../../../styles/scssVars/colors/colors.module.scss"
import { AnimContainer, IconLink } from "../../../atoms"
import kLogo from "../../../../localAssets/kainLogo.svg"

const Logo: FC = () => {
  return (<img src={kLogo} height={160} style={{
    position: "absolute",
    top: "-38px",
    left: "-50px"
  }}/>)
}
const Default: ComponentMeta<typeof SimpleNav> = {
  title: "SimpleNav",
  component: SimpleNav
}

const Template: ComponentStory<typeof SimpleNav> = (args) => (<SimpleNav {...args} />)

const mockClick = (): void => { alert("yohohoho") }

const custAnimStyle = {
  opacity: "0"
}
const hoverStyles = {
  color: colors["retro-teal"]
}

const links = [
  <AnimContainer key={3} anim={"revealFromLeft"} customStyle={custAnimStyle} freezeAtFinalFrame>
    <Link

      content="Work Experience"
      childrenBeforeContent
      font={"sans"}
      size="sm"
      color="white"
      onClick={mockClick}
      hoverStyles={hoverStyles}
    >
      <FontAwesomeIcon icon={faBriefcase} color={colors["retro-teal"]} />
    </Link>
  </AnimContainer>,

  <AnimContainer key={2} anim={"revealFromLeft"} delay={250} customStyle={custAnimStyle} freezeAtFinalFrame>
    <Link
      key={2}
      content="Side Projects"
      childrenBeforeContent
      font={"sans"}
      size="sm"
      color="white"
      onClick={mockClick}
      hoverStyles={hoverStyles}
    >
      <FontAwesomeIcon icon={faLaptopCode} color={colors["retro-teal"]} />
    </Link>
  </AnimContainer>,

  <AnimContainer key={1} anim={"revealFromLeft"} delay={500} customStyle={custAnimStyle} freezeAtFinalFrame>
    <Link
      key={1}
      content="About Me"
      childrenBeforeContent
      font={"sans"}
      size="sm"
      color="white"
      onClick={mockClick}
      hoverStyles={hoverStyles}
    >
      <FontAwesomeIcon icon={faUser} color={colors["retro-teal"]} />
    </Link>
  </AnimContainer>

].reverse()

export const DefaultExample = Template.bind({})
DefaultExample.args = {
  links,
  padding: 20,
  gap: 30,
  direction: "row",
  alignment: "center",
  height: 80,
  justify: "space-evenly",
  bgColor: colors["purple-darker"],
  logo: <Logo />,
  offsetRight: 30,
  mobileSettings: {
    iconLink: <IconLink faIcon={faHamburger} color={"white"} size={"sm"} hoverColor={colors["retro-teal"]} onClick={() => { alert("Clicked!") }} />,
    justify: "right",
    translationOffsetX: 0,
    translationOffsetY: -50
  }
}

export default Default
