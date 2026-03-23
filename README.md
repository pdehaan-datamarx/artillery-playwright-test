# artillery-playwright-test

Rough prototype of building some Artillery load tests w/ Playwright to verify load test scenarios with a custom browser executable path.
- Path to custom browser executable can be set in the .env file (copy .env.sample for syntax and change the path accordingly).
- Scenario configurations are found in ./scenarios.yml.
- Scenario tests are found in ./scenarios.mjs as well as the implementations in ./page-objects/ directory.
- Test results are written to the terminal and JSON log files ot the ./results/ directory.

## TODO
- Convert tests to TypeScript so we don't need to use .mjs extension?
