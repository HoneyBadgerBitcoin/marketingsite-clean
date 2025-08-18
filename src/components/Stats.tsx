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

  return (
    <section className="py-20">
      <div className="container-custom">
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
