import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./SimpleCard.stories"

const { DefaultExample } = composeStories(stories)

test("renders SimpleCard", () => {
  render(<DefaultExample />)
  screen.getByTestId("simple-card")
})
