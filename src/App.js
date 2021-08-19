import {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';

function App(props) {
  const [xform, setXform] = useState(0);

  window.addEventListener('scroll', () => {
    setXform(window.scrollY);
  });

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo"/>
      <Header xform={xform}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
