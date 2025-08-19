import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import LiquidGlassFrame from "./LiquidGlassFrame";

const Hero = () => {

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading text-gray-900 leading-tight text-left lg:text-left">
              Buy Bitcoin in <span className="text-primary-500">Minutes</span>,
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

          {/* Right Content - Badger with Blue Background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <LiquidGlassFrame className="max-w-4xl mx-auto">
              <div className="relative w-full h-[600px] group">
                {/* Badger with background container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                  {/* Irregular light blue background */}
                  <div className="absolute w-[85%] h-[85%] bg-accent-200 rounded-[40%_60%_60%_40%/50%_40%_60%_50%]"></div>
                  
                  {/* Badger image */}
                  <div className="relative z-10 w-4/5 h-4/5 flex items-center justify-center">
                    <img 
                      src="/badger-hold-coin.png" 
                      alt="Honey Badger Bitcoin mascot" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </LiquidGlassFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
