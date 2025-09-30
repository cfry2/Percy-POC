# Playwright + Percy Visual Testing

This project includes Playwright tests for the contact form, covering both happy and unhappy paths. The tests are written to be compatible with Percy visual testing.

## Running Playwright Tests

1. **Install Playwright:**
   ```sh
   npx playwright install
   ```
2. **Run tests:**
   ```sh
   npx playwright test
   ```

## Percy Integration

- To enable Percy visual snapshots, install `@percy/cli` and `@percy/playwright`:
  ```sh
  npm install --save-dev @percy/cli @percy/playwright
  ```
- Uncomment the `percySnapshot` lines in `tests/contact-form.spec.ts`.
- Run tests with Percy:
  ```sh
  npx percy exec -- npx playwright test
  ```

## Test Coverage

- Happy path: valid form submission, success message
- Unhappy paths: validation errors, invalid input, server error handling

See `tests/contact-form.spec.ts` for details.
