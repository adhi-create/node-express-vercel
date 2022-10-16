const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    id: "1",
    name: "The app is working properly!",
  });
});

module.exports = router;
