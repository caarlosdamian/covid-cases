import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { render } from '../../../test-utils';
import { Login } from './Login';

describe('Login  page component render correctly', () => {
  beforeEach(() => {
    render(<Login />);
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
