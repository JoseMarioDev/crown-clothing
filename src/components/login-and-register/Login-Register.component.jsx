import React from 'react';

import Login from '../Login/Login.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './Login-Register.styles.scss';

const LoginAndRegister = () => (
  <div className='sign-in-and-sign-up'>
    <Login />
    <SignUp />
  </div>
);

export default LoginAndRegister;
