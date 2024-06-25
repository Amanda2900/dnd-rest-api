import { Router } from 'express';
import passport from 'passport';


const authRouter = Router();

authRouter.get('/login', (req, res) => {
  res.send('Login page');
});

authRouter.post('/login', passport.authenticate('local', {
    failureRedirect: '/auth/login', 
    failureMessage: true 
  }), function(req, res) {
    res.redirect('/');
  })

authRouter.post('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

export default authRouter;