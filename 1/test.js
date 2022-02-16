/**
 * @type {import('./types').TestFunction}
 */
const testing = test => test > 1;

console.log(testing(1))

// Good: Hovering over `TestFunction` shows the correct definition for the type.
// Bad: Hovering over `test` shows no definition.
// Bad: Hovering over `testing` shows no definition for `test`, and defines the function as returning any.
// Bad: Hovering over `testing(1)` shows the same definition, returning any.
