import { useSelector } from 'react-redux';
import ActiveLink from './ActiveLink';

const Nav = () => {
  const { token } = useSelector(state => state.authentication);

  return (
    <nav className="mb-4">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <ActiveLink href="/">
            <a className="nav-link">Home</a>
          </ActiveLink>
        </li>

        {token ? (
          <li className="nav-item">
            <ActiveLink href="/dashboard">
              <a className="nav-link">Dashboard</a>
            </ActiveLink>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <ActiveLink href="/signup">
                <a className="nav-link">Sign up</a>
              </ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink href="/signin">
                <a className="nav-link">Sign in</a>
              </ActiveLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
