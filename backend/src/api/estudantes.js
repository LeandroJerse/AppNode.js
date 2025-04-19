const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.send("Área dos alunos");
  });
  //serve para receber dados do front-end
  router.post("/", (req, res) => {
    const dados = req.body; //dados no formato json
    //ou const dados = req.query  //dados no formato query string
    console.log(dados);
    res.send("estudante adicionado com sucesso!");
  });

  
module.exports = router;