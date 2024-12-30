import React from 'react';
import { TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        {/* Intro */}
        <h1 className="text-2xl sm:text-3xl font-medium mb-3">
          hey, i'm eddy xu
        </h1>
        <p className="text-base mb-6">
          i build things that help lots of people. my singular goal is to have a net-positive impact before agi changes everything.
        </p>

        {/* Current */}
        <h2 className="text-xl font-medium mb-2">what i'm up to:</h2>
        <p className="mb-6">
          incoming cs @ columbia. spending my senior year getting technical to justify taking a gap year
        </p>

        {/* Previous */}
        <h2 className="text-xl font-medium mb-2">previously:</h2>
        <div className="mb-6 space-y-4">
          <div>
            <p>sold an edtech startup at 16 (acquired for $135k)</p>
            <div className="ml-4 mt-1 space-y-0.5">
              <p>—helped 178k students across 185 countries find accessible opportunities</p>
              <p>—cracked influencer marketing: $275 → 5m views</p>
            </div>
          </div>
          <div>
            <p>built a robotics education company at 13</p>
            <div className="ml-4 mt-1 space-y-0.5">
              <p>—hit $120k revenue</p>
              <p>—rebuilt local community's robotics program after covid</p>
              <p>—outperformed incumbent companies with 10x less funding</p>
            </div>
          </div>
          <div>
            <p>won some cool competitions</p>
            <div className="ml-4 mt-1 space-y-0.5">
              <p>—vex robotics national champion (10k teams)</p>
              <p>—deca world champion (200k competitors)</p>
            </div>
          </div>
        </div>

        {/* Thinking */}
        <h2 className="text-xl font-medium mb-2">thinking about:</h2>
        <div className="mb-6">
          <p>attention</p>
          <p>long games</p>
          <p>startups</p>
          <p className="mt-1">check out my essays where i explore these ideas</p>
        </div>

        {/* Connect */}
        <div className="border-t border-gray-200 pt-6">
          <p className="mb-2">wanna hypergamble into greatness before AGI makes us permanent underclass?</p>
          <p className="mb-4">feel free to reach out!</p>
          <div>
            <p className="mb-2">edwardxu1569@gmail.com</p>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/edwardxu1569/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={18} className="text-gray-800 hover:text-gray-600" />
              </a>
              <a href="https://x.com/eddybuild" target="_blank" rel="noopener noreferrer">
                <TwitterIcon size={18} className="text-gray-800 hover:text-gray-600" />
              </a>
              <a href="https://www.instagram.com/eddyxu_/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={18} className="text-gray-800 hover:text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}