/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm, SubmitHandler } from 'react-hook-form';
import './Login.css';
import { IFormInputs } from '../../interfaces';

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => data;

  return (
    <div className="login-app">
      <div className="image-container" />

      <div className="form-container">
        <h1 className="header">Account Login</h1>
        <p className="text">
          If you are already a member you can login with <br />
          your email address and password.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} data-testid="loginForm">
          <label htmlFor="emailText" className="label-text">
            Email address
          </label>
          <input
            id="emailText"
            data-testid="emailTest"
            className="input-text"
            type="email"
            {...register('email', { required: true })}
          />
          <br />
          {errors.email && (
            <span className="span-error">Email address is required</span>
          )}
          <br />

          <label htmlFor="passwordText" className="label-text">
            Password
          </label>
          <input
            id="passwordText"
            data-testid="passwordTest"
            className="input-text"
            type="password"
            {...register('password', { required: true })}
          />
          <br />
          {errors.password && (
            <span className="span-error">Password is required</span>
          )}
          <br />

          <input
            id="checkboxRemember"
            className="checkbox-input"
            type="checkbox"
            {...register('remember')}
          />
          <label htmlFor="checkboxRemember" className="label-checkbox">
            Remember me
          </label>
          <br />

          <button
            type="submit"
            className="button-submit"
            data-testid="submitButton"
          >
            Register Account
          </button>
        </form>
        <span className="span-text">
          Dont have and account ?<span className="span-link">Sing up here</span>
        </span>
      </div>
    </div>
  );
}
