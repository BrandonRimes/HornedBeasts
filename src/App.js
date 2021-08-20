import {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Filter from './filter';

function App(props) {
  const [xform, setXform] = useState(0);

  window.addEventListener('scroll', () => {
    setXform(window.scrollY);
  });

  const [numHorn, setNumHorn] = useState(0);

  const handleChange = (e) => {
    setNumHorn(e.target.value);
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo"/>
      <Header xform={xform}/>
      <Filter handleChange={handleChange}/>
      <Main numHorn={numHorn}/>
      <Footer />
    </div>
  );
}

export default App;
