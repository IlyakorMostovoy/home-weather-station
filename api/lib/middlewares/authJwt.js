const jwt = require("jsonwebtoken");

const db = require("../models");
const config = require("../config/auth.js");

const User = db.User;

module.exports.verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized",
      });
    }

    req.userId = decoded.id;

    next();
  });
};

module.exports.isAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  const roles = await user.getRoles();

  roles.forEach((role) => {
    if (role.name === "admin") {
      next();
    }
  });

  return res.status(403).send({
    message: "Require Admin Role",
  });
};

module.exports.isModerator = async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  const roles = await user.getRoles();

  roles.forEach((role) => {
    if (role.name === "moderator") {
      next();
    }
  });

  res.status(403).send({
    message: "Require Moderator Role",
  });
};

module.exports.isModeratorOrAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  const roles = await user.getRoles();

  roles.forEach((role) => {
    if (role.name === "moderator" || role.name === "admin") {
      next();
    }
  });

  res.status(403).send({
    message: "Require Moderator or Admin Role",
  });
};
