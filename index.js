import express, { json } from 'express';

const app = express();
app.use(json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

app.get("/status", (req, res) => {
  const status = {
    "Status": "Running"
  };
  res.send(status);
});

