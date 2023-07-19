import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { signIn } from 'next-auth/react';
import SignInPage from '@/pages/index';
import useUser from '@/hooks/UseUser-hook';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/hooks/UseUser-hook', () => jest.fn());

jest.mock('@/contexts/Toast-Context', () => ({
  useToast: jest.fn().mockReturnValue({
    showToast: jest.fn(),
  }),
}));

describe('SignInPage', () => {
  beforeEach(() => {
    useUser.mockReturnValue({
      user: null,
      isLoading: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the signin form', () => {
    render(<SignInPage />);
    expect(screen.getByLabelText(/your username or email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login to your account/i })).toBeInTheDocument();
  });

  it('should call signIn when the form is submitted', async () => {
    signIn.mockImplementationOnce(() => Promise.resolve({}));
    const { getByLabelText, getByRole } = render(<SignInPage />);
    const usernameInput = getByLabelText(/your username or email/i);
    const passwordInput = getByLabelText(/your password/i);
    const submitButton = getByRole('button', { name: /login to your account/i });

    expect(signIn).not.toHaveBeenCalled();

    await userEvent.type(usernameInput, 'testuser');
    await userEvent.type(passwordInput, 'testpassword');
    userEvent.click(submitButton);

    expect(signIn).toHaveBeenCalledWith('login', {
      username: 'testuser',
      password: 'testpassword',
      redirect: false,
    });
  });

  /* it('should show an error message if signIn fails', async () => {
    signIn.mockImplementationOnce(() => Promise.resolve({ error: 'Invalid credentials' }));
    const { getByLabelText, getByRole } = render(<SignInPage />);
    const usernameInput = getByLabelText(/your username or email/i);
    const passwordInput = getByLabelText(/your password/i);
    const submitButton = getByRole('button', { name: /login to your account/i });

    const { showToast } = useToast();

    expect(showToast).not.toHaveBeenCalled();

    await userEvent.type(usernameInput, 'testuser');
    await userEvent.type(passwordInput, 'testpassword');
    userEvent.click(submitButton);

    await waitFor(() => expect(showToast).toHaveBeenCalledWith('Invalid credentials', 'error'));
  }); */
});
