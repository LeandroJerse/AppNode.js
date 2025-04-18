const express = require("express");
const router = express.Router();
const { Curso } = require("../models/index.js");

router.get("/", async (req, res) => {
    const cursos = await Curso.findAll();
    res.json(cursos);
});

router.post("/", async (req, res) => {
    try {
        const { nome, descricao, cargaHoraria } = req.body; // Corrigido para "cargaHoraria"

        // Certifique-se de que o valor está sendo passado corretamente
        if (!cargaHoraria) {
            return res.status(400).send("O campo 'cargaHoraria' é obrigatório.");
        }

        await Curso.create({
            nome: nome,
            descricao: descricao,
            cargaHoraria: cargaHoraria, // Certifique-se de que o nome está correto
        });

        res.send("Curso adicionado com sucesso!");
    } catch (error) {
        res.status(500).send("Erro ao adicionar curso: " + error.message);
    }
});

module.exports = router;
