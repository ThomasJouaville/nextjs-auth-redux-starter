import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../redux/actions';
import Layout from '../components/Layout';

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.register({ name, email, password }));
  };

  return (
    <Layout headTitle="Sign Up" pageTitle="Sign Up">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your email address</label>
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
              <label htmlFor="password">Choose a password</label>
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
              Register
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
