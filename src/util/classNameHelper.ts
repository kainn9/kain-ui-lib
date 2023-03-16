import { nullFalseOrUndefined } from "."

/*
*  appends the className prop
* to element, which should include kul
* prefix from hoc
*/
const kulCx = (classNames: string, classNameProp: string | undefined): string => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return !nullFalseOrUndefined(classNameProp) ? `${classNames} ${classNameProp!}` : classNames
}

export default kulCx
