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
        <div className='max-w-md mx-auto py-6 px-16 bg-slate-100 dark:bg-slate-950 text-slate-950 dark:text-slate-50 rounded-xl shadow-2xl text-center space-y-4'> 
        <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-50'>Quiz Settings</h2>
        <div>
            <div className='font-bold mb-3'>Difficulty</div>
            <div className='flex justify-center items-center gap-2'>
                {difficulties.map((item, j) => (
                    <button
                    type='button'
                    key={j}
                    className={`cursor-pointer py-1 px-2 rounded transition ${item.toLowerCase() === temporaryDifficulty ? "bg-slate-700 text-white" : "hover:bg-slate-200 dark:hover:bg-slate-600"}`}
                    onClick={() => setTemporaryDifficulty(item.toLowerCase())}
                    aria-pressed={item.toLowerCase() === temporaryDifficulty}
                    >
                    {item}
                    </button>
                ))}
            </div>
        </div>
        <div>
            <div className='font-bold mb-3'>How Many Questions?</div>
            <div className='flex items-center justify-center gap-2'>
                {questionOptions.map((item, j) => (
                    <button 
                    key={j}
                    className={`cursor-pointer py-1 px-2 rounded transition ${item === temporaryQLength ? "bg-slate-700 text-white" : "hover:bg-slate-200 dark:hover:bg-slate-600"}`}
                    onClick={() => setTemporaryQLength(item)}
                    aria-pressed={item === temporaryQLength}
                    >
                    {item}
                    </button>
                ))}
            </div>
        </div>
        <div className="flex justify-center gap-4 mt-8">
            <button
            type='button'
            className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded" 
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