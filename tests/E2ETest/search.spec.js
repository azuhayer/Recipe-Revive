import { test, expect } from '@playwright/test';

test('Simple Searching', async ({ page }) => {
  // Mock user object for auth
  const mockUser = {
    displayName: 'John',
    uid: 'ae3781',
  };

  // Mocking Firestore behavior
  await page.evaluate(() => {
    window.getFirestore = jest.fn(); // Mock getFirestore function
    window.doc = jest.fn(); // Mock doc function
    window.getDoc = jest.fn(() => Promise.resolve({
      exists: jest.fn(() => false), // Simulate document does not exist
      data: jest.fn(() => ({
        saved: [],
      })),
    }));
  });

  // Mock Firebase auth
  await page.evaluate((mockUser) => {
    window.getAuth = jest.fn(() => ({
      onAuthStateChanged: jest.fn((callback) => {
        const unsubscribe = jest.fn();
        callback({ mockUser });
        return unsubscribe;
      }),
    }));
  }, mockUser);

  await page.goto('http://localhost:3000/');

  const searchBar = await page.isVisible('input[type="text"]');
  expect(searchBar).toBe(true);

  const searchingChicken = await page.isVisible('text=Search Chicken');
  expect(searchingChicken).toBe(true);

  await page.click('text=Search Chicken');
  await page.waitForURL('http://localhost:3000/explore?search=Chicken');
  await page.waitForSelector('text=Chicken Vesuvio');

  const checkRecipe = await page.isVisible('text=Chicken Vesuvio');
  expect(checkRecipe).toBe(true);
});
