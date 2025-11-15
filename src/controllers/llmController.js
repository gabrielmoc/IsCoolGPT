// Importa a função que faz a chamada ao LLM
const { askLLM } = require("../services/llmService");

// Controller responsável por lidar com o POST /ask
async function handleAsk(req, res) {
  try {
    // Extrai o campo 'question' enviado no corpo da requisição
    const { question } = req.body;

    // Validação: impede requisições sem pergunta
    if (!question) {
      return res.status(400).json({ error: "Campo 'question' é obrigatório." });
    }

    // Chama o serviço que conversa com o modelo da Groq
    const answer = await askLLM(question);

    // Retorna a resposta do LLM para o cliente
    res.json({ answer });

  } catch (err) {
    // Loga o erro no servidor (útil para debug)
    console.error("Erro ao chamar o LLM:", err);

    // Resposta genérica de erro interno
    res.status(500).json({ error: "Erro interno ao processar a requisição." });
  }
}

// Exporta o controller para ser usado nas rotas
module.exports = { handleAsk };