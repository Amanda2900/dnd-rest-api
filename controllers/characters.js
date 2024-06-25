import pool from "../database.js";

const getCharacters = (request, response) => {
  pool.query('SELECT * FROM characters', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getCharacterById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM characters WHERE character_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
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

const deleteCharacter = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM characters WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Character deleted with ID: ${id}`)
  })
};

export {
  getCharacters,
  getCharacterById,
  deleteCharacter
}