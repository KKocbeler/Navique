"use client"
import React from 'react'
import Cart from '../Cart/Cart';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
    <div className="mt-[80px] space-y-[50px] p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h2 className='text-2xl font-bold mb-4'>General Knowledge</h2>
            <div className="flex gap-4 p-2">
                {generalKnowledge.map((item, i) => (
                    <Link
                        href={`/tests/${item.href}`}
                        key={i}
                        className="flex-1 text-center font-semibold rounded-2xl text-white py-3 bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 shadow-md transition transform duration-300 ease-in-out hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-rose-400">
                        {item.label}
                    </Link>
                ))}
            </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            <h2 className="text-2xl font-bold text-rose-600 mb-4">Anime and Comics Quizzes 🗡️</h2>
            <div className="grid grid-cols-3 gap-4">
                {popCultureTests.map((item, j) => (
                    <Cart key={j} type="popular" label={item.label} href={item.href} description={item.description} />
                ))}
            </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            <h2 className="text-2xl font-bold text-green-600 mb-4">Game Quizzes 🎮</h2>
            <div className="grid grid-cols-3 gap-4">
                {gameTests.map((item, k) => (
                    <Cart key={k} type="game" label={item.label} href={item.href} description={item.description} />
                ))}
            </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Entertainment Quizzes 🎭</h2>
            <div className="grid grid-cols-3 gap-4">
                {entertainmentTests.map((item, l) => (
                    <Cart key={l} type="enterteiment" label={item.label} href={item.href} description={item.description} />
                ))}
            </div>
        </motion.div>
    </div>
  )
}

export default HomePage