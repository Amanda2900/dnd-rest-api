import { Router } from 'express';
import passport from 'passport';
import { checkAuthentication } from '../services/authService.js';


const authRouter = Router();


authRouter.get('/profile', checkAuthentication, (req, res) => {
  res.send('Welcome to your profile');
});

authRouter.get('/login', (req, res) => {
  res.send('Login page');
});

authRouter.post('/login', passport.authenticate('local', {
    failureRedirect: '/auth/login', 
    failureMessage: true 
  }), function(req, res) {
    res.redirect('/auth/profile');
  })

authRouter.post('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

export default authRouter;