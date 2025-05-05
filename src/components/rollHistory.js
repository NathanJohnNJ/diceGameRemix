import dice1 from './dice/images/1.png';
import dice2 from './dice/images/2.png';
import dice3 from './dice/images/3.png';
import dice4 from './dice/images/4.png';
import dice5 from './dice/images/5.png';
import dice6 from './dice/images/6.png';
import './game.css';

export default function RollHistory(props){
  const { bottles, diceRolled } = props;
  const tbody=document.getElementById("tbody");
  function addToChart(){
    const newCell = document.createElement('td');
    newCell.style.backgroundImage = `dice${diceRolled}`;
    newCell.style.width='20px';
    newCell.style.height='20px';
  }


  return (
    <table>
      <tbody id="tbody">
      </tbody>
    </table>
  )
}