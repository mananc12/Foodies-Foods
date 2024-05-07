import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export function MenuItem({ i, text,icon }) {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="nav-li m-0 p-0 list-none mb-[20px] flex items-center cursor-pointer"
    >
      <div className="icon-placeholder rounded-[50%] w-[40px] h-[40px] mr-[20px] flex justify-center items-center" style={style} >
      <span>{icon}</span>
        </div>
      <div className="text-placeholder
      rounded-[5px]
      w-[200px]
      h-[35px]
      flex-1
      
      flex justify-center items-center" style={style}>
        <span className='drop-responsive'>{text}</span>
      </div>
    </motion.li>
  );
}
