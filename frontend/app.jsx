import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./components/add-user";
import DeleteUser from "./components/delete-user";
import EditUser from "./components/edit-user";
import NavBar from "./components/nav-bar";
import Notification from "./components/notification";
import ViewUser from "./components/view-user";
import ViewUserList from "./components/view-user-list";

render(
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/delete" element={<DeleteUser />} />
        <Route path="/edit" element={<EditUser />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/feed" element={<ViewUserList />} />
        <Route path="/profile" element={<ViewUser />} />
      </Routes>
    </Router>
  </div>,
  document.getElementById("app")
);
