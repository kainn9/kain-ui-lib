import { type loaders } from "../BaseLoader"
interface rootProps {
  height?: number
  width?: number
  className?: string
}

export type gifLoaderProps = rootProps & {
  alt?: string
}

// TODO:
// Figure out how to make dynamic
export type unionProps = rootProps | gifLoaderProps

export type loaderKey = keyof typeof loaders

export type baseLoaderProps = unionProps & {
  loaderKey: loaderKey
}
