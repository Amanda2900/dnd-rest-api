import express from 'express';
import passport from 'passport';
import * as dotenv from 'dotenv';
import indexRouter from './routes/index.js';
import userRouter from './routes/users.js';
import characterRouter from './routes/characters.js';
import session from 'express-session';
import authRouter from './routes/auth.js';
import { logging, loggingTwo } from './middleware/logger.js';
import { strategy } from './services/authService.js';



dotenv.config();

const app = express();

app.use(logging)

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Passport Authorization
passport.use(strategy)

// Use session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
  })
);

app.use(passport.session());

passport.serializeUser(function(user, done) {
  process.nextTick(function() {
    return done(null, {
      id: user.id,
      username: user.username
    });
  });
});

passport.deserializeUser(function(user, done) {
  process.nextTick(function() {
    return done(null, user);
  });
});

// Routes
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/characters', characterRouter);
app.use('/auth', authRouter);
app.use(loggingTwo);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});

