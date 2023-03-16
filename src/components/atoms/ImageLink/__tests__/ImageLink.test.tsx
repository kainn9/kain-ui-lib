import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./ImageLink.stories"

const { DefaultExample } = composeStories(stories)

test("imageLink hover effect changes styles correctly", () => {
  render(<DefaultExample />)
  const imageLinkContainer = screen.getByTestId("image-link-container")
  const imageLinkIcon = screen.getByTestId("image-link-icon")
  const imageLinkImage = screen.getByTestId("image-link-img")

  fireEvent.mouseEnter(imageLinkContainer)

  const iconStyle = window.getComputedStyle(imageLinkIcon)
  const imgStyle = window.getComputedStyle(imageLinkImage)

  expect(iconStyle.cursor).toEqual("pointer")
  expect(iconStyle.transform).toEqual("scale(3)")

  expect(imgStyle.cursor).toEqual("pointer")
  expect(imgStyle.filter).toEqual("brightness(0.6)")
})

test("imageLink navigates to href correctly", () => {
  const href = window.location.href
  const url = "http://fake.com"

  Object.defineProperty(window, "location", {
    writable: true,
    value: { href: "" }
  })

  render(<DefaultExample href={url} />)
  const imageLinkContainer = screen.getByTestId("image-link-container")

  fireEvent.click(imageLinkContainer)
  expect(window.location.href).toEqual(url)

  window.location.href = href
})
