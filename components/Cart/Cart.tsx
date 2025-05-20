import Link from 'next/link';
import React from 'react';


type ButtonType = "popular" | "game" | "enterteiment"

interface ButtonProps {
    type: ButtonType;
    label: string;
    description: string;
    href: string;
}

const Cart: React.FC<ButtonProps> = ({type, label, description, href}) => {
    const baseClasses = "px-6 py-5 rounded-xl text-white shadow-md ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105 active:scale-95";

    const typeClasses = {
        popular: "bg-gradient-to-r from-orange-600 to-orange-500 ring-orange-300",
        game: "bg-gradient-to-r from-green-600 to-emerald-500 ring-green-300",
        enterteiment: "bg-gradient-to-r from-stone-700 to-stone-600 ring-stone-400",
    };

    return (
        <div className={`${baseClasses} ${typeClasses[type]}`}>
            <Link href={`/tests/${href}`} >
                <div className="text-lg font-semibold">{label}</div>
                <div className="text-sm opacity-80 mt-1">{description}</div>
            </Link>
        </div>
    )
}

export default Cart