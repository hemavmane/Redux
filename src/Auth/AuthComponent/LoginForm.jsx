import React from "react";
import { useState } from "react";
import dummyData from "../DommyData/DummyData";
import { useDispatch } from "react-redux";

export function LoginForm() {
  const [form, setForm] = useState({});

  const formDataDispatch = useDispatch();

  const handleLoginData = e => {
    e.preventDefault();
    let data = dummyData.data.filter(user => {
      return user.email === form.email && user.password === form.password;
    });

    if (data !==[]) {
      let data_info = {
        type: "set_login_data",
        payload: {
          ...data[0],
        },
      };
        console.log(data_info)
      formDataDispatch(data_info);
    } else {
      alert("login failed");
    }
  };

  return (
    <>
      <h1>hello</h1>
      <form onSubmit={handleLoginData}>
        <input
          type="email"
          name="email"
          
          id="email"
          placeholder="Enter E-mail"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <br />
        <input
          type="password"
          name="password"
          
          onChange={e => setForm({ ...form, password: e.target.value })}
          id="password"
          placeholder="Enter password"
        />
        <br /> <button type="submit">submit</button>
      </form>
    </>
  );
}
