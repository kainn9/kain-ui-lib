import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import { AnimContainer } from ".."

const Default: ComponentMeta<typeof AnimContainer> = {
  title: "AnimContainer",
  component: AnimContainer
}

const Template: ComponentStory<typeof AnimContainer> = (args) => (<AnimContainer {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {
  anim: "revealFromTop"
}

export default Default
