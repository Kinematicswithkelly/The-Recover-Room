
import React from 'react';
import { Activity, MapPin, ArrowRight, Truck, BarChart2, Users, Heart, Star, Zap, Shield, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-kwk-dark overflow-hidden rounded-b-[3rem]">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-kwk-dark opacity-90 z-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 z-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-kwk-lime/10 rounded-full px-4 py-1 mb-8 border border-kwk-lime/30">
              <span className="w-2 h-2 rounded-full bg-kwk-lime animate-pulse"></span>
              <p className="text-kwk-lime text-xs font-bold uppercase tracking-wider">Fixed Location: 1104 Bolin Ct, Springfield, IL</p>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
            THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kwk-lime to-kwk-teal">
              RECOVERY ROOM
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Where Movement is Medicine, Data Gives Guidance, and Awareness Gets Results.
          </p>

          <div className="flex flex-col items-center gap-6">
             <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
                 <a 
                    href="https://calendar.app.google/vU5ntX6YqskUjiZv7"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-kwk-lime text-gray-900 hover:bg-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl min-w-[280px]"
                >
                    Book 1 on 1 Recovery Session
                </a>
                 <a 
                    href="https://calendar.app.google/fmRwb9ePieQpCD8m9"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-kwk-teal text-white hover:bg-white hover:text-kwk-teal font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl min-w-[280px]"
                >
                    Book Recovery Care on Wheels
                </a>
             </div>
             
            <Link 
                to="/vald-hub"
                className="inline-flex items-center justify-center bg-transparent border-2 border-gray-600 text-gray-300 hover:border-kwk-teal hover:text-kwk-teal font-bold py-3 px-10 rounded-full text-base transition-all mt-2"
            >
                Build #Mission2Move Profile
            </Link>
          </div>
        </div>
      </div>

      {/* II. VALD PERFORMANCE & MOVEMENT DIAGNOSTICS */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <BarChart2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h2 className="text-3xl md:text-5xl font-black uppercase italic">VALD Performance & <span className="text-orange-500">Diagnostics</span></h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Objective data to bridge the gap between rehab and performance.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-orange-500 transition-colors">
                    <h3 className="font-bold text-xl mb-2 text-white">Baseline Assessment</h3>
                    <p className="text-gray-500 text-sm">Individual screening for asymmetry, force production, and power output.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-orange-500 transition-colors">
                    <h3 className="font-bold text-xl mb-2 text-white">Team Screenings</h3>
                    <p className="text-gray-500 text-sm">Mobile full-roster analysis with injury risk markers and summary reports.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-orange-500 transition-colors">
                    <h3 className="font-bold text-xl mb-2 text-white">Pre/Post Season</h3>
                    <p className="text-gray-500 text-sm">Track seasonal progression and establish return-to-play metrics.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-orange-500 transition-colors">
                    <h3 className="font-bold text-xl mb-2 text-white">Interpretation</h3>
                    <p className="text-gray-500 text-sm">Workshops for coaches on reading ForceDecks data and programming.</p>
                </div>
            </div>
        </div>
      </section>

      {/* IV. RECOVERY ROOM ON WHEELS (MOBILE UNIT + TEAMCARE) */}
      <section className="py-20 px-4 bg-kwk-teal">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">Recovery Room <span className="text-kwk-lime">On Wheels</span></h2>
                    <p className="text-white/90 mt-2">Mobile Clinical Recovery & TeamCare Subscriptions</p>
                </div>
                <Truck className="w-12 h-12 text-kwk-lime hidden md:block" />
            </div>

            {/* Mobile Services Grid */}
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Mobile Services</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-kwk-lime">
                    <h4 className="font-bold text-lg text-gray-900">Team Recovery Analysis</h4>
                    <p className="text-kwk-teal font-bold mb-2">$500 per block</p>
                    <p className="text-sm text-gray-600">Injury triage, manual therapy, and needling on-site.</p>
                    <a href="https://calendar.app.google/fmRwb9ePieQpCD8m9" target="_blank" rel="noreferrer" className="text-xs font-bold text-kwk-teal mt-4 inline-block hover:underline">Book Mobile Service &rarr;</a>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-kwk-lime">
                    <h4 className="font-bold text-lg text-gray-900">Facility Pop-Up</h4>
                    <p className="text-kwk-teal font-bold mb-2">Custom Quote</p>
                    <p className="text-sm text-gray-600">Recurring "Recovery Tuesdays" for gyms and corporate wellness.</p>
                    <a href="https://calendar.app.google/fmRwb9ePieQpCD8m9" target="_blank" rel="noreferrer" className="text-xs font-bold text-kwk-teal mt-4 inline-block hover:underline">Request Pop-Up &rarr;</a>
                </div>
                 <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-kwk-lime">
                    <h4 className="font-bold text-lg text-gray-900">Community Events</h4>
                    <p className="text-kwk-teal font-bold mb-2">Custom Quote</p>
                    <p className="text-sm text-gray-600">Support for festivals, 5Ks, and health fairs.</p>
                    <a href="https://calendar.app.google/fmRwb9ePieQpCD8m9" target="_blank" rel="noreferrer" className="text-xs font-bold text-kwk-teal mt-4 inline-block hover:underline">Inquire for Event &rarr;</a>
                </div>
            </div>

            {/* TeamCare Subscription Packages */}
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">TeamCare Subscriptions</h3>
            <div className="grid md:grid-cols-3 gap-8">
                 <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                    <h4 className="text-2xl font-black text-gray-900">BRONZE</h4>
                    <p className="text-gray-500 text-sm uppercase mb-4">VALD Baseline Plan</p>
                    <p className="text-3xl font-bold text-kwk-teal mb-4">$500 <span className="text-base font-normal text-gray-400">/ season</span></p>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Full roster VALD data</li>
                        <li>• Individual + Team Risk Reports</li>
                    </ul>
                 </div>
                 <div className="bg-white border-4 border-kwk-lime p-8 rounded-2xl relative">
                    <div className="absolute top-0 right-0 bg-kwk-lime text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                    <h4 className="text-2xl font-black text-gray-900">SILVER</h4>
                    <p className="text-gray-500 text-sm uppercase mb-4">Recovery Integration</p>
                    <p className="text-3xl font-bold text-kwk-teal mb-4">$750 <span className="text-base font-normal text-gray-400">/ season</span></p>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>• <strong>Bronze Included</strong></li>
                        <li>• Add 1 On-Site Recovery Event</li>
                        <li>• In-season maintenance</li>
                    </ul>
                 </div>
                 <div className="bg-gray-900 text-white p-8 rounded-2xl border border-gray-800">
                    <h4 className="text-2xl font-black text-white">GOLD</h4>
                    <p className="text-gray-400 text-sm uppercase mb-4">Full Integration</p>
                    <p className="text-3xl font-bold text-kwk-lime mb-4">$1000+ <span className="text-base font-normal text-gray-400">/ season</span></p>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li>• <strong>Silver Included</strong></li>
                        <li>• Coach & Parent Education</li>
                        <li>• Priority Scheduling</li>
                    </ul>
                 </div>
            </div>
            <div className="mt-8 text-center">
                 <a href="https://calendar.app.google/fmRwb9ePieQpCD8m9" target="_blank" rel="noreferrer" className="inline-block bg-white text-kwk-teal font-bold py-3 px-8 rounded-full hover:bg-kwk-lime hover:text-gray-900 transition-colors">
                    Book TeamCare Partnership
                </a>
            </div>
        </div>
      </section>

      {/* V. PERFORMANCE PROGRAMS & LABS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
             <div className="text-center mb-12">
                <Zap className="w-10 h-10 text-kwk-lime mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Performance Programs & Labs</h2>
                <p className="text-gray-500">Specialized labs developed for specific athlete populations.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl border-t-4 border-kwk-lime">
                    <h4 className="font-bold text-lg mb-2">Golf Guys / Rotational Lab</h4>
                    <p className="text-sm text-gray-600">Swing mechanics, T-spine rotation, hip disassociation, and VALD rotational metrics.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border-t-4 border-kwk-teal">
                    <h4 className="font-bold text-lg mb-2">Girls Night In</h4>
                    <p className="text-sm text-gray-600">Female athlete program focusing on ACL prevention, hip/core control, and RED-S education.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border-t-4 border-kwk-lime">
                    <h4 className="font-bold text-lg mb-2">Youth Athlete 101</h4>
                    <p className="text-sm text-gray-600">Ages 8-12. Movement fundamentals, speed, agility, and warm-up science.</p>
                </div>
                 <div className="p-6 bg-gray-50 rounded-xl border-t-4 border-kwk-teal">
                    <h4 className="font-bold text-lg mb-2">Elite Lab</h4>
                    <p className="text-sm text-gray-600">HS/College. Plyometrics, Olympic lifts, ESD, and VALD-driven programming.</p>
                </div>
                {/* Additional Programs */}
                 <div className="p-6 bg-gray-50 rounded-xl border-t-4 border-gray-900">
                    <h4 className="font-bold text-lg mb-2">Active Aging Mobility</h4>
                    <p className="text-sm text-gray-600">Balance, gait, and fall prevention for older adults and senior communities.</p>
                </div>
                 <div className="p-6 bg-gray-50 rounded-xl border-t-4 border-purple-500">
                    <h4 className="font-bold text-lg mb-2">Just Dance Lab</h4>
                    <p className="text-sm text-gray-600">Turnout mechanics, ankle/hip control for ballet and hip-hop dancers.</p>
                </div>
                 <div className="p-6 bg-gray-50 rounded-xl border-t-4 border-orange-500">
                    <h4 className="font-bold text-lg mb-2">Mission2Move Workshops</h4>
                    <p className="text-sm text-gray-600">Movement literacy, stress reduction, and movement practice for community groups.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border-t-4 border-kwk-teal">
                    <h4 className="font-bold text-lg mb-2">Kinesiology for Performance</h4>
                    <p className="text-sm text-gray-600">Educational workshops on movement mechanics and taping for stability and recovery.</p>
                </div>
            </div>
            <div className="mt-10 text-center">
                 <a href="https://calendar.app.google/fmRwb9ePieQpCD8m9" target="_blank" rel="noreferrer" className="inline-flex items-center bg-kwk-teal text-white font-bold py-3 px-8 rounded-full hover:bg-kwk-lime hover:text-gray-900 transition-colors">
                    Book Performance Lab
                </a>
            </div>
        </div>
      </section>

      {/* VI. WORKSHOPS & EDUCATION */}
      <section className="py-20 px-4 bg-gray-50">
         <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
                <BookOpen className="w-8 h-8 text-kwk-teal" />
                <h2 className="text-3xl font-bold text-gray-900">Workshops, Courses & Education</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="font-bold text-xl mb-6 uppercase tracking-wider text-kwk-teal">Core Workshops</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <Shield className="w-5 h-5 text-kwk-lime mr-3 mt-1" />
                            <div>
                                <span className="font-bold text-gray-900">Injury Prevention 101:</span>
                                <span className="text-gray-600 ml-1">ACL, hamstring, shoulder, ankle risk reduction.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Activity className="w-5 h-5 text-kwk-lime mr-3 mt-1" />
                            <div>
                                <span className="font-bold text-gray-900">Movement Foundations:</span>
                                <span className="text-gray-600 ml-1">Mobility vs flexibility, joint centration, stability drills (90 min).</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Users className="w-5 h-5 text-kwk-lime mr-3 mt-1" />
                            <div>
                                <span className="font-bold text-gray-900">Warm-Up Science:</span>
                                <span className="text-gray-600 ml-1">RAMP Protocol and sport-specific activation for coaches.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                             <Heart className="w-5 h-5 text-kwk-lime mr-3 mt-1" />
                            <div>
                                <span className="font-bold text-gray-900">Parent Education:</span>
                                <span className="text-gray-600 ml-1">Load, growth, early specialization myths, and growth plate risks.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                
                 <div>
                    <h3 className="font-bold text-xl mb-6 uppercase tracking-wider text-kwk-teal">Digital & Corporate</h3>
                    <ul className="space-y-4">
                        <li className="bg-white p-4 rounded-lg shadow-sm">
                            <span className="font-bold text-gray-900 block">Corporate "Movement is Medicine"</span>
                            <span className="text-sm text-gray-600">Desk worker health, movement snacks, and posture resets.</span>
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow-sm">
                            <span className="font-bold text-gray-900 block">Faith & Movement Workshop</span>
                            <span className="text-sm text-gray-600">Stewardship of the body, movement as worship, devotion + mobility.</span>
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow-sm">
                            <span className="font-bold text-gray-900 block">Digital Course Development</span>
                            <span className="text-sm text-gray-600">"You Have More Range Than You Think", Faith + Movement, and VALD Mini Courses.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 text-center">
                 <a href="https://calendar.app.google/fmRwb9ePieQpCD8m9" target="_blank" rel="noreferrer" className="inline-flex items-center bg-kwk-teal text-white font-bold py-3 px-8 rounded-full hover:bg-kwk-lime hover:text-gray-900 transition-colors">
                    Request an On-Site Workshop
                </a>
            </div>
         </div>
      </section>

      {/* VII. #MISSION2MOVE */}
      <section className="py-20 px-4 bg-kwk-teal text-white">
          <div className="max-w-7xl mx-auto text-center">
              <Star className="w-12 h-12 text-kwk-lime mx-auto mb-6" />
              <h2 className="text-4xl font-black mb-6">#Mission2Move</h2>
              <p className="text-xl max-w-3xl mx-auto mb-12">Community & Faith Initiatives. Movement is Medicine. Faith is Fuel.</p>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="font-bold text-kwk-lime mb-2">Silver Strength Circles</h4>
                      <p className="text-xs">Seniors: Mobility + balance + devotion.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="font-bold text-kwk-lime mb-2">Faith in Motion Walks</h4>
                      <p className="text-xs">Intergenerational gratitude walks & mentorship.</p>
                  </div>
                   <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="font-bold text-kwk-lime mb-2">Scholarship Profiles</h4>
                      <p className="text-xs">Donor-supported assessments for underserved youth.</p>
                  </div>
                   <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="font-bold text-kwk-lime mb-2">Sponsored Athletes</h4>
                      <p className="text-xs">Talent-based support for performance plans.</p>
                  </div>
                   <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="font-bold text-kwk-lime mb-2">Community Events</h4>
                      <p className="text-xs">Walks, pop-ups, and youth outreach activations.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* VIII. PARTNERSHIPS */}
      <section className="py-20 px-4 bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnerships & Affiliates</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                   <div>
                       <h4 className="text-white font-bold mb-2">Gyms & Fitness</h4>
                       <p className="text-sm">Recovery pop-ups, VALD labs.</p>
                   </div>
                   <div>
                       <h4 className="text-white font-bold mb-2">Schools & Youth</h4>
                       <p className="text-sm">TeamCare, GNI, Coach Ed.</p>
                   </div>
                   <div>
                       <h4 className="text-white font-bold mb-2">Corporate Wellness</h4>
                       <p className="text-sm">On-site recovery, Ergonomics.</p>
                   </div>
                   <div>
                       <h4 className="text-white font-bold mb-2">Faith Orgs</h4>
                       <p className="text-sm">Strength for Service, Circles.</p>
                   </div>
              </div>
          </div>
      </section>

      {/* CLINICAL RECOVERY CARE (1:1) - MOVED TO BOTTOM */}
      <section className="py-20 px-4 relative z-30 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
             <div className="text-center mb-12">
                <div className="inline-block bg-kwk-lime text-kwk-dark font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-4">The Recovery Room</div>
                <h3 className="text-4xl font-extrabold text-gray-900">Clinical Recovery Care (1:1)</h3>
                <p className="text-gray-500 mt-2">Private sessions at our Fixed Location: 1104 Bolin Ct, Springfield IL</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* Movement Profile */}
                <div className="bg-white p-8 border-t-4 border-kwk-lime rounded-2xl shadow-xl flex flex-col hover:shadow-2xl transition-shadow">
                    <div className="text-3xl font-extrabold text-kwk-teal mb-2 leading-tight">Movement Profile</div>
                    <p className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wide">60 min | $100</p>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                        Full VALD "check engine light" screening. Asymmetry, power output, and readiness metrics.
                    </p>
                    <a href="https://calendar.app.google/vU5ntX6YqskUjiZv7" target="_blank" rel="noreferrer" className="block w-full text-center bg-kwk-dark text-white font-bold py-3 rounded-lg hover:bg-kwk-lime hover:text-gray-900 transition-colors">Book Profile</a>
                </div>
                
                {/* Recovery Session */}
                <div className="bg-white p-8 border-t-4 border-kwk-teal rounded-2xl shadow-xl flex flex-col hover:shadow-2xl transition-shadow">
                    <div className="text-2xl font-bold mb-2 text-gray-900">Recovery Session</div>
                    <p className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wide">60 min | $100</p>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                       Hybrid of cupping, manual therapy, needling, and scraping. The full clinical works. (45 min option: $75)
                    </p>
                    <a href="https://calendar.app.google/vU5ntX6YqskUjiZv7" target="_blank" rel="noreferrer" className="block w-full text-center bg-white border-2 border-kwk-dark text-kwk-dark font-bold py-3 rounded-lg hover:bg-kwk-dark hover:text-white transition-colors">Book Session</a>
                </div>

                {/* Friends & Family */}
                <div className="bg-white p-8 border-t-4 border-gray-400 rounded-2xl shadow-xl flex flex-col hover:shadow-2xl transition-shadow">
                    <div className="text-2xl font-bold mb-2 text-gray-900">Friends & Family</div>
                    <p className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wide">Package of 5</p>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                        5 Recovery Sessions (45 min each) for $250. Shareable or perfect for consistent maintenance.
                    </p>
                    <a href="https://calendar.app.google/vU5ntX6YqskUjiZv7" target="_blank" rel="noreferrer" className="block w-full text-center bg-white border-2 border-gray-300 text-gray-600 font-bold py-3 rounded-lg hover:border-kwk-teal hover:text-kwk-teal transition-colors">Book Package</a>
                </div>

                {/* Modalities Row */}
                <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 group hover:border-kwk-teal transition-colors">
                        <h4 className="font-bold text-lg text-gray-900">Dry Needling (CIDN)</h4>
                        <p className="text-sm text-gray-500 mb-2">30 min | $50</p>
                        <p className="text-xs text-gray-400">Neuromuscular reset, trigger point release.</p>
                    </div>
                     <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 group hover:border-kwk-teal transition-colors">
                        <h4 className="font-bold text-lg text-gray-900">Cupping Therapy</h4>
                        <p className="text-sm text-gray-500 mb-2">30 min | $50</p>
                        <p className="text-xs text-gray-400">Myofascial decompression, blood flow.</p>
                    </div>
                     <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 group hover:border-kwk-teal transition-colors">
                        <h4 className="font-bold text-lg text-gray-900">Manual Therapy</h4>
                        <p className="text-sm text-gray-500 mb-2">30 min | $50</p>
                        <p className="text-xs text-gray-400">Joint mobilization, soft tissue work.</p>
                    </div>
                </div>
            </div>
            
            <div className="text-center max-w-2xl mx-auto">
                 <p className="text-sm text-gray-500 italic">
                    Services provided by Dr. Kelly Neumann, DPT. <strong>Consent required prior to treatment.</strong>
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
