const crypto = require('crypto');

const hashPassword = (password, salt) => {
  const start = Date.now();
  crypto.pbkdf2Sync(password, salt, 1000000, 64, 'sha512');
  console.log(`${Date.now() - start} ms`);
};

hashPassword('123my-pass', 'salt-12345');
hashPassword('456my-pass', 'salt-67890');
