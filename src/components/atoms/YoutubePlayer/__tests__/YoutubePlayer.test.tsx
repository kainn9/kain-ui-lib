import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./YoutubePlayer.stories"

const { DefaultExample } = composeStories(stories)

test("renders YoutubePlayer", () => {
  render(<DefaultExample />)
  screen.getByTestId("youtube-player")
})
