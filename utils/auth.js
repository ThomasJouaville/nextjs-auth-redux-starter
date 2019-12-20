import { Component } from 'react';
import redirectTo from './redirect';

// Protected route (use inside withProtectedAuth HOC)
const auth = ctx => {
  const { token } = ctx.store.getState().authentication;

  if (!token && ctx.pathname !== '/signin') {
    redirectTo('/signin', ctx);
  }
};

// Gets the display name of a JSX component for dev tools
const getDisplayName = Cpt => Cpt.displayName || Cpt.name || 'Component';

export const withProtectedAuth = WrappedComponent =>
  class extends Component {
    // eslint-disable-next-line react/static-property-placement
    static displayName = `withProtectedAuth(${getDisplayName(
      WrappedComponent,
    )})`;

    static async getInitialProps(ctx) {
      auth(ctx);

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
