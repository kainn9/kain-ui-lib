import { type ComponentStory, type ComponentMeta } from "@storybook/react"
import { SimpleCard } from ".."
import { Text } from "../../../atoms"
import colors from "../../../../styles/scssVars/colors/colors.module.scss"

const Default: ComponentMeta<typeof SimpleCard> = {
  title: "SimpleCard",
  component: SimpleCard
}

const Template: ComponentStory<typeof SimpleCard> = (args) => (<SimpleCard {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {
  color: colors["purple-darker"],
  height: 400,
  width: 400,
  children: <Text color="white" font="sans" size="lg">This is a card! I am text inside the card!</Text>,
  padding: 30
}

export default Default
