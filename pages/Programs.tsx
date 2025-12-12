
import React from 'react';

const Programs: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-kwk-teal text-white py-20 px-4 rounded-b-3xl">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-sm font-bold text-kwk-lime uppercase tracking-widest mb-2">Delivered On-Site (Starting at $250)</h1>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Educational Workshops & Courses</h2>
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl">
            Dr. Kelly brings specialized, evidence-based education directly to your team, church, or community group.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Program 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-lime hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Injury Prevention (Ages 12+)</h4>
                <p className="text-sm text-kwk-teal font-bold uppercase tracking-wider mb-4">ACL Reduction & Deceleration</p>
                <p className="text-gray-600 mb-6 flex-grow">
                    Using data-driven methods, we teach landing mechanics, deceleration strategies, and strength balancing to significantly reduce non-contact injury risk.
                </p>
            </div>
            
            {/* Program 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-lime hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Movement Foundations</h4>
                <p className="text-sm text-kwk-teal font-bold uppercase tracking-wider mb-4">Pain-Free Blueprint (90 Mins)</p>
                <p className="text-gray-600 mb-6 flex-grow">
                    Addressing the root cause of chronic pain by correcting core patterns, breathing, posture, and foundational movement mechanics.
                </p>
            </div>

            {/* Program 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-lime hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Girls Night In (GNI)</h4>
                <p className="text-sm text-kwk-teal font-bold uppercase tracking-wider mb-4">Women's Wellness & Core</p>
                <p className="text-gray-600 mb-6 flex-grow">
                    A safe space for honest conversation and education focusing on pelvic health, core stability, and hip health for female athletes and women.
                </p>
            </div>

            {/* Program 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-teal hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Silver Strength Circles</h4>
                <p className="text-sm text-kwk-lime font-bold uppercase tracking-wider mb-4">Faith-Based Seniors & Mobility</p>
                <p className="text-gray-600 mb-6 flex-grow">
                    Combines devotion and community with active mobility and balance maintenance exercises to promote independent living.
                </p>
            </div>
            
            {/* Program 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-teal hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Active Aging (55+)</h4>
                <p className="text-sm text-kwk-lime font-bold uppercase tracking-wider mb-4">Fall Prevention & Independence</p>
                <p className="text-gray-600 mb-6 flex-grow">
                    Functional strength and balance training designed to maintain the capacity to move freely and safely for older adults.
                </p>
            </div>
            
            {/* Program 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-teal hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Faith in Motion Walks</h4>
                <p className="text-sm text-kwk-lime font-bold uppercase tracking-wider mb-4">Intergenerational Mentorship</p>
                <p className="text-gray-600 mb-6 flex-grow">
                    Structured walking groups connecting youth and elders, focused on gratitude, community, and the spiritual stewardship of the body.
                </p>
            </div>
          </div>

          {/* Program CTA */}
          <div className="mt-16 text-center">
            <a 
                href="https://calendar.app.google/L12Q327BPatRQbza6" 
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-kwk-teal text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:bg-kwk-lime hover:text-gray-900 transition-all uppercase tracking-widest"
            >
                Request an On-Site Workshop
            </a>
            <p className="mt-4 text-sm text-gray-500">All workshops are delivered via The Recovery Room on Wheels.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
