const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;
app.get('/',function (req,res){
    res.sendFile("/home/nathan/AtividadeMongoDB/AtividadeREDIS/html/cadastro.html")
})
app.get('/cadastro',function (req,res){
    res.sendFile("/home/nathan/AtividadeMongoDB/AtividadeREDIS/html/cadastro.html")
})
app.get('/login',function (req,res){
    res.sendFile('/home/nathan/AtividadeMongoDB/AtividadeREDIS/html/login.html')
})
app.get('/timeline', function(req,res){
    res.sendFile("/home/nathan/AtividadeMongoDB/AtividadeREDIS/html/timeline.html")
})
app.get('/posts', function(req,res){
    res.sendFile("/home/nathan/AtividadeMongoDB/AtividadeREDIS/html/posts.html")
})
const db = require('./database/database');
const mg = require('.//mongo/mongo')

app.post('/salvarMg', mg.setMongo)
app.post('/entrar',db.login);
app.post('/salvar', db.addPessoaBanco);
app.post('/getPg', db.login);
app.post('/getMongo', mg.getMongo);
app.post('/delet', mg.rmMongo)
app.get('/main', function (req,res) {
    res.sendFile("/home/nathan/AtividadeMongoDB/AtividadeREDIS/assets/js/main.js")
})
// app.get('/rascunho', rd.getRedis);
app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
});