import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./Link.stories"

const { DefaultExample } = composeStories(stories)

test("Link onClick is invoked from props", () => {
  const onClickMock = jest.fn()

  render(<DefaultExample onClick={onClickMock} />)

  const link = screen.getByTestId("kain-ui-link")

  fireEvent.click(link)

  expect(onClickMock).toBeCalled()
})
