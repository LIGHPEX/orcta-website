/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';

const PioneeringSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 relative overflow-hidden py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left side with image */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <div className="relative w-full max-w-lg mx-auto">
                            {/* Replace SVG with image from public folder */}
                            <img
                                src="/mobile.svg"
                                alt="ORCTA Innovation Illustration"
                                className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto'
                                }}
                            />
                            
                            {/* Animated decorative elements */}
                            <div className="absolute -z-10 inset-0">
                                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-600 rounded-full opacity-60 animate-pulse"/>
                                <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-blue-600 rounded-full opacity-60 animate-pulse delay-75"/>
                                <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-blue-600 rounded-full opacity-60 animate-pulse delay-150"/>
                            </div>
                        </div>
                    </div>

                    {/* Right side content */}
                    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            <span className="text-blue-600 block mb-2">Pioneering Innovation,</span>
                            <span className="block">Shaping a Better</span>
                            <span className="block">Tomorrow</span>
                        </h2>

                        <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
                            <p className="text-gray-700 text-base md:text-lg">
                                ORCTA is a tech-driven company with a mission to empower Africa and the world through innovative and sustainable technology solutions.
                            </p>

                            <p className="text-gray-700 text-base md:text-lg">
                                Inspired by the octopus&apos;s intelligence and adaptability, we deliver tailored solutions in software, hardware, electronics, and robotics.
                            </p>

                            <button 
                                className="mt-8 px-6 md:px-8 py-3 bg-blue-600 text-white rounded-md transition-all duration-300 transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <span className={`inline-block transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                                    Our Solutions
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PioneeringSection;