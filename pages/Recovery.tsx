
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Recovery: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-kwk-teal text-white pt-20 pb-24 rounded-b-3xl">
        <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-sm font-bold text-kwk-lime uppercase tracking-widest mb-2">Fixed Location: 1104 Bolin Ct, Springfield, IL</h1>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4">The Recovery Room</h2>
            <p className="text-xl md:text-2xl font-light">Where Movement is Medicine, Data Gives Guidance, and Awareness Gets Results.</p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
            <h3 className="text-4xl font-bold mb-10 text-gray-900">Individual 1:1 Sessions</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Service Card: Movement Profile Assessment (VALD) */}
                <div className="bg-white p-6 border-4 border-kwk-lime rounded-xl shadow-2xl flex flex-col">
                    <div className="text-3xl lg:text-4xl font-extrabold text-kwk-teal mb-3 leading-tight">Movement Profile (VALD)</div>
                    <p className="text-md font-semibold text-gray-900 uppercase mb-4">60 min | $100</p>
                    <p className="text-gray-600 mb-6 flex-grow">Objective assessment using VALD ForceDecks. We quantify asymmetry and power to create a data-driven recovery roadmap. <strong>Stop guessing, start measuring.</strong></p>
                    <div className="mt-auto">
                         <p className="font-semibold text-sm text-kwk-lime uppercase tracking-wider mb-2">High Conversion Focus</p>
                    </div>
                </div>
                
                {/* Service Card: Comprehensive Recovery Session */}
                <div className="bg-white p-6 border border-kwk-teal rounded-xl shadow-lg flex flex-col">
                    <div className="text-2xl font-bold mb-3 text-gray-800">Recovery Session (Comprehensive)</div>
                    <p className="text-md font-semibold text-gray-900 uppercase mb-4">60 min | $100</p>
                    <p className="text-gray-600 mb-4 flex-grow">The full clinical works. Extensive manual therapy, needling/cupping, and active movement reset, precision-designed to eliminate pain and accelerate performance.</p>
                </div>

                {/* Service Card: General Recovery Session */}
                <div className="bg-white p-6 border border-kwk-teal rounded-xl shadow-lg flex flex-col">
                    <div className="text-2xl font-bold mb-3 text-gray-800">Recovery Session (General)</div>
                    <p className="text-md font-semibold text-gray-900 uppercase mb-4">45 min | $75</p>
                    <p className="text-gray-600 mb-4 flex-grow">A focused hybrid session combining 2-3 clinical modalities for a targeted deep tissue or movement system flush.</p>
                </div>

                {/* Modality Card: IDN */}
                <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-md flex flex-col">
                    <div className="text-xl font-bold mb-3 text-gray-800">Integrative Dry Needling (IDN)</div>
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-4">30 min | $50</p>
                    <p className="text-gray-600 flex-grow">Skilled neuromuscular reset targeting myofascial trigger points to eliminate pain and restore mobility.</p>
                </div>
                
                {/* Modality Card: Cupping */}
                <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-md flex flex-col">
                    <div className="text-xl font-bold mb-3 text-gray-800">Cupping / Manual Therapy</div>
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-4">30 min | $50</p>
                    <p className="text-gray-600 flex-grow">Decompressive therapy to increase blood flow and hands-on joint restoration to improve range of motion.</p>
                </div>
                
                {/* Placeholder Card */}
                <div className="bg-gray-100 p-6 border border-gray-200 rounded-xl shadow-inner flex items-center justify-center">
                    <p className="text-gray-500 italic text-center">Services provided by Dr. Kelly Neumann, DPT.</p>
                </div>
            </div>

            {/* 1:1 CTA */}
            <div className="mt-16 text-center">
                <a 
                    href="https://calendar.app.google/vU5ntX6YqskUjiZv7" 
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center bg-kwk-lime text-gray-900 font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all uppercase tracking-widest"
                >
                    Lock In My 1:1 Recovery Session
                    <ArrowRight className="ml-2 w-6 h-6" />
                </a>
                <p className="mt-4 text-sm text-gray-500">Book your time slot at The Recovery Room in Springfield.</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Recovery;
