
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h4 className="text-2xl font-bold text-white mb-2 tracking-wide">Kinematics with Kelly</h4>
        <p className="text-sm text-kwk-lime mb-8 uppercase tracking-widest">Restore. Optimize. Maintain.</p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium">
          <Link to="/" className="hover:text-kwk-lime transition-colors">The Recovery Room</Link>
          <Link to="/vald-hub" className="hover:text-kwk-lime transition-colors">VALD Hub</Link>
          <Link to="/services" className="hover:text-kwk-lime transition-colors">On Wheels</Link>
          <Link to="/workshops" className="hover:text-kwk-lime transition-colors">Workshops</Link>
          <Link to="/booking" className="hover:text-kwk-lime transition-colors">Booking</Link>
          <Link to="/mission" className="hover:text-kwk-lime transition-colors">#Mission2Move</Link>
        </div>

        <div className="w-full h-px bg-gray-800 mb-8 max-w-2xl mx-auto"></div>

        <p className="text-xs italic text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Services provided by Dr. Kelly Neumann, Physical Therapist, DPT. 
          <br />
          <a 
            href="https://docs.google.com/document/d/1fDcNj0LoPTNdSQ5K-sbD9V9KiG8ILB0PnfeM1CB6dwI/edit?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            className="text-kwk-teal hover:text-kwk-lime underline font-bold"
          >
            **Consent required prior to treatment. Click to view Safety Policy.**
          </a>
          <br/>
          All data collected via VALD systems is secure and used solely for performance optimization.
        </p>
        <p className="mt-4 text-xs text-gray-700">
            &copy; {new Date().getFullYear()} Kinematics with Kelly. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
