import kulCx from "./classNameHelper"
import { getFromScscModule } from "./scssModuleHelper"
import { uiWrapper } from "../hoc/uiWrapper"
import { findAndModifyRootLinkOnClick } from "./onClickHelper"

const nullFalseOrUndefined = (val: any): boolean => {
  return val === null || val === undefined || val === false
}
export {
  kulCx,
  getFromScscModule,
  nullFalseOrUndefined,
  uiWrapper,
  findAndModifyRootLinkOnClick
}
