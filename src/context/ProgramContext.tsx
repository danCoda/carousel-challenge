import React, { createContext, useContext, useState, useEffect } from 'react';
import { Movie } from '../types';

interface ProgramContextType {
  items: Movie[];
  isLoading: boolean;
  error: string | null;
}

const ProgramContext = createContext<ProgramContextType>({
  items: [],
  isLoading: true,
  error: null,
});

export const ProgramProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProgramContext.Provider value={{ items, isLoading, error }}>
      {children}
    </ProgramContext.Provider>
  );
};

export const usePrograms = () => useContext(ProgramContext);