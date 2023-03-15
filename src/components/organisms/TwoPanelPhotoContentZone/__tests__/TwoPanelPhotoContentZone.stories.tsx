import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import { TwoPanelPhotoContentZone } from ".."

const Default: ComponentMeta<typeof TwoPanelPhotoContentZone> = {
  title: "TwoPanelPhotoContentZone",
  component: TwoPanelPhotoContentZone
}

const Template: ComponentStory<typeof TwoPanelPhotoContentZone> = (args) => (<TwoPanelPhotoContentZone {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {
  className: "yahoo"
}

export default Default
