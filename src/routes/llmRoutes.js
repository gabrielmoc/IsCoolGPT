const express = require("express");
const router = express.Router();
const { handleAsk } = require("../controllers/llmController");

router.post("/ask", handleAsk);

module.exports = router;