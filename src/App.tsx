import React from 'react';
import { Construction, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <Construction className="w-16 h-16 text-blue-400" />
          </div>
          
          {/* Main Text */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">
              Farhan Kamal Portfolio
            </h1>
            <h1 className="text-4xl font-bold text-white">
              To be Devloped.
            </h1>
            <p className="text-slate-400">
              I am sorry but I am currently working on other stuff once I am done I will work on this Portfolio.
            </p>
          </div>

          {/* Contact Button */}
          <div>
            <a
              href="mailto:farhankamal0505@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
            >
              Contact me!
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Farhan-Kamal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/_Farhan__Kamal_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/farhan-kamal-135969243/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;