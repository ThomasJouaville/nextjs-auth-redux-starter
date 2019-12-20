import Head from 'next/head';
import Header from './Header';

const Layout = props => {
  const { children, headTitle, pageTitle } = props;

  return (
    <>
      <Head>
        {headTitle ? <title>{headTitle}</title> : ''}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="container-lg mt-3">
        <Header />

        {pageTitle ? (
          <div className="row">
            <div className="col">
              <h2 className="mb-3">{pageTitle}</h2>
            </div>
          </div>
        ) : (
          ''
        )}

        {children}
      </div>
    </>
  );
};

export default Layout;
