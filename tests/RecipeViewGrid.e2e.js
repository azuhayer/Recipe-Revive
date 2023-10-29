const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(' http://localhost:3000');

  const yourRecipesData = [
    { title: 'Recipe 1' },
    { title: 'Recipe 2' },
    { title: 'Recipe 3' },

  ];


  await page.evaluate((recipes) => {
    const recipeViewGrid = document.querySelector('.recipe-view-grid'); 
    recipeViewGrid.props.recipes = recipes;
  }, yourRecipesData);

  await page.waitForSelector('.recipe-preview');

  const recipePreviewCount = await page.$$eval('.recipe-preview', (elements) => elements.length);
  expect(recipePreviewCount).toBe(yourRecipesData.length);

  await browser.close();
})();