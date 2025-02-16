// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MissionVisionSection from './misssion'

export default function Home() {
    return (
        <div className="min-h-screen bg-blue-50/30">
            <Head>
                <title>ORCTA - Innovation, Inclusion and Transformation</title>
                <meta name="description" content="ORCTA is committed to bridging the gap in technology education" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between py-6">
                    <div className="flex items-center">
                        <Image src="/logo.svg" alt="ORCTA Logo" width={100} height={60} />
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-slate-700 hover:text-indigo-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/who-we-are" className="text-slate-700 hover:text-indigo-600 transition-colors">
                            Who We Are
                        </Link>
                        <Link href="/what-we-do" className="text-slate-700 hover:text-indigo-600 transition-colors">
                            What We Do
                        </Link>
                        <Link href="/projects" className="text-slate-700 hover:text-indigo-600 transition-colors">
                            Projects
                        </Link>
                        <Link href="/blog" className="text-slate-700 hover:text-indigo-600 transition-colors">
                            Blog
                        </Link>
                        <Link
                            href="/contact-us"
                            className="border border-slate-700 rounded-full px-6 py-2 text-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </nav>

                <main className="flex flex-col md:flex-row items-center justify-between py-12 md:py-20">
                    <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-12 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            <span className="text-indigo-600">Innovation, Inclusion and</span><br />
                            Transformation.
                        </h1>
                        <div className="space-y-6 text-lg text-slate-700">
                            <p>
                                Founded on the principles of inclusion and innovation, ORCTA is committed
                                to bridging the gap in technology education.
                            </p>
                            <p>
                                Our projects empower individuals, especially those with disabilities, by
                                equipping them with the skills needed to thrive in a tech-driven world.
                            </p>
                            <p>
                                From STEM education to assistive technology solutions, we are shaping a
                                future where everyone has access to opportunities in technology.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative">
                        <div className="relative w-full aspect-square max-w-xl mx-auto">
                            <div className="absolute inset-0 rounded-full border border-dashed border-indigo-200 flex items-center justify-center">
                                <Image
                                    src="/mobile-device.png"
                                    alt="Technology visualization"
                                    width={400}
                                    height={600}
                                    className="relative z-10"
                                />
                                <div className="absolute w-4 h-4 bg-indigo-600 rounded-full top-1/5 right-1/10"></div>
                                <div className="absolute w-4 h-4 bg-indigo-600 rounded-full top-7/10 right-1/20"></div>
                                <div className="absolute w-4 h-4 bg-indigo-600 rounded-full bottom-1/6 left-3/10"></div>
                                <div className="absolute w-4 h-4 bg-indigo-600 rounded-full top-1/10 left-1/5"></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <MissionVisionSection />
        </div>
    )
}