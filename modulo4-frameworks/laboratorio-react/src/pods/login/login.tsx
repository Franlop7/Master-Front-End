import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === 'admin' && password === 'test') {
      navigate('/list');
    } else {
      alert('User / password not valid, psst... admin / test');
    }
  };

  return (
    <>
      <form onSubmit={handleNavigation}>
        <h2>Hello from login page</h2>

        <div className="login-container">
          <label>Username: </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};
