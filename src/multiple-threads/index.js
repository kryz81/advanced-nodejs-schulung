const crypto = require('crypto');

const hashPassword = (password, cb) => {
  const start = Date.now();
  return crypto.pbkdf2(password, 'my-salty-salt', 1000000, 128, 'sha512', (err, hash) => {
    console.log(`${((Date.now() - start) / 1000).toFixed(1)} s`);
    return cb(err, hash);
  });
};

hashPassword('my-password-1', () => null);
hashPassword('my-password-2', () => null);
hashPassword('my-password-3', () => null);
hashPassword('my-password-4', () => null);

hashPassword('my-password-4', () => null);
hashPassword('my-password-4', () => null);

// change UV_THREADPOOL_SIZE
