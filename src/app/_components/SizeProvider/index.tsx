import React, { createContext, useContext, useState } from 'react';

// Criar um contexto para armazenar o tamanho selecionado
const SizeContext = createContext<string | null>(null);

export const SizeProvider: React.FC = ({ children }: {children: React.ReactNode}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <SizeContext.Provider value={selectedSize}>
      {children}
    </SizeContext.Provider>
  );
};

export const useSize = () => useContext(SizeContext);