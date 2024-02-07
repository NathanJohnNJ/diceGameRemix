import bottle1 from './images/1.png';
import bottle2 from './images/2.png';
import bottle3 from './images/3.png';
import wobble from './images/wobble.gif';
import './wall.css';

const Wall = (props) => {
    //receives bottles and needs to display given number of bottles using random image from those imported. If number is higher than 20 needs to display broken bottles instead.
    //Also needs to display text showing number of bottles
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