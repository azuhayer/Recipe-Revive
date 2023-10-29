import React from 'react';
import { render, fireEvent } from '@testing-library/react'; 
import Tabs from '@/components/Tabs/Tabs';

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
