import UserRepository from "../repositories/UserRepository.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserRepository.getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UserRepository.getUser(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const createUser = async (req, res) => {
  const { document, fullName, edad, userName, password } = req.body;
  try {
    const user = await UserRepository.createUser(document, fullName, edad, userName, password);
    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await UserRepository.deleteUser(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { fullName, edad } = req.body;
  try {
    const updatedUser = await UserRepository.updateUser(id, fullName, edad);
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};