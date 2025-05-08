import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { getUser } from "../auth";

const Upload = () => {
  const [form, setForm] = useState({
    title: "",
    caption: "",
    location: "",
    people: "",
  });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const user = getUser();

  if (user.role !== "creator") return <p className="p-6">Access denied</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([key, val]) => data.append(key, val));
    data.append("mediaFile", file);

    await api.post("/posts/upload", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload Media</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border p-2"
        />
        <input
          placeholder="Caption"
          onChange={(e) => setForm({ ...form, caption: e.target.value })}
          className="w-full border p-2"
        />
        <input
          placeholder="Location"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full border p-2"
        />
        <input
          placeholder="People"
          onChange={(e) => setForm({ ...form, people: e.target.value })}
          className="w-full border p-2"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full"
        />
        <button className="bg-green-500 text-white px-4 py-2">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
