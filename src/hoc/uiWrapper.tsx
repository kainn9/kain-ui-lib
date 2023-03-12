import { type ComponentType } from "react"

const wrapperPrefix = "kain-ui-lib"

export function uiWrapper<T extends ComponentType<any>> (Component: T) {
  // eslint-disable-next-line react/display-name
  return (props: React.ComponentProps<T>) => {
    return (
      <div
        style={{
          height: "inherit",
          width: "inherit"
        }}
        className={wrapperPrefix}
      >
        <Component {...props} />
      </div>
    )
  }
}
