
---

# 📱 AppNode.js

Aplicação web full-stack desenvolvida com Node.js, com funcionalidades completas de cadastro, listagem e manipulação de dados. O projeto integra um backend com Express e PostgreSQL, além de um frontend simples com HTML, CSS e JavaScript puro (Vanilla JS).

---

## 🚀 Tecnologias Utilizadas

### 🔧 Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

### 🎨 Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

---

## ✅ Pré-requisitos

Antes de iniciar, verifique se você tem as seguintes ferramentas instaladas:

- Node.js (v22.14.1)
- PostgreSQL (v17)
- Yarn (gerenciador de pacotes)

---

## ⚙️ Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/LeandroJerse/AppNode.js.git
   ```

2. **Instale as dependências do backend**
   ```bash
   cd AppNode.js/backend
   yarn install
   ```

3. **Configure o banco de dados PostgreSQL**
   - Crie um banco de dados no PostgreSQL.
   - Configure as variáveis de conexão no arquivo:  
     `backend/src/config/database.js`

4. **Inicie o servidor**
   ```bash
   yarn start
   ```

> O backend estará rodando em `http://localhost:3000`

---

## 📁 Estrutura do Projeto

```
AppNode.js/
├── backend/                  # Código-fonte do backend
│   └── src/
│       ├── api/              # Rotas e controladores
│       ├── config/           # Configurações (ex: conexão com DB)
│       ├── models/           # Modelos do banco de dados
│       ├── services/         # Lógica de negócio
│       └── app.js            # Arquivo principal da aplicação
│
├── frontend/                 # Código-fonte do frontend
│   ├── assets/
│   │   ├── css/
│   │   └── js/
│   ├── cadastro.html         # Página de cadastro
│   └── index.html            # Página inicial
```

---
