import Header from './components/header';
import './App.css';
import Game from './components/game';
import Footer from './components/footer';
import StartModal from './components/startModal';

function App() {
  return (
    <div className="App">
      <StartModal />
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
