import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginSignup from '@/components/LoginSignup/LoginSignup';

describe('LoginSignup Component', () => {
  it('renders with "Sign Up" as the default action', () => {
    const { getByText } = render(<LoginSignup />);
    const textElement = getByText('Sign Up', { selector: '.text' });
    expect(textElement).toBeInTheDocument();
  });

  it('toggles between "Sign Up" and "Login" when buttons are clicked', () => {
    const { getByText } = render(<LoginSignup />);
    const signUpButton = getByText('Sign Up', { selector: '.submit' });
    const loginButton = getByText('Login', { selector: '.submit' });

    // Click "Sign Up" button
    fireEvent.click(signUpButton);
    expect(getByText('Login', { selector: '.submit' })).toBeInTheDocument();

    // Click "Login" button
    fireEvent.click(loginButton);
    expect(getByText('Sign Up', { selector: '.submit' })).toBeInTheDocument();
  });
});
