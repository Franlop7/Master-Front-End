import React from 'react';
import { createContext } from 'react';

interface OContext {
  character: string;
  setCharacter: (value: string) => void;
  navigationPage: number;
  setNavigationPage: (value: number) => void;
}

export const MyContext = createContext<OContext>({
  character: '',
  setCharacter: (value: string) => {
    console.log('Has olvidado el provider');
  },
  navigationPage: 1,
  setNavigationPage: (value: number) => {
    console.log('Has olvidado el provider');
  },
});

export const MyContextProvider = (props: any) => {
  const { children } = props;
  const [character, setCharacter] = React.useState('');
  const [navigationPage, setNavigationPage] = React.useState(1);
  return (
    <MyContext.Provider
      value={{ character, setCharacter, navigationPage, setNavigationPage }}
    >
      {children}
    </MyContext.Provider>
  );
};
