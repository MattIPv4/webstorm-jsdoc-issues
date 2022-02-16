/**
 * @template {{a: number}} T
 * @param {T} a
 * @returns {T}
 */
const testing = a => a;

console.log(testing(1));

// Good: Hovering over `testing` shows the definition using `T`.
// Bad: Hovering over `testing` or `a` only shows the type as `T`, and not that it extends `{a: number}`.
// Good: Hovering over `1` shows that it does not match the type `{a: number}`.
