/**
 * @template T
 * @param {T} a
 * @returns {T}
 */
const testing = a => a;

console.log(testing(1));

// Good: Hovering over `testing` shows the definition using `T`.
// Bad: The return type `T` is clickable, and clicking it results in `Browser Error; Malformed URL: psi_element://T`
