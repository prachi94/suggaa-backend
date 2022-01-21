import passport from 'passport'
import  GoogleStrategy from 'passport-google-oauth2';


passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3002/api/auth/google/callback",
    passReqToCallback   : true
  },
  
  function(request, accessToken, refreshToken, profile, done) {
  //   // User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //   //   return done(err, user);
  //   // });
  //   console.log("accesstoken", accessToken)
  //   console.log("refreshtoken", refreshToken)
  //   console.log("profile",profile)
  //   done (null, profile)
  // }
  // User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //     return done(err, user);
  //   });
  return done(null, profile)
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

export default passport;