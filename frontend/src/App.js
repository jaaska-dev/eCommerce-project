import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className='py-4'>
        <Container>
          <h1>Welcome to Wall Street</h1>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
