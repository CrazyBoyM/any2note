import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h3 className="text-white font-bold text-2xl mb-4">Any2Note</h3>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Redefining learning experiences through AI innovation. Join thousands of students in transforming how you study.
            </p>
            <div className="flex space-x-6">
              <a href="https://hf.co/shareAI" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                About Us
              </a>
              <a href="mailto:ai-lab@foxmail.com" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:ai-lab@foxmail.com" className="hover:text-white transition-colors flex items-center">
                  ai-lab@foxmail.com
                </a>
              </li>
              <li>
                <a href="https://hf.co/shareAI" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  hf.co/shareAI
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <p className="text-gray-400">
              shareAI Technology Co., Ltd.<br />
              Innovating Education Through AI
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} shareAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};