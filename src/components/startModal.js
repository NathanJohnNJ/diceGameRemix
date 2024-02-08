import './game.css';
import logo from '../images/logo.gif';
import { useState } from 'react';
import Modal from 'react-modal';

const StartModal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    function closeModal(){
        setModalIsOpen(false)
        props.setShowButtons(true)
    }

    return(
        <div>
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
                <a href="https://www.njtd.xyz"><img src={logo} className="startLogo" alt="logo" /></a>
                    <h1 className="startModalTitle">The Green Bottles Dice Game</h1>
                <a href="https://www.njtd.xyz"><img src={logo} className="startLogo" alt="logo" /></a>
                </div>
                    <div className="startModalBtns">
                        <button className="btn" onClick={closeModal}>Start</button>
                    </div>
                </div> 
            </Modal>
        </div>
    )
}
export default StartModal;