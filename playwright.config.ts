// playwright.config.ts
import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  forbidOnly: true,
  retries: 3,
  reporter: process.env.CI ? 'dot' : 'list',

  use: {
    // BASE URL = stencil dev server port
    baseURL: 'http://localhost:3333',
    // Browser options
    headless: true,

    // Context options
    viewport: { width: 1280, height: 1920 },
    ignoreHTTPSErrors: true,

    // Artifacts
    screenshot: "only-on-failure",
    video: "retry-with-video",
  },
  projects: [
    {
      name: "Chrome Stable",
      use: {
        browserName: "chromium",
        // Test against Chrome Stable channel.
        channel: "chrome",
        launchOptions: {
          slowMo: 300,
        },
      },
    },
    // {
    //   name: "Desktop Safari",
    //   use: {
    //     browserName: "webkit",
    //     viewport: { width: 1200, height: 750 },
    //   },
    // },
    // // Test against mobile viewports.
    // {
    //   name: "Mobile Chrome",
    //   use: devices["Pixel 5"],
    // },
    // {
    //   name: "Mobile Safari",
    //   use: devices["iPhone 12"],
    // },
    // {
    //   name: "Desktop Firefox",
    //   use: {
    //     browserName: "firefox",
    //     viewport: { width: 800, height: 600 },
    //   },
    // },
  ],
};
export default config;
