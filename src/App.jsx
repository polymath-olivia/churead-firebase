import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import { useState } from "react";

function App() {
//logic
const [chread,setChuread] = useState('')
const [editItem, setEditItem] = useState(null)

const handlePost = (churead) => {
console.log('chread', chread)
};
  //view
  return (
    <div className="bg-churead-black h-full text-white overflow-auto">
      <div className="max-w-[572px] mx-auto h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home chread={chread} onEdit={(data) => setEditItem (data)}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignIn />} />
            <Route path="/post" element={<Post onPost={handlePost} />} />
            <Route path="/login" element={<Edit editItem={editItem} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
