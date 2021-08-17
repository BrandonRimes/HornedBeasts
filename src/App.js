import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
