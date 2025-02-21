"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    return (
        <>
            <header className="z-10 select-none px-4 flex justify-between items-center bg-white/5 w-full h-20 backdrop-blur-lg fixed">
                <h1 className="text-6xl font-bold text-green-pmg">PVR</h1>

                <nav className="text-sm md:block hidden">
                    <ul className="flex justify-around">
                        <li><Link className="me-2 transition-all font-bold hover:text-green-pmg text-stone-400 border-stone-400 font-bolder p-2 flex items-center" href="#sobre">SOBRE <FaExternalLinkAlt className="text-xs ms-2"/></Link></li>
                        <li><Link className="me-2 transition-all font-bold hover:text-green-pmg text-stone-400 border-stone-400 font-bolder p-2 flex items-center" href="#comunidade">COMUNIDADE <FaExternalLinkAlt className="text-xs ms-2"/></Link></li>
                        <li><Link className="me-2 transition-all font-bold hover:text-green-pmg text-stone-400 border-stone-400 font-bolder p-2 flex items-center" href="#preços">PREÇOS <FaExternalLinkAlt className="text-xs ms-2"/></Link></li>
                        <li><Link className="me-2 transition-all font-bold hover:text-green-pmg text-stone-400 border-stone-400 font-bolder p-2 flex items-center" href="#suporte">SUPORTE <FaExternalLinkAlt className="text-xs ms-2"/></Link></li>
                    </ul>
                </nav>

                <FaBars onClick={() => setMenuOpen(!menuOpen)} className="md:hidden block transition-all text-6xl cursor-pointer p-2 rounded-md hover:text-green-pmg hover:border-green-pmg text-stone-400 border-stone-400 border-2"/>

            </header>
        
            {menuOpen && <div style={{transition: "transform 0.2s ease, opacity 0.2s ease"}} className={`bg-white/5 md:hidden w-full fixed mt-20 backdrop-blur-lg flex flex-col items-center text-lg transform transition-transform z-10 select-none ${menuOpen ? "opacity-100" : "opacity-0"}`}>
                <nav className="text-sm w-full">
                    <ul className="flex flex-col justify-center h-full">
                        <li onClick={() => setMenuOpen(!menuOpen)} className="m-3 h-full"><Link className="h-full transition-all font-bold hover:text-green-pmg text-stone-400 font-bolder p-2 flex items-center" href="#sobre">SOBRE <FaExternalLinkAlt className="text-xs ms-2"/></Link></li>
                        <li onClick={() => setMenuOpen(!menuOpen)} className="m-3 w-full"><Link className="w-full transition-all font-bold hover:text-green-pmg text-stone-400 font-bolder p-2 flex items-center" href="#comunidade">COMUNIDADE <FaExternalLinkAlt className="text-xs ms-2"/></Link></li>
                        <li onClick={() => setMenuOpen(!menuOpen)} className="m-3 w-full"><Link className="w-full transition-all font-bold hover:text-green-pmg text-stone-400 font-bolder p-2 flex items-center" href="#preços">PREÇOS <FaExternalLinkAlt className="text-xs ms-2"/></Link></li>
                        <li onClick={() => setMenuOpen(!menuOpen)} className="m-3 w-full"><Link className="w-full transition-all font-bold hover:text-green-pmg text-stone-400 font-bolder p-2 flex items-center" href="#suporte">SUPORTE <FaExternalLinkAlt className="text-xs ms-2"/></Link></li>
                    </ul>
                </nav>
            </div>}
        </>
    );
}
