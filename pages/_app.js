import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { ThemeProvider } from 'styled-components';
import ProgressBar from '../components/ProgressBar';

import { initStore } from '../redux';
import initialize from '../utils/initialize';

// HOC that help nextjs app to get connected with the store
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // Auth user based on cookie
    initialize(ctx);

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <ProgressBar
            options={{ easing: 'ease', speed: 300, showSpinner: false }}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(initStore, { debug: false })(MyApp);
