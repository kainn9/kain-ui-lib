import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import { PageLoader } from ".."

const Default: ComponentMeta<typeof PageLoader> = {
  title: "PageLoader",
  component: PageLoader
}

const Template: ComponentStory<typeof PageLoader> = (args) => (<PageLoader {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {}

export default Default
