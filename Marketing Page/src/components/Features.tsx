import { 
  Calendar,
  CheckSquare,
  DollarSign,
  QrCode,
  Sparkles,
  Users
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    icon: Calendar,
    title: "Smart Event Plan & Management",
    description: "Comprehensive event planning tools powered by AI to create, organize, and manage events from start to finish.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: CheckSquare,
    title: "Timeline & Tasks",
    description: "Visual timelines and task management to keep your team on track with automated reminders and dependencies.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: DollarSign,
    title: "Budget Tracking",
    description: "Monitor expenses in real-time, track payments, and get instant budget insights to stay within your financial goals.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: QrCode,
    title: "QR Attendance",
    description: "Contactless check-in with QR code scanning for seamless attendee registration and tracking.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Get intelligent suggestions for venues, vendors, schedules, and optimizations based on your event data.",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Users,
    title: "Team Workspace",
    description: "Collaborate effortlessly with your team in a shared workspace with real-time updates and communication tools.",
    gradient: "from-indigo-500 to-blue-500"
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className="border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 hover:border-transparent hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          animate={{
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.5 }}
        />
        
        <CardContent className="p-6 space-y-4 relative z-10">
          <motion.div 
            className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center shadow-lg`}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{
                rotate: isHovered ? 360 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <feature.icon className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
          
          <motion.h3 
            className="text-xl dark:text-white"
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {feature.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300"
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {feature.description}
          </motion.p>
          
          {/* Hover indicator */}
          <motion.div
            className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-black dark:via-purple-950/20 dark:to-blue-950/20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-purple-600 dark:text-purple-400 uppercase tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Features
          </motion.span>
          <h2 className="font-bold text-4xl md:text-5xl mt-4 mb-6 dark:text-white">
            Everything You Need to Create{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Unforgettable Events
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Powerful AI-driven tools designed to simplify event planning and maximize attendee engagement
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}