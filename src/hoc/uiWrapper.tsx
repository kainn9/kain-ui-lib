import { type ComponentType } from "react"

const wrapperPrefix = "kain-ui-lib"

/*
* Note: If the child component needs height: 100%
* this HOC will break it. The class name should be applied
* to the highest level element of the component instead.
*/
export function uiWrapper<T extends ComponentType<any>> (Component: T) {
  // eslint-disable-next-line react/display-name
  return (props: React.ComponentProps<T>) => {
    return (
      <div className={wrapperPrefix}>
        <Component {...props} />
      </div>
    )
  }
}
