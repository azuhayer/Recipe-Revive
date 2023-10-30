import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import Explore from '../../src/app/explore/page';
import fetchData from '../../utils/fetchData';

describe('Integration Test for fetchData for Explore Page', () => {
    it('should fetch data successfully', async () => {
        const mockData = { hits: [{
            name: 'Simple Soup',
            image: 'https://www.justonecookbook.com/wp-content/uploads/2022/06/Miso-Soup-8297-I.jpg',
            rating: 4.5,
            cookTime: 20,
            },{
            name: 'Seweed Soup',
            image: 'https://www.justonecookbook.com/wp-content/uploads/2022/06/Miso-Soup-8297-I.jpg',
            rating: 3,
            cookTime: 120
            }] };
    
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: async () => mockData,
        });
    
        const data = await fetchData('Simple Soup');
    
        expect(data).toEqual(mockData);
    });
    
    it('should handle API call error', async () => {
        global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));
            
        await expect(fetchData('Simple Soup')).rejects.toThrow('Network error');
    });    
});

describe('Integration Test for Explore Page', () => {
    it('should fetch data when a search term is entered', async () => {
        const mockData = {
            hits: [
            {
                name: 'Simple Soup',
                image: 'https://www.justonecookbook.com/wp-content/uploads/2022/06/Miso-Soup-8297-I.jpg',
                rating: 4.5,
                cookTime: 20,
            },
            {
                name: 'Seaweed Soup',
                image: 'https://www.justonecookbook.com/wp-content/uploads/2022/06/Miso-Soup-8297-I.jpg',
                rating: 3,
                cookTime: 120,
            },
            ],
        };
  
        // Mock the fetchData function to resolve with mock data
        fetchData.mockResolvedValue(mockData); 
    
        render(<Explore />);
    
        // Find the search input and enter a search term
        const searchInput = screen.getByRole('textbox');
        fireEvent.change(searchInput, { target: { value: 'soup' } });
    
        // Simulate a user submitting the search
        const searchButton = screen.getByText('Search');
        fireEvent.click(searchButton);
    
        // Check that the fetchData function was called with the correct search term
        expect(fetchData).toHaveBeenCalledWith('soup');
    
        // You can also check that the fetched data is displayed on the page
        const recipeResults = await screen.findByText('Recipe Results');
        expect(recipeResults).toBeInTheDocument();
    
        // Reset the mock function
        fetchData.mockReset();
    });
  
    it('should handle API call error', async () => {
        // Mock the fetchData function to reject with an error
        fetchData.mockRejectedValue(new Error('API Error')); 
  
        render(<Explore />);
  
        // Check that an error message is displayed
        const errorMessage = await screen.findByText('Failed to fetch recipes. Please try again later.');
        expect(errorMessage).toBeInTheDocument();
  
        // Reset the mock function
        fetchData.mockReset();
    });
});
