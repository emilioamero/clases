/* Controles */

// controllers/userController.js
const userModel = require('../models/userModels');

// Ejemplo de método para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios.' });
  }
};

// Crear un nuevo usuario (POST)
const createUser = async (req, res) => {
  try {
    const { nombre, email } = req.body;
    await userModel.createUser(nombre, email);
    res.status(201).json({ message: 'Usuario creado exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el usuario.' });
  }
};


// Obtener un solo usuario por su ID (GET)
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el usuario.' });
  }
};


module.exports = {
  getAllUsers,
  createUser,
  getUserById
  // Otros métodos para crear, actualizar o eliminar usuarios, por ejemplo.
};
