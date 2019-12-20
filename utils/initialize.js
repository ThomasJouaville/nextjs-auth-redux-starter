import actions from '../redux/actions';
import { getCookie } from './cookie';
import redirectTo from './redirect';

// Checks if the page is being loaded on the server, and if so, get auth token from the cookie
// Redirect the user to homepage if authenticated and visiting signin/signup pages
const initialize = ctx => {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      const token = getCookie('token', ctx.req);
      ctx.store.dispatch(actions.reauthenticate(token));

      if (
        (ctx.pathname === '/signin' || ctx.pathname === '/signup') &&
        ctx.pathname !== '/'
      ) {
        redirectTo('/', ctx);
      }
    }
  } else {
    const { token } = ctx.store.getState().authentication;

    if (
      token &&
      (ctx.pathname === '/signin' || ctx.pathname === '/signup') &&
      ctx.pathname !== '/'
    ) {
      redirectTo('/', ctx);
    }
  }
};

export default initialize;
