const passport = require("passport");
const LocalStrategy = required("passport-Local").Strategy;

//telling passport what strategy to use
//and using email/password
passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    function(email, password, done) {
      //when a user attempts to login run this code
      User.findOne({ email: email }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!user.verifyPassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);

module.exports = passport;
