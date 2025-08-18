import { motion } from "framer-motion";
import { MapPin, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import LiquidGlassFrame from "./LiquidGlassFrame";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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

          {/* Right Content - Video with Simple Glass Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <LiquidGlassFrame className="max-w-4xl mx-auto">
              <div className="relative w-full h-[600px] group">
                {/* Video container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-50">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    <source src="/badger-3d.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play/Pause Button */}
                  <button
                    onClick={toggleVideo}
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5 text-gray-800" />
                    ) : (
                      <Play className="h-5 w-5 text-gray-800 ml-0.5" />
                    )}
                  </button>
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
