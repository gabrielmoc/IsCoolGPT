const express = require("express");
const router = express.Router();
const { handleAsk } = require("../controllers/llmController");

// Endpoint para receber perguntas e direcionar para o controller
router.post("/ask", handleAsk);

module.exports = router;