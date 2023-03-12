import { type FC } from "react"
import { uiWrapper } from "../../../hoc/uiWrapper"
import "./pageLoader.scss"
import { AnimContainer, BaseLoader } from "../../atoms"
import { type loaderKey } from "../../atoms/BaseLoader/loaders/types"
import { GlowText } from "../GlowText"

const pickRandomLoader = (): loaderKey => {
  // using array as map(since array has numeric keys anwyay) lol

  const options = [
    "waterDragon",
    "flameSword"
  ]

  const key = Math.floor(Math.random() * options.length)
  return options[key] as loaderKey
}

const PageLoader: FC = () => {
  return (
    <section className="loader-section">
      <div>
        <BaseLoader loaderKey={pickRandomLoader()} />
        <div id="page__loader-text-container">
          <AnimContainer
            anim={"revealFromTop"}
            delay={1000}
            freezeAtFinalFrame
            customStyle={{
              opacity: "0"
            }}
          >
            <GlowText
              headingLevel={2}
              themeGlow="pinkPul"
              font={"georgia"}
              size="lg"
            >
              Is this a completely unnecessary loader?
            </GlowText>
          </AnimContainer>

          <AnimContainer
            anim={"revealFromLeft"}
            delay={3000}
            freezeAtFinalFrame
            customStyle={{
              opacity: "0"
            }}
          >
            <GlowText
              headingLevel={2}
              themeGlow="pinkPul"
              font={"georgia"}
              size="xl"
            >
              100%
            </GlowText>
          </AnimContainer>
        </div>

      </div>
    </section>
  )
}
const wrappedPageLoader = uiWrapper(PageLoader)

export { wrappedPageLoader as PageLoader }
