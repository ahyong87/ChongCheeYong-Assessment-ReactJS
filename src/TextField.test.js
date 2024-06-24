import React from 'react';
import { render, screen } from '@testing-library/react';
import TextField from './Component/TextField';

describe('TextField Component', () => {
  test('renders with label and placeholder', () => {
    render(<TextField label="Username" placeholder="Enter username" />);
    
    const labelElement = screen.getByText(/username/i);
    const inputElement = screen.getByPlaceholderText(/enter username/i);

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  test('maxLength and minLength attributes', () => {
    render(<TextField label="Username" maxLength={20} minLength={5} />);
    
    const inputElement = screen.getByLabelText(/username/i);
    
    expect(inputElement).toHaveAttribute('maxlength', '20');
    expect(inputElement).toHaveAttribute('minlength', '5');
  });
});
