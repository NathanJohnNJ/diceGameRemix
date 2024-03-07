import bottle1 from './images/1.png';
import bottle2 from './images/2.png';
import bottle3 from './images/3.png';
import wobble from './images/wobble.gif';
import smash from './images/smash.png';
import leftSmash from './images/leftSmash.png';
import rightSmash from './images/rightSmash.png';
import './wall.css';

const Wall = (props) => {
    let x = 0;
    const area = document.getElementById('wallBottles')
    if(props.bottles===0){
        addBottles()
    }else if(props.bottles>19){
        setTimeout(()=>{props.winner()},200)
    }else{
        while (area.hasChildNodes()){
        area.firstChild.remove()}
        addBottles()
    }
    if(props.broken===true){
        smashBottles()
    }
    function addBottles(){
        for(let i=0; i<props.bottles; i++){
            const sources = [bottle1, bottle2, bottle3, wobble]
            const num = Math.floor(Math.random()*4)
            const imgSrc = sources[num]
            x += 12
            const image = document.createElement("img")
            image.src=imgSrc
            image.alt="Bottle"
            image.className="bottle"
            image.style={transform:`translateX(${x})`}
            area.appendChild(image)
        }
    }
    function smashBottles(){
        for(let i=0; i<props.bottles; i++){
            const sources = [smash, leftSmash, rightSmash]
            const num = Math.floor(Math.random()*3)
            const imgSrc = sources[num]
            x += 50
            const image = document.createElement("img")
            image.src=imgSrc
            image.alt="Smashed bottle"
            image.className="smash"
            image.style={transform:`translateX(${x})`}
            area.firstChild.remove()
            area.appendChild(image)
        }
    }
    
    return(
        <div className="wallDiv">
            <div className="wall">
                <div className="wallBottles" id="wallBottles"></div>
            </div>
            <div className="wallTextDiv">
                <p className="wallText">{props.bottles} green bottles standing on the wall. And if 1 green bottle should accidentally fall...</p>
            </div>
        </div>
    )
};

export default Wall;