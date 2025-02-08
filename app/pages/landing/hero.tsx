/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className="bg-blue-600 min-h-screen relative overflow-hidden">
            {/* Navigation */}
            <nav className="flex justify-between items-center p-6">
                <div className="flex items-center">
                    <div className="text-white text-2xl font-bold">ORCTA</div>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-white hover:text-blue-200">Home</Link>
                    <Link href="/who-we-are" className="text-white hover:text-blue-200">Who We Are</Link>
                    <Link href="/what-we-do" className="text-white hover:text-blue-200">What We Do</Link>
                    <Link href="/our-team" className="text-white hover:text-blue-200">Our Team</Link>
                    <Link href="/blog" className="text-white hover:text-blue-200">Blog</Link>
                </div>
                <button className="bg-white bg-opacity-10 text-white px-6 py-2 rounded-full hover:bg-opacity-20 transition-all">
                    Contact Us
                </button>
            </nav>

            {/* Hero Content */}

            <div className="container mx-auto px-6 pt-20 pb-24 flex flex-col md:flex-row items-center relative">
                <div className="md:w-1/2 mb-16 md:mb-0">
                    <div className="relative">
                        <h1
                            className="text-white md:text-6xl font-bold"
                            style={{
                                fontSize: '6em',
                                fontWeight: 700,
                                width: '1304px',
                                height: '117px',
                                position: 'absolute',
                                // top: '138px',
                                left: '68px',
                                lineHeight: '117px',
                                zIndex: 1,
                                background: 'linear-gradient(90deg, #C6CAF9 0%, #D9D9D9 50%, #A4A9EB 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                // fontSize: '96px'
                            }}
                        >
                            Innovate. Impact. Sustain.
                        </h1>
                    </div>

                    {/* Added spacer div to maintain layout with absolute positioned heading */}
                    <div style={{ height: '117px', marginBottom: '138px' }}></div>

                    <p className="text-blue-100 text-xl mb-8 max-w-lg mt-32">
                        Empowering Africa&apos;s technological future with cutting-edge, sustainable solutions.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all">
                            Learn More
                        </button>
                        <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:bg-opacity-10 transition-all">
                            Our Solutions
                        </button>
                    </div>
                </div>

                <div className="md:w-1/2 relative">
                    <div className="relative"
                    style={{
                        position: 'absolute',
                        top: '-15rem',
                        right: '14.5rem',
                        // zIndex: 1,
                        width: '596px',
                        height: '583px',
                    }}
                    >
                        <div className="absolute inset-0 bg-blue-400 bg-opacity-20 rounded-full animate-pulse"></div>
                        <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 relative">
                                <img
                                    src="/api/placeholder/256/256"
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