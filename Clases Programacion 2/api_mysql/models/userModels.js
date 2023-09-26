/* Modelo - Base de datos */
const db = require('../database');

// Ejemplo de método para obtener todos los usuarios desde la base de datos
const getAllUsers = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM usuario');
    return rows;
  } catch (err) {
    throw err;
  }
};

const getUserById = async (userId) => {
  try {
    const query = 'SELECT * FROM usuario WHERE id = ?';
    const [rows] = await db.query(query, [userId]);
    return rows[0];
  } catch (err) {
    throw err;
  }
};


// Crear un nuevo usuario en la base de datos (INSERT)
const createUser = async (nombre, email) => {
  try {
    const query = 'INSERT INTO usuario (nombre, email) VALUES (?, ?)';
    await db.query(query, [nombre, email]);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById
  // Otros métodos para crear, actualizar o eliminar usuarios, por ejemplo.
};
