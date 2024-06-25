import pool from "../database.js";
import bcrypt from "bcryptjs";

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows);
  })
}

const getUserById = (req, res, next) => {
  const id = parseInt(req.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.send(results.rows);
  })
}

const createUser = async (req, res) => {
  const { name, password } = req.body

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    pool.query('INSERT INTO users (name, password) VALUES ($1, $2)', [name, hash], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added with ID: ${results.insertId}`);
    })
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id)
  const { name, password } = req.body

  pool.query(
    'UPDATE users SET name = $1, password = $2 WHERE id = $3',
    [name, password, id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`User deleted with ID: ${id}`)
  })
};

export {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}