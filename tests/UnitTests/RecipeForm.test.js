import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RecipeForm from '@/components/RecipeForm/RecipeForm';

test('It should allow input and submission of a recipe form', () => {
    // Initialize a mock function for onSubmit and onClose
    const mockSubmit = jest.fn();
    const mockClose = jest.fn();

    // Render the RecipeForm component
    const { getByPlaceholderText, getByText, container } = render(
        <RecipeForm onSubmit={mockSubmit} onClose={mockClose} />
    );

    // Input values for the form fields
    const recipeNameInput = getByPlaceholderText('Recipe Name');
    const ingredientsInput = getByPlaceholderText('Ingredients');
    const instructionsInput = getByPlaceholderText('Instructions');
    const fileInput = container.querySelector('input[type="file"]');
    const submitButton = getByText('Submit');

    // Simulate user input
    fireEvent.change(recipeNameInput, { target: { value: 'Test Recipe' } });
    fireEvent.change(ingredientsInput, { target: { value: 'Ingredient 1, Ingredient 2' } });
    fireEvent.change(instructionsInput, { target: { value: 'Step 1, Step 2' } });
    fireEvent.change(fileInput, { target: { files: [new File(['recipe-image'], 'test.png')] } });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Expect that the onSubmit function was called
    expect(mockSubmit).toHaveBeenCalledWith({
        recipeName: 'Test Recipe',
        ingredients: 'Ingredient 1, Ingredient 2',
        instructions: 'Step 1, Step 2',
        selectedImage: expect.any(File), // We expect a File object
    });

    // Simulate clicking the close button
    const closeButton = getByText('×');
    fireEvent.click(closeButton);

    // Expect that the onClose function was called
    expect(mockClose).toHaveBeenCalled();
});

test('It should close the form when the close button is clicked', () => {
  // Initialize a mock function for onClose
  const mockClose = jest.fn();

  // Render the RecipeForm component
  const { getByText } = render(<RecipeForm onSubmit={() => {}} onClose={mockClose} />);

  // Find the close button 
  const closeButton = getByText('×');

  // Simulate clicking the close button
  fireEvent.click(closeButton);

  // Expect that the onClose function was called when the form is closed
  expect(mockClose).toHaveBeenCalled();
});

test('It should handle an error when submitting without a recipe name', () => {
    // Initialize a mock function for onSubmit and onClose
    const mockSubmit = jest.fn();
    const mockClose = jest.fn();

    // Render the RecipeForm component
    const { getByText } = render(
        <RecipeForm onSubmit={mockSubmit} onClose={mockClose} />
    );

    // Find the submit button
    const submitButton = getByText('Submit');

    // Simulate form submission without entering a recipe name
    fireEvent.click(submitButton);
});

test('It should handle an error when submitting with an invalid image file', () => {
    // Initialize a mock function for onSubmit and onClose
    const mockSubmit = jest.fn();
    const mockClose = jest.fn();

    // Render the RecipeForm component
    const { getByText } = render(
        <RecipeForm onSubmit={mockSubmit} onClose={mockClose} />
    );

    // Find the file input and submit button
    const fileInput = document.querySelector('input[type="file"]');
    const submitButton = getByText('Submit');

    // Simulate selecting an invalid file (non-image file)
    fireEvent.change(fileInput, {
        target: { files: [new File(['invalid-file'], 'invalid.txt', { type: 'text/plain' })] },
    });

    // Simulate form submission with an invalid file
    fireEvent.click(submitButton);
});

test('It should handle an error when submitting with an empty Recipe Name field', () => {
    // Initialize a mock function for onSubmit and onClose
    const mockSubmit = jest.fn();
    const mockClose = jest.fn();

    // Render the RecipeForm component
    const { getByText } = render(
        <RecipeForm onSubmit={mockSubmit} onClose={mockClose} />
    );

    // Find the submit button
    const submitButton = getByText('Submit');

    // Simulate form submission with an empty Recipe Name
    fireEvent.click(submitButton);
});
