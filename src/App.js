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

  return (
    <div className="wrapper" style={{ cursor: `url('${process.env.PUBLIC_URL}/images/cursor.png'), auto `}}>
      {yesPressed ? (
        <>
        <img className="image" alt="us" src={`${process.env.PUBLIC_URL}/images/doge.png`} />
        <div className="text-4xl font-bold my-4">yayyyy</div>
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
              style={{ fontSize: yesButtonSize, cursor: `url('${process.env.PUBLIC_URL}/images/cursor.png'), auto ` }}
              onClick={() => setYesPressed(true)}
            >
              Tak
            </button>
            {noCount < 10 ?
            
            (<button
              style={{ cursor: `url('${process.env.PUBLIC_URL}/images/cursor.png'), auto `}}
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