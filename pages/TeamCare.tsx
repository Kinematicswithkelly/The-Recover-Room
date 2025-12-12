
import React from 'react';
import { Truck } from 'lucide-react';

const TeamCare: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gray-900 text-white pt-20 pb-32 rounded-b-3xl">
        <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-sm font-semibold text-kwk-lime uppercase tracking-widest mb-2">B2B & Mobile Service</h1>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4">The Recovery Room on Wheels</h2>
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl">We bring the lab to you. On-site recovery, data, and performance—for teams, corporations, and communities.</p>
        </div>
      </header>

      {/* TeamCare Packages Section */}
      <section className="py-16 md:py-24 bg-white -mt-10 relative z-10 rounded-t-3xl">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-center mb-12">
                 <Truck className="w-10 h-10 text-kwk-teal mr-4" />
                 <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">TeamCare Packages</h3>
            </div>
            <p className="text-center text-gray-500 mb-12 uppercase tracking-wider text-sm font-medium">Per Season / Contract</p>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* Bronze */}
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                    <div className="text-2xl font-extrabold text-gray-900 mb-2">BRONZE</div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-4">Baseline Screening</div>
                    <p className="text-3xl font-bold text-kwk-teal mb-6">$500 <span className="text-base font-normal text-gray-500">/ package</span></p>
                    <p className="text-gray-600 mb-6 font-medium">Focus: Risk Identification.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm flex-grow">
                        <li>VALD Baseline Screening (Full Roster).</li>
                        <li>Individual Athlete Reports.</li>
                        <li>Team Summary Risk Report.</li>
                        <li>Focus on {'>'}15% asymmetry risk flag.</li>
                        <li>Remote Coach Consult included.</li>
                    </ul>
                </div>

                {/* Silver */}
                <div className="bg-white p-8 rounded-xl border-2 border-kwk-teal shadow-xl hover:shadow-2xl transition-shadow flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-kwk-teal text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                    <div className="text-2xl font-extrabold text-gray-900 mb-2">SILVER</div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-4">Recovery Integration</div>
                    <p className="text-3xl font-bold text-kwk-teal mb-6">$750 <span className="text-base font-normal text-gray-500">/ package</span></p>
                    <p className="text-gray-600 mb-6 font-medium">Focus: Performance & Maintenance.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm flex-grow">
                        <li><strong>Everything in Bronze, plus:</strong></li>
                        <li>One On-Site Team Workshop (starting at $250 value).</li>
                        <li>Dedicated Recovery Room Access for priority booking.</li>
                    </ul>
                </div>
                
                {/* Gold */}
                <div className="bg-gray-900 p-8 rounded-xl border-4 border-kwk-lime shadow-2xl text-white flex flex-col transform md:-translate-y-4">
                    <div className="text-2xl font-extrabold text-white mb-2">GOLD</div>
                    <div className="text-sm text-gray-400 font-medium uppercase tracking-wide mb-4">Full Ecosystem</div>
                    <p className="text-3xl font-bold text-kwk-lime mb-6">$1000 <span className="text-base font-normal text-gray-400">/ package</span></p>
                    <p className="text-gray-300 mb-6 font-medium">Focus: Complete Integration.</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm flex-grow">
                        <li><strong>Everything in Silver, plus:</strong></li>
                        <li>On-Site Recovery Treatment Block (IDN, Cupping, Manual Therapy).</li>
                        <li>Integrated Coach Education.</li>
                        <li>Priority Scheduling for all athletes.</li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-20 text-center">
                <a 
                    href="https://calendar.app.google/L12Q327BPatRQbza6" 
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-kwk-lime text-gray-900 font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all uppercase tracking-widest"
                >
                    Request TeamCare Partnership
                </a>
                <p className="mt-6 text-sm text-gray-500">Ideal for Schools, Corporate Wellness, and Leagues.</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default TeamCare;
