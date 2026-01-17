import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  
  // Bruker border-[1px] eksplisitt for å sikre at rammen ikke endrer tykkelse ved fargeskifte
  // Justert px-6 på mobil for å spare plass
  const baseStyles = "uppercase font-black tracking-[0.2em] py-5 px-6 md:px-10 transition-all duration-300 flex items-center justify-center gap-3 text-[10px] md:text-xs group relative overflow-hidden border-[1px]";
  
  const variants = {
    primary: `bg-[#e34b17] text-white border-[#e34b17] hover:bg-[#c23a0e] hover:border-[#c23a0e]`,
    outline: `bg-transparent text-white border-white/20 hover:border-jjn-orange hover:text-jjn-orange`,
    ghost: `bg-transparent text-white border-transparent hover:text-[#e34b17]`
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
};