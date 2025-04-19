const curso = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                name: 'unique_nome',
                msg: 'O nome do curso deve ser único.'
            }
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cargaHoraria: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        tableName: 'cursos',
        timestamps: false // desabilita os campos createdAt e updatedAt
    });

    return Curso;
}

module.exports = curso;