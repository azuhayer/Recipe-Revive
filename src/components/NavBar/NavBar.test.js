import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar component', () => {
  it('renders the component with a title', () => {
    render(<NavBar />);
    const titleElement = screen.getByText('RecipeRevive');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders navigation links in large screen view', () => {
    render(<NavBar />);
    const aboutLink = screen.getByText('About Us');
    const contactLink = screen.getByText('Contact');
    const loginLink = screen.getByText('Login');
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  it('toggles the mobile navigation menu when clicking the menu button', () => {
    render(<NavBar />);
    const menuButton = screen.getByText('☰'); 
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    fireEvent.click(menuButton);
    expect(screen.getByRole('menu')).toBeInTheDocument();
    fireEvent.click(menuButton);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('renders navigation links in mobile screen view when the menu is open', () => {
    render(<NavBar />);
    const menuButton = screen.getByText('☰');
    fireEvent.click(menuButton);
    const aboutLink = screen.getByText('About Us');
    const contactLink = screen.getByText('Contact');
    const loginLink = screen.getByText('Login');
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });
});
