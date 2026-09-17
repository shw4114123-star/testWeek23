import { Route, Routes } from "react-router";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/user" element={<UserPage />}/>
        </Route>
      </Routes>
    </div>
  )
}
