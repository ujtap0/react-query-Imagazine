import { createContext, useEffect, useState } from "react";
import { onAuthStateChangeListner, setDefaultBookmarkFromAuth } from "../service/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(()=>{
    const unsubscribe = onAuthStateChangeListner(user => {
      if(user){
        setIsLogin(true);
        setDefaultBookmarkFromAuth(user);
      }
    })
    return () => unsubscribe();
  })
  return <AuthContext.Provider value={{isLogin}}>{children}</AuthContext.Provider>;
}