import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import doyou from "./assets/doyou.gif";
import yes from "./assets/yes.gif";

function App() {
  const [showYes, setShowYes] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '73%', left: '55%' });

  return (
    <>
      <div className='relative w-full h-screen flex flex-col items-center justify-center'>
      {!showYes && (
          <>
            <img src={doyou} alt="" className='items-center justify-center mx-auto mt-20'/>
            <h1 className='text-center text-3xl mt-2'>Do you love me?</h1>
            <div className='flex gap-8 items-center justify-center mt-4'>
                <button
                  className='py-2 px-6 border bg-blue-500 cursor-pointer'
                  onClick={() => setShowYes(true)}
                >
                  Yes
                </button>
                <button
                  className='py-2 px-6 border bg-red-500 cursor-pointer absolute transition-all duration-300'
                  style={{
                    position: 'absolute',
                    top: noButtonPosition.top,
                    left: noButtonPosition.left
                  }}
                  onMouseEnter={() => {
                    const randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
                    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100));
                    setNoButtonPosition({ top: `${randomTop}px`, left: `${randomLeft}px` });
                  }}
                  onTouchStart={() => {
                    const randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
                    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100));
                    setNoButtonPosition({ top: `${randomTop}px`, left: `${randomLeft}px` });
                  }}
                >
                  No
                </button>
            </div>
          </>
        )}
        {showYes && (
          <>
            <img src={yes} alt="Yes GIF" className='mx-auto mt-28' />
            <h1 className='text-center text-3xl mt-2'>I love you too...</h1>
          </>
        )}
      </div>
    </>
  )
}

export default App
