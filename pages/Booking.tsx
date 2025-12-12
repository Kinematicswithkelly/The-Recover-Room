
import React from 'react';
import { Check, MapPin, Truck, ArrowRight, Calendar } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gray-900 text-white py-20 px-4 rounded-b-3xl">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Booking & Pricing Hub</h1>
            <p className="text-xl text-gray-400">Transparent pricing for measurable results. Choose your path below.</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        
        {/* Split Screen Logic */}
        <div className="grid lg:grid-cols-2 gap-8">
            
            {/* LEFT COLUMN: THE RECOVERY ROOM (FIXED) */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-kwk-lime">
                <div className="p-8 md:p-10">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-kwk-lime/20 p-3 rounded-full">
                            <MapPin className="w-8 h-8 text-kwk-dark" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 uppercase">The Recovery Room</h2>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Fixed Location: 1104 Bolin Ct</p>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-8">
                        Precision 1:1 clinical care for individuals. Focus on pain resolution, injury recovery, and objective VALD testing.
                    </p>
                    
                    {/* 1:1 Pricing Table */}
                    <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-8">
                        <table className="w-full text-left">
                            <thead className="bg-gray-100 text-gray-900 font-bold text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-3">Service</th>
                                    <th className="px-6 py-3 text-right">Investment</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-sm">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-kwk-teal">Movement Profile (VALD)</td>
                                    <td className="px-6 py-4 text-right font-bold">$100</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">Recovery Session (60m)</td>
                                    <td className="px-6 py-4 text-right font-bold">$100</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">Recovery Session (45m)</td>
                                    <td className="px-6 py-4 text-right font-bold">$75</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">Clinical Recovery Modalities (30m)</td>
                                    <td className="px-6 py-4 text-right font-bold">$50</td>
                                </tr>
                                 <tr>
                                    <td className="px-6 py-4 text-gray-500 italic">Friends & Family (5x 45m)</td>
                                    <td className="px-6 py-4 text-right font-bold">$250</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <a 
                        href="https://calendar.app.google/vU5ntX6YqskUjiZv7" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center w-full bg-kwk-lime text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-900 hover:text-white transition-all shadow-lg text-lg uppercase tracking-wide"
                    >
                        <Calendar className="w-5 h-5 mr-2" />
                        Book 1:1 Session
                    </a>
                </div>
            </div>

            {/* RIGHT COLUMN: ON WHEELS (MOBILE) */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-kwk-teal">
                <div className="p-8 md:p-10">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-kwk-teal/20 p-3 rounded-full">
                            <Truck className="w-8 h-8 text-kwk-teal" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 uppercase">On Wheels</h2>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Mobile Team & Corporate Services</p>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-8">
                        We bring the clinic to you. TeamCare packages, educational workshops, and corporate wellness pop-ups.
                    </p>

                    {/* Mobile Pricing Table */}
                     <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-8">
                        <table className="w-full text-left">
                            <thead className="bg-gray-100 text-gray-900 font-bold text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-3">Package / Service</th>
                                    <th className="px-6 py-3 text-right">Investment</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-sm">
                                <tr>
                                    <td className="px-6 py-4 font-bold text-gray-900">TeamCare Bronze</td>
                                    <td className="px-6 py-4 text-right font-bold">$500 <span className="text-xs font-normal text-gray-500">/ season</span></td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-kwk-teal">TeamCare Silver</td>
                                    <td className="px-6 py-4 text-right font-bold">$750 <span className="text-xs font-normal text-gray-500">/ season</span></td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-gray-900">TeamCare Gold</td>
                                    <td className="px-6 py-4 text-right font-bold">$1,000+</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">Team Recovery Block (2-3hr)</td>
                                    <td className="px-6 py-4 text-right font-bold">$500</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">On-Site Workshop</td>
                                    <td className="px-6 py-4 text-right font-bold">Starts at $250</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                     <a 
                        href="https://calendar.app.google/fmRwb9ePieQpCD8m9" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center w-full bg-kwk-teal text-white font-bold py-4 rounded-xl hover:bg-gray-900 hover:text-white transition-all shadow-lg text-lg uppercase tracking-wide"
                    >
                        <Calendar className="w-5 h-5 mr-2" />
                        Request Mobile Service
                    </a>
                </div>
            </div>

        </div>

        {/* Affiliate / Partnership Section */}
        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Looking for a Partnership?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Gyms, Schools, and Corporate Wellness Directors: We offer revenue-sharing models and preferred access for ongoing partnerships.
            </p>
            <a href="https://calendar.app.google/fmRwb9ePieQpCD8m9" target="_blank" rel="noreferrer" className="inline-block border border-kwk-lime text-kwk-lime font-bold py-3 px-8 rounded-full hover:bg-kwk-lime hover:text-gray-900 transition-colors">
                Discuss Partnership Opportunities
            </a>
        </div>

      </div>
    </div>
  );
};

export default Booking;
