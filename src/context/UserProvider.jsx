import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        isConnected: false,
        email: "",
        pseudo: ""
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