import React from 'react';
import { render, fireEvent } from '@testing-library/react'; 
import Tabs from '@/components/Tabs/Tabs';

const { test, expect } = require('@playwright/test');

test('UserProfile Page Test', async ({ page }) => {
  // Navigate to the UserProfile page of your application
  await page.goto('http://localhost:3000/userProfile'); // Replace with your actual UserProfile page URL

  // Switch tabs to 'created'
  await page.click('text=Created');
  await page.waitForSelector('text=Add Recipe');

  // Open the Add Recipe form
  await page.click('text=Add Recipe');
  await page.waitForSelector('text=Submit');

  // Input data into the Add Recipe form
  await page.fill('input[placeholder="Recipe Name"]', 'New Recipe');
  await page.fill('textarea[placeholder="Ingredients"]', 'Ingredient 1, Ingredient 2');
  await page.fill('textarea[placeholder="Instructions"]', 'Step 1, Step 2, Step 3');

  // Submit the Add Recipe form
  await page.click('text=Submit');
  await page.waitForSelector('text=Recipe successfully added');

  // Assert that the success message is present
  const successMessage = await page.textContent('text=Recipe successfully added');
  expect(successMessage).toBe('Recipe successfully added');
});

test('it should change the active tab when a button is clicked', () => {
  // Set up initial active tab (you should use your own initial value here)
  const initialActiveTab = 'saved';

  // Create a function to mock setActiveTab
  const setActiveTab = jest.fn();

  // Render the Tabs component with initialActiveTab and mock setActiveTab
  const { getByText } = render(
    <Tabs activeTab={initialActiveTab} setActiveTab={setActiveTab} />
  );

  // Find the buttons for 'Saved Recipes' and 'Created Recipes'
  const createdTabButton = getByText('Created Recipes');
  const savedTabButton = getByText('Saved Recipes');

  // Simulate a button click to switch to 'created' tab
  fireEvent.click(createdTabButton);
  fireEvent.click(savedTabButton);

  // Ensure that setActiveTab was called with the expected value
  expect(setActiveTab).toHaveBeenCalledWith('created');
  expect(setActiveTab).toHaveBeenCalledWith('saved');
});