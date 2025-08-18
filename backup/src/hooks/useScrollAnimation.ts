import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (ref: React.RefObject<HTMLElement>) => {
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return controls;
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
