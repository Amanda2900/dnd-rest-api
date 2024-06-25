import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', async(req, res, next) => {
  res.json({ info: 'Node.js, Express, Postgres API'})
  next();
})

export default indexRouter;