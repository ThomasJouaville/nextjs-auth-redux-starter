import { useSelector, useDispatch } from 'react-redux';
import actions from '../redux/actions';
import { withProtectedAuth } from '../utils/auth';
import Layout from '../components/Layout';

const Dashboard = () => {
  // Call action reducer
  const dispatch = useDispatch();

  // Get data from the store
  const { token } = useSelector(state => state.authentication);

  return (
    <Layout headTitle="Dashboard" pageTitle="Welcome to your dashboard!">
      <p>
        Your token is: <code>{token}</code>
      </p>

      <p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => dispatch(actions.logout())}
        >
          Log out
        </button>
      </p>
    </Layout>
  );
};

export default withProtectedAuth(Dashboard);
