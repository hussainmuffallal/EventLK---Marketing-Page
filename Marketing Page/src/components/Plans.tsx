import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for small events and individual planners",
    features: [
      "Up to 5 events per month",
      "Basic AI recommendations",
      "QR attendance tracking",
      "Email support",
      "1 team member",
      "Basic analytics"
    ],
    highlighted: false
  },
  {
    name: "Professional",
    price: "$9.99",
    period: "per month",
    description: "Ideal for professional event planners and agencies",
    features: [
      "Unlimited events",
      "Advanced AI recommendations",
      "QR attendance tracking",
      "Priority support",
      "Up to 10 team members",
      "Advanced analytics",
      "Budget tracking",
      "Custom branding"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited everything",
      "Premium AI features",
      "Dedicated account manager",
      "24/7 phone support",
      "Unlimited team members",
      "Custom integrations",
      "API access",
      "White-label options"
    ],
    highlighted: false
  }
];

export function Plans() {
  return (
    <section id="plans" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50 dark:from-black dark:to-purple-950/20">
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
            Pricing Plans
          </motion.span>
          <h2 className="font-bold text-4xl md:text-5xl mb-4 dark:text-white">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Flexible pricing options to match your event planning needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-purple-600 to-blue-600 text-white shadow-2xl scale-105'
                  : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
              }`}
            >
              {plan.highlighted && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Most Popular
                </motion.div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl mb-2 ${plan.highlighted ? 'text-white' : 'dark:text-white'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-5xl ${plan.highlighted ? 'text-white' : 'dark:text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlighted ? 'text-purple-100' : 'text-gray-500 dark:text-gray-400'}>
                    {plan.period}
                  </span>
                </div>
                <p className={plan.highlighted ? 'text-purple-100' : 'text-gray-600 dark:text-gray-400'}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                  >
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.highlighted ? 'text-white' : 'text-purple-600 dark:text-purple-400'
                    }`} />
                    <span className={plan.highlighted ? 'text-purple-50' : 'dark:text-gray-300'}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}