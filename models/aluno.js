const aluno = (sequelize,DataTypes) => {
    const Aluno = sequelize.define('Aluno', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dataNascimento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },{
        tableName:'alunos',
        timestamps:false //desabilita os campos createdAt e updatedAt
    })
    return Aluno;
}
module.exports = aluno;