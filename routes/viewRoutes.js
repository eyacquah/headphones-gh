const express = require("express");

const viewController = require("../controllers/viewController");

const router = express.Router();

router.get("/", viewController.getIndex);
router.get("/about", viewController.renderAboutUs);
router.get("/contact", viewController.renderContactUs);
router.get("/checkout", viewController.getCheckout);
router.get("/reservation", viewController.getReservation);

module.exports = router;
