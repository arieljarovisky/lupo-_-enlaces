import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import type { Link } from '../constants';

interface LinkCardProps {
  link: Link;
  index: number;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, index }) => {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ x: 5 }}
      className={`
        group relative flex items-center justify-between w-full h-14 mb-4 
        border-l-4 border-lupo-blue px-6 link-transition
        shadow-sm hover:shadow-md
        ${link.highlight 
          ? 'bg-lupo-blue/90 backdrop-blur-sm text-white font-bold border-l-lupo-black overflow-hidden' 
          : 'bg-white/80 backdrop-blur-md text-lupo-black border-l-lupo-blue hover:bg-lupo-black hover:text-white hover:border-l-lupo-blue'
        }
      `}
    >
      <div className="flex items-center space-x-3">
        {link.icon && <link.icon size={18} className="text-lupo-blue group-hover:text-white transition-colors" />}
        <span className="text-sm font-bold tracking-wider uppercase">
          {link.title}
        </span>
      </div>
      
      <div className="opacity-40 group-hover:opacity-100 transition-opacity flex items-center">
        {link.highlight ? (
          <span className="text-[10px] font-black tracking-tighter text-white">SHOP</span>
        ) : (
          <div className="w-1.5 h-1.5 bg-lupo-blue rounded-full group-hover:bg-white" />
        )}
      </div>
    </motion.a>
  );
};

export default LinkCard;
