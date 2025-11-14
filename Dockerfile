# 1 — Imagem base oficial do Node
FROM node:18-alpine

# 2 — Define diretório de trabalho dentro do contêiner
WORKDIR /app

# 3 — Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# 4 — Instala dependências de forma limpa
RUN npm install --production

# 5 — Copia o resto do código para dentro do container
COPY . .

# 6 — Expõe a porta da aplicação
EXPOSE 3000

# 7 — Comando para iniciar o servidor
CMD ["npm", "start"]