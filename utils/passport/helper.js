import pool from "../../database.js";
import bcrypt from "bcryptjs";


const nameExists = async (name) => {
  const data = await pool.query("SELECT * FROM users WHERE name=$1", [
    name,
  ]);

  if (data.rowCount == 0) return false; 
  return true;
};

const createUser = async (request, response) => {
  const { name, password } = request.body

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    pool.query('INSERT INTO users (name, password) VALUES ($1, $2)', [name, hash], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.insertId}`);
    })
};

const matchPassword = async (password, hashPassword) => {
  const match = await bcrypt.compare(password, hashPassword);
  return match;
};

export {
  nameExists,
  createUser,
  matchPassword
}