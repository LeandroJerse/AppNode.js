const express = require('express')

const app = express()

//pesquise localhost:3000 no navegador
//ou use o postman para fazer requisições para o servidor
app.get('/', (req, res) => {
    res.send('Hello World!')
}
)

app.use(express.json()) //para receber dados no formato json
app.get('/teste', (req, res) => {
    res.send('teste')
}
)
//serve para receber dados do front-end
app.post('/teste', (req, res) => {
    const dados = req.body  //dados no formato json
    //ou const dados = req.query  //dados no formato query string
    console.log(dados)
    res.send('teste post')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});