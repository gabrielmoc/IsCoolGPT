// Importa o SDK oficial da Groq
const Groq = require("groq-sdk");
// Carrega variáveis de ambiente definidas no arquivo .env
require("dotenv").config();

// Inicializa o cliente Groq usando a chave da API
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Função responsável por enviar a pergunta ao modelo LLM
async function askLLM(question) {
  try {
    // Chamada ao endpoint de completions (chat)
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant", // Modelo escolhido
      messages: [
        // Define o comportamento padrão do assistente
        { role: "system", content: "Você é um assistente especialista em cloud computing." },
        // Pergunta enviada pelo usuário
        { role: "user", content: question }
      ],
      temperature: 0.3 // Controla a criatividade da resposta
    });

    // Extrai e retorna a resposta gerada pelo modelo
    return response.choices[0].message.content;

  } catch (err) {
    // Mostra o erro no terminal (útil para investigar falhas)
    console.error("Erro ao chamar o LLM:", err);

    // Propaga o erro para ser tratado pelo controller
    throw err;
  }
}

// Exporta o serviço
module.exports = { askLLM };