const express = require('express');
const router = express.Router();



const listaDeCursos = [];

router.get("/", (req, res) => {
    res.json(listaDeCursos); //retorna a lista de cursos em formato json
  });
  //serve para receber dados do front-end
  router.post("/", (req, res) => {
    const dados = req.body; //dados no formato json
    //ou const dados = req.query  //dados no formato query string
    console.log(dados);
    listaDeCursos.push(dados); //adiciona os dados na lista de cursos
    res.send("Curso adicionado com sucesso!");
  });

  module.exports = router;