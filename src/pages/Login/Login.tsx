/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './Login.css';
import imageLogin from '../../assets/image_login.png';

interface IFormInputs {
  email: string;
  password: string;
  remember: boolean;
}

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => data;

  return (
    <div className="login-app">
      <div className="image-container">
        <img className="image-login" src={imageLogin} alt="Imagen Login" />
      </div>

      <div className="form-container">
        <h1 className="header">Account Login</h1>
        <p className="text">
          {' '}
          If you are already a member you can login with <br />
          your email address and password.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="emailText" className="label-text">
            {' '}
            Email address
          </label>
          <input
            id="emailText"
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

          <button type="submit" className="button-submit">
            {' '}
            Register Account{' '}
          </button>
        </form>
        <span className="span-text">
          Dont have and account ?{' '}
          <span className="span-link">Sing up here</span>{' '}
        </span>
      </div>
    </div>
  );
}
