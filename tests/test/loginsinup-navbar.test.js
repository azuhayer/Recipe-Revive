import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';
import LoginSignup from './LoginSignup'; 

test('toggles the login/signup form', () => {
  render(
    <div>
      <NavBar />
      <LoginSignup />
    </div>
  );

  const loginButton = screen.getByText('Login');
  const signUpButton = screen.getByText('Sign Up');

  expect(screen.queryByPlaceholderText('Email ID')).toBeNull();
  fireEvent.click(loginButton);

  expect(screen.getByPlaceholderText('Email ID')).toBeInTheDocument();

  fireEvent.click(signUpButton);

  expect(screen.getByPlaceholderText('Email ID')).toBeInTheDocument();
});


