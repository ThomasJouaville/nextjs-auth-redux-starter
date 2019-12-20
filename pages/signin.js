import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../redux/actions';
import Layout from '../components/Layout';

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.login({ email, password }));
  };

  return (
    <Layout headTitle="Sign In" pageTitle="Sign In">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                className="form-control"
                id="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                id="password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
