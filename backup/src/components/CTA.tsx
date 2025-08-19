import { motion } from "framer-motion";
import { Bitcoin, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary-500 rounded-2xl p-12 md:p-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">
              CRYPTOCURRENCY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              Cash In on Crypto Today
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-500 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold flex items-center justify-center">
                Buy Crypto
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-all duration-300 font-semibold">
                Find ATM
              </button>
            </div>
          </div>
        </motion.div>

        {/* Why Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            WHY US
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-8">
            Simple & Smooth Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 inline-flex p-4 rounded-lg mb-4">
                <Bitcoin className="h-8 w-8 text-primary-500" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Simple & Smooth</h4>
              <p className="text-sm text-gray-600">
                Hassle-free process to buy or sell crypto
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 inline-flex p-4 rounded-lg mb-4">
                <Bitcoin className="h-8 w-8 text-primary-500" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Instant</h4>
              <p className="text-sm text-gray-600">
                Instant transfer to wallet of your choice
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 inline-flex p-4 rounded-lg mb-4">
                <Bitcoin className="h-8 w-8 text-primary-500" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Live Support</h4>
              <p className="text-sm text-gray-600">
                Got questions? We're just a call away
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 inline-flex p-4 rounded-lg mb-4">
                <Bitcoin className="h-8 w-8 text-primary-500" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Convenient</h4>
              <p className="text-sm text-gray-600">
                Over 220 ATMs across Canada
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
