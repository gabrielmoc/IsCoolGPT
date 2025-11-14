const Groq = require("groq-sdk");
require("dotenv").config();

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function askLLM(question) {
  try {
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "Você é um assistente especialista em cloud computing." },
        { role: "user", content: question }
      ],
      temperature: 0.3
    });

    return response.choices[0].message.content;
  } catch (err) {
    console.error("Erro ao chamar o LLM:", err);
    throw err;
  }
}

module.exports = { askLLM };