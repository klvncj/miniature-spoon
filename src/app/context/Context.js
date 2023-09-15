// "use client";
// import { auth } from "@/config/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useContext, useEffect, useState } from "react";

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   // const [currentUser, setCurrentUser] = useState();

//   function signup(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   useEffect(() => {
//     return unsubscribe;
//   }, []);

//   const value = {
//     signup,
//   };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUsers] = useState(null);

  // function signup(email, password, callback) {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       setCurrentUser(user);
  //       if (typeof callback === "function") {
  //         callback(user);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  const value = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
