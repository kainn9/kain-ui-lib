import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import { Text } from ".."

const Default: ComponentMeta<typeof Text> = {
  title: "Text",
  component: Text
}

const Template: ComponentStory<typeof Text> = (args) => (<Text {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {}

export default Default
