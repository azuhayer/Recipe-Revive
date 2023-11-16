import { test, expect } from '@playwright/test';
/*
    E2E test - Interaction of the userProfile page.
    Navigate to the userProfile page, switch tab to the Created Recipes Tab
    Verify tabs are seen, swicth to cretae recipe tab. 
    Verify add recipe button is seen, then click it.
    Input new recipe detaisl and verify the details are seen. 

*/

test('Profile Page - sswitch tabs, opens the Add Recipe form, and inputs text', async ({ page }) => {
    await page.goto('http://localhost:3000/userProfile');

    const SavedRecipes  = await page.isVisible('text=Saved Recipes');
    expect(SavedRecipes).toBe(true);
    const CreatedRecipes  = await page.isVisible('text=Created Recipes');
    expect(CreatedRecipes).toBe(true);
    //Switch tab
    await page.click('text=Created Recipes');

    const AddRecipe = await page.isVisible('text=Add Recipe');
    expect(AddRecipe).toBe(true);
    await page.click('text=Add Recipe');

    await page.fill('input[placeholder="Recipe Name"]', 'Test Recipe');
    await page.fill('textarea[placeholder="Ingredients"]', 'Test Ingredients');
    await page.fill('textarea[placeholder="Instructions"]', 'Test Instructions');
    const recipeNameValue = await page.inputValue('input[placeholder="Recipe Name"]');
    const ingredientsValue = await page.inputValue('textarea[placeholder="Ingredients"]');
    const instructionsValue = await page.inputValue('textarea[placeholder="Instructions"]');
    
    expect(recipeNameValue).toEqual('Test Recipe');
    expect(ingredientsValue).toEqual('Test Ingredients');
    expect(instructionsValue).toEqual('Test Instructions');
});