import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import { GithubPhotoAndTextContentZone } from ".."

const Default: ComponentMeta<typeof GithubPhotoAndTextContentZone> = {
  title: "GithubPhotoAndTextContentZone",
  component: GithubPhotoAndTextContentZone
}

const Template: ComponentStory<typeof GithubPhotoAndTextContentZone> = (args) => (<GithubPhotoAndTextContentZone {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {
  zoneOneHeight: 300,
  zoneOneWidth: 400,
  zoneTwoHeight: 170,
  zoneTwoWidth: 300,
  zoneTwoOffsetX: 285,
  zoneTwoOffsetY: 240

}

export default Default
