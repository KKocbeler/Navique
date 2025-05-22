"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import MobileNavMenu from './MobileNavMenu'
import { IoCloseOutline } from 'react-icons/io5'
import Theme from '../Theme/Theme'

const navList = [
    {path: "#home", name: "Home"},
    {path: "#tests", name: "Tests"},
    {path: "#features", name: "Features"}
]

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [showMobileNav, setShowMobileNav] = useState(false)
    const lastScrollY = useRef(0)

    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            setTheme(savedTheme === "dark" ? "dark" : "light")
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme)

        document.documentElement.className = theme
    }, [theme])

    const themeToggle = () =>{
        setTheme(prev => prev === "dark" ? "light" : "dark")
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setShowNavbar(currentScrollY <= 100)
            if(currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 bg-slate-100 dark:bg-slate-950 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="new-container">
            <div className='flex items-center justify-between h-[80px]'>
                <div >
                    <Link href={"/"} className="text-2xl font-bold text-slate-800 dark:text-slate-50">Navi<span className='text-orange-600'>que</span></Link>
                </div>
                <div className="sm:flex items-center gap-8 hidden">
                    {
                        navList.map((item, index) => (
                            <Link href={item.path} className='cursor-pointer font-semiboldbold text-slate-800 dark:text-slate-50' key={index}>{item.name}</Link>
                        ))
                    }
                    <Theme theme={theme} themeToggle={themeToggle}/>
                </div>
                <div className={`block sm:hidden text-2xl `} onClick={() => setShowMobileNav(!showMobileNav)}>
                    {
                        showMobileNav ?  <IoCloseOutline className='dark:text-orange-600'/> : <RxHamburgerMenu className='dark:text-orange-600'/>
                    }
                </div>
                <MobileNavMenu showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} theme={theme} themeToggle={themeToggle}/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar