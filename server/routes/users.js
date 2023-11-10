const express = require("express");
const router = express.Router();
const { Page, User } = require("../models");

router.use(express.json());

// GET /users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// GET /users/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: [{ model: Page }],
    });

    if (!user) {
      res.status(404);
      next();
    } else {
      res.send(user);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  if (Object.values(req.body).includes("")) {
    return res.status(400).send("Inputs cannot be empty.");
  }
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res.status(404).send("Invalid user");
    } else {
      if (user.password === req.body.password) {
        return res.send(user);
      } else {
        return res.status(400).send("Incorrect password");
      }
    }
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  if (Object.values(req.body).includes("")) {
    return res.status(400).send("Inputs cannot be empty.");
  }
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.send(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) {
      res.status(404);
      next();
    } else {
      await user.destroy();
      return res.send(user);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
