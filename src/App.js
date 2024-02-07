import logo from './images/logo.gif';
import './App.css';
import Game from './components/game';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a href="https://www.njtd.xyz"><img src={logo} className="App-logo" alt="logo" /></a>
        <div className="welcome" id="welcome">
          <h1>NJ Codes Proudly Presents...</h1>
        </div>
        <div className="title" id="title">
          <h2 id="titleText">The Green Bottles Dice Game</h2>
        </div>
      </header>
      <div className="AppGame">
        <Game/>
      </div>
      <div className="AppFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
