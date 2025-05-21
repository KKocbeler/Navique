"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StartQuiz from '@/components/Tests/StartQuiz';
import Loading from '@/components/Loading/Loading';
import QuizResults from '@/components/Tests/QuizResults';
import QuestionCard from '@/components/Tests/QuestionCard';
import { DataProps } from '@/types/dataType';

interface PropsType {
    category: string
}

const categories = [
    { category: "animals", id: 27 },
    { category: "history", id: 23 },
    { category: "art", id: 25 },
    { category: "sports", id: 21 },
    { category: "geography", id: 22 },
    { category: "vehicles", id: 28 },
    { category: "mythology", id: 20 },
    { category: "celebrities", id: 26 },
    { category: "film", id: 11},
    { category: "books", id: 10},
    { category: "anime", id: 31},
    { category: "cartoon", id: 32},
    { category: "comics", id: 29}, 
    { category: "video-games", id: 15},
    { category: "board-games", id: 16},
    { category: "music", id: 12}
];

const TestsPage: React.FC<PropsType>= ({category}) => {
    const [data, setData] = useState<DataProps[]>([]);
    const [questionIndex, setQuestionIndex] = useState<number>(0)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
    const [chosenAnswer, setChosenAnswer] = useState<string | null>(null)
    const [correctCount, setCorrectCount] = useState<number>(0)
    const [quizSettings, setQuizsettings] = useState(true)
    const [difficulty, setDifficulty] = useState<string>()
    const [qLength, setQLength] = useState<number>()
    const [temporaryDifficulty, setTemporaryDifficulty] = useState<string>("easy")
    const [temporaryQLength, setTemporaryQLength] =useState<number>(10)

    useEffect(() => {
        setQuizsettings(true);
        setDifficulty(undefined);
        setQLength(undefined);
        setTemporaryDifficulty("easy");
        setTemporaryQLength(10);
        setQuestionIndex(0);
        setIsCorrect(null);
        setChosenAnswer(null);
        setCorrectCount(0);
        setData([]);
    }, [category]);

    useEffect( () => {
        const matched = categories.find(item => item.category === category)
        const categoryId = matched?.id;
        
        if (!categoryId || !difficulty || !qLength) return
        const url = `https://opentdb.com/api.php?amount=${qLength}&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
        axios.get(url)
            .then((res) => setData(res.data.results))
            .catch((err) => console.error(err));
    }, [category, difficulty, qLength])

    const answerCheck = (index: number, answer: string) => {
        if(data[index].correct_answer === answer) {
            setIsCorrect(true)
            setCorrectCount(prev => prev + 1)
        } else {
            setIsCorrect(false)
        }
        setChosenAnswer(answer)
    }

    const nextQuestion = () => {
        setQuestionIndex(prev => prev + 1)
        setIsCorrect(null)
        setChosenAnswer(null)
    }

    const startQuiz = () => {
        setQuizsettings(false)
        setDifficulty(temporaryDifficulty)
        setQLength(temporaryQLength)
    }

    const restartQuiz = () => {
        setQuestionIndex(0)
        setIsCorrect(null)
        setChosenAnswer(null)
        setCorrectCount(0)
    }
    console.log(isCorrect)
    const quizTitle = category && (category?.toString().charAt(0).toUpperCase() + category?.toString().slice(1)).replaceAll("-", " ");
return (
    <div className='flex items-center justify-center mt-[80px] h-[90vh]'>
        { 
            quizSettings ? (
                <StartQuiz 
                    temporaryDifficulty={temporaryDifficulty}
                    temporaryQLength={temporaryQLength}
                    setTemporaryDifficulty={setTemporaryDifficulty}
                    setTemporaryQLength={setTemporaryQLength}
                    startQuiz={startQuiz}
                />
            ) : 
            data.length === 0 ? (
                <Loading />
            ) : (
            questionIndex + 1 !== data.length ? (
                <QuestionCard 
                    data={data} 
                    questionIndex={questionIndex} 
                    quizTitle={quizTitle} 
                    nextQuestion={nextQuestion} 
                    answerCheck={answerCheck} 
                    chosenAnswer={chosenAnswer}
                />
            ) : (
                <QuizResults correctCount={correctCount} qLength={qLength!} restartQuiz={restartQuiz}/>
            )
        )}
    </div>
)

}

export default TestsPage