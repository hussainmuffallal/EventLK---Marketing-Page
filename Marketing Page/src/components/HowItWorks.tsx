import { CheckCircle2, Sparkles, Rocket, Target } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Sparkles,
    title: "Tell Us Your Vision",
    description: "Share your event details and goals. Our AI understands your requirements and starts planning instantly."
  },
  {
    icon: Target,
    title: "AI Creates Your Plan",
    description: "Get a complete event plan with timelines, budgets, vendor suggestions, and task lists in minutes."
  },
  {
    icon: CheckCircle2,
    title: "Collaborate & Refine",
    description: "Work with your team, make adjustments, and let AI handle the coordination and scheduling."
  },
  {
    icon: Rocket,
    title: "Execute Flawlessly",
    description: "Launch your event with confidence. Monitor everything in real-time and let automation handle the rest."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-gray-50 dark:bg-black/50">
      <div className="container mx-auto">
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
            How It Works
          </motion.span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 dark:text-white">
            From Idea to Reality in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Four Simple Steps
            </span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines */}
          <motion.div 
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 dark:from-purple-600 dark:via-blue-600 dark:to-purple-600" 
            style={{ width: 'calc(100% - 8rem)', left: '4rem' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border-2 border-purple-600 dark:border-purple-400"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                  >
                    <span className="text-sm text-purple-600 dark:text-purple-400">{index + 1}</span>
                  </motion.div>
                </div>
                
                <motion.h3 
                  className="text-xl dark:text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}