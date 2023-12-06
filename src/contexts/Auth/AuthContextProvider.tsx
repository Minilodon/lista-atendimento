import { UserCredential } from 'firebase/auth';
import React, { ReactNode, createContext, useState } from 'react';

interface AuthContextValue {
  currentUser: UserCredential | undefined
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue,
);

type AuthContextProviderProps = {
  children: ReactNode;
};

export default function AuthContextProvider(props: AuthContextProviderProps) {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState<UserCredential>()
  
    
  const value: AuthContextValue = React.useMemo(() => ({
    currentUser
  }), [currentUser]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
