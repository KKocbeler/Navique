"use client"
import React from 'react'
import Cart from '../Cart/Cart';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Features from './Features/Features';
const generalKnowledge = [
  { label: "Animals", description: "Test your knowledge about the animal kingdom and wildlife.", href: "animals" },
  { label: "History", description: "Explore historical events and figures with this quiz.", href: "history" },
  { label: "Art", description: "Discover your art knowledge across different periods and styles.", href: "art" },
  { label: "Sports", description: "How well do you know the world of sports?", href: "sports" },
  { label: "Geography", description: "Challenge your knowledge of countries, capitals, and landscapes.", href: "geography" },
  { label: "Vehicles", description: "Test yourself on cars, planes, and other vehicles trivia.", href: "vehicles" },
  { label: "Mythology", description: "Dive into myths and legends from various cultures.", href: "mythology" },
  { label: "Celebrities", description: "How well do you know famous people and pop culture icons?", href: "celebrities" }
];

const popCultureTests  = [
  { label: "Anime & Manga", description: "Test your knowledge about popular anime and manga series.", href: "anime" },
  { label: "Cartoon", description: "How well do you know classic and modern cartoons?", href: "cartoon" },
  { label: "Comics", description: "Challenge yourself with comic book trivia and characters.", href: "comics" }
];

const gameTests = [
  { label: "Video Games", description: "Are you a gamer? Test your knowledge about video games.", href: "video-games" },
  { label: "Board Games", description: "Think you know board games? Try this quiz to prove it.", href: "board-games" }
];

const entertainmentTests = [
  { label: "Music", description: "Test your knowledge of music genres, artists, and history.", href: "music" },
  { label: "Film", description: "How much do you know about movies and cinema trivia?", href: "film" },
  { label: "Books", description: "Challenge yourself with literature and famous books quizzes.", href: "books" }
];
const HomePage = () => {
  return (
    <div className="my-[80px] space-y-[50px]">
        <div className='flex flex-col justify-center items-center gap-3 sm:gap-5 h-[calc(100vh_-_80px)] pb-12'>
            <div className='fade-in font-bold lg:text-4xl md:text-3xl text-3xl text-slate-950 dark:text-slate-50'>Ready to Get Quizzed?</div>
            <div className='fade-in-late font-bold lg:text-3xl md:text-2xl text-slate-950 dark:text-slate-50'>Sharpen your mind while having fun</div>
            <Link href={"#tests"} 
            className='fade-in-end py-3 px-6 lg:py-4 lg:px-8 text-sm sm:text-lg transition rounded-4xl
                bg-slate-900 dark:bg-slate-50 hover:bg-slate-800 dark:hover:bg-slate-100 text-slate-50 dark:text-slate-950'
            >
                Start Now
            </Link>
        </div>
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, amount: 0.5  }} viewport={{ once: true}}>
            <h2 id='tests' className='text-xl sm:text-2xl font-bold mb-4 text-slate-900 dark:text-slate-50'>General Knowledge</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-2">
                {generalKnowledge.map((item, i) => (
                    <Link
                        href={`/tests/${item.href}`}
                        key={i}
                        className="flex-1 text-center font-semibold rounded-xl text-slate-50 dark:text-slate-900 bg-slate-900 dark:bg-slate-200 py-3 shadow-md transition transform duration-300 ease-in-out hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-rose-400">
                        {item.label}
                    </Link>
                ))}
            </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, amount: 0.5 }} viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl font-bold text-rose-600 mb-4">Anime and Comics Quizzes 🗡️</h2>
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {popCultureTests.map((item, j) => (
                    <Cart key={j} type="popular" label={item.label} href={item.href} description={item.description} />
                ))}
            </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, amount: 0.5 }} viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-4">Game Quizzes 🎮</h2>
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {gameTests.map((item, k) => (
                    <Cart key={k} type="game" label={item.label} href={item.href} description={item.description} />
                ))}
            </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, amount: 0.5 }} viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl font-bold text-cyan-700 mb-4">Entertainment Quizzes 🎭</h2>
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {entertainmentTests.map((item, l) => (
                    <Cart key={l} type="enterteiment" label={item.label} href={item.href} description={item.description} />
                ))}
            </div>
        </motion.div>
        <Features />
    </div>
  )
}

export default HomePage