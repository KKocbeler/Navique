import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Theme from '../Theme/Theme';

const quizzes = [
  {
    name: "Quiz Categories",
    categories: [
      { label: "Animals", href: "/tests/animals" },
      { label: "History", href: "/tests/history" },
      { label: "Vehicles", href: "/tests/vehicles" },
      { label: "Art", href: "/tests/art" },
      { label: "Sports", href: "/tests/sports" },
      { label: "Geography", href: "/tests/geography" },
      { label: "Mythology", href: "/tests/mythology" },
      { label: "Celebrities", href: "/tests/celebrities" },
    ]
  },
  {
    name: "Fun Categories",
    categories: [
      { label: "Anime & Manga", href: "/tests/anime" },
      { label: "Cartoon & Animation", href: "/tests/cartoon" },
      { label: "Comics", href: "/tests/comics" },
      { label: "Video Games", href: "/tests/video-games" },
      { label: "Board Games", href: "/tests/board-games" },
      { label: "Film", href: "/tests/film" },
      { label: "Music", href: "/tests/music" },
      { label: "Books", href: "/tests/books" },
    ]
  }
];

interface PropTypes {
    showMobileNav: boolean
    setShowMobileNav: (value: boolean) => void
    theme: string;
    themeToggle: () => void
}

const MobileNavMenu: React.FC<PropTypes> = ({showMobileNav, setShowMobileNav, theme, themeToggle}) => {

const [selectedIndex, setSelectedIndex] = useState<null | number>(null)

const toggleMenu = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index)
}


useEffect(() => {
    const handleScroll = () => {
        if(scrollY > 0) {
            setShowMobileNav(false)
        }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll)
    }
}, [setShowMobileNav])
        
  return (
    <div className={`fixed z-10 top-[80px] right-0 bg-slate-50 dark:bg-slate-900 inset-0 h-[100vh] px-2 sm:hidden transition-all duration-500 ${showMobileNav ? "translate-x-0" : "translate-x-full"}`}>
      <div className='flex justify-end relative mt-4 px-3'>
        <Theme theme={theme} themeToggle={themeToggle}/>
      </div>
        
        {quizzes.map((item, index) => (
            <div className="px-4 py-3 " key={index}>
                <button className="w-full flex items-center justify-between text-left" onClick={() => toggleMenu(index)}>
                    <span className="text-base text-slate-950 dark:text-slate-50 font-medium">{item.name}</span>
                    <IoIosArrowDown
                        className={`transition-transform duration-300 text-slate-900 dark:text-slate-50 ${selectedIndex === index ? 'rotate-180' : ''}`}
                    />
                </button>
                <ul
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    selectedIndex === index
                    ? 'max-h-96 opacity-100 translate-y-0 mt-2'
                    : 'max-h-0 opacity-0 -translate-y-2'
                }`}
                >
                {item.categories.map((category, i) => (
                    <li key={i} className="py-2 pl-4 text-sm text-slate-600 dark:text-slate-500">
                    <Link href={category.href} className="hover:text-slate-950 dark:hover:text-slate-100 transition" onClick={() => setShowMobileNav(false)}>
                        {category.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default MobileNavMenu