import axios from "axios";

const baseUrl = "http://127.0.0.1:3003/users";

// GET => READ
export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${baseUrl}/${id}`); // if no id => /user/
};

// POST => CREATE
export const postUser = async (user) => {
  return await axios.post(baseUrl, user);
};

// PUT => UPDATE
export const editUser = async (id, user) => {
  return await axios.put(`${baseUrl}/${id}`, user);
};

// DELETE => DELETE
export const deleteUser = async (id) => {
  return await axios.delete(`${baseUrl}/${id}`);
};
