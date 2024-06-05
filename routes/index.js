import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', async(req, res) => {
  res.json({ info: 'Node.js, Express, Postgres API'})
})

export default indexRouter;