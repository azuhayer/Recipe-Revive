import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginSignup from '@/components/LoginSignup/LoginSignup'; // Adjust the import path as needed

describe('LoginSignup Component', () => {
  it('renders the default "Sign Up" view', () => {
    const { getByText, queryByPlaceholderText } = render(<LoginSignup />);

    // Ensure that the "Sign Up" view is rendered within the header
    const headerText = getByText('Sign Up', { selector: '.header .text' });
    expect(headerText).toBeTruthy(); // or expect(headerText).toBeDefined();

    // Ensure that the "Name" input field is not rendered
    expect(queryByPlaceholderText('Name')).toBeNull();

    // Ensure that the "Email ID" input field is rendered
    expect(queryByPlaceholderText('Email ID')).toBeTruthy(); // or expect(queryByPlaceholderText('Email ID')).toBeDefined();

    // Ensure that the "Password" input field is rendered
    expect(queryByPlaceholderText('Password')).toBeTruthy(); // or expect(queryByPlaceholderText('Password')).toBeDefined();
  });

  it('toggles between "Sign Up" and "Login" views', () => {
    const { getByText } = render(<LoginSignup />);

    // Click the "Login" button to switch to the "Login" view
    fireEvent.click(getByText('Login', { selector: '.submit.gray' }));

    // Ensure that the "Login" view is rendered within the header
    const headerText = getByText('Login', { selector: '.header .text' });
    expect(headerText).toBeTruthy(); // or expect(headerText).toBeDefined();

    // Click the "Sign Up" button to switch back to the "Sign Up" view
    fireEvent.click(getByText('Sign Up', { selector: '.submit' }));

    // Ensure that the "Sign Up" view is rendered within the header
    const headerTextAfterToggle = getByText('Sign Up', { selector: '.header .text' });
    expect(headerTextAfterToggle).toBeTruthy(); // or expect(headerTextAfterToggle).toBeDefined();
  });
});
