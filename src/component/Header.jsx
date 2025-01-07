import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from 'react-icons/io5';

const Header = () => {
    const[open, setOpen]=useState(false)
    const navItems = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About Us",
            href: "/about"
        },
        {
            name: "Services",
            href: "/services"
        },
        {
            name: "Contact Us",
            href: "/contact-us"
        },
        // {
        //     name: "Calculator",
        //     href : "/calculator"
        // },
        {
            name: "SpongeBob",
            href : "/sponge-bob"
        }
    ]
    return (
        <>
            <nav className=' bg-slate-200 flex justify-between items-center px-8 py-5'>
                <h1>Testing</h1>
                <div className='space-x-10 hidden md:block'>
                    {
                        navItems.map((item) => (
                            <NavLink key={item.name} to={item.href} className={({ isActive }) => `${isActive && "font-bold"}`}>
                                {item.name}
                            </NavLink>
                        ))
                    }
                </div>
                <div className='block md:hidden'>
                    {
                        open ? <IoClose size={25} onClick={() => setOpen(!open)} /> : <GiHamburgerMenu size={20} onClick={() => setOpen(!open)} />
                            
                    }
                </div>
            </nav>
            {
                open && (
                    <div className='flex flex-col bg-red-300 space-y-3 py-3 justify-center items-center'>
                        {
                            navItems.map((item) => (
                                <NavLink key={item.name} to={item.href} onClick={() => setOpen(false)} className={({ isActive }) => `${isActive && "font-bold"}`}>
                                    <ul>
                                        <li>{item.name}</li>
                                    </ul>
                                </NavLink>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default Header