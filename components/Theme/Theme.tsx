import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

interface PropTypes {
    theme: string;
    themeToggle: () => void;
}

const Theme: React.FC<PropTypes> = ({theme, themeToggle}) => {
  return (
    <div className='px-5 py-[11px] rounded-2xl bg-slate-200 dark:bg-slate-500 relative cursor-pointer' onClick={themeToggle}>
        <span className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 ${theme === "dark" ? "translate-x-[0]" : "-translate-x-[100%]" }`}>
            {
                theme === "dark" ? <FaSun className='dark:text-slate-50' /> : <FaMoon />  
            }
        </span>
    </div>
  )
}

export default Theme