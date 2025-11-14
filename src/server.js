require("dotenv").config();
const express = require("express");
const cors = require("cors");

const llmRoutes = require("./routes/llmRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use("/llm", llmRoutes);

app.get("/", (req, res) => {
  res.send("IsCoolGPT backend rodando! Desenvolvido por Gabriel Cavalcanti.");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
