import React, { useContext, useEffect, useCallback } from 'react';
import { CartContext } from '../../ context/cartContext';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../../scss/login.scss';

export default function Login() {
  const { loggedIn } = useContext(CartContext);

  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // connect to the back end //

      loggedIn(true);
      navigate(-1);
    },
  });

  return (
    <div className='login'>
      <div className='login__container'>
        <h4 className='login__heading'>LOG IN</h4>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className='login__input'
            fullWidth
            variant='outlined'
            id='email'
            name='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            variant='outlined'
            id='password'
            name='password'
            label='Password'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <button className='login__submit-btn' type='submit'>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
