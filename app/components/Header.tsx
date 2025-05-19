'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle body scroll lock when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className={`fixed top-0 w-full h-[80px] sm:h-[90px] z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
       
                        <div className='flex-shrink-0 relative'>
                            <Image src="/admin-ajax.webp" alt="logo" width={120} height={100} className="hidden sm:block transform -translate-y-2"/>
                        </div>
                        <div className="flex-shrink-0 ml-0 sm:ml-4">
                            <Link href="/" className="text-2xl font-serif font-bold text-gray-900">
                                <Image src="/logo.webp" alt="logo" width={120} height={100} className='transform -translate-y-3 sm:-translate-y-4'/>
                            </Link>
                        </div>
          
                    
                    {/* Hamburger Button */}
                    <button 
                        className="flex flex-col justify-center items-center w-12 h-12 rounded-full bg-[#dc3333] z-50 relative focus:outline-none transform -translate-y-1 sm:-translate-y-4"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                        <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                    </button>

                    {/* Fullscreen Menu Overlay */}
                    <div 
                        className={`fixed inset-0 bg-white bg-opacity-98 flex items-center justify-center transition-all duration-500 ease-in-out ${
                            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                    >
                        <nav className="flex flex-col items-center justify-center space-y-6 md:space-y-8 w-full px-4">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`text-2xl md:text-3xl font-bold text-[#111] hover:text-[#dc3333] transition-all duration-300 transform hover:scale-110 ${
                                        isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            
                            <Link
                                href="/contact"
                                className={`mt-4 md:mt-6 btn-primary text-lg md:text-xl px-6 md:px-8 py-2 md:py-3 transform hover:scale-105 transition-all duration-300 ${
                                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                                style={{ transitionDelay: `${menuItems.length * 100}ms` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                GET IN TOUCH
                            </Link>
                            
                            {/* Social Icons */}
                            <div className={`flex space-x-6 mt-6 md:mt-8 ${
                                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`} style={{ transitionDelay: `${(menuItems.length + 1) * 100}ms` }}>
                                <a href="#" className="text-gray-800 hover:text-[#dc3333] transition-colors duration-300">
                                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-800 hover:text-[#dc3333] transition-colors duration-300">
                                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-800 hover:text-[#dc3333] transition-colors duration-300">
                                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                                        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                                    </svg>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

// Menu items array for easy management
const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'PORTFOLIO', href: '/portfolio' },
    { label: 'BLOG', href: '/blog' }
];

export default Header;
