"use client";
import React, { createContext, useState } from "react";
export const UserData = createContext();

function UserContext({ childern }) {
  const [user, setUser] = useState();
  return <UserData.Provider value={user}>{childern}</UserData.Provider>;
}

export default UserContext;
