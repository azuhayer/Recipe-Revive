import React from 'react';
import { render } from '@testing-library/react';
import RecipeViewGrid from '../src/components/RecipeViewGrid/RecipeViewGrid';

jest.mock('../RecipePreview/RecipePreview', () => {
  return function MockedRecipePreview({ recipe }) {
    return <div data-testid="mocked-recipe-preview">{recipe.title}</div>;
  };
});

describe('RecipeViewGrid Integration Tests', () => {
  it('should render RecipePreviews correctly', () => {
    const recipes = [
      { title: 'Recipe 1' },
      { title: 'Recipe 2' },
      { title: 'Recipe 3' },
    ];

    const { getByTestId } = render(<RecipeViewGrid recipes={recipes} />);

    recipes.forEach((recipe) => {
      expect(getByTestId('mocked-recipe-preview')).toHaveTextContent(recipe.title);
    });
  });

  it('should handle an error condition gracefully', () => {
    const recipes = [];

    const { getByText } = render(<RecipeViewGrid recipes={recipes} />);

    expect(getByText('No recipes available')).toBeInTheDocument();
  });
});
