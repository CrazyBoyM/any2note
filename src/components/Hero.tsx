import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pattern-grid"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <SparklesIcon className="h-5 w-5 mr-2" />
            <span className="text-sm">Trusted by 10,000+ International Students</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Any2Note - Your AI Study Assistant
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Transform your learning experience with AI-powered note-taking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
              Get Started Free
            </button>
            <button className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};