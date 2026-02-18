import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text' | 'white';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseStyle = "relative overflow-hidden inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 ease-out focus:outline-none focus:ring-1 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group";
  
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800 border border-stone-900",
    white: "bg-white text-stone-900 hover:bg-stone-100 border border-white",
    outline: "bg-transparent text-stone-900 border border-stone-900 hover:bg-stone-900 hover:text-white",
    text: "bg-transparent text-stone-900 hover:text-stone-500 border-b border-transparent hover:border-stone-200 px-0 py-2",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      className={`${baseStyle} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center">{children}</span>
    </motion.button>
  );
};

export default Button;