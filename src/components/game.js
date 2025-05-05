import Wall from './wall/wall';
import Dice from './dice/dice';
import { useState } from 'react';
import './game.css';
import Modal from 'react-modal';
import RollHistory from './rollHistory';

const Game = (props) => {
  const [bottles, setBottles] = useState(0);
  const [broken, setBroken] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [diceRolled, setDiceRolled] = useState(0);

  function closeModal(){
    setModalIsOpen(false)
  }
  function restart(){
    setModalIsOpen(false)
    const area = document.getElementById('diceArea')
    while (area.hasChildNodes())
    area.firstChild.remove()
    const bottleArea = document.getElementById('wallBottles')
    while (bottleArea.hasChildNodes())
    bottleArea.firstChild.remove()
    setBottles(0)
    setBroken(false)
  }
  function gameOver(){
    setBroken(true)
    setModalTitle('!! GAME OVER !!')
    setTimeout(()=>{
      setModalIsOpen(true)
    }, 3000)
    }
  function winner(){
    setModalTitle('CONGRATULATIONS! YOU WON!')
    setModalIsOpen(true)
  }
  function quit(){
    const area = document.getElementById('diceArea')
    while (area.hasChildNodes())
    area.firstChild.remove()
    const bottleArea = document.getElementById('wallBottles')
    while (bottleArea.hasChildNodes())
    bottleArea.firstChild.remove()
    setBottles(0)
    setBroken(false)
    const modal = document.getElementById("modalContent")
    modal.innerHTML=`<div class="endGame">
    <h1 class="endGameTitle">!! Thanks for playing !!</h1>
    <p class="endGameText">Before you go, if you've enjoyed playing this game, why not check out the rest of my portfolio on <a href="https://www.njtd.xyz" class="endGameLink">NJTD.XYZ</a></p>
    </div>`
  }

  return(
    <div className="gameDiv">
      <Wall bottles={bottles} winner={winner} broken={broken}/>
      <RollHistory diceRolled={diceRolled} bottles={bottles} />
      <Dice bottles={bottles} setBottles={setBottles} gameOver={gameOver} setDiceRolled={setDiceRolled} />
      <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      contentLabel="Game Over"
      >
        <div className="endGame" id="modalContent">
          <h1 className="endGameTitle">{modalTitle}</h1>
          <div className="endGameBtns">
            <button className="btn" onClick={()=>{restart()}}>Start Again?</button>
            <button className="btn" onClick={()=>{quit()}}>Quit</button>
          </div>
        </div> 
      </Modal>
    </div>
  )
};

export default Game;