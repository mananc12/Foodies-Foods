import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Item from "./components/Item";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import Error from "./components/Error";
import Logout from "./components/Logout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProfile } from "./components/UserProfile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;