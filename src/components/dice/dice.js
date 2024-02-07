import dice1 from './images/dice1.gif';
import dice2 from './images/dice2.gif';
import dice3 from './images/dice3.gif';
import dice4 from './images/dice4.gif';
import dice5 from './images/dice5.gif';
import dice6 from './images/dice6.gif';
import './dice.css';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

const Dice = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function roll(){
        const area = document.getElementById('diceArea')
        const die = [dice1, dice2, dice3, dice4, dice5, dice6]
        const num = Math.floor(Math.random()*6)
        const dice = die[num]
        const image = document.createElement("img")
        image.src=dice+"?a="+Math.random()
        image.alt="Dice"
        image.className="dice"
        if(props.bottles > 0){
            while (area.hasChildNodes())
            area.firstChild.remove()
            area.appendChild(image)
        }else{
            area.appendChild(image)
        }
        if(num===0){
            setTimeout(()=>{props.gameOver()},4000)
        }else{
            setTimeout(()=>{props.setBottles(props.bottles+num+1)},4000)
        }
    }
    useEffect(()=>{
        console.log(props.bottles)
    }, [props.bottles])
    
    function reset(){
        const area = document.getElementById('diceArea')
        while (area.hasChildNodes())
        area.firstChild.remove()
        const bottleArea = document.getElementById('wallBottles')
        while (bottleArea.hasChildNodes())
        bottleArea.firstChild.remove()
        props.setBottles(0)
    }
    function openModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }
    function rules(){
        openModal()
    }
    return(
        <div className="diceDiv">
            <div className="diceArea" id="diceArea"></div>
            <div className="diceBtns">
                <button className="btn" onClick={()=>{roll()}}>Roll Dice</button>
                <button className="btn" onClick={()=>{reset()}}>Reset</button>
                <button className="btn" onClick={rules}>How To Play</button>
                <Modal
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    onRequestClose={closeModal}
                    contentLabel="Rules"
                    className="rulesModal"
                >
                    <div className="rules" id="rules">
                        <button value="X" className="xBtn" onClick={closeModal}>X</button>
                        <h1 className="rulesTitle">How to play:</h1>
                        <ul className="rulesList">
                            <li>Click the 'Roll Dice' button to roll the dice</li>
                            <li>Your score will be represented by how many green bottles are standing on the wall</li>
                            <li>Keep clicking, rolling, and stacking those bottles</li>
                            <li>If you roll a 1, 1 green bottle will fall, causing all the others to smash and you will have to start again</li>
                            <li>You can also hit the 'Reset' button at any time to start again</li>
                            <li>Once you have reached 20 bottles...<p>YOU'RE A WINNER, BABY!</p></li>
                        </ul>
                    </div> 
                </Modal>
            </div>

        </div>
    )
};

export default Dice;