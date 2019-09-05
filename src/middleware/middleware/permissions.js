module.exports = permissionType => (req, res, next) => {
  if (!req.user) {
    res.status(403).json({ msg: 'Access denied' });
    return;
  }

  if (!req.user.areas.includes(permissionType)) {
    res.status(403).json({ msg: 'Invalid credentials' });
    return;
  }

  next();
};
