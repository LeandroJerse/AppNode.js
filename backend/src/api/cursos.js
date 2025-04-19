const express = require("express");
const router = express.Router();
const { Curso } = require("../models/index.js");
const { body, validationResult } = require("express-validator");

class CursoService {
    constructor(CursoModel) {
        this.CursoModel = CursoModel;
    }

    async get() {
        return await this.CursoModel.findAll();
    }

    async adicionar(curso) {
        return await this.CursoModel.create(curso);
    }
}

const cursoService = new CursoService(Curso);

router.get("/", async (req, res) => {
    const cursos = await cursoService.get();
    res.status(200).json(cursos);
});

router.post(
    "/",
    body("nome").notEmpty().withMessage("O campo nome é obrigatório."),
    body("cargaHoraria")
        .isInt()
        .withMessage("O campo cargaHoraria deve ser um número inteiro."),
    async (req, res) => {
        // Validação dos dados de entrada
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { nome, descricao, cargaHoraria } = req.body;

            await cursoService.adicionar({
                nome: nome,
                descricao: descricao,
                cargaHoraria: cargaHoraria,
            });

            res.status(201).send("Curso adicionado com sucesso!");
        } catch (error) {
            res.status(400).send("Erro ao adicionar curso: " + error.message);
        }
    }
);

module.exports = router;
