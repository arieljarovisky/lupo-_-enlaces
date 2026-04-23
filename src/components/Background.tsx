import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-[#F8F9FA]">
      {/* Mesh/Dots Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(#2E86C1 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} 
      />

      {/* Animated Abstract Shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        {/* Large Curve Top Left */}
        <motion.div
          animate={{ 
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -top-[10%] -left-[10%] w-[120%] h-[60%] border-[2px] border-lupo-blue/10 rounded-bl-[200px]"
        />

        {/* Floating Circle 1 */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-[20%] right-[10%] w-64 h-64 border border-lupo-blue/5 rounded-full"
        />

        {/* Floating Circle 2 */}
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            x: [0, -15, 0],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-[15%] left-[5%] w-80 h-80 border-[3px] border-lupo-black/5 rounded-full"
        />

        {/* Minimalist Lines */}
        <div className="absolute top-[50%] left-0 w-full flex justify-between px-10 opacity-10">
          <div className="w-1 h-20 bg-lupo-blue" />
          <div className="w-1 h-32 bg-lupo-black" />
          <div className="w-1 h-12 bg-lupo-blue" />
        </div>

        {/* Large Text Watermark */}
        <div className="absolute -bottom-20 -right-20 select-none pointer-events-none opacity-[0.02] transform -rotate-12">
          <span className="text-[20rem] font-black tracking-tighter">LUPO</span>
        </div>
      </motion.div>

      {/* Gradient Overlay for Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/60" />
    </div>
  );
}
