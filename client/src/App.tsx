import { Route, Routes } from "react-router";
import Register from "./components/register/Register";

export default function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/register" element={<Register />}/>
        </Route>
      </Routes>
    </div>
  )
}
