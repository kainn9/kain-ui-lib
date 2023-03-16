import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import { YoutubePlayer } from ".."

const Default: ComponentMeta<typeof YoutubePlayer> = {
  title: "YoutubePlayer",
  component: YoutubePlayer
}

const Template: ComponentStory<typeof YoutubePlayer> = (args) => (<YoutubePlayer {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {
  className: "yahoo",
  title: "example",
  height: 400,
  width: 600,
  embedId: "7AWOHqySSmU"
}

export default Default
