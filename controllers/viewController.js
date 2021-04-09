const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");

exports.renderContactUs = (req, res, next) => {
  res.status(200).render("contact", { title: "Contact Us" });
};

exports.renderAboutUs = async (req, res, next) => {
  res.status(200).render("about", { title: "About Us" });
};

exports.getIndex = catchAsync(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).render("index", { products, title: "Home" });
});

exports.getCheckout = (req, res) => {
  res.status(200).render("checkout", { title: "Checkout" });
};

exports.getReservation = (req, res) => {
  res.status(200).render("reservation", { title: "Reservation" });
};
