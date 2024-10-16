import React, { useRef, useState } from 'react'
import { data } from '../../assets/data';
const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let option_array = [option1, option2, option3, option4];
  const checkAns = (e, ans) => {
    if (lock === false) {

      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      }
      else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  }

  const next = () => {
    if (lock === true) {
      if (index == data.length - 1) {
        setResult(true);
        return 0;
      }
      option_array.forEach(option => {
        option.current.classList.remove('correct', 'wrong');
      });
      if (index < data.length - 1)
        setIndex(index + 1);
      setQuestion(data[index + 1]);
      setLock(false);
    }
    else {
      alert(`Quiz Completed Your Score is ${score} out of ${data.length}`);
    }
  }

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  }
  return (
    <div className='border border-black my-10 h-auto md:mx-auto md:w-1/2 md:p-4'>
      {result ? <div className='flex flex-col items-center'>
        <p className='text-3xl font-bold m-2'>Your Score {score} out of {data.length}</p>
        <button onClick = {reset} className= 'bg-blue-600 px-4 py-2 m-2 rounded-lg text-xl tracking-wide font-semibold text-white cursor-pointer hover:text-blue-600 hover:bg-white hover:border hover:border-blue-500'>Reset</button>
      </div> : <div>
        <h2 className='mx-4 font-normal text-2xl h-auto'>{index + 1}. {question.question}</h2>
        <ul className='mt-10 flex flex-col gap-2'>
          <li ref={option1} onClick={(e) => { checkAns(e, 1) }} className='border border-blue-500 mx-4 py-2 px-2 text-2xl rounded-lg'>{question.option1}</li>
          <li ref={option2} onClick={(e) => { checkAns(e, 2) }} className='border border-blue-500 mx-4 py-2 px-2 text-2xl rounded-lg'>{question.option2}</li>
          <li ref={option3} onClick={(e) => { checkAns(e, 3) }} className='border border-blue-500 mx-4 py-2 px-2 text-2xl rounded-lg'>{question.option3}</li>
          <li ref={option4} onClick={(e) => { checkAns(e, 4) }} className='border border-blue-500 mx-4 py-2 px-2 text-2xl rounded-lg'>{question.option4}</li>


        </ul>
        <div className='flex flex-col justify-center items-center my-8'>
          <button onClick={next} className='bg-blue-600 px-4 py-2 m-2 rounded-lg text-xl tracking-wide font-semibold text-white cursor-pointer hover:text-blue-600 hover:bg-white hover:border hover:border-blue-500'>Next</button>
          <p className='text-sm font-semibold'>{index + 1} of {data.length} Questions</p>

        </div>
      </div>}
      

    </div>
  )
}

export default Quiz