require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Importa as rotas de integração com o LLM
const llmRoutes = require("./routes/llmRoutes");

const app = express();
const port = process.env.PORT || 3000;

// Middlewares básicos
app.use(cors());               // Libera acesso via outros domínios (necessário para cloud)
app.use(express.json());       // Permite receber JSON no body

// Rotas principais
app.use("/llm", llmRoutes);

// Rota raiz apenas para teste
app.get("/", (req, res) => {
  res.send("IsCoolGPT backend rodando! Desenvolvido por Gabriel Cavalcanti.");
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});