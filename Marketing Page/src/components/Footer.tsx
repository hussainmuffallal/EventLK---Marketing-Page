import { Twitter, Linkedin, Instagram, Phone, MapPin } from "lucide-react";
import logoImage from "figma:asset/e02f88a3b8bf59ba0bb9c3910e389d0e6ec48abf.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-16 px-4 border-t border-gray-800 dark:border-gray-900">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="eventlk logo" className="w-10 h-10" />
              <span className="text-xl text-white">EventLK</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered event planning and management platform that helps you create extraordinary experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#plans" className="text-gray-400 hover:text-white transition-colors">
                  Plans
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-500">Mon-Fri 9am-6pm EST</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">123 Event Street</p>
                  <p className="text-gray-400">San Francisco, CA 94102</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2025 EventLK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}