import { type ReactElement, type FC, useRef, useEffect, useState } from "react"
import { kulCx, uiWrapper } from "../../../util"
import "./sectionWithScrollEffect.scss"

interface SectionWithScrollEffectProps {
  className: string
  children: ReactElement
  iObserverOpts: IntersectionObserverInit
}

const SectionWithScrollEffect: FC<SectionWithScrollEffectProps> = ({ className, children, iObserverOpts }) => {
  const targetRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const { rootMargin, threshold } = iObserverOpts ?? {}

  useEffect(() => {
    const obsOpts = {
      threshold: threshold ?? 0,
      rootMargin: rootMargin ?? "0px"
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // update state based on whether the element is in view
        setIsVisible(entry.isIntersecting)
      }, obsOpts

    )

    if (targetRef?.current !== undefined && targetRef?.current !== null) observer.observe(targetRef.current)

    return () => {
      observer.disconnect()
    }
  }, [targetRef])

  const style: any = {
    display: isVisible ? "visible" : "hidden",
    opacity: isVisible ? 1 : 0,
    transition: "2.5s"
  }

  return (
    <section
      className={kulCx("section-with-scroll-effect", className)}
      ref={targetRef}
      style={style}
      data-testid="section-with-scroll-effect"
    >
      {children}
    </section>
  )
}

const wrappedSectionWithScrollEffect = uiWrapper(SectionWithScrollEffect)

export { wrappedSectionWithScrollEffect as SectionWithScrollEffect, type SectionWithScrollEffectProps }
