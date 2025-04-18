const express = require("express");
const router = express.Router();
const { Curso } = require("../models/index.js");
const CursoService = require("../services/cursos.js");

const cursoService = new CursoService(Curso);

router.get("/", async (req, res) => {
    const cursos = await cursoService.get();
    res.status(200).json(cursos);
});

router.post("/", async (req, res) => {
    try {
        const { nome, descricao, cargaHoraria } = req.body; // Corrigido para "cargaHoraria"

        await cursoService.adicionar({
            nome: nome,
            descricao: descricao,
            cargaHoraria: cargaHoraria
        });

        res.status(201).send("Curso adicionado com sucesso!");
    } catch (error) {
        res.status(500).send("Erro ao adicionar curso: " + error.message);
    }
});

module.exports = router;
