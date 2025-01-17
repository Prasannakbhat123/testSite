import React from 'react'
import logo from "../assets/logo.png"
import {navItems} from "../constants"
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-evenly items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-40 mr-2" src={logo} alt="" />
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item,index)=>(
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
