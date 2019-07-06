# TSDX Bootstrap

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## The Issue

When building a reusable library to be consumed via NPM, I'd like to be able to provide a default export rather than named exports only.
Using TSDX to build a project with a default export results in correct type definitions, but an export of an object containing a default field rather than the value itself.
This can be observed in `test/output.test.ts`.
Building the project with `yarn build` and then testing the output with `yarn test` will reproduce.
