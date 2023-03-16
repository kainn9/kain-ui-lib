import { useState, useEffect } from "react"

interface Dimensions {
  width: number
  height: number
  isMobile: boolean
}

const useWindowDimensions = (): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 769
  })

  useEffect(() => {
    const handleResize = (): void => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 769
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return dimensions
}

export {
  useWindowDimensions
}
