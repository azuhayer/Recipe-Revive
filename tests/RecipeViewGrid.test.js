import React from 'react';
import { render } from '@testing-library/react';
import RecipeViewGrid from '../../src/components/RecipeViewGrid/RecipeViewGrid';


describe('RecipeViewGrid Component', () => {
  it('renders the component with a list of recipes', () => {
    const recipes = [
      { id: 1, title: 'Recipe 1' },
      { id: 2, title: 'Recipe 2' },
    ];

    const { getByText } = render(<RecipeViewGrid recipes={recipes} />);

    expect(getByText('Recipe 1')).toBeInTheDocument();
    expect(getByText('Recipe 2')).toBeInTheDocument();
  });

  it('renders "No recipes available" message when no recipes are provided', () => {
    const recipes = [];

    const { getByText } = render(<RecipeViewGrid recipes={recipes} />);

    expect(getByText('No recipes available')).toBeInTheDocument();
  });

  it('handles invalid input (null recipes)', () => {
    const { getByText } = render(<RecipeViewGrid recipes={null} />);

    expect(getByText('No recipes available')).toBeInTheDocument();
  });
});