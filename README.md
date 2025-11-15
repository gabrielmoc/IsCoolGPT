# 🚀 IsCoolGPT — Backend com Node.js, Express, Docker e Render

**IsCoolGPT** é um backend simples e robusto desenvolvido em Node.js e Express, oferecendo uma API integrada a modelos LLM da Groq. O projeto está totalmente dockerizado e configurado para deploy contínuo via Render.

---

## ✨ Funcionalidades

- Endpoint para perguntas e respostas usando LLM (Groq)
- Estrutura modular com controllers, services e rotas
- API documentada e testada no Postman
- Deploy automatizado pelo Render
- Pipeline de CI com **build** e **lint** via GitHub Actions
- Suporte a variáveis de ambiente via `.env`

---

## 🏗 Arquitetura do Projeto

```
IsCoolGPT
├── src
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── services
│   └── server.js
│
├── Dockerfile
├── .dockerignore
├── .github/workflows/ci.yml
├── package.json
```

---

## 🐳 Docker

O projeto contém um `Dockerfile` preparado para build e execução no Render.

Exemplo simplificado:

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 10000
CMD ["npm", "start"]
```

---

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` com:

```
PORT=10000
GROQ_API_KEY=suachave
```

---

## 🚀 Como Rodar Localmente

```bash
npm install
npm start
```

---

## 📡 Endpoint Principal

### POST `/llm/ask`

Body (JSON):

```json
{
  "question": "O que é...?"
}
```

Resposta:

```json
{
  "answer": "Resposta..."
}
```

---

## 🔄 CI/CD

- CI configurado com GitHub Actions  
- Executa **lint + build** nas branches `main` e `staging`  
- Deploy automático no Render após merge na `main`

---

## 🌐 Deploy

O backend está disponível publicamente em:

👉 **https://iscoolgpt.onrender.com**

---

## 👨‍💻 Autor

Desenvolvido por **Gabriel Cavalcanti**.
