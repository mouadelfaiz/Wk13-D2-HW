const express = require("express");
const router = express.Router();
const Log = require("../models/logs");
const logsData = require("../util/logsdata");
console.log(logsData);

router.get("/seed-log", async (req, res) => {
  await Log.deleteMany({});
  await Log.insertMany(logsData);
  console.log("Seed is done!");
});

// induces

// this index route
router.get("/index", async (req, res) => {
  try {
    const logs = await Log.find();
    res.render("Index", { logs });
  } catch (error) {
    console.log(error);
  }
});

// this is new route
router.get("/new", (req, res) => {
  res.render("New");
});

// this delete route
router.delete("/:id", async (req, res) => {
  try {
    await Log.findByIdAndRemove(req.params.id);
    res.redirect("/logs/index");
  } catch (error) {
    console.log(error);
  }
});

// this is update route
router.put("/:id", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") req.body.shipIsBroken = true;
    if (req.body.shipIsBroken === "off") req.body.shipIsBroken = false;
    await Log.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/logs/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
});

// this is create route
router.post("/", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") req.body.shipIsBroken = true;
    if (req.body.shipIsBroken === "off") req.body.shipIsBroken = false;
    await Log.create(req.body); // in the log model create what is inside the req.body
    res.redirect("/logs/index");
  } catch (error) {
    console.log(error);
  }
});

// this is edite route
router.get("/:id/edit", async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render("edit", { log });
  } catch (error) {
    console.log(error);
  }
});

// this is show route

router.get("/:id", async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render("Show", { log });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
