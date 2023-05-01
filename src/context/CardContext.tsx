import React, { createContext, useContext, useState } from 'react';

interface CardContextProps {
  selectedColors: (string | null)[];
  setSelectedColors: (colors: (string | null)[]) => void;
}

const CardContext = createContext<CardContextProps>({
  selectedColors: [null, null, null, null],
  setSelectedColors: (colors: (string | null)[]) => {},
});

export const useCardContext = () => useContext(CardContext);

export function CardProvider({ children }: { children: React.ReactNode }) {
  const [selectedColors, setSelectedColors] = useState<(string | null)[]>([null, null, null, null]);

  return (
    <CardContext.Provider value={{ selectedColors, setSelectedColors }}>
      {children}
    </CardContext.Provider>
  );
}
