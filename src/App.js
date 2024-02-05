import { useEffect, useState } from "react";
import './App.css';
import confetti from "canvas-confetti";

const windowWidth = window.innerWidth;

const heart = confetti.shapeFromPath({
  path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
  matrix: [0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666, -5.533333333333333]
});

const canvasSettings = {
  scalar: 4,
  spread: 180,
  particleCount: 260,
  origin: { y: -0.1 },
  startVelocity: -35
};


export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nie",
      "Rozumiesz mnie?",
      "NieNieNieNieNieNie",
      "smierdzisz",
      "NO NIEE",
      "Zle klikasz jak cos",
      "Musisz byc bardzo zdesperowana",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getImage = () => {
    return `${process.env.PUBLIC_URL}/images/image${noCount < 6 ? noCount : 5}.jpg`;
  }

  useEffect(() => {
    if(yesPressed){
      confetti({
        ...canvasSettings,
        shapes: [heart],
        colors: ['#f93963', '#a10864', '#ee0b93']
      });
    }

  },[yesPressed])

  return (
    <div className="wrapper" style={{ cursor: `url(${process.env.PUBLIC_URL}/images/cursor.png), auto `}}>
      {yesPressed ? (
        <>
        <img className="image" alt="us" src={`${process.env.PUBLIC_URL}/images/doge.png`} />
        <h1>To do zobaczenia ; )</h1>
        <img className="gif" alt="gif"src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        </>
      ) : (
        <>
        <div className="wrapper-images">     
        {windowWidth > 768 && (
        <img className="image"alt="us" src={getImage()} />)}
          <img className="gif"alt="gif" src={"https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"} />
        <img className="image"alt="us" src={getImage()} />
        </div>
          <h1>Bonżur, czy zostaniesz moją walentynką?</h1>
          <div className="wrapper-images">
            <button
              className='button'
              style={{ fontSize: yesButtonSize, cursor: `url(${process.env.PUBLIC_URL}/images/cursor.png), auto ` }}
              onClick={() => setYesPressed(true)}
            >
              Tak
            </button>
            {noCount < 10 ?
            
            (<button
              style={{ cursor: `url(${process.env.PUBLIC_URL}/images/cursor.png), auto `}}
              className='button'
              onClick={handleNoClick}
            >
              {noCount === 0 ? "Nie" : getNoButtonText()}
            </button>):( <></>)}
          </div> 
        </>
      )}
    </div>
  );
}