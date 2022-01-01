import Ciseau from './images/cisseaux.png';
import feuille from './images/feuille.png';
import pierre from './images/pierre1.png';
import './App.css';
import { useState } from "react";


function App() {

  function getRandomInt(max){
    return Math.floor(Math.random()*max)
  }
  const [gamerChoice1,setgamerChoice1]=useState(-1)
  const [pcChoice1,setpcChoice1]=useState(-1)
 var gamerChoice;
 var pcChoice;
  const [scoreJoueur,setscoreJoueur]=useState(0)
  const [scorePc,setscorePc]=useState(0)
  const [resultat,setresultat]=useState("")
 
 
    
    
     
  
   

  
  
  return (
    <div className="App">
      <header className="App-header">
        <div>Jeu</div>
        <div>Pierre</div>
        <div>Feuille</div>
        <div>Ciseau</div>
      </header>
      <div className='jeucontainer'>
      <div className='choixjoueur'>
          <button onClick={()=>{gamerChoice=0;pcChoice=getRandomInt(3); setgamerChoice1(gamerChoice); setpcChoice1(pcChoice);if (gamerChoice===pcChoice)
        setresultat("egalité");
    else if ((gamerChoice===0 && pcChoice===2) || (gamerChoice===1 && pcChoice===0) || (gamerChoice===2 && pcChoice===1))
      {
      setresultat("Le joueur gagne");
      setscoreJoueur(scoreJoueur+1);

      }
    else
    {
      setresultat("Le pc gagne");
      setscorePc(scorePc+1);
    }}}>Pierre</button>
          <button onClick={()=>{gamerChoice=1;pcChoice=getRandomInt(3);setgamerChoice1(gamerChoice); setpcChoice1(pcChoice); if (gamerChoice===pcChoice)
        setresultat("egalité");
    else if ((gamerChoice===0 && pcChoice===2) || (gamerChoice===1 && pcChoice===0) || (gamerChoice===2 && pcChoice===1))
      {
      setresultat("Le joueur gagne");
      setscoreJoueur(scoreJoueur+1);

      }
    else
    {
      setresultat("Le pc gagne");
      setscorePc(scorePc+1);
    }}}>Feuille</button>

          <button onClick={()=>{gamerChoice=2;pcChoice=getRandomInt(3); setgamerChoice1(gamerChoice); setpcChoice1(pcChoice);
          if (gamerChoice===pcChoice)
               setresultat("egalité");
          else if ((gamerChoice===0 && pcChoice===2) || (gamerChoice===1 && pcChoice===0) || (gamerChoice===2 && pcChoice===1))
              {
                setresultat("Le joueur gagne");
                setscoreJoueur(scoreJoueur+1);

              }
          else
              {
                setresultat("Le pc gagne");
                setscorePc(scorePc+1);
              }}}>Ciseau</button>

        </div>

        <div className='affichageresultat'>

            <div className='joueur'>
            <div>{scoreJoueur}</div>
            <div >Joueur</div>
            <div className='imagechoix'><img className='' src={(gamerChoice1===0)? pierre:(gamerChoice1===1)? feuille:Ciseau } alt="Ciseau" /></div>
            


          </div>
          <div className='ordinateur'>

            <div>{scorePc}</div>
            <div >Ordinateur</div>
            <div className='imagechoix'><img className='' src={(pcChoice1===0)? pierre:(pcChoice1===1)? feuille:Ciseau } alt="Ciseau" /></div>

          </div>

        </div>
       
        <div className='resultat'>
         {resultat}

        </div>
        
      </div>
    </div>
  );
}

export default App;
