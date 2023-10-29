const path = require('path');
const person = require('../model/person');

/**
 * Index
 * @param {*} req 
 * @param {*} res 
 */
const index = (req, res) => {
    res.sendFile(path.resolve('src/view/pessoa/person-list.html'));
}

const get = async (req, res) => {
    res.send(await person.all());
}

/**
 * Create
 * @param {*} req 
 * @param {*} res 
 */
const create = (req, res) => {
    res.sendFile(path.resolve('src/view/pessoa/person-create.html'));
}

/**
 * Store
 * @param {*} req 
 * @param {*} res 
 */
const store = async (req, res) => {
    await person.create(req.body);
    res.redirect('/persons');
}

const destroy = async (req,res) => {
    let deleteStatus = await person.destroy(req.params.id);
    res.send({message: deleteStatus ? 'success' : 'fail'})
}

module.exports = {
    index,
    get,
    create,
    store,
    destroy
}