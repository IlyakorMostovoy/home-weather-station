const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../models");
const config = require("../config/auth.js");

const User = db.User;

module.exports.signup = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    await user.setRoles([1]).then(() => {
      res.send({ message: "User was registered successfully" });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found" });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    const roles = await user.getRoles();
    const authorities = roles.map((role) => role.name);

    res.send({
      id: user.id,
      username: user.username,
      email: user.email,
      roles: authorities,
      accessToken: token,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
