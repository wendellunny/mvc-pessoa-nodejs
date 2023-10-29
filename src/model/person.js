const Sequelize = require('sequelize');
const sequelize = new Sequelize('app','root','secret', {
    dialect: 'mysql',
    host: 'mysql'
})

const Person = sequelize.define('persons', {
    name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    birth_date: {
        type: Sequelize.STRING
    },
    cpf: {
        type: Sequelize.STRING
    },
    rg: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.STRING
    }
});

const create = async (data) => {
    return await Person.create(data)
}

const all = async () => {
    return await Person.findAll();
}

const sync = () => {
    Person.sync({force:true})
}

module.exports = {
    all,
    create,
    sync
}
