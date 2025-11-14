const { askLLM } = require("../services/llmService");

async function handleAsk(req, res) {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Campo 'question' é obrigatório." });
    }

    const answer = await askLLM(question);
    res.json({ answer });

  } catch (err) {
    console.error("Erro ao chamar o LLM:", err);
    res.status(500).json({ error: "Erro interno ao processar a requisição." });
  }
}

module.exports = { handleAsk };