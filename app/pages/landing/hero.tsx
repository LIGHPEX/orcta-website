/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Load particles.js from CDN
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
        script.async = true;
        
        script.onload = () => {
            // @ts-expect-error
            window.particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#ffffff'
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        animation: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#ffffff',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    }
                },
                retina_detect: true
            });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{
                background: 'linear-gradient(90deg, #3D4AF6 0%, #3D4AF6 50%)',
            }}
        >
            {/* Particles Container */}
            <div 
                id="particles-js" 
                className="absolute inset-0 z-0"
                style={{
                    pointerEvents: 'none'
                }}
            />

            {/* Rest of your existing code - just make sure all content has z-index above 0 */}
            <nav className="flex justify-between items-center p-4 lg:p-6 relative z-10">
                {/* Your existing nav code */}
                <div className="flex items-center">
                    <div className="text-white text-xl lg:text-2xl font-bold">ORCTA</div>
                </div>

                <button 
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <div className="hidden md:flex space-x-4 lg:space-x-8">
                    <Link href="/" className="text-white hover:text-blue-200 text-sm lg:text-base">Home</Link>
                    <Link href="/pages/about" className="text-white hover:text-blue-200 text-sm lg:text-base">Who We Are</Link>
                    <Link href="/pages/what-we-do" className="text-white hover:text-blue-200 text-sm lg:text-base">What We Do</Link>
                    <Link href="/pages/our-team" className="text-white hover:text-blue-200 text-sm lg:text-base">Our Team</Link>
                    <Link href="/pages/blog" className="text-white hover:text-blue-200 text-sm lg:text-base">Blog</Link>
                </div>

                <button className="hidden md:block bg-white bg-opacity-10 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-opacity-20 transition-all text-sm lg:text-base">
                    Contact Us
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-600 z-40 p-4">
                    {/* Your existing mobile menu code */}
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="text-white hover:text-blue-200">Home</Link>
                        <Link href="/about" className="text-white hover:text-blue-200">Who We Are</Link>
                        <Link href="/what-we-do" className="text-white hover:text-blue-200">What We Do</Link>
                        <Link href="/our-team" className="text-white hover:text-blue-200">Our Team</Link>
                        <Link href="/blog" className="text-white hover:text-blue-200">Blog</Link>
                        <button className="bg-white bg-opacity-10 text-white px-6 py-2 rounded-full hover:bg-opacity-20 transition-all w-full">
                            Contact Us
                        </button>
                    </div>
                </div>
            )}

            {/* Hero Content */}
            <div className="container mx-auto px-4 lg:px-6 pt-10 lg:pt-20 pb-12 lg:pb-24 flex flex-col md:flex-row items-center relative z-10">
                {/* Your existing hero content code */}
                <div className="w-full md:w-1/2 mb-16 md:mb-0">
                    <div className="relative">
                        <h1
                            className="text-white font-bold"
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 6em)',
                                fontWeight: 700,
                                width: 'max-content',
                                height: 'auto',
                                position: 'relative',
                                left: '0',
                                padding: '0 1rem',
                                marginLeft: 'clamp(0px, 2vw, 68px)',
                                lineHeight: '1.2',
                                zIndex: 5,
                                background: 'linear-gradient(90deg, #C6CAF9 0%, #D9D9D9 50%, #A4A9EB 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <style>
                                {`
                                @media (max-width: 768px) {
                                    .text-white.font-bold {
                                        whiteSpace: wrap !important;
                                        white-space: normal !important;
                                    }
                                }
                                `}
                            </style>
                            Innovate. Impact. Sustain.
                        </h1>
                    </div>
                    <div className="bg-gray-900 bg-opacity-50 rounded-md mt-8 lg:mt-16"
                        style={{
                            borderRadius: '16px',
                            position: 'relative',
                            zIndex: 1,
                            marginLeft: 'clamp(0px, 2vw, 68px)',
                            maxWidth: '560px',
                            width: '100%',
                        }}
                    >
                        <p className="text-blue-100 p-4 lg:p-6"
                            style={{
                                fontSize: 'clamp(1rem, 2vw, 1.5em)',
                                lineHeight: '1.75em',
                            }}
                        >
                            Empowering Africa&apos;s technological future with cutting-edge, sustainable solutions.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 lg:mt-16"
                        style={{
                            marginLeft: 'clamp(0px, 2vw, 68px)',
                        }}
                    >
                        <button className="bg-white text-blue-600 px-6 lg:px-8 py-3 rounded-md hover:bg-blue-50 transition-all text-sm lg:text-base">
                            Learn More
                        </button>
                        <button className="border border-white text-white px-6 lg:px-8 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition-all text-sm lg:text-base">
                            Our Solutions
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 relative">
                    <div className="relative mx-auto"
                        style={{
                            width: 'min(100%, 596px)',
                            height: 'min(100vw, 583px)',
                            transform: 'translateY(-2rem)',
                        }}
                    >
                        <div className="absolute inset-0 bg-blue-400 bg-opacity-20 rounded-full animate-pulse"></div>
                        <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-48 lg:w-64 lg:h-64 relative">
                                <img
                                    src="/vr.svg"
                                    alt="VR Headset"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;