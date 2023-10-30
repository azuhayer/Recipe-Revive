import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Explore from '@/app/explore/page';

// Mock the fetchData function to simulate API call
import { fetchData } from '../utils/fetchData';

describe('Explore Component', () => {
  test('fetches and displays recipes', async () => {
    // Mock the fetchData function to return sample data
    fetchData.mockImplementation(() =>
      Promise.resolve({
        hits: [
          {
            name: 'Miso Soup',
            image:'https://www.justonecookbook.com/wp-content/uploads/2022/06/Miso-Soup-8297-I.jpg',
            rating: 3,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            cookTime:'120'
            // Other recipe properties
          },
          {
            name: 'French Soup With Cheese',
            image:'https://leitesculinaria.com/wp-content/uploads/2021/03/french-onion-soup-fp.jpg',
            rating: 4,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            cookTime:'150'
            // Other recipe properties
          },
        ],
      })
    );

    render(<Explore searchTerm="mock-search" />);

    // Wait for the recipes to be loaded and displayed
    await waitFor(() => {
      // Assert that the recipes are displayed
      expect(screen.getByText('Miso Soup')).toBeInTheDocument();
      expect(screen.getByText('French Soup With Cheese')).toBeInTheDocument();
    });
  });

  test('handles fetch error gracefully', async () => {
    // Mock the fetchData function to simulate an error
    fetchData.mockImplementation(() => Promise.reject(new Error('Failed to fetch data')));

    render(<Explore searchTerm="mock-search" />);

    // Wait for the error message to be displayed
    await waitFor(() => {
      // Assert that the error message is displayed
      expect(screen.getByText('Failed to fetch recipes. Please try again later.')).toBeInTheDocument();
    });
  });
});
