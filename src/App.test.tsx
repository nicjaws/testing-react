import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import {getUser} from './get-user';
import {mocked} from 'ts-jest/utils';

jest.mock('./get-user');
const mockGetUser = mocked(getUser, true)

describe('When everyhting is ok', () => {

  beforeEach( async () => {
    render (<App />);
    await waitFor(() => {expect(mockGetUser).toHaveBeenCalled()})
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

describe('When the component fetches the user successfully', () => {
  beforeEach(() => {
    mockGetUser.mockClear()
  });
  test('Should call getUser once', async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalledTimes(1));
  })
})
