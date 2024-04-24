import { Route, Routes } from "react-router-dom";
import { LoginUser } from "../components/loginUser/Login";
import { Album } from "../components/album/album";
import { Photos } from "../components/photos/photos";
import Posts from "../components/posts/posts";
import ShowUsers from "../components/users/showUsers";
import AboutUs from "../components/aboutUs/aboutUs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginUser />} />
      <Route path="/albums" element={<Album />} />
      <Route path="/albums/:id" element={<Photos />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/users" element={<ShowUsers />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}
