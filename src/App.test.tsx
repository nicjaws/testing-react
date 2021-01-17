import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everyhting is ok', () => {
  test('should render the App component without crashing', () => {
    render(<App />);
    screen.debug();
  })
})
