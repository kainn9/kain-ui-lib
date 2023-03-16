import { type ComponentStory, type ComponentMeta } from "@storybook/react"
import { GithubPhotoAndTextContentZone, YoutubePlayer, TabContainer } from "../../.././../components"
import colors from "../../../../styles/scssVars/colors/colors.module.scss"
import { type ReactElement } from "react"

const content = (inc: number): ReactElement[] => [
  <GithubPhotoAndTextContentZone increment={inc} key={0} zoneOneHeight={300} zoneOneWidth={400} zoneTwoHeight={170} zoneTwoWidth={300} zoneTwoOffsetX={285} zoneTwoOffsetY={240} />,
  <div key={1} style={{ width: "80%", maxWidth: "1000px" }}><YoutubePlayer title={"Example"} embedId={"7AWOHqySSmU"} /></div>
].reverse()

const Default: ComponentMeta<typeof TabContainer> = {
  title: "TabContainer",
  component: TabContainer
}

const Template: ComponentStory<typeof TabContainer> = (args) => (<TabContainer {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {
  className: "yahoo",
  bgColor: colors["purple-darkest"],
  tabHeaders: ["TabOne", "TabTwo"],
  tabBgColor: colors["purple-darker"],
  tabfontColor: colors["white-pink"],
  tabActiveHighlight: colors["retro-teal"],
  font: "monospace",
  tabContent: content(60),
  fontSize: 15
}

export const VertExample = Template.bind({})

const vertOpts = {
  width: "200px"
}
VertExample.args = {
  className: "yahoo",
  bgColor: colors["purple-darkest"],
  tabHeaders: ["TabOne", "TabTwo"],
  tabBgColor: colors["purple-darker"],
  tabfontColor: colors["white-pink"],
  tabActiveHighlight: colors["retro-teal"],
  font: "monospace",
  tabContent: content(350),
  fontSize: 15,
  verticalOpts: vertOpts
}

export default Default
