"use client";
import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface FadeProps {
  children: ReactNode;
  initial?: MotionProps['initial'];  
  animate?: MotionProps['animate'];      
  transition?: MotionProps['transition']; 
  threshold?: number;                    
}

const Fade = ({ children, initial, animate, transition, threshold = 0.1 }: FadeProps) => {
  const ref = useRef<HTMLDivElement>(null);  
  const [inView, setInView] = useState(false); 

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); 
          observer.unobserve(entry.target); 
        }
      },
      {
        threshold,  
      }
    );

    if (currentRef) {
      observer.observe(currentRef); 
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); 
      }
    };
  }, [threshold]);

  return (
    <motion.div
      ref={ref}                    
      initial={initial}            
      animate={inView ? animate : initial} 
      transition={transition}     
    >
      {children}                   
    </motion.div>
  );
};

export default Fade;


