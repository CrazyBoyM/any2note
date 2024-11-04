import React from 'react';
import { SparklesIcon, GiftIcon, StarIcon } from '@heroicons/react/24/solid';

export const Pricing = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center bg-indigo-100 text-indigo-600 rounded-full px-4 py-2 mb-4">
            <StarIcon className="h-5 w-5 mr-2" />
            <span className="font-semibold">New User Special</span>
          </span>
          <h2 className="text-4xl font-bold mb-6">Start Your AI Learning Journey</h2>
          <p className="text-xl text-gray-600">Join the learning revolution powered by AI</p>
        </div>
        
        <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Welcome Gift</h3>
            <p className="text-lg text-indigo-100">Unlock all premium features</p>
          </div>
          
          <div className="p-8">
            <ul className="space-y-6">
              <li className="flex items-center gap-3">
                <SparklesIcon className="h-6 w-6 text-yellow-500" />
                <span className="text-lg">Get 6000 points upon registration</span>
              </li>
              <li className="flex items-center gap-3">
                <GiftIcon className="h-6 w-6 text-purple-500" />
                <span className="text-lg">3 bonus months with annual plan</span>
              </li>
              <li className="flex items-center gap-3">
                <StarIcon className="h-6 w-6 text-indigo-500" />
                <span className="text-lg">Limited time offer for new users</span>
              </li>
            </ul>
            
            <button className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};