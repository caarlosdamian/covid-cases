/* eslint-disable jsx-a11y/label-has-associated-control */
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import { IFormInputs } from '../../interfaces';
import { useGetAuthTokenMutation } from '../../redux/api';
import { login } from '../../redux/loginSlice';
import img from '../../assets/image_login.png';
import './Login.scss';

export const Login = () => {
  const [getAuthToken] = useGetAuthTokenMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t } = useTranslation('common');

  const onSubmit: SubmitHandler<IFormInputs> = async (user) => {
    try {
      const post:
        | { data: string }
        | { error: FetchBaseQueryError | SerializedError } = await getAuthToken(
        user
      );
      dispatch(login(post));
      navigate('/', { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-app">
      <div className="image-container">
        <img src={img} alt="img" className="login-img" />
      </div>

      <div className="form-container">
        <h1 className="header">{t('pages.login.title')}</h1>
        <p className="text">
          {t('pages.login.subtitle-1')} <br /> {t('pages.login.subtitle-2')}
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          data-testid="loginForm"
          className="form-wrapper"
        >
          <div className="input-container">
            <label htmlFor="emailText" className="label-text">
              {t('pages.login.form.email.label')}
            </label>
            <input
              id="emailText"
              data-testid="emailTest"
              className={`input-text ${errors.email && 'error'}`}
              type="email"
              {...register('email', { required: true })}
            />

            {errors.email && (
              <span className="span-error">
                {t('pages.login.form.email.error')}
              </span>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="passwordText" className="label-text">
              {t('pages.login.form.password.label')}
            </label>
            <input
              id="passwordText"
              data-testid="passwordTest"
              className={`input-text ${errors.password && 'error'}`}
              type="password"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className="span-error">
                {t('pages.login.form.password.error')}
              </span>
            )}
          </div>

          <div className="remember-container">
            <input
              id="checkboxRemember"
              className="checkbox-input"
              type="checkbox"
              {...register('remember')}
            />
            <label htmlFor="checkboxRemember" className="label-checkbox">
              {t('pages.login.form.checkbox')}
            </label>
          </div>

          <button
            type="submit"
            className="button-submit"
            data-testid="submitButton"
          >
            {t('pages.login.form.submit')}
          </button>
        </form>
        <span className="span-text">
          {t('pages.login.signup.text')}
          <span className="span-link">{t('pages.login.signup.link')}</span>
        </span>
      </div>
    </div>
  );
};
