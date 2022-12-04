const { Router, json } = require("express");
const cualquiera = require("../middlewares/passport");
const router = Router();
router.use(json());
const serviceController = require("../middlewares/service");
const admController = require("../middlewares/admin");
const petController = require("../middlewares/pet");
const vetController = require("../middlewares/vet");
const turnController = require("../middlewares/turn.js");
const userController = require("../middlewares/user.js");
const paymentController = require("../middlewares/payments");
const autentController = require("../middlewares/autent");

router.use("/admin", admController);
router.use("/service", serviceController);
router.use("/pet", petController);
router.use("/vet", vetController);
router.use("/turn", cualquiera.authenticate("jwt"), turnController);
router.use("/user", userController);
router.use("/payment", paymentController);
router.use("/", autentController);

module.exports = router;
