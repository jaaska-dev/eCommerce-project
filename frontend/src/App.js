import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
//INDIVIDUAL UI-COMPONENT IMPORTS
import Header from './components/Header';
import Footer from './components/Footer';
//SCREEN IMPORTS
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className='py-4'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
