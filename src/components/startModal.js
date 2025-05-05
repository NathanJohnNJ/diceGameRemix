import './game.css';
import logo from '../images/logo.animated.svg';
import Modal from 'react-modal';
import { useState } from 'react';

const StartModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function closeModal(){
      setModalIsOpen(false)
  }

  return(
    <Modal
    isOpen={modalIsOpen}
    ariaHideApp={false}
    onRequestClose={closeModal}
    contentLabel="Start Modal"
    className="startModalModal"
    >
      <div className="startModal">
      <div className="welcome" id="welcome">
        <h1>NJ Codes Proudly Presents...</h1>
      </div>
      <div className="startModalRow">
      <a href="https://www.njtd.xyz"><img src={logo} className="startLogo rainbowBG" alt="logo" /></a>
        <h1 className="startModalTitle">The Green Bottles Dice Game</h1>
      <a href="https://www.njtd.xyz"><img src={logo} className="startLogo rainbowBG" alt="logo" /></a>
      </div>
        <div className="startModalBtns">
          <button className="btn" id="startBtn" onClick={closeModal}>Start</button>
        </div>
      </div> 
    </Modal>
  )
}
export default StartModal;