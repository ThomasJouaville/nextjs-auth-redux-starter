import Layout from '../components/Layout';

const Index = () => (
  <Layout headTitle="Home" pageTitle="A React starter app :">
    <div className="row">
      <div className="col">
        <ul>
          <li>
            Based on <b>Next.js</b> framework
          </li>
          <li>
            Fully writed with <em>Functionnals Components</em> and <b>hooks</b>
          </li>
          <li>
            <b>Redux</b> ready
          </li>
          <li>
            <b>Auth system</b>, using <b>JWT</b> and server-side cookies
          </li>
          <li>
            <b>Protected routes</b> <em>High Order Component</em>
          </li>
          <li>
            <b>Styled Components</b> ready
          </li>
          <li>
            <b>Progress bar</b> for each page load
          </li>
          <li>
            <b>ESLint + Prettier</b> basic config
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default Index;
