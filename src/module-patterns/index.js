const { fetchUsers, deleteUser } = require(__dirname + '/named_export');

const Logger = require(__dirname + '/class_export');
// multiple instances
const log1 = new Logger();
const log2 = new Logger();

// singleton, every module receives the same instance
const logger = require(__dirname + '/instance_export');

// require folder
const { connect, fetch } = require(__dirname + '/db');
fetch('jobs');
