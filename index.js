import express from 'express';
import indexRouter from './routes/index.js';
import userRouter from './routes/users.js';
import characterRouter from './routes/characters.js';

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/characters', characterRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});

