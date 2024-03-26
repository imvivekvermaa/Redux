import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Users from "./components/Users";

function App() {
  return (
    <div className="w-screen h-screen">
      <nav className="pt-5 flex justify-center gap-10">
        <NavLink className="/">Home</NavLink>
        <NavLink to="/Users">Users</NavLink>
        <NavLink to="/Products">Products</NavLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
