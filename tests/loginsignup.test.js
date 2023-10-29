import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginSignup from './LoginSignup';

test('renders Sign Up form by default', () => {
  render(<LoginSignup />);
  const signUpForm = screen.getByText('Sign Up');
  expect(signUpForm).toBeInTheDocument();
});

test('switches between Sign Up and Login forms', () => {
  render(<LoginSignup />);
  const signUpButton = screen.getByText('Sign Up');
  const loginButton = screen.getByText('Login');

  fireEvent.click(loginButton);
  const loginForm = screen.getByText('Login');
  expect(loginForm).toBeInTheDocument();

  fireEvent.click(signUpButton);
  const signUpForm = screen.getByText('Sign Up');
  expect(signUpForm).toBeInTheDocument();
});