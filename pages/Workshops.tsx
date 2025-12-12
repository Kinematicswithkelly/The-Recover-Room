
import React from 'react';
import { ArrowRight, Activity, Heart, Users, Shield, Zap, BookOpen, Mic } from 'lucide-react';

const Workshops: React.FC = () => {
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

      {/* Workshops Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Workshop 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-lime hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Injury Prevention (Ages 12+)</h4>
                <p className="text-sm text-kwk-teal font-bold uppercase tracking-wider mb-4">ACL Reduction & Deceleration</p>
                <p className="text-gray-600 mb-6 flex-grow">
                    Using data-driven methods, we teach landing mechanics, deceleration strategies, and strength balancing to significantly reduce non-contact injury risk.
                </p>
            </div>
            
            {/* Workshop 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-lime hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Movement Foundations</h4>
                <p className="text-sm text-kwk-teal font-bold uppercase tracking-wider mb-4">Pain-Free Blueprint (90 Mins)</p>
                <p className="text-gray-600 mb-6 flex-grow">
                    Addressing the root cause of chronic pain by correcting core patterns, breathing, posture, and foundational movement mechanics.
                </p>
            </div>

            {/* Workshop 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-lime hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Girls Night In (GNI)</h4>
                <p className="text-sm text-kwk-teal font-bold uppercase tracking-wider mb-4">Women's Wellness & Core</p>
                <p className="text-gray-600 mb-6 flex-grow">
                    A safe space for honest conversation and education focusing on pelvic health, core stability, and hip health for female athletes and women.
                </p>
            </div>

            {/* Workshop 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-teal hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Silver Strength Circles</h4>
                <p className="text-sm text-kwk-lime font-bold uppercase tracking-wider mb-4">Faith-Based Seniors & Mobility</p>
                <p className="text-gray-600 mb-6 flex-grow">
                    Combines devotion and community with active mobility and balance maintenance exercises to promote independent living.
                </p>
            </div>
            
            {/* Workshop 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-teal hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Active Aging (55+)</h4>
                <p className="text-sm text-kwk-lime font-bold uppercase tracking-wider mb-4">Fall Prevention & Independence</p>
                <p className="text-gray-600 mb-6 flex-grow">
                    Functional strength and balance training designed to maintain the capacity to move freely and safely for older adults.
                </p>
            </div>
            
            {/* Workshop 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-teal hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Faith in Motion Walks</h4>
                <p className="text-sm text-kwk-lime font-bold uppercase tracking-wider mb-4">Intergenerational Mentorship</p>
                <p className="text-gray-600 mb-6 flex-grow">
                    Structured walking groups connecting youth and elders, focused on gratitude, community, and the spiritual stewardship of the body.
                </p>
            </div>

            {/* Workshop 7 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-lime hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Youth Athlete 101</h4>
                <p className="text-sm text-kwk-teal font-bold uppercase tracking-wider mb-4">Ages 8-12 Foundations</p>
                <p className="text-gray-600 mb-6 flex-grow">
                   Fun, foundational movement mechanics to build confidence and safety in young athletes before they enter competitive play.
                </p>
            </div>

            {/* Workshop 8 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-kwk-lime hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Golf / Rotational Lab</h4>
                <p className="text-sm text-kwk-teal font-bold uppercase tracking-wider mb-4">Power & Protection</p>
                <p className="text-gray-600 mb-6 flex-grow">
                   Unlock rotational power and protect the low back. Sequencing analysis for golfers, baseball, and softball players.
                </p>
            </div>

            {/* Workshop 9 - Custom TeamCare */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gray-900 hover:shadow-xl transition-shadow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Custom Team Event</h4>
                <p className="text-sm text-kwk-lime font-bold uppercase tracking-wider mb-4">You Gather The Gang</p>
                <p className="text-gray-600 mb-6 flex-grow">
                   You gather the gang (TeamCare) and Dr. Kelly will deliver the appropriate content tailored to your group's specific needs.
                </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
                <a 
                    href="https://calendar.app.google/L12Q327BPatRQbza6" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block bg-kwk-teal text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:bg-white hover:text-kwk-teal transition-all uppercase tracking-widest min-w-[300px]"
                >
                    Request an On-Site Workshop
                </a>
                <a 
                    href="https://calendar.app.google/L12Q327BPatRQbza6" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block bg-kwk-lime text-gray-900 font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:bg-white hover:text-kwk-lime transition-all uppercase tracking-widest min-w-[300px]"
                >
                    Book TeamCare Recovery
                </a>
            </div>
            <p className="text-sm text-gray-500">All workshops and recovery sessions are delivered via The Recovery Room on Wheels.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
