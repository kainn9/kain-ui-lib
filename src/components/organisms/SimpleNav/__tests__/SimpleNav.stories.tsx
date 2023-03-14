import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import { SimpleNav } from ".."
import { Link } from "../../../molecules"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faLaptopCode, faUser } from "@fortawesome/free-solid-svg-icons"
import colors from "../../../../scssVars/colors/colors.module.scss"
import { AnimContainer } from "../../../atoms"

const Default: ComponentMeta<typeof SimpleNav> = {
  title: "SimpleNav",
  component: SimpleNav
}

const Template: ComponentStory<typeof SimpleNav> = (args) => (<SimpleNav {...args} />)

const mockClick = (): void => { alert("yohohoho") }
const custAnimStyle = {
  opacity: "0"
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
    >
      <FontAwesomeIcon icon={faBriefcase} color={"#26d8ff" /* accent use from lib pls */} />
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
    >
      <FontAwesomeIcon icon={faLaptopCode} color={"#26d8ff" /* accent use from lib pls */} />
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
    >
      <FontAwesomeIcon icon={faUser} color={"#26d8ff" /* accent use from lib pls */} />
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
  height: 50,
  justify: "space-evenly",
  customStyle: {
    backgroundColor: colors["purple-darker"]
  }
}

export default Default
