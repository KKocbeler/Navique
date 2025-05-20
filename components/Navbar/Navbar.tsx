"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import MobileNavMenu from './MobileNavMenu'
import { IoCloseOutline } from 'react-icons/io5'

    const navList = [
        {path: "#home", name: "Home"},
        {path: "#tests", name: "Tests"},
        {path: "/about", name: "About"}
    ]

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [showMobileNav, setShowMobileNav] = useState(false)
    const lastScrollY = useRef(0)

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 bg-stone-100 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="new-container">
            <div className='flex items-center justify-between h-[80px]'>
                <div >
                    <Link href={"/"} className="text-2xl font-bold text-stone-800">Navi<span className='text-orange-600'>que</span></Link>
                </div>
                <div className="sm:flex items-center gap-5 hidden">
                    {
                        navList.map((item, index) => (
                            <Link href={item.path} className='cursor-pointer font-semiboldbold text-stone-800' key={index}>{item.name}</Link>
                        ))
                    }
                </div>
                <div className={`block sm:hidden text-2xl`} onClick={() => setShowMobileNav(!showMobileNav)}>
                    {
                        showMobileNav ?  <IoCloseOutline /> : <RxHamburgerMenu/>
                    }
                </div>
                <MobileNavMenu showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav}/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar