const Sequelize = require('sequelize');
const sequelize = new Sequelize('app','root','secret', {
    dialect: 'mysql',
    host: 'mysql'
})

module.exports = {
    Sequelize,
    sequelize
}