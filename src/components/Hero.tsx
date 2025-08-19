import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Hero = () => {

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-white relative">
      <div className="container-custom relative overflow-visible">
        <div className="grid lg:grid-cols-2 gap-8 items-center relative">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 lg:pr-8"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading text-gray-900 leading-tight text-left lg:text-left drop-shadow-sm">
              Buy Bitcoin in <span className="text-primary-500 drop-shadow-sm">Minutes</span>,
              <br />
              Not Hours
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed text-left lg:text-left font-body">
              Buy Bitcoin, Ethereum, Litecoin, and more at over 220+ ATM
              locations across Canada
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-start">
              <button className="px-8 py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-all duration-300 font-medium flex items-center justify-center">
                Find ATM
                <MapPin className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300 font-medium">
                Buy Online
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-500">220+</div>
                <div className="text-sm text-gray-600">ATM Locations</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-500">5+</div>
                <div className="text-sm text-gray-600">Cryptocurrencies</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-500">60K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Badger with Blue Background (3D Overlap Effect) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Extended blue background that goes under text - with slow morphing animation and gradient */}
            <div className="absolute -left-32 -top-8 w-[140%] h-[110%] bg-gradient-to-b from-accent-200 to-accent-400 opacity-60 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] shadow-2xl shadow-accent-300/30 z-0 animate-morph-slow"></div>
            
            {/* Badger image container - no background frame */}
            <div className="relative w-full h-[650px] flex items-center justify-center z-20">
              <div className="relative w-5/6 h-5/6 flex items-center justify-center">
                <img 
                  src="/badger-hold-coin.png" 
                  alt="Honey Badger Bitcoin mascot" 
                  className="max-w-full max-h-full object-contain drop-shadow-xl"
                  style={{
                    filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
