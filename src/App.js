import { Route, Routes } from "react-router-dom";
import { Login } from "./screens/authentication/login";
import { SignUp } from "./screens/authentication/signup";
import { Home } from "./screens/home";
import "./App.css"

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>


   </Routes>
  );
}

export default App;

