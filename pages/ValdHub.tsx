
import React from 'react';
import { BarChart2, Target, TrendingUp, ClipboardCheck } from 'lucide-react';

const ValdHub: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-orange-600 selection:text-white">
      
      {/* Dynamic Header */}
      <header className="relative pt-32 pb-40 px-4 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-kwk-lime rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
            
            {/* Dynamic Logo Inclusion */}
            <div className="flex justify-center mb-12">
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-kwk-lime rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <img 
                        src="/assets/KWK-logo.png" 
                        alt="Kinematics with Kelly Logo" 
                        className="relative h-24 md:h-32 w-auto object-contain transition-transform transform group-hover:scale-105"
                        onError={(e) => {
                            e.currentTarget.onerror = null; 
                            e.currentTarget.src='https://placehold.co/150x150/111827/38D43B?text=KWK';
                        }}
                    />
                 </div>
            </div>

            <div className="inline-flex items-center space-x-2 border border-orange-500/50 bg-orange-500/10 rounded-full px-6 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
                <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm">Introducing the Central IL VALD Hub</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter italic uppercase">
                The Recovery <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Room</span>
            </h1>
             <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-8 uppercase tracking-widest">
                Sports Performance and Recovery
            </h2>
            
            <p className="text-xl md:text-2xl font-bold text-gray-400 max-w-4xl mx-auto uppercase leading-tight mb-12">
                Stop Guessing. <span className="text-white">Start Measuring.</span>
            </p>

             <div className="flex flex-col md:flex-row justify-center gap-6">
                 <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeyE4tM7gXHrt6fZ6cn8eRJUS1cAAMhnpGLJrh7ciEGHn24XA/viewform?usp=header" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-[0_0_20px_rgba(234,88,12,0.5)]"
                >
                    <ClipboardCheck className="w-6 h-6 mr-2" />
                    Fill Out Movement Profile Intake
                </a>
                
                <a 
                    href="https://calendar.app.google/vU5ntX6YqskUjiZv7" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-kwk-lime text-gray-900 font-bold py-4 px-10 rounded-full text-lg uppercase tracking-widest hover:bg-white hover:text-kwk-lime transition-all shadow-[0_0_20px_rgba(56,212,59,0.5)]"
                >
                    Book 1:1 Movement Profile Today
                </a>
             </div>
        </div>
      </header>

      {/* Main Content / Statistics */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Col: Text */}
            <div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 italic uppercase">
                    Build Your <br/>
                    <span className="text-orange-500">Athlete DNA</span>
                </h3>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                    Athleticism isn't just a feeling—it's physics. As the **Central IL VALD Hub**, we capture neuromuscular performance with military-grade precision. We analyze force, power, and asymmetry to build a roadmap that bridges the gap between rehabilitation and elite performance.
                </p>
                
                <div className="border-l-4 border-kwk-lime pl-6 py-2 mb-10 bg-gray-900/50 rounded-r-xl">
                    <h4 className="text-kwk-lime font-bold uppercase text-lg mb-1 flex items-center gap-2">
                        <Target className="w-5 h-5" /> The 15% Rule
                    </h4>
                    <p className="text-gray-300 text-sm">
                        Limb asymmetry greater than <strong>15%</strong> drastically increases non-contact injury risk. We identify this red flag before it benches you.
                    </p>
                </div>
            </div>

            {/* Right Col: Graphic/Cards */}
            <div className="grid gap-6">
                <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl relative overflow-hidden group hover:border-orange-500 transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <BarChart2 className="w-32 h-32 text-orange-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">Force Production</h4>
                    <p className="text-gray-500 text-sm">Measure exactly how much force you put into the ground—and the rate at which you produce it (RFD).</p>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl relative overflow-hidden group hover:border-kwk-lime transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <TrendingUp className="w-32 h-32 text-kwk-lime" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-kwk-lime transition-colors">Dynamic Balance</h4>
                    <p className="text-gray-500 text-sm">Assess stability and neuromuscular control during movement to prevent falls and improve agility.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ValdHub;
