import { ImageWithFallback } from './figma/ImageWithFallback';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import zumairImage from 'figma:asset/f3b4f9a1aeabf98dd594f9782d742827cff45ff3.png';
import hussainImage from 'figma:asset/d63f1503254e5c338a6a9a192f806d7c18ef27df.png';
import zubairImage from 'figma:asset/d38265f614c7b3cba79f5c1548b79dcd45617325.png';
import shimryImage from 'figma:asset/7bcb3646c1b5cb54ae152d8707afdfb034029176.png';
import rismeyaImage from 'figma:asset/464782d6e3aa69ad10b1852b48400decd3794f55.png';
import maathushaImage from 'figma:asset/84a2e63d88b4bb6cb01f57997a85f74e9cec37b3.png';

const teamMembers = [
  {
    name: "Muhamed Zumair",
    image: zumairImage,
    instagram: "#",
    linkedin: "#",
    email: "zumair@eventlk.com"
  },
  {
    name: "Hussain Muffallal",
    image: hussainImage,
    instagram: "#",
    linkedin: "#",
    email: "hussain@eventlk.com"
  },
  {
    name: "Zubair Murshid",
    image: zubairImage,
    instagram: "#",
    linkedin: "#",
    email: "zubair@eventlk.com"
  },
  {
    name: "Shimry Shiyam",
    image: shimryImage,
    instagram: "#",
    linkedin: "#",
    email: "shimry@eventlk.com"
  },
  {
    name: "Rismeya Kamalachandran",
    image: rismeyaImage,
    instagram: "#",
    linkedin: "#",
    email: "rismeya@eventlk.com"
  },
  {
    name: "Maathusha Baskaran",
    image: maathushaImage,
    instagram: "#",
    linkedin: "#",
    email: "maathusha@eventlk.com"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-black">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Us
          </motion.span>
          <h2 className="font-bold text-4xl md:text-5xl mb-4 dark:text-white">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're a passionate team dedicated to revolutionizing event planning with AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-16">
          {teamMembers.map((member, index) => {
            const nameParts = member.name.split(' ');
            const firstName = nameParts[0];
            const lastName = nameParts.slice(1).join(' ');
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="dark:text-white leading-tight mb-3">
                    {firstName}
                    <br />
                    {lastName}
                  </h3>
                  
                  <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Mission
          </motion.h3>
          <motion.p 
            className="text-xl text-purple-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            To empower event planners worldwide with cutting-edge AI technology that transforms 
            the way events are planned, managed, and executed. We believe every event should be 
            extraordinary, and technology should make that possible for everyone.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}