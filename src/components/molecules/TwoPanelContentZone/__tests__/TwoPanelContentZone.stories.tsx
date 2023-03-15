import { type ComponentStory, type ComponentMeta } from "@storybook/react"
import { TwoPanelContentZone } from ".."

const Default: ComponentMeta<typeof TwoPanelContentZone> = {
  title: "TwoPanelContentZone",
  component: TwoPanelContentZone
}

const Template: ComponentStory<typeof TwoPanelContentZone> = (args) => (<TwoPanelContentZone {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {
  zoneTwoHeight: 200,
  zoneTwoWidth: 300,
  zoneTwoOffsetX: 50,
  zoneTwoOffsetY: 90,
  zoneOneContent: <div>Yohoohohoho one!</div>,

  zoneOneHeight: 400,
  zoneOneWidth: 600,
  zoneTwoContent: <div>Yohoohohoho two!</div>,

  previewBorders: true,
  justify: "center"
}

export default Default
