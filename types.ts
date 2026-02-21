import React from 'react';

// Vite static assets type declarations
declare module '*.png' {
  const content: string;
}

declare module '*.jpg' {
  const content: string;
}

declare module '*.jpeg' {
  const content: string;
}

declare module '*.gif' {
  const content: string;
}

declare module '*.svg' {
  const content: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}