import React from 'react';
import { BeakerIcon, SparklesIcon, RocketLaunchIcon, AcademicCapIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Built for Students',
    description: 'Designed specifically for international students, understanding your unique challenges and needs',
    icon: AcademicCapIcon,
  },
  {
    title: 'Smart Note-Taking',
    description: 'Goes beyond traditional note-taking with AI-powered structure recognition and key point extraction',
    icon: SparklesIcon,
  },
  {
    title: 'Effortless Setup',
    description: 'Start taking better notes instantly with one-click setup and automatic course detection',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Instant Impact',
    description: '"After my first lecture with Any2Note, I immediately shared it with my entire study group" - David, USC',
    icon: ChartBarIcon,
  },
  {
    title: 'Student Favorite',
    description: '"Our entire study group now uses it. The efficiency boost is incredible!" - Linda, UW',
    icon: BeakerIcon,
  },
  {
    title: 'Professor Approved',
    description: '"Our Statistics professor recommended it to the entire class after seeing the results" - Mike, UCSD',
    icon: ClockIcon,
  }
];

export const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Why Top Students Choose Any2Note</h2>
          <p className="text-xl text-gray-600">The secret weapon that boosts learning efficiency by 80%</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <feature.icon className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};