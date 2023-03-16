import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./TabContainer.stories"

const { DefaultExample } = composeStories(stories)

test("renders TabContainer", () => {
  render(<DefaultExample />)

  // postive case
  const tab2 = screen.getByTestId("tab-0") // 0 index so 1 ~= 2
  fireEvent.click(tab2)

  screen.getByTestId("youtube-player") // youtube player only rendered after click

  // negative case
  const tab1 = screen.getByTestId("tab-1") // 0 index so 0 ~= 1
  fireEvent.click(tab1)

  const emptyYtQuery = screen.queryByTestId("youtube-player")
  expect(emptyYtQuery).not.toBeInTheDocument()
})
