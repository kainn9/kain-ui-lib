import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import { GlowText } from ".."

const Default: ComponentMeta<typeof GlowText> = {
  title: "GlowText",
  component: GlowText
}

const Template: ComponentStory<typeof GlowText> = (args) => (<GlowText {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {}

export default Default
