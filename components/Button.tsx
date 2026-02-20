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
  const baseStyle = "relative overflow-hidden inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group";
  
  const getVariantStyle = (v: string) => {
    switch(v) {
      case 'primary':
        return {
          backgroundColor: 'var(--accent-primary)',
          color: 'var(--bg-primary)',
          borderColor: 'var(--accent-primary)',
          border: '1px solid',
        };
      case 'white':
        return {
          backgroundColor: '#ffffff',
          color: 'var(--text-primary)',
          borderColor: '#ffffff',
          border: '1px solid',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--accent-primary)',
          borderColor: 'var(--accent-primary)',
          border: '1px solid',
        };
      case 'text':
        return {
          backgroundColor: 'transparent',
          color: 'var(--accent-primary)',
          borderBottom: '1px solid transparent',
        };
      default:
        return {};
    }
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      className={`${baseStyle} ${widthClass} ${className}`}
      style={getVariantStyle(variant)}
      {...props}
    >
      <span className="relative z-10 flex items-center">{children}</span>
    </motion.button>
  );
};

export default Button;