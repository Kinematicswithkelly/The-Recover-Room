
import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <header className="bg-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">The Recovery Room Pricing</h1>
            <p className="text-xl text-gray-600">Transparent pricing for measurable results. Contracts, not subscriptions.</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-16">
        
        {/* B2B / TeamCare */}
        <div className="mb-20">
            <h2 className="text-2xl font-bold text-kwk-teal uppercase tracking-wider mb-8 text-center">A. Recovery Room on Wheels (Team/Corporate)</h2>
            <div className="grid md:grid-cols-3 gap-6">
                
                {/* Bronze */}
                <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900">BRONZE</h3>
                    <div className="text-3xl font-extrabold text-kwk-teal mt-2 mb-1">$500</div>
                    <div className="text-xs text-gray-500 mb-6">per package/contract</div>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start"><Check className="w-4 h-4 text-kwk-lime mr-2 mt-1"/> Choice of Tech (VALD Analysis)</li>
                        <li className="flex items-start"><Check className="w-4 h-4 text-kwk-lime mr-2 mt-1"/> Team Summary Risk Report</li>
                        <li className="flex items-start"><Check className="w-4 h-4 text-kwk-lime mr-2 mt-1"/> Remote Coach Consult</li>
                    </ul>
                     <a href="https://calendar.app.google/L12Q327BPatRQbza6" target="_blank" rel="noreferrer" className="block w-full text-center mt-8 bg-gray-900 text-white py-2 rounded-lg text-sm font-bold hover:bg-kwk-lime hover:text-gray-900">Inquire</a>
                </div>

                {/* Silver */}
                <div className="border-2 border-kwk-teal rounded-xl p-8 shadow-lg relative bg-teal-50/30">
                    <div className="absolute top-0 right-0 bg-kwk-teal text-white text-xs font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
                    <h3 className="text-xl font-bold text-gray-900">SILVER</h3>
                    <div className="text-3xl font-extrabold text-kwk-teal mt-2 mb-1">$750</div>
                    <div className="text-xs text-gray-500 mb-6">per package/contract</div>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start"><Check className="w-4 h-4 text-kwk-teal mr-2 mt-1"/> <strong>Everything in Bronze</strong></li>
                        <li className="flex items-start"><Check className="w-4 h-4 text-kwk-teal mr-2 mt-1"/> One On-Site Team Workshop</li>
                        <li className="flex items-start"><Check className="w-4 h-4 text-kwk-teal mr-2 mt-1"/> ($250 value included)</li>
                    </ul>
                     <a href="https://calendar.app.google/L12Q327BPatRQbza6" target="_blank" rel="noreferrer" className="block w-full text-center mt-8 bg-kwk-teal text-white py-2 rounded-lg text-sm font-bold hover:bg-kwk-lime hover:text-gray-900">Inquire</a>
                </div>

                {/* Gold */}
                <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900">GOLD</h3>
                    <div className="text-3xl font-extrabold text-kwk-teal mt-2 mb-1">$1,000</div>
                    <div className="text-xs text-gray-500 mb-6">per package/contract</div>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start"><Check className="w-4 h-4 text-kwk-lime mr-2 mt-1"/> <strong>Everything in Silver</strong></li>
                        <li className="flex items-start"><Check className="w-4 h-4 text-kwk-lime mr-2 mt-1"/> On-Site Recovery Treatment Block</li>
                        <li className="flex items-start"><Check className="w-4 h-4 text-kwk-lime mr-2 mt-1"/> IDN, Cupping, Manual Therapy</li>
                    </ul>
                     <a href="https://calendar.app.google/L12Q327BPatRQbza6" target="_blank" rel="noreferrer" className="block w-full text-center mt-8 bg-gray-900 text-white py-2 rounded-lg text-sm font-bold hover:bg-kwk-lime hover:text-gray-900">Inquire</a>
                </div>
            </div>
        </div>

        {/* B. Individual 1:1 Sessions */}
        <div className="mb-20">
             <h2 className="text-2xl font-bold text-kwk-teal uppercase tracking-wider mb-8 text-center">B. Individual 1:1 Sessions (Fixed Location)</h2>
             <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                     <thead>
                         <tr className="border-b-2 border-gray-100">
                             <th className="py-4 px-2 font-bold text-gray-900">Service</th>
                             <th className="py-4 px-2 font-bold text-gray-900">Duration</th>
                             <th className="py-4 px-2 font-bold text-gray-900 text-right">Investment</th>
                         </tr>
                     </thead>
                     <tbody className="text-sm md:text-base">
                         <tr className="border-b border-gray-100 hover:bg-gray-50">
                             <td className="py-4 px-2 font-medium text-kwk-teal">Movement Profile (VALD)</td>
                             <td className="py-4 px-2 text-gray-500">60 min</td>
                             <td className="py-4 px-2 text-right font-bold">$100</td>
                         </tr>
                         <tr className="border-b border-gray-100 hover:bg-gray-50">
                             <td className="py-4 px-2 text-gray-700">Recovery Session (Comprehensive)</td>
                             <td className="py-4 px-2 text-gray-500">60 min</td>
                             <td className="py-4 px-2 text-right font-bold">$100</td>
                         </tr>
                         <tr className="border-b border-gray-100 hover:bg-gray-50">
                             <td className="py-4 px-2 text-gray-700">Recovery Session (General)</td>
                             <td className="py-4 px-2 text-gray-500">45 min</td>
                             <td className="py-4 px-2 text-right font-bold">$75</td>
                         </tr>
                         <tr className="border-b border-gray-100 hover:bg-gray-50">
                             <td className="py-4 px-2 text-gray-700">Standalone Modalities</td>
                             <td className="py-4 px-2 text-gray-500">30 min</td>
                             <td className="py-4 px-2 text-right font-bold">$50</td>
                         </tr>
                     </tbody>
                 </table>
             </div>
        </div>

        {/* C. Workshops & Analysis */}
        <div className="mb-20">
             <h2 className="text-2xl font-bold text-kwk-teal uppercase tracking-wider mb-8 text-center">C. Workshops & Standalone Analysis</h2>
             <div className="overflow-x-auto bg-gray-50 rounded-xl p-6 border border-gray-200">
                 <table className="w-full text-left border-collapse">
                     <tbody className="text-sm md:text-base">
                         <tr className="border-b border-gray-200">
                             <td className="py-4 px-2 font-bold text-gray-900">Team Recovery & Movement Analysis</td>
                             <td className="py-4 px-2 text-gray-600">Per Team Block (2-3 hrs)</td>
                             <td className="py-4 px-2 text-right font-bold text-kwk-teal">$500</td>
                         </tr>
                         <tr className="border-b border-gray-200">
                             <td className="py-4 px-2 font-bold text-gray-900">On-Site Educational Workshop</td>
                             <td className="py-4 px-2 text-gray-600">Schools, Churches, Events</td>
                             <td className="py-4 px-2 text-right font-bold text-kwk-teal">Starts at $250</td>
                         </tr>
                         <tr>
                             <td className="py-4 px-2 font-bold text-gray-900">Corporate Recovery Pop-Up</td>
                             <td className="py-4 px-2 text-gray-600">On-site employee recovery</td>
                             <td className="py-4 px-2 text-right font-bold text-kwk-teal">Custom Quote</td>
                         </tr>
                     </tbody>
                 </table>
             </div>
        </div>

        {/* Affiliates Section */}
        <div className="bg-gray-900 text-white rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Affiliates & Partnerships</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Join the #Mission2Move ecosystem. We partner with gyms, schools, and corporate wellness directors to bring objective data to your population.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-xl font-bold text-kwk-lime mb-2">Revenue Share</h4>
                    <p className="text-sm text-gray-400">
                        Gold Tier partners and recurring corporate contracts are eligible for revenue sharing models to reinvest in their own facilities or donate to the #Mission2Move scholarship fund.
                    </p>
                </div>
                 <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-xl font-bold text-kwk-lime mb-2">Preferred Access</h4>
                    <p className="text-sm text-gray-400">
                        Affiliates receive priority booking slots for the Recovery Room on Wheels and discounted rates for seasonal workshops.
                    </p>
                </div>
            </div>
            <a href="https://calendar.app.google/L12Q327BPatRQbza6" target="_blank" rel="noreferrer" className="inline-block mt-10 border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-colors">
                Discuss Partnership
            </a>
        </div>

      </section>
    </div>
  );
};

export default Pricing;
