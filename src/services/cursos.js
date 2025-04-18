class CursoService {
  constructor(CursoModel) {
    this.curso = CursoModel
  }

  async get() {
    const cursos = await this.curso.findAll()
    return cursos.map(curso => curso.toJSON())
  }

  async adicionar(cursoDTO){
    try {
      const { nome, descricao, cargaHoraria } = cursoDTO

      if (!nome || !cargaHoraria) {
        throw new Error("Todos os campos são obrigatórios.")
      }

      await this.curso.create({
        nome: nome,
        descricao: descricao,
        cargaHoraria: cargaHoraria
      })
    } catch (error) {
      throw new Error("Erro ao adicionar curso: " + error.message)
    } 
  }

  getCursoById(id) {
    return this.cursos.find(curso => curso.id === parseInt(id));
  }
}

module.exports = CursoService