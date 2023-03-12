import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { composeStories } from "@storybook/testing-react"
import * as stories from "./AnimContainer.stories"

const { DefaultExample } = composeStories(stories)

test("uses correct anim class based on prop(top)", () => {
  render(<DefaultExample anim="revealFromTop" />)
  const animContainer = screen.getByTestId("anim-container")
  expect(animContainer).toHaveClass("anim-container__reveal-from-top")
})

test("uses correct anim class based on prop(bottom)", () => {
  render(<DefaultExample anim="revealFromBottom" />)
  const animContainer = screen.getByTestId("anim-container")
  expect(animContainer).toHaveClass("anim-container__reveal-from-bottom")
})

test("uses correct anim class based on prop(left)", () => {
  render(<DefaultExample anim="revealFromLeft" />)
  const animContainer = screen.getByTestId("anim-container")
  expect(animContainer).toHaveClass("anim-container__reveal-from-left")
})

test("uses correct anim class based on prop(right)", () => {
  render(<DefaultExample anim="revealFromRight" />)
  const animContainer = screen.getByTestId("anim-container")
  expect(animContainer).toHaveClass("anim-container__reveal-from-right")
})

test("uses customStyles object alongside delay and animFreeze props", () => {
  const cs = {
    opacity: "0"
  }
  const delay = 100
  render(<DefaultExample anim="revealFromRight" customStyle={cs} delay={delay} freezeAtFinalFrame />)
  const animContainer = screen.getByTestId("anim-container")
  const style = window.getComputedStyle(animContainer)

  expect(style.animationDelay).toEqual(`${delay}ms`)
  expect(style.animationFillMode).toEqual("forwards")
  expect(style.opacity).toEqual("0")
})
