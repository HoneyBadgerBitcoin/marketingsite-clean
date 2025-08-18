import { motion } from 'framer-motion';
import { Shield, Zap, Phone, Clock } from 'lucide-react';

const ATMShowcase = () => {
  const features = [
    {
      icon: Shield,
      title: 'Simple & Smooth',
      description: 'Hassle-free process to buy or sell crypto',
      position: 'top-left'
    },
    {
      icon: Zap,
      title: 'Instant',
      description: 'Instant transfer to wallet of your choice',
      position: 'top-right'
    },
    {
      icon: Phone,
      title: 'Live Customer Support',
      description: 'Got questions? We\'re just a call away',
      position: 'bottom-left'
    },
    {
      icon: Clock,
      title: 'Convenient',
      description: 'Over 220 ATMs across Canada, with more locations to come',
      position: 'bottom-right'
    }
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'absolute top-0 left-0 lg:top-8 lg:left-8';
      case 'top-right':
        return 'absolute top-0 right-0 lg:top-8 lg:right-8';
      case 'bottom-left':
        return 'absolute bottom-0 left-0 lg:bottom-8 lg:left-8';
      case 'bottom-right':
        return 'absolute bottom-0 right-0 lg:bottom-8 lg:right-8';
      default:
        return '';
    }
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">CRYPTOCURRENCY</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-8">
            Cash In on Crypto Today
          </h2>
          <button className="px-8 py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-all duration-300 font-medium">
            Buy Crypto
          </button>
        </motion.div>

        {/* ATM with surrounding feature cards */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central ATM Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            {/* Perfect circle background */}
            <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
              {/* Yellow gradient background circle */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent-200 to-accent-400 opacity-60 rounded-full"></div>
              
              {/* ATM Image */}
              <img 
                src="/atm-machine.webp" 
                alt="HoneyBadger Bitcoin ATM"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 h-[85%] w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Feature Cards positioned around ATM */}
          <div className="hidden lg:block">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className={`${getPositionClasses(feature.position)} w-64`}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                  <div className="bg-accent-100 inline-flex p-3 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-accent-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile version - cards below ATM */}
          <div className="lg:hidden mt-12 grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                  <div className="bg-accent-100 inline-flex p-3 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-accent-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATMShowcase;
