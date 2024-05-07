import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import {useDimensions} from './use-dimensions';
import {MenuToggle} from './MenuToggle'; 
import {Navigation} from './Navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 0px 0px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  },
};

function Example() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
  initial={false}
  animate={isOpen ? 'open' : 'closed'}
  custom={height}
  ref={containerRef}
>
  <motion.div className="background max-[450px]:w-full absolute top-0 left-0 bottom-0 w-[300px] bg-white" variants={sidebar} />
  <div className='relative'>
  <Navigation />
  <MenuToggle toggle={() => toggleOpen()} />
  </div>
</motion.nav>

  );
}

export default Example;
