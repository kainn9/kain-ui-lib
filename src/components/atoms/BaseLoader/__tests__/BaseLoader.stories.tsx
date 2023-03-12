import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import { BaseLoader } from ".."

const Default: ComponentMeta<typeof BaseLoader> = {
  title: "BaseLoader",
  component: BaseLoader
}

const Template: ComponentStory<typeof BaseLoader> = (args) => (
  <BaseLoader {...args} />
)

export const WaterDragon = Template.bind({})
WaterDragon.args = {
  className: "yahoo",
  loaderKey: "waterDragon"
}

export const FlameSword = Template.bind({})
FlameSword.args = {
  className: "yahoo",
  alt: "hot hot hot!",
  loaderKey: "flameSword"
}

export default Default
