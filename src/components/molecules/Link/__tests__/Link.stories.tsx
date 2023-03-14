import { type ComponentStory, type ComponentMeta } from "@storybook/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { Link } from ".."
import colors from "../../../../scssVars/colors/colors.module.scss"

const Default: ComponentMeta<typeof Link> = {
  title: "Link",
  component: Link
}

const Template: ComponentStory<typeof Link> = (args) => (<Link {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {
  children: <FontAwesomeIcon color={colors["retro-teal"]} icon={faBriefcase} size="lg"/>,
  content: "Yo, I'm a Link!",
  size: "md",
  color: colors["white-pink"],
  childrenBeforeContent: true,
  onClick: () => { alert("YOHOHOHOHOHOHOHHO!") },
  hoverStyles: {
    opacity: "0.6",
    color: colors["retro-teal"]
  }
}

export default Default
