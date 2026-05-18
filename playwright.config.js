
// // @ts-check
// import { defineConfig, devices } from '@playwright/test';

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // import dotenv from 'dotenv';
// // import path from 'path';
// // dotenv.config({ path: path.resolve(__dirname, '.env') });

// /**
//  * @see https://playwright.dev/docs/test-configuration
//  */
// export default defineConfig({
//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('')`. */
//     // baseURL: 'http://localhost:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },

//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://localhost:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });

const config = ({
  testDir: './tests',
  //retries :1, //it will retry the failed test once, if we set it to 2 it will retry the failed test twice, if we set it to 0 it will not retry the failed test
  reporter: 'html',
  timeout: 30000,
  use: {
    browserName: 'chromium',
    screenshot: 'on',
    //browserName: 'webkit',
    headless: false,
    //headless: true,
    //video : 'retain-on-failure',// it will record the video of the test execution and save it in the videos folder, if we set it to on it will record the video for all the tests, if we set it to retain-on-failure it will record the video only for the failed tests, if we set it to off it will not record the video for any test
    //trace:retain-on-failure,
    //ignorehttpserrors: true,//it will ignore the https errors and run the test, it is used when we have self signed certificates in our application
    //trace:retain-on-failure,
    //viewport :{ width: 1280, height: 720 }, helps to set the view size of the browser size for all the tests, if we want to run in mobile view we can set the viewport size as per the mobile device
    //...devices['Pixel 5'],// here we define which device we want to run the test, we can also set the channel as chrome or msedge to run in those browsers
  }
  
}
);
module.exports = config