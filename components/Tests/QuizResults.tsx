"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface PropsType {
    correctCount: number;
    qLength: number;
    restartQuiz: () => void;
}
const QuizResults: React.FC<PropsType> = ({correctCount, qLength, restartQuiz}) => {
    
    const resultEvaluation = () => {
        const percentage = (100 / qLength) * correctCount
        let message = "";
        let resultBg = "";
        if (percentage === 100) {
            message = "🎯 Perfect score! Are you even human?! 😎";
            resultBg = "#3A7D44"
        } else if (percentage >= 80) {
            message = "🔥 Nicely done! You're on fire!";
        } else if (percentage >= 60) {
            message = "😏 Not bad! But I know you can do better!";
        } else if (percentage >= 40) {
            message = "😅 Ehh... Close enough. Kinda.";
        } else {
            message = "💀 Well... at least you tried. Right?";
            resultBg = "#E50914"
        }

        return {message, resultBg};
    }

    const { message: resultMessage, resultBg} = resultEvaluation();

  return (
    <motion.div 
    className='flex justify-center'
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    >
        <div className="max-w-md mx-auto py-6 px-12 bg-slate-100 dark:bg-slate-950 rounded-xl shadow-md text-center space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">🎉 Quiz Results</h2>
            <div className="text-lg text-slate-900 dark:text-slate-100">
                You answered <span className="font-semibold text-green-600">{correctCount}</span> out of <span>{qLength}</span> questions correctly
                <br />
                <span className="text-sm text-slate-600 dark:text-slate-100">({Math.round((correctCount / qLength) * 100)}%)</span>
            </div>
            <motion.div
                className='flex items-center justify-center rounded font-semibold'
                initial={{ opacity: 0, scale: 0.9, minHeight: 0}}
                animate={{ opacity: 1, scale: 1, minHeight: 50, color: resultBg}}
                transition={{ duration: 0.4, delay: 1.5 }}
            >
                {resultMessage}
            </motion.div>
            <div className="flex justify-center gap-4 mt-4">
                <button type='button' className="bg-slate-200 hover:bg-slate-100 text-slate-800 font-medium py-2 px-4 rounded" onClick={restartQuiz}>Restart Quiz</button>
                <Link href="/" className="border border-slate-700 bg-slate-700 hover:bg-slate-600 text-gray-50 font-medium py-2 px-4 rounded">Home</Link>
            </div>
        </div>
    </motion.div>
  )
}

export default QuizResults