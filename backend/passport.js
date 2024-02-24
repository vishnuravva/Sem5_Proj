const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const crypto = require('crypto')

const appSecret = '35c8ea51350c0191c3326d2a14dd68ca'; // Replace with your actual app secret
const accessToken = '3e4c9101fd22b0ea96ad1786c8c21c21'; // Replace with the user's access token

const appsecretProof = crypto
  .createHmac('sha256', appSecret)
  .update(accessToken)
  .digest('hex');

passport.use(new GoogleStrategy({
    clientID: '678335185649-ktp09mq3k9usdllromb6hcntq4g0vq0a.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:5000/auth/google/callback",
    scope: ['profile', 'email'],
    passReqToCallback: true,
},
    function (req, accessToken, refreshToken, profile, done) {
        done(null, profile);

    }))

/* 
In Passport.js, serializeUser and deserializeUser are methods used to manage user sessions during authentication. 
These methods allow you to store minimal information about the user in the session cookie
*/
passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser((user, done) => {
    done(null, user);
})

module.exports = passport;