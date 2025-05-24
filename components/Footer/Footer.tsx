import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedin, FaTwitch, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
    { icon: FaFacebookF, label: "Facebook", url: "https://facebook.com" },
    { icon: FaTwitch, label: "Twitch", url: "https://twitch.tv" },
    { icon: FaXTwitter, label: "Twitter (X)", url: "https://twitter.com" },
    { icon: FaLinkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: FaYoutube, label: "YouTube", url: "https://youtube.com" },
];

const Footer = () => {
    return (
        <footer className='bg-slate-950 mt-auto pt-8'>
            <div className='new-container relative sm:static'>
                <div className='w-[350px] text-center mx-auto mb-20 sm:mb-8 '>
                    <div className="text-3xl mb-1  text-slate-100">Connect with us!</div>
                    <p className='text-sm mb-3  text-slate-100'>Took a quiz? Tell us what you think!</p>
                    <form className='relative'>
                        <input type="email" className='bg-gray-50 sm:w-full rounded-3xl ps-3 pr-10 py-1.5 ' placeholder='type your e-mail' required/>
                        <button type='submit' className='absolute right-[62px] sm:right-0.5 top-1/2 -translate-y-1/2 rounded-3xl px-3 py-1 bg-orange-600  text-slate-100' aria-label='Join'>Join</button>
                    </form>
                </div>
                <div className='flex items-center justify-between pb-1 px-2 sm:px-'>
                    <div className='flex-1 text-slate-100 text-xs'>© 2025 All rights reserved.</div>
                    <nav className='flex flex-1 justify-center gap-4 text-[20px] absolute bottom-[50px] left-1/2 -translate-x-1/2 sm:static sm:-translate-x-0 sm:left-0 sm:bottom-0'>
                        {
                            socialLinks.map((social, index) => (
                                <Link 
                                    href={social.url} 
                                    className='text-slate-300 hover:text-slate-100 transition'
                                    key={index} 
                                    aria-label={social.label}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    {React.createElement(social.icon)}  
                                </Link>
                            ))
                        }
                    </nav>
                    <div className='flex-1 text-right text-xl'>
                        <Link href={'/'} className='text-slate-100'>
                            Navi<span className='text-orange-600'>que</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer