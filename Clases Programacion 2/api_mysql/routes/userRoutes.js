// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// Ruta para obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Crear un nuevo usuario (POST)
router.post('/', userController.createUser);

// Obtener un solo usuario por su ID (GET)
router.get('/:id', userController.getUserById);

// Rutas adicionales para crear, actualizar o eliminar usuarios.

module.exports = router;
