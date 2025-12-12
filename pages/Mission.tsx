
import React from 'react';
import { Heart, BookOpen, Check, Star } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Book Launch Focus */}
      <div className="relative py-20 bg-gray-900 overflow-hidden rounded-b-[3rem]">
        {/* Background effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-kwk-teal rounded-full blur-[128px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900 rounded-full blur-[100px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 bg-kwk-lime text-gray-900 font-black px-6 py-2 rounded-full mb-8 transform hover:scale-105 transition-transform shadow-[0_0_20px_rgba(56,212,59,0.5)]">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="uppercase tracking-widest text-sm">Now Published</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                        Killing Kate: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-kwk-teal">The Other Side of the Clipboard</span>
                    </h1>
                    
                    <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
                        The uncharted story of two sisters... A memoir of advocacy, loss, and the fight to be heard. This is the heart behind #Mission2Move.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                        <a 
                            href="https://www.amazon.com/dp/B0D3G4XHTL" 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center justify-center space-x-3 bg-white text-gray-900 font-bold py-4 px-8 rounded-full shadow-2xl hover:bg-kwk-lime hover:scale-105 transition-all"
                        >
                            <BookOpen className="w-5 h-5" />
                            <span>Buy on Amazon</span>
                        </a>
                    </div>
                </div>

                {/* Book Image */}
                <div className="relative flex justify-center lg:justify-end perspective-1000">
                    <div className="relative group">
                         <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-kwk-teal rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
                         {/* 
                            NOTE: Replace the src below with your actual image path if available, e.g., "/assets/killing-kate.png".
                            For now, using a placeholder that represents the book.
                         */}
                         <img 
                            src="https://placehold.co/400x600/583b8d/fff?text=Killing+Kate+Cover" 
                            alt="Killing Kate: The Other Side of the Clipboard Book Cover" 
                            className="relative w-full max-w-sm rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:rotate-1 border-2 border-white/10"
                         />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Legacy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <Heart className="w-12 h-12 text-kwk-teal mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The Tradition of the Loos Legacy</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
                <p className="text-2xl font-serif italic text-gray-800 mb-8">
                    "Mind, body, and soul was a learned movement."
                </p>
                <p className="leading-relaxed text-lg">
                    Kinematics with Kelly isn't just a clinic; it's the culmination of the <strong>Tradition of Loos legacy folded into medicine</strong>. 
                    We believe that true recovery requires seeing the whole person—not just the injury. 
                    This tradition drives our vow: <strong>Every Body Seen and Heard.</strong>
                </p>
            </div>
        </div>
      </section>

      {/* Mission Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                    <h3 className="text-sm font-bold text-kwk-lime uppercase tracking-widest mb-2">#Mission2Move</h3>
                    <h2 className="text-4xl font-black text-gray-900 mb-6">Movement is Medicine. <br/>Faith is Fuel.</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        The #Mission2Move ecosystem exists to bring clinical movement education to underserved communities, schools, and churches. 
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Every book purchased and every Gold Tier partnership funds our core initiatives:
                    </p>
                </div>
                
                <div className="p-8 bg-gray-900 rounded-2xl shadow-2xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-kwk-teal rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                    <ul className="space-y-6 text-lg relative z-10">
                        <li className="flex items-start">
                            <div className="bg-kwk-lime/20 p-2 rounded-full mr-4 mt-1">
                                <Check className="w-5 h-5 text-kwk-lime" />
                            </div>
                            <span>
                                <strong>Youth Scholarship Profiles:</strong> Free VALD assessments for underserved athletes.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-kwk-lime/20 p-2 rounded-full mr-4 mt-1">
                                <Check className="w-5 h-5 text-kwk-lime" />
                            </div>
                            <span>
                                <strong>Active Aging:</strong> Sponsorship of Silver Strength Circles.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-kwk-lime/20 p-2 rounded-full mr-4 mt-1">
                                <Check className="w-5 h-5 text-kwk-lime" />
                            </div>
                            <span>
                                <strong>Faith in Motion:</strong> Community movement events bridging health and spirit.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
      
       {/* Global CTA */}
        <div className="bg-kwk-teal py-16 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8">Support the Mission</h2>
                <a 
                    href="https://www.amazon.com/dp/B0D3G4XHTL" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block bg-white text-gray-900 font-bold py-4 px-12 rounded-full text-xl shadow-xl uppercase tracking-widest hover:bg-kwk-lime hover:scale-105 transition-all"
                >
                    Get Your Copy of Killing Kate
                </a>
            </div>
        </div>
    </div>
  );
};

export default Mission;
