'use client';
import React from 'react';
import { Monitor, Cpu, Microchip, Bot } from 'lucide-react';

const SolutionsSection = () => {
    const services = [
        {
            title: 'Software Solutions',
            description: 'Innovative applications designed to optimize operations and drive efficiency.',
            icon: <Monitor className="w-8 h-8 text-white" />,
            iconBgColor: 'bg-blue-600'
        },
        {
            title: 'Hardware Development',
            description: 'Custom-built devices tailored to meet unique business needs.',
            icon: <Cpu className="w-8 h-8 text-white" />,
            iconBgColor: 'bg-blue-600'
        },
        {
            title: 'Electronics Design',
            description: 'Sophisticated electronic systems powering next generation technology.',
            icon: <Microchip className="w-8 h-8 text-white" />,
            iconBgColor: 'bg-blue-600'
        },
        {
            title: 'Robotics Engineering',
            description: 'Smart automation solutions addressing real-world challenges.',
            icon: <Bot className="w-8 h-8 text-white" />,
            iconBgColor: 'bg-blue-600'
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-blue-600">Innovative Solutions,</span>
                        {' '}Tailored for Impact
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From software development to robotics, we provide scalable solutions designed to transform industries and lives
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className={`${service.iconBgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300">
                        Discover Our Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;