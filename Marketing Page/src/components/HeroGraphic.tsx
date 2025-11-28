import { motion } from "motion/react";

export function HeroGraphic() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-3xl opacity-20" />
      
      {/* Main container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Calendar grid background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-600" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>

        {/* Central event badge */}
        <motion.div
          className="absolute z-10 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        {/* Floating cards around center */}
        {/* Top left - Task card */}
        <motion.div
          className="absolute top-12 left-8 w-40 h-28 bg-white rounded-xl shadow-lg p-4 border border-purple-100"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-start gap-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full mt-1" />
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded mb-2 w-full" />
              <div className="h-2 bg-gray-100 rounded mb-2 w-3/4" />
              <div className="h-2 bg-gray-100 rounded w-1/2" />
            </div>
          </div>
        </motion.div>

        {/* Top right - Team card */}
        <motion.div
          className="absolute top-8 right-12 w-36 h-24 bg-white rounded-xl shadow-lg p-3 border border-blue-100"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex -space-x-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white" />
          </div>
          <div className="h-2 bg-gray-200 rounded mb-1 w-full" />
          <div className="h-2 bg-gray-100 rounded w-2/3" />
        </motion.div>

        {/* Bottom left - Budget card */}
        <motion.div
          className="absolute bottom-20 left-12 w-44 h-32 bg-white rounded-xl shadow-lg p-4 border border-green-100"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-xs text-gray-500 mb-2">Budget</div>
          <div className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">$12,450</div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ delay: 1, duration: 1 }}
            />
          </div>
        </motion.div>

        {/* Bottom right - QR Code card */}
        <motion.div
          className="absolute bottom-12 right-8 w-32 h-32 bg-white rounded-xl shadow-lg p-3 border border-purple-100 flex items-center justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <div className="w-20 h-20 border-4 border-purple-600 rounded-lg relative">
            <div className="absolute top-1 left-1 w-3 h-3 bg-purple-600" />
            <div className="absolute top-1 right-1 w-3 h-3 bg-purple-600" />
            <div className="absolute bottom-1 left-1 w-3 h-3 bg-purple-600" />
            <div className="grid grid-cols-3 gap-1 p-2 h-full">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-purple-600 rounded-sm" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI Sparkles */}
        <motion.div
          className="absolute top-1/4 right-1/4"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L15.18 3.24L14.07 9.5L18.36 5.64L15.93 10.93L21 9L16.88 12L21 15L15.93 13.07L18.36 18.36L14.07 14.5L15.18 20.76L13.09 15.74L12 22L10.91 15.74L8.82 20.76L9.93 14.5L5.64 18.36L8.07 13.07L3 15L7.12 12L3 9L8.07 10.93L5.64 5.64L9.93 9.5L8.82 3.24L10.91 8.26L12 2Z" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="3" y1="2" x2="21" y2="22">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/4"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L15.18 3.24L14.07 9.5L18.36 5.64L15.93 10.93L21 9L16.88 12L21 15L15.93 13.07L18.36 18.36L14.07 14.5L15.18 20.76L13.09 15.74L12 22L10.91 15.74L8.82 20.76L9.93 14.5L5.64 18.36L8.07 13.07L3 15L7.12 12L3 9L8.07 10.93L5.64 5.64L9.93 9.5L8.82 3.24L10.91 8.26L12 2Z" fill="url(#gradient2)" />
            <defs>
              <linearGradient id="gradient2" x1="3" y1="2" x2="21" y2="22">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
