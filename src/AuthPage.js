import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { signInUserFunction, signUpUserFunction } from './services/fetch-utils';

export default function AuthPage() {
  const [signInUser, setSignInUser] = useState({ email: '', password: '' });
  const [signUpUser, setSignUpUser] = useState({ email: '', password: '' });
  const history = useHistory();

  async function handleSignUp(e) {
    e.preventDefault();
    await signUpUserFunction(signUpUser);
    await signInUserFunction(signUpUser);
    history.push('/cats');
  }

  async function handleSignIn(e) {
    e.preventDefault();
    await signInUserFunction(signInUser);
    history.push('/cats');
  }
  return (
    <div>
      <div className="sign-up">
        <form onSubmit={handleSignUp}>
          <h4>Sign Up</h4>
          <label>
            email
            <input
              className="sign-up-input"
              value={signUpUser}
              onChange={(e) => setSignUpUser({ ...signUpUser, email: e.target.value })}
            />
          </label>
          <label>
            password
            <input
              className="sign-up-input"
              value={signUpUser}
              onChange={(e) => setSignUpUser({ ...signUpUser, password: e.target.value })}
            />
          </label>
          <button className="sign-up-button">Sign Up</button>
        </form>
        <form onSubmit={handleSignIn}>
          <h4>Sign In</h4>
          <label>
            email
            <input
              className="sign-in-input"
              value={signInUser}
              onChange={(e) => setSignInUser({ ...signInUser, email: e.target.value })}
            />
          </label>
          <label>
            password
            <input
              className="sign-in-input"
              value={signInUser}
              onChange={(e) => setSignInUser({ ...signInUser, password: e.target.value })}
            />
          </label>
          <button className="sign-in-button">Sign In</button>
        </form>
      </div>
    </div>
  );
}
