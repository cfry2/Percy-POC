import { test, expect } from "@playwright/test";

// Percy snapshot helper (if using @percy/playwright)
// import percySnapshot from '@percy/playwright';

test.describe("Contact Form", () => {
  test("happy path: submits valid form and shows thank you", async ({
    page,
  }) => {
    await page.goto("/");
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="contact"]', "1234567890");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill(
      'textarea[name="message"]',
      "Hello, this is a test message."
    );
    await page.click('button[type="submit"]');
    await expect(page.getByText("Thank you for your message!")).toBeVisible();
    // await percySnapshot(page, 'Contact Form - Success');
  });

  test("unhappy path: shows validation errors for empty fields", async ({
    page,
  }) => {
    await page.goto("/");
    await page.click('button[type="submit"]');
    await expect(page.getByText("Name is required")).toBeVisible();
    await expect(page.getByText("Contact number is required")).toBeVisible();
    await expect(page.getByText("Email is required")).toBeVisible();
    await expect(page.getByText("Message is required")).toBeVisible();
    // await percySnapshot(page, 'Contact Form - Validation Errors');
  });

  test("unhappy path: shows error for invalid email and contact", async ({
    page,
  }) => {
    await page.goto("/");
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="contact"]', "abc");
    await page.fill('input[name="email"]', "not-an-email");
    await page.fill('textarea[name="message"]', "Hello!");
    await page.click('button[type="submit"]');
    await expect(page.getByText("Enter a valid contact number")).toBeVisible();
    await expect(page.getByText("Enter a valid email")).toBeVisible();
    // await percySnapshot(page, 'Contact Form - Invalid Email/Contact');
  });

  test("unhappy path: shows server error for unhealthy API", async ({
    page,
  }) => {
    await page.goto("/");
    await page.route("/api/contact", (route) =>
      route.fulfill({
        status: 500,
        body: JSON.stringify({ success: false, error: "Server error" }),
      })
    );
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="contact"]', "1234567890");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('textarea[name="message"]', "Hello!");
    await page.click('button[type="submit"]');
    await expect(page.getByText("Server error")).toBeVisible();
    // await percySnapshot(page, 'Contact Form - Server Error');
  });
});
