"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FullPageLoading } from '@/components/ui/LoadingBar';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  const value = {
    isLoading,
    setIsLoading,
    showLoading,
    hideLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {isLoading && <FullPageLoading />}
    </LoadingContext.Provider>
  );
}; 