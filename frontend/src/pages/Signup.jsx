import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { setUser } from "../auth";

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    role: "consumer",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await api.post("/auth/signup", form);
    setUser(data);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Email"
          type="email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-2"
        />
        <input
          placeholder="Username"
          type="text"
          required
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full border p-2"
        />
        <select
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full border p-2"
        >
          <option value="consumer">Consumer</option>
          <option value="creator">Creator</option>
        </select>
        <button className="bg-green-500 text-white px-4 py-2 cursor-pointer">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
