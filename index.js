const express = require("express")
const bodyParser = require('body-parser');
const person = require('./src/model/person')

const personController = require('./src/controller/person-controller');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
    // person.teste(res);
})

app.get('/persons', personController.index);

app.get('/persons/get', personController.get);

app.get('/persons/create', personController.create);

app.post('/persons/store', personController.store);

app.delete('/persons/:id/delete', personController.destroy)

app.listen(3000)
