const router = require('express').Router()
const User = require('../models/User')
const passport = require('passport')

const isAuth = (req, res, next) =>
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ message: 'Unauthorized' })

router.post('/signup', (req, res, next) => {
  User.register({ ...req.body }, req.body.password)
    .then(user => res.status(201).json(user))
    .catch(err => res.json(err))
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err)
      }
      return res.status(200).json(user)
    })
  })(req, res, next)
})

router.get('/profile', isAuth, (req, res, next) => {
  res.status(200).json(req.user)
})

module.exports = router
