import { test, expect } from '@playwright/test';
/*
    E2E test - Searching

*/

test('Simple Searching', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const searchBar = await page.isVisible('input[type="text"]');
    expect(searchBar).toBe(true);

    const searchingChciken  = await page.isVisible('text=Search Chicken');
    expect(searchingChciken).toBe(true);
    //Search Chicken
    await page.click('text=Search Chicken');

    await page.waitForURL('http://localhost:3000/explore?search=Chicken');
    

    await page.waitForSelector('text=Chicken Vesuvio');
    const checkRecipe = await page.isVisible('text=Chicken Vesuvio');
    expect(checkRecipe).toBe(true);

});