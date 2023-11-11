import "@testing-library/jest-dom";
import { render, waitFor } from '@testing-library/react';
import Explore from '@/app/explore/page';
import fetchData from '../../utils/fetchData';

jest.mock('../../utils/fetchData');

/*
    The integration test mocks the API call and checks to see if recipes are displayed.
    This integration tests interaction between a page(Explore) and the component(RecipeViewGrid)
    which also has a child component RecipePreview
*/

describe('Explore Component Integration Test', () => {
  
  it('should render fetched recipes', async () => {
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
    fetchData.mockResolvedValue(mockData);
    const { getByText } = render(<Explore />);
    //See if the recipes were rendered by the ViewGrid(consisting og RecipePreview component) component
    await waitFor(() => expect(getByText('Simple Soup')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Seweed Soup')).toBeInTheDocument());
  });

  it('should handle fetch error or api error', async () => {
    fetchData.mockRejectedValue(new Error('API call failed'));

    const { getByText, queryByText } = render(<Explore />);
    await waitFor(() => expect(queryByText('Miso Soup')).not.toBeInTheDocument()); 

    //An error message is displayed when there is a api call failure.
    expect(getByText('Failed to fetch recipes. Please try again later.')).toBeInTheDocument();
  });

});