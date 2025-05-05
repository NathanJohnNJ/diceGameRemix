import './game.css';
import logo from '../images/logo.animated.svg';

function Header() {
  return(
    <header className="App-header">
      <a href="https://www.njtd.xyz" target="_blank" rel="noreferrer"><img src={logo} className="headerLogo rainbowBG" alt="logo" /></a>
      <div className="welcome" id="welcome">
        <h1>NJ Codes Proudly Presents...</h1>
      </div>
      <div className="title" id="title">
        <h2 id="titleText">The Green Bottles Dice Game</h2>
      </div>
    </header>
  )
}

export default Header;