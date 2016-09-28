# Demo: `webpack` and `ts-loader` masking build failures

Usage:

* `npm install`
* `node_modules/.bin/webpack && echo SUCCESS || echo FAILURE`

Observed output:

    ERROR in ./src/index.ts
    (2,1): error TS2322: Type 'boolean' is not assignable to type 'string'.
    SUCCESS

Expectated output:

    ERROR in ./src/index.ts
    (2,1): error TS2322: Type 'boolean' is not assignable to type 'string'.
    FAILURE

Why this hurts:

* When `webpack` exits with status code 0 on errors,
* `npm run build` "succeeds", so
* `npm pack` "succeeds", so
* My continuous integration run "succeeds", so
* Step by step, I get closer to deploying bugs to production.

Reproduced with versions:

* Node v6.6.0
* macOS 10.12
