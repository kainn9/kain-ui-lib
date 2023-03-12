import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./GlowText.stories"
import { themeGlowOpts } from "../GlowText"

const { DefaultExample } = composeStories(stories)
const gc = "#8a04ed"

test("GlowText properly uses glowColor prop", () => {
  render(<DefaultExample glowColor={gc} />)

  const textElement = screen.getByTestId("glow-text")
  const style = window.getComputedStyle(textElement)

  expect(style.textShadow).toEqual(`${gc} 4px 0 10px`)
})

test("GlowText themeGlow works && takes prio over color and glowColor", () => {
  const tgProp = "greenPul"
  render(<DefaultExample glowColor={gc} color="red" themeGlow={tgProp} />)

  const textElement = screen.getByTestId("glow-text")
  const style = window.getComputedStyle(textElement)

  expect(style.textShadow).toEqual("")
  expect(style.color).toEqual("")
  expect(textElement).toHaveClass(themeGlowOpts[tgProp])
})
