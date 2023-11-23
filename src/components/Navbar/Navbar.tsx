// components/Navbar.js
'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`  flex flex-col sm:flex-row mx-auto p-3 justify-around items-center bg-[#202329] leading-[80px]   ${isScrolled ? 'fixed top-0 w-full' : ''}`}>
            {/* <div className="flex md:flex-row  justify-around items-center"> */}
                <a href="/" className="navbar-brand flex flex-row">
                    <Image src="/images/profile_logo.png" width={80} height={10} alt="" className="rounded-full" />
                    <h1 className='text-white ml-2'>Igor Simões da Silveira</h1>
                </a>
                <ul className="flex justify-around space-x-4">
                    <li>
                        <a href="#About" className="text-white hover:text-[#1CA39E]">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#Experience" className="text-white hover:text-[#1CA39E]">
                            Experiência
                        </a>
                    </li>
                    <li>
                        <a href="#Technologies" className="text-white hover:text-[#1CA39E]">
                            Tecnologia
                        </a>
                    </li>
                    <li>
                        <a href="#Projects" className="text-white hover:text-[#1CA39E]">
                            Projetos
                        </a>
                    </li>
                </ul>
            {/* </div>   */}
        </nav>
    );
}


