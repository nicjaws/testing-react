import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everyhting is ok', () => {

  beforeEach(() => {
    render (<App />)
  })
  test('should render the App component without crashing', () => {
    screen.debug();
  });

  test('should select the children that is being passed to the CustomInput component', () => {
    screen.getByText(/Input/);
  });

  test('should select the input element by its role', () => {
    screen.getByRole('textbox');
  });

  test('should select a label by its text', () => {
    screen.getByLabelText('Input:')
  });

  test('should select input element by placeholder text', () => {
    screen.getByPlaceholderText('Example');
  })

  test('should select the input element by its role with queryByRole', () => {
    expect(screen.queryByRole('textbox'));
  });
})
