/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom";
import { UserEvent } from '@testing-library/user-event';
import RecipePreview from '@/components/RecipePreview/RecipePreview';

const mockUser={
  displayName:'John',
  uid:"ae3781"
}

jest.mock("next/navigation", () => ({
    useRouter: jest.fn()
}))
jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
  getApps: jest.fn(() => []),
}));

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  doc:jest.fn(),
  getDoc:jest.fn(()=> Promise.resolve({
    exists: jest.fn(() => false), // here
    data: jest.fn(() => ({
      saved: []
    }))
  })),


}));


//import { setDoc,doc,docSnap,getDoc } from 'firebase/firestore';
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    onAuthStateChanged: jest.fn((callback) => {
      const unsubscribe = jest.fn();
      callback({mockUser});
      return unsubscribe; 
    }),
  })),
}));


describe('RecipePreview Component Tests', () => {
  test('renders RecipePreview with provided recipe data', () => {
    const mockRecipe = {
      name: 'Miso Soup',
      image: 'https://www.justonecookbook.com/wp-content/uploads/2022/06/Miso-Soup-8297-I.jpg',
      rating: 4.5,
      cookTime: 20,
    };
  
    render(<RecipePreview recipe={mockRecipe} />);
  
    // Check if the recipe name is rendered
    const heading = screen.getByRole('heading', {
      name: 'Miso Soup',
    });
    expect(heading).toBeInTheDocument();
    // Check if the cook time is rendered
    const cookTimeElement = screen.getByText('20m'); // Update to match the expected format
    expect(cookTimeElement).toBeInTheDocument();


  });
  

  test('handles invalid recipe data', () => {
    // Render the component with invalid recipe data
    render(<RecipePreview recipe={null} />);
    // Check if the default name is rendered
    const recipeName = screen.queryByRole('heading', {
      name: 'Unknown Recipe',
    });
    expect(recipeName).toBeInTheDocument();
  });

  test('handles partial missing recipe data', () => {
    const mockRecipe = {
      name: 'French Soup With Cheese',
      image: 'https://www.justonecookbook.com/wp-content/uploads/2022/06/Miso-Soup-8297-I.jpg',
      cookTime: 20
    }
    // Render the component with invalid recipe data
    render(<RecipePreview recipe={mockRecipe} />);

    // Check if the recipe name is rendered
    const heading = screen.getByRole('heading', {
      name: 'French Soup With Cheese',
    });
    expect(heading).toBeInTheDocument();

  });


});