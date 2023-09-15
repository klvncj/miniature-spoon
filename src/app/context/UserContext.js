// "use client";
// import { auth } from "@/config/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { createContext, useContext, useEffect, useState } from "react";

// export const UserData = createContext();

// export function useAuth() {
//   return useContext(UserData);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   // const value = {
//   //   currentUser,
//   //   signup,
//   // };
//   return <UserData.Provider value={value}>{children}</UserData.Provider>;
// }
