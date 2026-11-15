import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignupPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import AddApplicationPage from "./pages/AddApplicationPage";
import EditApplicationPage from "./pages/EditApplicationPage";
import Navbar from "./features/Route/Navbar"
import Login from "./pages/LoginPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        < Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/applications/new" element={<AddApplicationPage />} />
        <Route path="/applications/:id/edit" element={<EditApplicationPage />} />

      </Routes>
    </>
  )
}
