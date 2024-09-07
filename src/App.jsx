import React, { useState } from "react";
import question_gif from './assets/question.gif'
import answer_gif from './assets/answer.webp'

function App() {

  const [yes_clicked, set_yes_clicked] = useState(false);


  // const on_cancel_btn =()

  return (
    <main className='flex flex-col justify-center items-center min-h-screen gap-10 -m-20'>
      <h1 className="pink-font text-5xl">Do You Love Me?</h1>
      <img className="" src={question_gif} alt="question gif" />
      <div className="flex justify-center gap-20">
          <button className="primary-btn">YES</button>
          <button className="secondary-btn">NO</button>
      </div>
    </main>
  )
}

export default App
