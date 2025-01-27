import {Contact, Costumer, Footer, Header, Hero, Menu, Popular, Why} from './components/index';
import './App.css' 
import 'bootstrap/dist/js/bootstrap.js'
const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Menu/>
      <Why/>
      <Popular/>
      <Costumer/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App