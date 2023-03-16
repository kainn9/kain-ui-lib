import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import { SectionWithScrollEffect } from ".."
import { GithubPhotoAndTextContentZone } from "../../../organisms"

const Default: ComponentMeta<typeof SectionWithScrollEffect> = {
  title: "SectionWithScrollEffect",
  component: SectionWithScrollEffect
}

const Wrapper: ComponentStory<typeof SectionWithScrollEffect> = (args) => {
  return (
    <>
    <div id="filler" style ={{ width: "100%", height: "100vh" }}>
      <h2>SCROLL DOWN TO SEE EFFECT!</h2>
    </div>
      <SectionWithScrollEffect {...args} />
    </>
  )
}

const Template: ComponentStory<typeof SectionWithScrollEffect> = (args) => (
  <Wrapper {...args} />
)

export const DefaultExample = Template.bind({})

const iObserverOpts = {
  threshold: 0.3
}

DefaultExample.args = {
  children: <GithubPhotoAndTextContentZone increment={60} key={0} zoneOneHeight={300} zoneOneWidth={400} zoneTwoHeight={170} zoneTwoWidth={300} zoneTwoOffsetX={285} zoneTwoOffsetY={240} />,
  iObserverOpts
}

export default Default
