const express = require("express");

const router = () => {
  const router = express.Router();
  router.get("/", (_req, res) =>
    res.send("Looks like Ivor's avatar server's working")
  );
  return router;
};

module.exports = router;
