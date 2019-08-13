const crypto = require('crypto');

const hashPassword = (password, salt) => {
  const start = Date.now();
  return crypto.pbkdf2(password, salt, 1000000, 64, 'sha512', () => {
    console.log(`${Date.now() - start} ms`);
  });
};

hashPassword('123my-pass', 'salt-12345');
hashPassword('456my-pass', 'salt-67890');
hashPassword('456my-pass', 'salt-67890');
hashPassword('456my-pass', 'salt-67890');
hashPassword('456my-pass', 'salt-67890');
hashPassword('456my-pass', 'salt-67890');

// change UV_THREADPOOL_SIZE
// hashPassword('456my-pass', 'salt-67890');

// 420ms
