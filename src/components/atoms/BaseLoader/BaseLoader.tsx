import { type FC } from "react"
import { uiWrapper } from "../../../util"
import { WaterDragon, FlameSword } from "./loaders"
import { type baseLoaderProps, type unionProps } from "./loaders/types"

export const loaders = {
  waterDragon: WaterDragon,
  flameSword: FlameSword
}

const BaseLoader: FC<baseLoaderProps> = (props) => {
  const { loaderKey } = props
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const Loader: FC<unionProps> = loaders[loaderKey]!

  return <Loader {...props} />
}

const wrappedBaseLoader = uiWrapper(BaseLoader)

export { wrappedBaseLoader as BaseLoader }
