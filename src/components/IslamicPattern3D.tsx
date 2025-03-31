
import React, { useEffect, useRef } from "react";

const IslamicPattern3D: React.FC = () => {
  const patternRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!patternRef.current) return;
    
    const patterns = patternRef.current.querySelectorAll('.pattern-3d');
    
    // Add event listener to move patterns with mouse
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate offset from center (-1 to 1 range)
      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;
      
      patterns.forEach((pattern, index) => {
        const element = pattern as HTMLElement;
        const depth = (index + 1) * 5; // Different depth for each pattern
        
        // Apply 3D transformation
        element.style.transform = `
          translate3d(${offsetX * depth}px, ${offsetY * depth}px, 0)
          rotateX(${offsetY * 5}deg) 
          rotateY(${-offsetX * 5}deg)
        `;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={patternRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Islamic Geometric 3D Patterns */}
      <div 
        className="pattern-3d absolute border-2 border-eid-gold opacity-30"
        style={{
          width: "120px",
          height: "120px",
          top: "10%",
          left: "15%",
          transform: "rotate(45deg)",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="absolute inset-2 border border-eid-gold"></div>
      </div>
      
      <div 
        className="pattern-3d absolute border-2 border-eid-gold opacity-30"
        style={{
          width: "150px",
          height: "150px",
          top: "20%",
          right: "20%",
          transform: "rotate(22.5deg)",
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="absolute inset-4 border border-eid-gold" style={{
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}></div>
      </div>
      
      <div 
        className="pattern-3d absolute border-2 border-eid-gold opacity-20"
        style={{
          width: "100px",
          height: "100px",
          bottom: "25%",
          left: "25%",
          transform: "rotate(0deg)",
          backgroundImage: 
            "repeating-conic-gradient(from 0deg, transparent 0deg 15deg, rgba(212, 175, 55, 0.1) 15deg 30deg)",
          borderRadius: "50%",
          transition: "transform 0.3s ease-out",
        }}
      ></div>
      
      <div 
        className="pattern-3d absolute opacity-20"
        style={{
          width: "180px",
          height: "180px",
          bottom: "15%",
          right: "10%",
          backgroundImage: 
            "radial-gradient(circle, transparent 35%, rgba(212, 175, 55, 0.15) 35%, rgba(212, 175, 55, 0.15) 40%, transparent 40%, transparent 60%, rgba(212, 175, 55, 0.15) 60%, rgba(212, 175, 55, 0.15) 65%, transparent 65%)",
          borderRadius: "50%",
          transition: "transform 0.3s ease-out",
        }}
      ></div>
      
      {/* Star pattern */}
      <div 
        className="pattern-3d absolute border border-eid-gold opacity-25"
        style={{
          width: "140px",
          height: "140px",
          top: "40%",
          left: "8%",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          transition: "transform 0.3s ease-out",
        }}
      ></div>
    </div>
  );
};

export default IslamicPattern3D;
