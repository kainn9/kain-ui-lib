import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./TwoPanelPhotoContentZone.stories"

const { DefaultExample } = composeStories(stories)

test("renders TwoPanelPhotoContentZone", () => {
  render(<DefaultExample />)
  screen.getByTestId("two-panel-photo-content-zone")
})
