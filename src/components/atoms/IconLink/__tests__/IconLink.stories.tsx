import { type ComponentStory, type ComponentMeta } from "@storybook/react"
import { faHamburger } from "@fortawesome/free-solid-svg-icons"

import { IconLink } from ".."
import { colors } from "../../../../styles/scssVars/colors"

const Default: ComponentMeta<typeof IconLink> = {
  title: "IconLink",
  component: IconLink
}

const Template: ComponentStory<typeof IconLink> = (args) => (<IconLink {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {
  className: "yahoo",
  faIcon: faHamburger,
  size: "5x",
  hoverColor: colors["retro-teal"],
  onClick: () => { alert("Om-nom-nom-nom-nom-nom!") }
}

export default Default
