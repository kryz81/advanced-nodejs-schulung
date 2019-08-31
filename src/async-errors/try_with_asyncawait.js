const getUserFromDB = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(new Error('Invalid id'));
        return;
      }
      resolve(`User ${id}`);
    }, 1000);
  });
};

const readUser = async id => {
  try {
    const user = await getUserFromDB(id);
    return user;
  } catch (err) {
    console.log(err.message);
  }
};

readUser(null);
