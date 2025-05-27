// components/layout/AppLayout.tsx
import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'transparent';
  fullWidth?: boolean;
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow' | 'full';
}

// Main App Layout - replaces constrained root
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full">
      {children}
    </div>
  );
};

// Section Component - for full-width sections with backgrounds
export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  background = 'transparent',
  fullWidth = false 
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-blue-50 to-green-50',
    transparent: ''
  };

  return (
    <section className={`section-full ${backgroundClasses[background]} ${className}`}>
      {fullWidth ? children : <Container>{children}</Container>}
    </section>
  );
};

// Container Component - for content width management
export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  size = 'default' 
}) => {
  const sizeClasses = {
    full: 'w-full px-4 sm:px-6 lg:px-8',
    narrow: 'section-content max-w-4xl',
    default: 'section-content max-w-7xl',
    wide: 'section-content-wide max-w-full'
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto ${className}`}>
      {children}
    </div>
  );
};

// Page Wrapper - for individual pages
interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  );
};