import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";

export function useAuthContext() {
    const context = useContext(AuthContext);
  
    if (typeof context === 'undefined') {
      throw new Error(
        `useAuthContext must be used within a AuthContextProvider`,
      );
    }
  
    return context;
  }
  