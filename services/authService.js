import pool from "../database.js";
import { Strategy as LocalStrategy } from "passport-local";

// ADD COMMENTS

const strategy = new LocalStrategy(function authUser(username, password, done) {
  pool.query("SELECT * FROM users WHERE name=$1", [ username ], function(err, data) {
    const user = data.rows[0];
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect username or password.' });
    }
    if (user.password !== password) {
      return done(null, false, { message: 'Incorrect username or password.' })
    }

    return done(null, user);
  });
});

function checkAuthentication(req, res, next){
  console.log(req.isAuthenticated())
  if(req.isAuthenticated()){
      next();
  } else{
      res.redirect("/auth/login");
  }
}

export {
  strategy,
  checkAuthentication
}