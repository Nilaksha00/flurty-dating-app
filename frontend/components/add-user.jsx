import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

function AddUser() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    const user = {
      fullName,
      age,
      email,
      phone,
      gender,
    };

    axios
      .post("/users", user)
      .then(() => {
        let path = "/";
        navigate(path);
      })
      .catch(function () {
        alert("Something went wrong with User");
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="FullName"
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br />
      <select
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >
        <option>Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default AddUser;
