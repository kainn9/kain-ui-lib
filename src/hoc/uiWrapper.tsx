import { type ComponentType } from "react"

const wrapperPrefix = "kain-ui-lib"

export function uiWrapper<T extends ComponentType<any>> (Component: T) {
  // eslint-disable-next-line react/display-name
  return (props: React.ComponentProps<T>) => {
    const classes = props.className !== undefined && props.className !== null ? (props.className as string) + " " + wrapperPrefix : wrapperPrefix
    const newProps: React.ComponentProps<T> = { ...props, ...{ className: classes } }
    return (
        <Component {...newProps} />
    )
  }
}
