const express = require('express');

const router = express.Router();

router.get('/', async(req, res) => {
  res.json({ info: 'Node.js, Express, Postgres API'})
})

module.exports = router;