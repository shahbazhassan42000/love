import React, { useState, useEffect, useRef } from "react";
import question_gif from './assets/question.gif'
import answer_gif from './assets/answer.webp'
import dev_race_logo from './assets/dev_race.jpg'

function App() {

  const [yes_clicked, set_yes_clicked] = useState(false);
  const [main_text, set_main_text] = useState("Do You Love Me?");
  const [no_btn_position, set_no_btn_position] = useState({ top: '73.9%', left: '54%' });
  const no_btn_ref = useRef(null);
  const yes_btn_ref = useRef(null);

  useEffect(() => {
    const updateInitialPosition = () => {
      if (window.innerWidth < 768) { // Mobile view
        set_no_btn_position({ top: `${yes_btn_ref.current.offsetTop+179}px`, left: '54%' });
      } else { // Desktop view
        set_no_btn_position({ top: `${yes_btn_ref.current.offsetTop+179}px`, left: '54%' });
      }
    };

    updateInitialPosition();
    window.addEventListener('resize', updateInitialPosition);

    return () => {
      window.removeEventListener('resize', updateInitialPosition);
    };
  }, []);

  useEffect(() => {
    const handleEvent = () => {
      const btn_width = no_btn_ref.current.offsetWidth;
      const btn_height = no_btn_ref.current.offsetHeight;

      // Ensure random X stays within the window width
      const random_x = Math.floor(Math.random() * (window.innerWidth - btn_width));

      // Ensure random Y stays within the window height
      const random_y = Math.floor(Math.random() * (window.innerHeight - btn_height));

      // Set the new button position
      set_no_btn_position({ top: `${random_y}px`, left: `${random_x}px` });
    };

    if (window.innerWidth < 768) {
      no_btn_ref.current.addEventListener('click', handleEvent);
    } else {
      no_btn_ref.current.addEventListener('mouseenter', handleEvent);
    }

    return () => {
      if (window.innerWidth < 768) {
        no_btn_ref.current.removeEventListener('click', handleEvent);
      } else {
        no_btn_ref.current.removeEventListener('mouseenter', handleEvent);
      }
    };
  }, [no_btn_ref]);

  const on_yes_btn = () => {
    set_yes_clicked(true);
    set_main_text("I Love You Too! 😘");
  }

  return (
    <main className='flex flex-col justify-center items-center min-h-screen gap-10 -m-20 relative'>
      <h1 className="pink-font text-3xl md:text-5xl">{main_text}</h1>
      <img className="" src={yes_clicked ? answer_gif : question_gif} alt="question gif" />
      <div className="flex justify-center gap-20">
        <button
          ref={yes_btn_ref}
          className={`primary-btn mr-36 md:mr-64 ${yes_clicked ? 'hidden' : ''}`}
          onClick={on_yes_btn}
        >
          YES
        </button>
        <button 
          ref={no_btn_ref}
          className={`secondary-btn ${yes_clicked ? 'hidden' : ''}`} 
          style={{ position: 'absolute', ...no_btn_position }}
        >
          NO
        </button>
      </div>
      <a 
        href="https://www.linkedin.com/company/devrace"
        target="_blank"
        className={`flex items-center absolute bottom-0 logo gap-5 pr-5 ${yes_clicked ? '' : 'hidden'}`}
      >
        <img src={dev_race_logo} alt="https://dev-race.com/" />
        <p className="text-sm">Powered by <br/> <a href="https://dev-race.com/">Dev-Race</a></p>
      </a>
    </main>
  )
}

export default App