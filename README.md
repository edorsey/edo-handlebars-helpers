# Handlebars Helpers

## Block Helpers

### `#ifEQ a, b`

Executes block if a equals b, strict equals (`===`).

### `#ifAll a, b, ..., z`

Checks existence of all values passed in (not `null` or `undefined`).

### `#unlessEQ a, b`

Executes block if a does not equal b, strict (`!==`).

## Non-Block Helpers

### `log a`

Logs `a` to the console. Useful for debugging.

### `capitalize a`

Capitalizes the first letter of a string.

### `date d`

Outputs a date with the format of D MMMM YYYY.

