"use client";
import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface FadeProps {
  children: ReactNode;
  initial?: MotionProps['initial'];  
  animate?: MotionProps['animate'];      
  transition?: MotionProps['transition']; 
  // Intersection threshold for triggering animation
  threshold?: number;                    
}

const Fade = ({ children, initial, animate, transition, threshold = 0.1 }: FadeProps) => {
  // Create a ref object for the div element -> motion.div will be observed for intersection changes
  const ref = useRef<HTMLDivElement>(null);  
  // State to track if element is in view 
  const [inView, setInView] = useState(false); 

  useEffect(() => {
    // Effect to run when component mounts and when `threshold` changes

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Callback function when intersection changes

        if (entry.isIntersecting) {
          // If observed element enters viewport
          
          // Updatse state to indicate element is in view
          setInView(true); 
          // Stop observing once element is in view 
          observer.unobserve(ref.current!); 
        }
      },
      {
        // Set threshold for intersection (how much of element needs to be visible)
        threshold,  
      }
    );

    // Start observing the referenced DOM element
    if (ref.current) {
      // Begin observing the div element
      observer.observe(ref.current); 
    }

    // Cleanup function to stop observing when component unmounts or `threshold` changes
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); 
      }
    };
  }, [threshold]);

  return (
    <motion.div
      ref={ref}                    
      initial={initial}  
      // Animate if in view, otherwise stay initial          
      animate={inView ? animate : initial} 
      transition={transition}     
    >
      {children}                   
    </motion.div>
  );
};

export default Fade;


