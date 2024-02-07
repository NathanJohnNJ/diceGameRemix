import Wall from './wall/wall';
import Dice from './dice/dice';
import { useState } from 'react';
import './game.css';
import Modal from 'react-modal';

const Game = () => {
    const [bottles, setBottles] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('')
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
    }
    function gameOver(){
        setModalTitle('!! GAME OVER !!')
        setModalIsOpen(true)
    }
    function winner(){
        setModalTitle('CONGRATULATIONS! YOU WON!')
        setModalIsOpen(true)
    }
    function quit(){
        const modal = document.getElementById("modalContent")
        modal.innerHTML=`
        <div>
        <h1 className="endGameTitle>!! Thanks for playing !!</h1>
        <p className="endGameText">Before you go, if you've enjoyed playing this game, why not check out the rest of my portfolio on <a href="https://www.njtd.xyz" className="link">NJTD.XYZ</a>.</p>
        </div>`
    }

    return(
        <div className="gameDiv">
            <div className="gameWall">
                <Wall bottles={bottles} winner={winner}/>
            </div>
            <div className="gameDice">
                <Dice bottles={bottles} setBottles={setBottles} gameOver={gameOver} />
            </div>
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