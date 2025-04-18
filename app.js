const express = require('express')
const routes = require('./api/index')

const app = express()

//pesquise localhost:3000 no navegador
//ou use o postman para fazer requisições para o servidor


app.use(express.json())
app.use('/', routes) //usar o express para usar as rotas do arquivo index.js
//app.use('/cursos', cursosRouter) //usar o express para usar as rotas do arquivo cursos.js

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});