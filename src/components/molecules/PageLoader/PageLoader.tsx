import { type FC } from "react"
import { kulCx, uiWrapper } from "../../../util"
import "./pageLoader.scss"
import { AnimContainer, BaseLoader } from "../../atoms"
import { type loaderKey } from "../../atoms/BaseLoader/loaders/types"
import { GlowText } from "../GlowText"

export interface PageLoaderProps {
  className?: string
}

const pickRandomLoader = (): loaderKey => {
  // using array as map(since array has numeric keys anwyay) lol

  const options = [
    "waterDragon",
    "flameSword"
  ]

  const key = Math.floor(Math.random() * options.length)
  return options[key] as loaderKey
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <section
      className={kulCx("loader-section", className)}
    >
      <div>
        <BaseLoader loaderKey={pickRandomLoader()} />
        <div className={kulCx("loader-section__text-container", className)}>
          <AnimContainer
            anim={"revealFromTop"}
            delay={500}
            freezeAtFinalFrame
            customStyle={{
              opacity: "0"
            }}
          >
            <GlowText
              headingLevel={2}
              themeGlow="pink"
              font={"georgia"}
              size="lg"
            >
              Is this a completely unnecessary loader?
            </GlowText>
          </AnimContainer>

          <AnimContainer
            anim={"revealFromLeft"}
            delay={1500}
            freezeAtFinalFrame
            customStyle={{
              opacity: "0"
            }}
          >
            <GlowText
              headingLevel={2}
              themeGlow="pink"
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
