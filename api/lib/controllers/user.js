const db = require("../db/models");

const User = db.User;

module.exports.getCurrentUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.send({
      id: user.id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

module.exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

module.exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

module.exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

module.exports.moderatorOrAdminBoard = (req, res) => {
  res.status(200).send("Moderator or Admin Content.");
};
