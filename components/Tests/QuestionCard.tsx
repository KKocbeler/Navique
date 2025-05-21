"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DataProps } from '@/types/dataType'

interface PropsType {
    data: DataProps[];
    questionIndex: number;
    quizTitle: any;
    nextQuestion: () => void;
    chosenAnswer: string | null;
    answerCheck: (value: number, value2:string) => void;
}

const QuestionCard: React.FC<PropsType> = ({data, questionIndex, quizTitle, chosenAnswer, nextQuestion, answerCheck}) => {
    const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([])
    const renderOptions = () => {
        return shuffledAnswers.map((answer, index) => {
            let bgClass = "bg-stone-200 text-stone-700";

            if (chosenAnswer) {
                if (answer === data[questionIndex].correct_answer) {
                    bgClass = "bg-green-600 text-white";
                } else if (answer === chosenAnswer) {
                    bgClass = "bg-red-500 text-white";
                }
            }
            return (
                <li
                    key={index}
                    className={`ps-2 p-1 rounded transition cursor-pointer ${bgClass}`}
                    onClick={() => !chosenAnswer && answerCheck(questionIndex, answer)}
                >
                    {answer}
                </li>
            );
        });
    };

    useEffect(() => {
        if(!data[questionIndex]) return;

        const answers = [
            ...data[questionIndex].incorrect_answers,
            data[questionIndex].correct_answer
        ];

        const shuffeld = answers.sort(() => Math.random() - 0.5);
        setShuffledAnswers(shuffeld)
    }, [data, questionIndex])
  return (
    <motion.div 
        className="flex flex-col px-6 py-6 rounded-xl w-[800px] min-h-[385px] bg-stone-100 shadow-lg space-y-4 transition-all duration-300 relative"
        initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.4 }}
    >
        <div className='text-2xl sm:text-3xl font-bold text-stone-800'>{quizTitle} Quiz</div>
        <div className="flex gap-2 sm:text-lg font-medium text-stone-700">
            <p>
                <span>{`${questionIndex + 1} - `}</span>
                {data[questionIndex].question}
            </p>
        </div>
        <ul className="grid gap-3">
            {renderOptions()}
        </ul>
        <div className="flex items-center justify-between mt-auto text-sm text-stone-600">
            <div className='font-bold text-stone-700'>{`${questionIndex + 1} / ${data.length}`}</div>
            <button
            type="button"
            className={`px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-100 font-medium transition ${chosenAnswer ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-95"}`}
            onClick={nextQuestion}
            >
            Next
            </button>
        </div>
    </motion.div>
  )
}

export default QuestionCard