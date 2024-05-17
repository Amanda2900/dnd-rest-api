const express = require('express');
const bodyParser = require('body-parser')
const db = require('./database')

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});

app.get("/", async(req, res) => {
  res.json({ info: 'Node.js, Express, Postgres API'})
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.get("/status", (req, res) => {
  const status = {
    "Status": "Running"
  };
  res.send(status);
});

