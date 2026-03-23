# artillery-playwright-test

Rough prototype of building some Artillery load tests w/ Playwright to verify load test scenarios with a custom browser executable path.
- Path to custom browser executable can be set in the .env file (copy .env.sample for syntax and change the path accordingly).
- Scenario configurations are found in ./scenarios.yml.
- Scenario tests are found in ./scenarios.mjs as well as the implementations in ./page-objects/ directory.
- Test results are written to the terminal and JSON log files ot the ./results/ directory.

## Running tests

If you want to run a specific scenario, you can run the following command (or use the convenient `npm run test:google-title` script):
```sh
# npm run test:google-title
artillery run scenarios.yml --env-file .env --scenario-name 'Google — title assertion'
```

If you want to run all scenarios in a random order, you can run the `npm run artillery` script, which will call our artillery scenarios without a specific scenario name:
```sh
artillery run scenarios.yml --env-file .env
```

If you want to run all scenarios, you can run the `npm test` script which will run all scenarios from the package.json file with a `test:` prefix.

## Adding new tests

1. Add new Playwright tests to new/existing files in the /page-objects/ directory and make sure the function is exported:
    ```ts
    export async function assertSlackTitle(page) {
        await page.goto("https://slack.com/", { waitUntil: "domcontentloaded" });
        await expect(page).toHaveTitle(/Slack/i);
    }
    ```
2. Specify the new tests in the ./scenarios.mjs file, using the exported name from your page object from step 1, and proxying the `page` argument to the test:
    ```ts
    export async function assertSlackTitle(page) {
      await slack.assertSlackTitle(page);
    }
    ```
3. Update the ./scenarios.yml file's `scenarios` property with a descriptive title and the name of the exported function from the ./scenarios.mjs file from step 2:
    ```yaml
    - engine: playwright
        name: 'Slack — title assertion'
        Function: 'assertSlackTitle'
    ```


## TODO

- Convert tests to TypeScript so we don't need to use .mjs extension?
