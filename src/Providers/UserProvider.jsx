import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {try {
      
      setUser(JSON.parse(storedUser));
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
    }
    }
    setLoading(false);
  }, []);

  // Save user to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }

     console.log(user+" User updated in useContext");

  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
