
import React from 'react';
import { Truck, Users, BookOpen, ArrowRight, Zap, Shield, Heart, Activity, Coffee, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 px-4 rounded-b-3xl">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-kwk-teal/20 rounded-full px-4 py-1 mb-6 border border-kwk-teal/50">
              <Truck className="w-4 h-4 text-kwk-lime" />
              <p className="text-kwk-lime text-xs font-bold uppercase tracking-wider">Mobile Hub</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">The Recovery Room <br/><span className="text-kwk-teal">On Wheels</span></h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
             We bring the lab to you. Clinical recovery, VALD data, and educational workshops for schools, churches, gyms, and corporate offices.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-24">
        
        {/* SECTION 1: TEAMCARE (Foundation) */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border-t-8 border-kwk-teal">
            <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">TeamCare Packages</h2>
                        <p className="text-gray-500 mt-2">Per Season / Contract. The foundation of athlete resilience.</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                         <a href="https://calendar.app.google/fmRwb9ePieQpCD8m9" target="_blank" rel="noreferrer" className="inline-flex items-center bg-kwk-dark text-white font-bold py-3 px-8 rounded-full hover:bg-kwk-lime hover:text-gray-900 transition-colors">
                            Request Partnership <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                     {/* Bronze */}
                     <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="text-xl font-black text-gray-900 mb-1">BRONZE</h3>
                        <p className="text-kwk-teal font-bold mb-4">$500 <span className="text-xs text-gray-500 font-normal">/ season</span></p>
                        <ul className="text-sm text-gray-600 space-y-2 mb-6">
                            <li>• VALD Baseline Screening</li>
                            <li>• Team Summary Risk Report</li>
                            <li>• Remote Coach Consult</li>
                        </ul>
                     </div>
                     {/* Silver */}
                     <div className="bg-kwk-teal/10 p-6 rounded-xl border border-kwk-teal relative">
                        <div className="absolute top-0 right-0 bg-kwk-teal text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
                        <h3 className="text-xl font-black text-gray-900 mb-1">SILVER</h3>
                        <p className="text-kwk-teal font-bold mb-4">$750 <span className="text-xs text-gray-500 font-normal">/ season</span></p>
                        <ul className="text-sm text-gray-600 space-y-2 mb-6">
                            <li>• <strong>Everything in Bronze</strong></li>
                            <li>• On-Site Team Workshop</li>
                            <li>• Priority Recovery Room Access</li>
                        </ul>
                     </div>
                     {/* Gold */}
                     <div className="bg-gray-900 text-white p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-black text-white mb-1">GOLD</h3>
                        <p className="text-kwk-lime font-bold mb-4">$1,000+ <span className="text-xs text-gray-400 font-normal">/ season</span></p>
                        <ul className="text-sm text-gray-300 space-y-2 mb-6">
                            <li>• <strong>Everything in Silver</strong></li>
                            <li>• On-Site Recovery Treatment Block</li>
                            <li>• Integrated Coach Education</li>
                        </ul>
                     </div>
                </div>
            </div>
        </div>

        {/* SECTION 2: WORKSHOPS (Extensive List) */}
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-kwk-lime" />
                Workshops & Educational Labs
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Workshop Cards */}
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-kwk-lime hover:shadow-lg transition-shadow">
                    <Shield className="w-8 h-8 text-kwk-teal mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Injury Prevention (ACL)</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">Landing mechanics and deceleration strategies to reduce non-contact injury risk. Ages 12+.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-kwk-lime hover:shadow-lg transition-shadow">
                    <Activity className="w-8 h-8 text-kwk-teal mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Movement Foundations</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">The blueprint for pain-free movement. Correcting core patterns, breathing, and posture. 90 mins.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-kwk-teal hover:shadow-lg transition-shadow">
                    <Heart className="w-8 h-8 text-purple-500 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Girls Night In (GNI)</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">Safe space for female athletes. Pelvic health, core stability, and hip mechanics education.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-kwk-lime hover:shadow-lg transition-shadow">
                    <Zap className="w-8 h-8 text-orange-500 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Golf / Rotational Lab</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">Unlock power and protect the low back. Sequencing for rotational athletes.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-kwk-teal hover:shadow-lg transition-shadow">
                    <Users className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Youth Athlete 101</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">Movement basics for ages 8-12. Fun, foundational, and safety-focused.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-kwk-lime hover:shadow-lg transition-shadow">
                    <Activity className="w-8 h-8 text-gray-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Silver Strength Circles</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">Faith-based mobility and fall prevention for seniors. Devotion + Movement.</p>
                </div>
                 <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-kwk-teal hover:shadow-lg transition-shadow">
                    <Activity className="w-8 h-8 text-gray-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Active Aging (55+)</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">Functional strength and balance training to maintain independence.</p>
                </div>
                 <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gray-900 hover:shadow-lg transition-shadow">
                    <Heart className="w-8 h-8 text-red-500 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Faith in Motion Walks</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">Intergenerational mentorship walking groups. Stewardship of the body.</p>
                </div>
            </div>
            
            <div className="mt-10 text-center">
                 <a href="https://calendar.app.google/fmRwb9ePieQpCD8m9" target="_blank" rel="noreferrer" className="inline-flex items-center bg-kwk-teal text-white font-bold py-3 px-8 rounded-full hover:bg-kwk-lime hover:text-gray-900 transition-colors">
                    Book Educational Workshop <ArrowRight className="ml-2 w-4 h-4" />
                </a>
            </div>
        </div>

        {/* SECTION 3: RECOVERY POP-UPS */}
        <div className="bg-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-gray-200 mb-12">
             <div className="mb-6 md:mb-0 md:mr-8">
                 <h2 className="text-2xl font-bold text-gray-900 mb-2">Corporate & Facility Recovery Days</h2>
                 <p className="text-gray-600">
                     Decrease workplace injury risk and improve morale. We set up a mobile recovery clinic at your office or gym for "Recovery Blocks" (Movement screens, compression, manual therapy).
                 </p>
             </div>
              <a href="https://calendar.app.google/fmRwb9ePieQpCD8m9" target="_blank" rel="noreferrer" className="whitespace-nowrap inline-flex items-center bg-white border-2 border-gray-900 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
                Request Pop-Up
            </a>
        </div>

        {/* SECTION 4: Lunch & Learn / After Hours */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                     <div className="flex items-center gap-2 mb-4">
                        <Coffee className="w-6 h-6 text-kwk-teal" />
                        <h3 className="text-xl font-bold text-gray-900">Lunch & Learn</h3>
                     </div>
                     <p className="text-gray-600 text-sm mb-6">
                        Educational sessions delivered over lunch. Topics include "Movement is Medicine," Ergonomics for Desk Warriors, and Stress Management.
                     </p>
                </div>
                 <a href="https://calendar.app.google/fmRwb9ePieQpCD8m9" target="_blank" rel="noreferrer" className="text-kwk-teal font-bold hover:text-kwk-lime transition-colors inline-flex items-center">
                    Schedule Lunch & Learn <ArrowRight className="w-4 h-4 ml-2" />
                </a>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-2xl border border-gray-800 shadow-sm flex flex-col justify-between">
                 <div>
                     <div className="flex items-center gap-2 mb-4">
                        <Moon className="w-6 h-6 text-kwk-lime" />
                        <h3 className="text-xl font-bold text-white">After Hour Recovery</h3>
                     </div>
                     <p className="text-gray-400 text-sm mb-6">
                        Evening recovery blocks designed for shift workers, post-practice teams, or late-night corporate shifts. We bring the recovery when you need it most.
                     </p>
                </div>
                 <a href="https://calendar.app.google/fmRwb9ePieQpCD8m9" target="_blank" rel="noreferrer" className="text-kwk-lime font-bold hover:text-white transition-colors inline-flex items-center">
                    Book After Hours <ArrowRight className="w-4 h-4 ml-2" />
                </a>
            </div>
        </div>

        <div className="mt-12 text-center">
            <Link to="/booking" className="text-kwk-teal font-bold hover:text-kwk-lime hover:underline">View Booking & Pricing Hub &rarr;</Link>
        </div>

      </div>
    </div>
  );
};

export default Services;
