import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: 60000, suffix: '+', label: 'Verified Users' },
    { value: 220, suffix: '+', label: 'ATMs Across Canada' },
    { value: 24, suffix: 'M', label: 'Quarterly Volume', prefix: '$' },
    { value: 99.9, suffix: '%', label: 'Uptime' },
  ];

  const features = [
    {
      iconSvg: `<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>`,
      bgColor: 'bg-blue-100',
      title: 'Safe and secure',
      description: 'Your crypto is always held 1 to 1 and kept secure in Cold Storage with licensed custodians who have a combined $680M USD in insurance. Plus your cash holdings are covered up to $1M per account by the Canadian Investment Protection Fund (CIPF).'
    },
    {
      iconSvg: `<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/>
      </svg>`,
      bgColor: 'bg-blue-100',
      title: 'Registered and regulated',
      description: 'Operated under Coinsquare Capital Markets Ltd (CCAML), member of the Investment Industry Regulatory Organization (IIROC), and registered with the Ontario Securities Commission and the Canadian Securities Administrators as the first Canadian registered marketplace for crypto assets, and registered with FINTRAC as a money services business.'
    },
    {
      iconSvg: `<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`,
      bgColor: 'bg-blue-100',
      title: 'Transparent and competitive',
      description: "We're dedicated to ensuring you get the best execution for your trades providing you with the best price available at any given moment, backed by a transparent fee structure."
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        {/* Why Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Canada's secure and trusted platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Buy and sell Bitcoin and a variety of the best cryptocurrencies with peace of mind.
          </p>
        </div>

        {/* Big Unified Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50 max-w-7xl mx-auto"
        >
          {/* Trust Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.3,
                  ease: "easeOut"
                }}
                className="text-center group"
              >
                <div className={`${feature.bgColor} inline-flex p-4 rounded-xl mb-6 w-16 h-16 items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`} dangerouslySetInnerHTML={{__html: feature.iconSvg}}>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={ref}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  {stat.prefix}
                  {isInView && <Counter end={stat.value} />}
                  {stat.suffix}
                </div>
                <p className="mt-2 text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return <span>{count.toLocaleString()}</span>;
};

export default Stats;
