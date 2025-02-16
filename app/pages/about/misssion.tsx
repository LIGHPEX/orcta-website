import React from 'react';

const MissionVisionSection = () => {
    return (
        <section className="relative bg-blue-50/30 py-20 overflow-hidden">
            {/* Background circular patterns - barely visible */}
            <div className="absolute top-0 right-0 w-full h-full">
                <svg viewBox="0 0 200 200" className="absolute top-0 right-0 w-full h-full text-indigo-100/50 fill-current opacity-20">
                    <defs>
                        <pattern id="pattern-circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Mission Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-20">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-indigo-600">Our</span> Mission
                        </h2>
                        <p className="text-slate-700 text-lg max-w-lg">
                            To empower businesses and individuals through innovative,
                            inclusive, and sustainable technology solutions that drive societal
                            progress.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-end items-center">
                        <div className="relative w-full max-w-xs md:max-w-sm">
                            <div className="h-1 bg-indigo-600 w-full"></div>
                            <div className="absolute -right-2 -top-2 w-4 h-4 bg-indigo-600 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-indigo-600">Our</span> Vision
                        </h2>
                        <p className="text-slate-700 text-lg max-w-lg">
                            To lead Africa&apos;s technological evolution while fostering a
                            globally connected future where innovation and accessibility go
                            hand in hand.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-start items-center">
                        <div className="relative w-full max-w-xs md:max-w-sm">
                            <div className="h-1 bg-indigo-600 w-full"></div>
                            <div className="absolute -left-2 -top-2 w-4 h-4 bg-indigo-600 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection;