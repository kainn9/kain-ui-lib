import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./Text.stories"
import { fonts, sizes } from "../Text"

const { DefaultExample } = composeStories(stories)
const dataId = "text"

test("text is correct color from color prop", () => {
  render(<DefaultExample font="sans" color="#8a04ed"/>)
  const textElement = screen.getByTestId(dataId)
  const style = window.getComputedStyle(textElement)

  expect(style.color).toEqual("rgb(138, 4, 237)")
})

test("text is correct color from themeColor prop && themeColor takes prio", () => {
  render(<DefaultExample font="sans" color="#8a04ed" themeColor="magenta"/>)
  const textElement = screen.getByTestId(dataId)
  const style = window.getComputedStyle(textElement)

  expect(style.color).toEqual("magenta")
})

test("text is correct font from font prop", () => {
  render(<DefaultExample font="roboto" color="#8a04ed" themeColor="magenta"/>)
  const textElement = screen.getByTestId(dataId)
  const style = window.getComputedStyle(textElement)

  expect(style.fontFamily).toEqual(fonts.roboto)
})

test("text is correct font size w/o optional size prop", () => {
  render(<DefaultExample font="roboto" />)
  const textElement = screen.getByTestId(dataId)
  const style = window.getComputedStyle(textElement)

  expect(style.fontSize).toEqual(`${sizes.sm}px`)
})

test("text is pTag without headerLevel prop", () => {
  render(<DefaultExample font="roboto" />)
  const textElement = screen.getByTestId(dataId)
  expect(textElement.nodeName).toBe("P")
})

test("text is pTag without headerLevel prop as invalid number", () => {
  render(<DefaultExample font="roboto" headingLevel={-20}/>)
  const textElement = screen.getByTestId(dataId)
  expect(textElement.nodeName).toBe("P")
})

test("text is header with headerLevel prop as valid number", () => {
  render(<DefaultExample font="roboto" headingLevel={2}/>)
  const textElement = screen.getByTestId(dataId)
  expect(textElement.nodeName).toBe("H2")
})

test("text accepts customStyle that takes precedence", () => {
  render(<DefaultExample font="roboto" color="red" customStyles={{ color: "blue" }}/>)
  const textElement = screen.getByTestId(dataId)
  const style = window.getComputedStyle(textElement)
  expect(style.color).toEqual("blue")
})
