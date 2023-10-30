import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
  }));
  
  describe('SearchBar', () => {
    
    //for a valid search
    it('should update searchQuery on button click', () => {
      const pushMock = jest.fn();
      useRouter.mockImplementation(() => ({
        push: pushMock,
      }));
  
      render(<SearchBar />);
  
      const searchInput = screen.getByPlaceholderText('Search recipe');
      const searchButton = screen.getByTestId('search-button');
  
      fireEvent.change(searchInput, { target: { value: 'example' } });
      fireEvent.click(searchButton);
  
      expect(pushMock).toHaveBeenCalledWith('/explore/?search=example');
    });

    //for empty search, since we don't have any input restriction
    it('should update searchQuery on button click', () => {
      const pushMock = jest.fn();
      useRouter.mockImplementation(() => ({
        push: pushMock,
      }));
  
      render(<SearchBar />);
  
      const searchButton = screen.getByTestId('search-button');
  
      fireEvent.click(searchButton);
  
      expect(pushMock).toHaveBeenCalledWith('/explore/?search=');
    });
  });