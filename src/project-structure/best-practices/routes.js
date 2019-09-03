const { Router } = require('express');

const { getUser, getUsers, createUser } = require(`${__dirname}/handlers/users`);

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users/', createUser);

// users routes

// other routes

module.exports = router;
