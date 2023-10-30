const { chromium } = require('playwright');

(async () => {
  let browser;

  beforeAll(async () => {
    browser = await chromium.launch();
  });



  it('Searches for recipes', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000'); // Replace with the actual URL of your explore page.

    // Type a search query into the input field.
    await page.type('input#search-recipe', 'Pasta recipes');

    // Click the search button.
    await page.click('button');

    // Wait for the search results to load (you might need to adjust this wait time).
    await page.waitForTimeout(2000); // Adjust this time according to your app's response time.

    // Check if the URL contains the search query.
    const url = page.url();
    expect(url).toContain('search=Pasta%20recipes');

    // Check if there are search results displayed on the page.
    const searchResults = await page.$('.search-results'); // Replace with the actual selector for search results.
    expect(searchResults).toBeTruthy();

    await page.close();
  });
})();
