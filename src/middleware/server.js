const express = require('express');

// handlers
const secureHandler = require(`${__dirname}/handlers/secure`);
const usersHandler = require(`${__dirname}/handlers/users`);
const adminHandler = require(`${__dirname}/handlers/admin`);

// middlewares
const logRequestMiddleware = require(`${__dirname}/middleware/log_request`);
const authMiddleware = require(`${__dirname}/middleware/auth`);
const permissionsMiddleware = require(`${__dirname}/middleware/permissions`);

const app = express();

// 1. global middleware - called on every request
app.use(logRequestMiddleware);

// open route, no authentication needed
app.get('/users', usersHandler);

// 2. middleware for specific route
app.get('/secured', authMiddleware, secureHandler);

// 3. middleware pipe, the second middleware depends on the first
// 4. reusing the same middleware, but with different parameter values
app.get('/admin/courses', authMiddleware, permissionsMiddleware('COURSES'), adminHandler.courses);
app.get('/admin/salaries', authMiddleware, permissionsMiddleware('SALARIES'), adminHandler.salaries);

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Listening...'));
