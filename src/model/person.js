const db = require('./db')

const Person = db.sequelize.define('persons', {
    name: {
        type: db.Sequelize.STRING
    },
    last_name: {
        type: db.Sequelize.STRING
    },
    birth_date: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    rg: {
        type: db.Sequelize.STRING
    },
    gender: {
        type: db.Sequelize.STRING
    }
});

const create = async (data) => {
    return await Person.create(data)
}

const all = async () => {
    return await Person.findAll();
}

const destroy = async (id) => {
    return await Person.destroy({
        where: {
            id
        }
    })
}

const sync = () => {
    Person.sync({force:true})
}

module.exports = {
    all,
    create,
    destroy,
    sync
}
