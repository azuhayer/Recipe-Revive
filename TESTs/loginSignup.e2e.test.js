import 'core-js';
const { chromium } = require('playwright');

let browser;
let page;

beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
});

afterAll(async () => {
    await browser.close();
});

describe('LoginSignup Component', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000/login'); // Replace with your app's URL
    });

    it('should switch between Login and Sign Up modes', async () => {
        // Initial state (Sign Up mode)
        const textContent = await page.innerText('body');
        expect(textContent).toContain('Sign Up');

        // Positive assertion: Check that the "forgot-password" element exists
        const forgotPasswordElement = await page.$('.forgot-password');
        expect(forgotPasswordElement).toBeNull();

        // Switch to Login mode
        await page.click('.submit:has-text("Login")');
        const loginTextContent = await page.innerText('body');
        expect(loginTextContent).toContain('Login');

        // Positive assertion: Check that the element with placeholder "Name" exists
        const loginNameInput = await page.$('.input input[placeholder="Name"]');
        expect(loginNameInput).not.toBeNull();

        // Negative assertion: Check that the "forgot-password" element does not exist
        const loginForgotPasswordElement = await page.$('.forgot-password');
        expect(loginForgotPasswordElement).toBeNull();
    });
});
