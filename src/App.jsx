import {
  Contact,
  Costumer,
  Footer,
  Header,
  Hero,
  Menu,
  Popular,
  Why,
} from './components/index';
import './App.css';
import 'bootstrap/dist/js/bootstrap.js';
import UpButton from './components/UpButton/UpButton';

const App = () => {
  return (
    <>
    <UpButton/>
      {/* HEADER */}
      <Header />

      {/* MAIN SECTIONS */}
      <main>
        <Hero id="home" />
        <Menu id="menu" />
        <Why id="why" />
        <Popular />
        <Costumer />
        <Contact id="contact" />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default App;
