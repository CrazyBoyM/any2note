import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonial } from './components/Testimonial';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  const testimonials = [
    {
      name: 'Emma Chen',
      school: 'UCLA',
      major: 'Business | Junior',
      quote: 'As an international student, keeping up with lectures was my biggest challenge. Any2Note transformed how I learn.',
      result: [
        'Became one of the most active participants in class discussions',
        'Improved my midterm grades from B+ to A-',
        'Started a successful study group using Any2Note'
      ]
    },
    {
      name: 'Jack Zhang',
      school: 'UBC',
      major: 'Computer Science | Graduate',
      quote: 'Any2Note not only saved me countless hours but also made my learning more structured and effective.',
      result: [
        'Saves 2-3 hours daily on note organization',
        'Joined two additional research projects',
        'Maintaining a 3.8+ GPA consistently'
      ]
    },
    {
      name: 'Sarah Liu',
      school: 'NYU',
      major: 'Finance | Senior',
      quote: 'From struggling to keep up to finding joy in learning, Any2Note changed my academic journey.',
      result: [
        'Significantly improved course comprehension',
        'Became a key contributor in group projects',
        'Secured dream internship opportunity'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600">See how students transformed their learning journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;