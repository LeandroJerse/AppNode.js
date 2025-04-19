class AlunosService {
    constructor(AlunoModel) {
        this.curso = CursoModel
      }
    
      async get() {
        const cursos = await this.curso.findAll()
        return cursos.map(aluno => aluno.toJSON())
      }
    
      async adicionar(alunoDTO){
        try {
          const { nome, descricao, cargaHoraria } = alunoDTO
    
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
        return this.curso.find(aluno => aluno.id === parseInt(id));
      }
    }
    
    export default AlunoService;