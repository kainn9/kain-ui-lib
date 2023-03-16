import { type ComponentType } from "react"
import prefixes from "../styles/prefixes/prefixes.module.scss"
import { nullFalseOrUndefined } from "../util"

/*
* -------------------------------------------------------------------------------
* Note/TODO: prefixes does not import correctly in rollup build so the fallback
* variable is used instead. Would like to fix this to create a proper SSOT!
*/
const fallbackWrapperPrefix = "kul"
const wrapperPrefix: string = prefixes.prefix ?? fallbackWrapperPrefix
// --------------------------------------------------------------------------------

// eslint-disable-next-line react/display-name
const uiWrapper = <T extends ComponentType<any>>(Component: T) => (props: React.ComponentProps<T>) => {
  const classes = !nullFalseOrUndefined(props.className)
    ? (props.className as string) + " " + (wrapperPrefix)
    : (wrapperPrefix)

  const newProps: React.ComponentProps<T> = { ...props, ...{ className: classes } }

  return (
    <Component {...newProps} />
  )
}

export {
  uiWrapper
}

/* For Reference(for myself lol):
*--------------------------------------------------------------------------------------
* The generic type parameter T in uiWrapper is used to specify the type of the Component
* argument passed to the function. By constraining T to be a subtype of ComponentType<any>,
* the function is able to ensure that the Component argument is a valid React component that
* can accept any type of props.

* The T in <T extends ComponentType<any>> is a type parameter that can be replaced with a
* specific type at the call site(the location in your code where you invoke the function).

* Example:

* function myFunction<T>(arg: T): T {
*  // function implementation here
* }
*
* myFunction<string>("hello"); // type of T is string
* ------------------------------------------------------------------------------------
* Something to consider/TODO:
* Maybe better to use hooks instead of HOC, or move away from this insane scoping pattern...
*/
