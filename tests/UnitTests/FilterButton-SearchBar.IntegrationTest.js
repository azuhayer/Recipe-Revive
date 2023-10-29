import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import FilterButton from './FilterButton';

describe('Integration Test: SearchBar and FilterButton', () => {
  it('interacts with both components successfully', () => {
    render(
      <>
        <SearchBar />
        <FilterButton currentSort="name" onSortChange={() => {}} />
      </>
    );

    // Test interactions between SearchBar and FilterButton
    const searchBarInput = screen.getByPlaceholderText('Search recipe');
    const filterButton = screen.getByRole('button', { name: 'Sort By' });

    // Simulate user input in the SearchBar
    fireEvent.change(searchBarInput, { target: { value: 'Pasta' } });
    expect(searchBarInput.value).toBe('Pasta');

    // Simulate a click on the filter button to open the dropdown
    fireEvent.click(filterButton);

    // Test the dropdown options
    const dropdownOptions = screen.getAllByRole('option');
    expect(dropdownOptions).toHaveLength(5); // Check the number of options

    // Simulate a click on a dropdown option (e.g., Sort by "Cook Time")
    fireEvent.click(dropdownOptions[3]);
    expect(filterButton).toHaveTextContent('Cook Time');

    // Ensure the interaction between the components works as expected
  });

  it('handles an error condition gracefully', () => {
    // Render the components in a way that triggers an error condition (e.g., invalid props)
    // For example, provide a currentSort that is not in the dropdown options
    render(
      <>
        <SearchBar />
        <FilterButton currentSort="invalidSort" onSortChange={() => {}} />
      </>
    );
  });
});
