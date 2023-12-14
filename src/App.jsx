import { RouterProvider } from "react-router-dom"
import router from "./services/router"
import { addUser } from "./services/api";
import { UserProvider } from "./context/UserProvider";

addUser({"email": "jeanvw007@gmail.com", "pseudo": "Fantastix80", "mdp": "4ff17bc8ee5f240c792b8a41bfa2c58af726d83b925cf696af0c811627714c85"}).then(data => console.log(data));

function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router}/>
      </UserProvider>
    </>
  )
}

export default App
