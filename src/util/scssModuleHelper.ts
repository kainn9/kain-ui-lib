/*
* So theres a potential bug with either importing scss modules or
* the react testing library(or maybe I'm just missing something).

* Basically if you attempt to access a key that doesn't exist on a
* object created directly from a "module.scss" import, in the context
* of a test it will return a string of "undefined" instead of undefined.
* This will lead to issues when testing components that are using
* the null coalescing operator(??) or even falsey checks.
*
* Whats especially weird is that if you do:
* console.log(typeof scssColors["key-that-does-not-exist"])
* it will print undefined in every context except the test
* where it will print "string"
*
*
* see: https://github.com/testing-library/react-testing-library/issues/1190
*/

// This method is to allow proper testing in despite of the issue described above.
const getFromScscModule = (moduleObj: Record<string, string>, key: string): string | undefined => {
  const value = moduleObj[key]
  if (value === "undefined") return undefined
  return value
}

export {
  getFromScscModule
}
