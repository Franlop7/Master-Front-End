import React from 'react';
import { createContext } from 'react';

interface OContext {
  organization: string;
  setOrganization: (value: string) => void;
}

export const MyContext = createContext<OContext>({
  organization: 'Lemoncode',
  setOrganization: (value: string) => {
    console.log('Has olvidado el provider');
  },
});

export const MyContextProvider = (props: any) => {
  const { children } = props;
  const [organization, setOrganization] = React.useState("LemonCode");
  return (
    <MyContext.Provider value={{organization, setOrganization}}>
    {children}
    </MyContext.Provider>
  );
};
