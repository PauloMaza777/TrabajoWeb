const express = require('express');
var bodyParser = require('body-parser'); //nueva linea
const app = express();
const puerto = 80;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const TemasController = require('./controllers/TemasControllers');
const AutoresController = require('./controllers/AutoresController');
const EditorialesController = require('./controllers/EditorialesControllers');
const LibrosController = require('./controllers/LibrosControllers');

const cors = require('cors'); //nueva linea
app.use(cors()); //nueva linea

app.use(express.json());

app.get('/', function (req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Holiwis');
});

app.get('/temas', TemasController.indexGet);
app.get('/temas/:id([0-9]+)', TemasController.itemGet);

app.get('/autores', AutoresController.indexGet);

app.get('/editoriales', EditorialesController.indexGet);

app.get('/libros', LibrosController.indexGet);


app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");
});
