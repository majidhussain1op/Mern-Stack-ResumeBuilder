const express = require("express");
const { getTemplates } = require("./controller");
const { userLogin, userRegister } = require("./controllers/authController");
const router = express.Router();

router.get("/get-templates", getTemplates);

//auth
router.post("/login", userLogin);
router.post("/register", userRegister);

module.exports = router;
