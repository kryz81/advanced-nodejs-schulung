const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const JsonStrategy = require('passport-json').Strategy;
const jwt = require('jsonwebtoken');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [{ id: '1', username: 'richard', pass: '123' }, { id: '2', username: 'paula', pass: '456' }];

const fakePasswordCheck = (pass, hash) =>
  new Promise((resolve, reject) => {
    if (hash === pass) {
      resolve(true);
      return;
    }
    reject(new Error('Invalid password'));
  });

passport.use(
  'login',
  new JsonStrategy({ usernameProp: 'user', passwordProp: 'pass' }, async (username, password, done) => {
    const foundUser = users.find(user => user.username === username);
    if (!foundUser) {
      return done(null, false);
    }
    const isValid = await fakePasswordCheck(password, foundUser.pass);
    if (!isValid) {
      return done(null, false);
    }

    const { pass, ...userData } = foundUser;

    return done(null, userData);
  })
);

passport.use(
  'jwt',
  new JWTstrategy(
    {
      secretOrKey: 'top-secret-hash',
      jwtFromRequest: ExtractJWT.fromHeader('token'),
    },
    async (token, done) => {
      console.log(token);
      try {
        return done(null, token);
      } catch (error) {
        done(error);
      }
      return false;
    }
  )
);

app.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user) => {
    if (err || !user) {
      return next(new Error('Cannot login'));
    }
    req.login(user, { session: false }, async error => {
      if (error) {
        return res.status(403).json('Invalid username/password');
      }
      try {
        const token = jwt.sign(user, 'top-secret-hash');
        return res.json({ token });
      } catch (e) {
        next(e);
      }
      return false;
    });
    return false;
  })(req, res, next);
});

app.get('/', (req, res) => res.json({ msg: 'welcome' }));

app.get('/user', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ msg: 'secure route', user: req.user });
});

app.listen(3000);
