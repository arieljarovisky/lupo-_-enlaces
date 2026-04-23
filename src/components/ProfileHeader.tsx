import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center pt-16 pb-8 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-6"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-lupo-blue/20 blur-3xl rounded-full scale-150" />
        
        {/* Curvatura inspirada en el logo */}
        <div className="absolute -left-4 -bottom-4 w-12 h-12 border-l-4 border-b-4 border-lupo-blue rounded-bl-[20px]" />
        
        <div className="bg-lupo-black px-6 py-3 rounded-lg shadow-xl translate-x-2">
          <h1 className="font-display text-5xl font-black tracking-tighter text-white">
            LUPO
          </h1>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-lupo-black font-semibold text-[10px] tracking-[0.3em] uppercase mt-2 text-center"
      >
        Confort y calidad asegurada
      </motion.p>
      
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "40px" }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="h-1 bg-lupo-blue mt-4 rounded-full"
      />
    </div>
  );
}
