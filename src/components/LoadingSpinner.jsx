import React from 'react';

export default function LoadingSpinner({ 
  size = 'medium', 
  color = 'primary', 
  className = '',
  text = '' 
}) {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-primary',
    accent: 'border-accent',
    white: 'border-white'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="loading-spinner" style={{
        width: size === 'small' ? '24px' : size === 'large' ? '64px' : '40px',
        height: size === 'small' ? '24px' : size === 'large' ? '64px' : '40px'
      }} />
      {text && (
        <p className="mt-3 text-sm text-gray-600 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}

// Skeleton loader component
export function SkeletonLoader({ className = '', lines = 3, height = '20px' }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="skeleton rounded"
          style={{
            height,
            width: index === lines - 1 ? '75%' : '100%'
          }}
        />
      ))}
    </div>
  );
}

// Card skeleton
export function CardSkeleton({ className = '' }) {
  return (
    <div className={`bg-white rounded-lg p-6 ${className}`}>
      <div className="skeleton rounded-lg h-48 mb-4" />
      <div className="skeleton rounded h-6 mb-2" />
      <div className="skeleton rounded h-4 w-3/4 mb-4" />
      <div className="skeleton rounded h-4 w-1/2" />
    </div>
  );
}
