
import React from "react";
import { Star, Moon } from "lucide-react";

interface OrnamentProps {
  position: string;
}

const IslamicOrnaments: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      <Star 
        className="absolute text-eid-gold animate-pulse-soft" 
        style={{ top: '15%', left: '10%', opacity: 0.7 }} 
        size={24}
      />
      <Star 
        className="absolute text-eid-gold animate-float" 
        style={{ top: '25%', left: '20%', opacity: 0.5 }} 
        size={16}
      />
      <Star 
        className="absolute text-eid-gold animate-sparkle" 
        style={{ top: '10%', right: '15%', opacity: 0.7 }} 
        size={18}
      />
      <Star 
        className="absolute text-eid-gold animate-pulse-soft" 
        style={{ top: '20%', right: '25%', opacity: 0.6 }} 
        size={20}
      />
      <Star 
        className="absolute text-eid-gold animate-float" 
        style={{ bottom: '35%', left: '8%', opacity: 0.6 }} 
        size={22}
      />
      <Star 
        className="absolute text-eid-gold animate-sparkle" 
        style={{ bottom: '45%', right: '12%', opacity: 0.7 }} 
        size={18}
      />

      {/* Crescents */}
      <Moon 
        className="absolute text-eid-gold animate-pulse-soft" 
        style={{ top: '8%', right: '8%' }} 
        size={32}
      />
      <Moon 
        className="absolute text-eid-gold animate-float" 
        style={{ bottom: '20%', left: '15%' }} 
        size={28}
      />

      {/* Decorative Circles */}
      <div 
        className="absolute rounded-full border-2 border-eid-gold opacity-20 animate-rotate-slow" 
        style={{ width: '100px', height: '100px', top: '5%', left: '5%' }}
      ></div>
      <div 
        className="absolute rounded-full border border-eid-gold opacity-10 animate-rotate-slow" 
        style={{ width: '150px', height: '150px', bottom: '10%', right: '10%', animationDirection: 'reverse' }}
      ></div>

      {/* Islamic Pattern */}
      <div 
        className="absolute border border-eid-gold opacity-20" 
        style={{ 
          width: '100px', 
          height: '100px', 
          top: '30%', 
          right: '5%',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
        }}
      ></div>
      <div 
        className="absolute border border-eid-gold opacity-20" 
        style={{ 
          width: '80px', 
          height: '80px', 
          bottom: '25%', 
          left: '5%',
          transform: 'rotate(45deg)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
        }}
      ></div>
    </div>
  );
};

export default IslamicOrnaments;
