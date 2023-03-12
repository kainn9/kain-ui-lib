import { type FC } from "react"
import flameSwordGif from "../../../../localAssets/flameSword.gif"
import { type gifLoaderProps } from "./types"
const FlameSword: FC<gifLoaderProps> = ({ className, height, width, alt }) => {
  return (
    <img
      src={flameSwordGif}
      alt={alt ?? "loading...whoosh!"}
      className={className}
      height={height ?? undefined}
      width={width ?? undefined}
    ></img>
  )
}

export { FlameSword }
