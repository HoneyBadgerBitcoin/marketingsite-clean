import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Bitcoin, Shield, Zap, Users, MapPin } from 'lucide-react';

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
      icon: Shield,
      title: 'FINTRAC Registered',
      description: 'Fully compliant with Canadian financial regulations'
    },
    {
      icon: Bitcoin,
      title: 'Simple & Smooth',
      description: 'Hassle-free process to buy or sell crypto'
    },
    {
      icon: Zap,
      title: 'Instant',
      description: 'Instant transfer to wallet of your choice'
    },
    {
      icon: Users,
      title: 'Live Support',
      description: 'Got questions? We\'re just a call away'
    },
    {
      icon: MapPin,
      title: 'Convenient',
      description: 'Over 220 ATMs across Canada'
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        {/* Why Us Section */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">WHY US</span>
          <h2 className="text-5xl font-bold text-gray-900 mt-2 mb-8">
            Simple & Smooth Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-100 inline-flex p-4 rounded-lg mb-4">
                  <feature.icon className="h-8 w-8 text-primary-500" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={ref}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
