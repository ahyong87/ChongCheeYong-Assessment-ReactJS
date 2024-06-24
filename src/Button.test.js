import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Component/button';
import { FaBeer } from 'react-icons/fa';

describe('Button Component', () => {
  test('renders with title and icon', () => {
    render(<Button title="Click Me" icon={<FaBeer />} />);
    
    const buttonElement = screen.getByText(/click me/i);
    const iconElement = screen.getByTestId('button-icon');

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  test('click event works', () => {
    const onClickMock = jest.fn();
    render(<Button title="Click Me" onClick={onClickMock} />);
    
    const buttonElement = screen.getByText(/click me/i);
    userEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
