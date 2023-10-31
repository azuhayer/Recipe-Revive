import React from 'react';
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import Explore from './page';
import { useRouter, useSearchParams } from 'next/navigation';

// Mock the fetchData function to simulate a successful API response
jest.mock('../../../utils/fetchData', () => {
  return {
    __esModule: true,
    default: jest.fn().mockResolvedValue({ hits: [] }),
  };
});

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('Explore Page Integration Test', () => {
  it('should send search value to API and get a response', async () => {
    const searchQuery = 'example search';

    // Mock useRouter and useSearchParams
    const pushMock = jest.fn();
    useRouter.mockImplementation(() => ({
      push: pushMock,
    }));

    useSearchParams.mockReturnValue({
      get: () => searchQuery,
    });

    render(<Explore />);

    // Find the SearchBar input and button
    const searchInput = screen.getByPlaceholderText('Search recipe');
    const searchButton = screen.getByTestId('search-button');

    // Simulate user entering a search query and clicking the search button
    fireEvent.change(searchInput, { target: { value: searchQuery } });
    fireEvent.click(searchButton);

    // Wait for component updates and see that the page loads
    await act(async () => {
      const fetchDataMock = require('../../../utils/fetchData').default;
      expect(fetchDataMock).toHaveBeenCalledWith(searchQuery);
    });
  });
});
