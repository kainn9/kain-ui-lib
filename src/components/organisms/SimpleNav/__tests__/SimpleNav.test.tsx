import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./SimpleNav.stories"

const { DefaultExample } = composeStories(stories)

test("renders SimpleNav", () => {
  render(<DefaultExample />)
  screen.getByTestId("simple-nav")
})
