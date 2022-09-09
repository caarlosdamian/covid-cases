import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../../redux/Store';
import { Login } from './Login';

describe('Login  page component render correctly', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  });

  test('Login integration test', async () => {
    const USER = 'some-username';
    const PASS = 'some-pass';

    const userInput = screen.getByLabelText(/email/i);
    user.type(userInput, USER);

    const passwordInput = screen.getByLabelText(/password/i);
    user.type(passwordInput, PASS);

    expect(await screen.findAllByTestId('emailTest')).toBeDefined();
    expect(await screen.findAllByTestId('passwordTest')).toBeDefined();
  });
});
