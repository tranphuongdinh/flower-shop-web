'use client';

import { createContext, useState, useContext } from 'react';

const defaultContext = {};
const MyContext = createContext(defaultContext);
const useMyContext = () => useContext(MyContext);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState('Initial value');

  return <MyContext.Provider value={{ value, setValue }}>{children}</MyContext.Provider>;
};

export default AppProvider;
