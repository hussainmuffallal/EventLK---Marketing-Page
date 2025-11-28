import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { HeroGraphic } from "./HeroGraphic";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";

export function Hero() {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 2500, {
      duration: 2,
      delay: 0.8,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayCount(Math.round(latest));
      }
    });

    return controls.stop;
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center px-4 bg-gradient-to-b from-purple-50 via-blue-50 to-white dark:from-black dark:via-purple-950/20 dark:to-black relative overflow-hidden">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/60 dark:bg-purple-400/80 rounded-full blur-sm"
            style={{
              boxShadow: '0 0 15px rgba(168, 85, 247, 0.6)',
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              ],
              y: [
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              ],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full">
                ✨ AI-Powered Event Management
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-bold text-5xl md:text-6xl lg:text-7xl dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Plan Perfect Events with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Magic
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your event planning experience with intelligent automation, 
              real-time insights, and seamless coordination. From corporate conferences 
              to intimate gatherings, eventlk makes every event extraordinary.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1522199899308-2eef382e2158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc2NDA4NTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                  "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbnxlbnwxfHx8fDE3NjQwNDUyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                  "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA2MzY3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjQwOTc2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                ].map((image, i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-black overflow-hidden"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`User ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <motion.span className="text-gray-900 dark:text-white">{displayCount}+</motion.span> event planners trust EventLK
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <HeroGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}