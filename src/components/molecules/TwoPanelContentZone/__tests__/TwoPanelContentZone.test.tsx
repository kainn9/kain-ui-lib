import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./TwoPanelContentZone.stories"

const { DefaultExample } = composeStories(stories)

test("renders TwoPanelContentZone", () => {
  render(<DefaultExample />)
  screen.getByTestId("two-panel-zone")
})
