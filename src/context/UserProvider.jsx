import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        isConnected: true,
        email: "jeanvw007@gmail.com",
        pseudo: "Fantastix80"
    });
    return (
        <>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
        </>
    );
};

export { UserContext, UserProvider };