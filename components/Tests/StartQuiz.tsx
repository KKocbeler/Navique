"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface PropsType {
    temporaryDifficulty: string;
    setTemporaryDifficulty: (value: string) => void;
    temporaryQLength: number;
    setTemporaryQLength: (value: number) => void;
    startQuiz: () => void;
} 
const StartQuiz: React.FC<PropsType> = ({temporaryDifficulty, setTemporaryDifficulty, temporaryQLength, setTemporaryQLength, startQuiz}) => {
    const difficulties = ["Easy", "Medium", "Hard"];
    const questionOptions = [10, 12, 16];

  return (
    <motion.div 
    className='w-11/12 sm:w-3/4 mx-auto'
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 0.4 }}
    >
        <div className='max-w-md mx-auto py-6 px-16 bg-stone-100 rounded-xl shadow-2xl text-center space-y-4'> 
        <h2 className='text-2xl font-bold text-stone-900'>Quiz Settings</h2>
        <div>
            <div className='font-bold mb-3'>Difficulty</div>
            <div className='flex justify-center items-center gap-2'>
                {difficulties.map((item, j) => (
                    <span 
                    key={j}
                    className={`cursor-pointer py-1 px-2 rounded transition ${item.toLowerCase() === temporaryDifficulty ? "bg-stone-700 text-white" : "hover:bg-stone-200"}`}
                    onClick={() => setTemporaryDifficulty(item.toLowerCase())}
                    >
                    {item}
                    </span>
                ))}
            </div>
        </div>
        <div>
            <div className='font-bold mb-3'>How Many Questions?</div>
            <div className='flex items-center justify-center gap-2'>
                {questionOptions.map((item, j) => (
                    <span 
                    key={j}
                    className={`cursor-pointer py-1 px-2 rounded transition ${item === temporaryQLength ? "bg-stone-700 text-white" : "hover:bg-stone-200"}`}
                    onClick={() => setTemporaryQLength(item)}
                    >
                    {item}
                    </span>
                ))}
            </div>
        </div>
        <div className="flex justify-center gap-4 mt-8">
            <button 
            className="bg-stone-800 hover:bg-stone-700 text-white font-medium py-2 px-4 rounded" 
            onClick={startQuiz}
            >
            Start Quiz
            </button>
        </div>
        </div>
    </motion.div>
  )
}

export default StartQuiz