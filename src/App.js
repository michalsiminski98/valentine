import { useState } from "react";
import './App.css';

const windowWidth = window.innerWidth;
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
      "X",
      "nie i chu",
      "Wykurwiaj",
      "smierdzisz",
      "NO NIEE",
      "Nop",
      "Zle klikasz",
      "....",
      "Musisz byc bardzo zdesperowana",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getImage = () => {
   return noCount < 6 ? 
     `images/image${noCount}.jpg` : `images/image${5}.jpg`
  }

  return (
    <div className="wrapper">
      {yesPressed ? (
        <>
        <img className="image" src={"./images/cursor.png"} />
        <div className="text-4xl font-bold my-4">yayyyy</div>
        <img className="gif" src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        </>
      ) : (
        <>
        <div className="wrapper-images">     
        {windowWidth > 768 && (
        <img className="image" src={getImage()} />)}
          <img className="gif" src={"https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"} />
        <img className="image" src={getImage()} />
        </div>
          <h1>Bonżur, czy zostaniesz moją walentynką?</h1>
          <div>
            <button
              className='button'
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Tak
            </button>
            <button
              className='button'
              onClick={handleNoClick}
            >
              {noCount === 0 ? "Nie" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}