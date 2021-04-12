const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/").get(userController.getAllUsers);
//router.route("/:id").get(userController.getUser);

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/test", authController.protect);
module.exports = router;
