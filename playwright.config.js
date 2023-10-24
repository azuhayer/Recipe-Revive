import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Glob patterns or regular expressions that match test files.
  testMatch: 'tests/E2ETest/*',
});