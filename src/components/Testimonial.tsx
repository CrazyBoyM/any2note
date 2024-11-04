import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface TestimonialProps {
  name: string;
  school: string;
  major: string;
  quote: string;
  result: string[];
  avatar?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ name, school, major, quote, result, avatar }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
      <div className="flex items-start gap-6 mb-8">
        {avatar ? (
          <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover" />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            {name[0]}
          </div>
        )}
        <div>
          <div className="font-bold text-xl text-gray-900 mb-1">
            {name}
          </div>
          <div className="text-indigo-600 font-medium mb-1">{school}</div>
          <div className="text-gray-500 text-sm">{major}</div>
        </div>
      </div>
      <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">{quote}</p>
      <div className="space-y-4 bg-indigo-50 p-4 rounded-xl">
        {result.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircleIcon className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 leading-tight">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};