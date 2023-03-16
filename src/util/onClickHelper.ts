import { type ReactElement, cloneElement, Children } from "react"
import { nullFalseOrUndefined } from "."

const findAndModifyRootLinkOnClick = (link: ReactElement, func: any, args: any): [ReactElement, boolean] => {
  // first el is the link, modify the onClick and we gucci
  if (!nullFalseOrUndefined(link.props.onClick)) {
    const newLink = cloneElement(link, {
      onClick: () => {
        link.props.onClick()
        func(args)
      }
    })
    return [newLink, true]
  }

  // oooo looks like a dead end...
  if (nullFalseOrUndefined(link.props.children)) return [link, false]

  // so we iterate through all the kids
  // and make a recursive call...if we find, that the onClick has been replaced
  // via the second argument boolean, we short circuit and stop iterating further
  let hasNewOnClick = false
  const newChildren = Children.map(link.props.children, (child: ReactElement) => {
    if (!hasNewOnClick) {
      const [modifiedChild, childHasNewOnClick] = findAndModifyRootLinkOnClick(child, func, args)
      if (childHasNewOnClick) {
        hasNewOnClick = true
        return modifiedChild
      } else {
        return child
      }
    } else {
      return child
    }
  })

  const newLink = cloneElement(link, {}, newChildren)
  return [newLink, hasNewOnClick]
}

export { findAndModifyRootLinkOnClick }
