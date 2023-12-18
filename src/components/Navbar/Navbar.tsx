// components/Navbar.js
'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

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
        <nav className={`flex flex-col sm:flex-row mx-auto p-3 justify-around items-center leading-[80px] ${isScrolled ? 'fixed top-0 w-full z-50' : ''}`}>
            <a href="/" className="navbar-brand flex flex-row">
                <Image src="/images/profile_logo.png" width={80} height={10} alt="" className="rounded-full" />
                <h1 className='text-white ml-2'>Igor Simões da Silveira</h1>
            </a>
            <ul className="flex justify-around space-x-4">
                <li className={activeItem === 'Home' ? 'active' : ''}>
                    <a href="/" onClick={() => setActiveItem('Home')} className="text-white hover:text-[#006da4]">
                        Home
                    </a>
                </li>
                <li className={activeItem === 'About' ? 'active' : ''}>
                    <a href="#About" onClick={() => setActiveItem('About')} className="text-white hover:text-[#006da4]">
                        Sobre
                    </a>
                </li>
                <li className={activeItem === 'Experience' ? 'active' : ''}>
                    <a href="#Experience" onClick={() => setActiveItem('Experience')} className="text-white hover:text-[#006da4]">
                        Experiência
                    </a>
                </li>
                <li className={activeItem === 'Technologies' ? 'active' : ''}>
                    <a href="#Technologies" onClick={() => setActiveItem('Technologies')} className="text-white hover:text-[#006da4]">
                        Tecnologia
                    </a>
                </li>
                <li className={activeItem === 'Projects' ? 'active' : ''}>
                    <a href="#Projects" onClick={() => setActiveItem('Projects')} className="text-white hover:text-[#006da4]">
                        Projetos
                    </a>
                </li>
            </ul>
        </nav>
    );
}