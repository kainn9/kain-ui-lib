import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./IconLink.stories"

const { DefaultExample } = composeStories(stories)

test("renders IconLink", () => {
  render(<DefaultExample />)
  screen.getByTestId("icon-link")
})
