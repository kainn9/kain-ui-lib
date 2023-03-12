import { type FC } from "react"
import waterDragonGif from "../../../../localAssets/waterDragon.gif"
import { type gifLoaderProps } from "./types"
const WaterDragon: FC<gifLoaderProps> = ({ className, height, width, alt }) => {
  return (
    <img
      src={waterDragonGif}
      alt={alt ?? "loading...rawrrrr..."}
      className={className}
      height={height ?? undefined}
      width={width ?? undefined}
    ></img>
  )
}

export { WaterDragon }
