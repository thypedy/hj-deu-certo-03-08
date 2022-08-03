/*Configurações do servidor*/
//carregar o modúlo express
const express = require('express')
const { default: mongoose } = require('mongoose')

//executar o mudulo express
const app = express()

//definir a pasta dos arquivos ejs
app.set('views','./')

//criar uma instancia local
app.listen(3050, ()=>{
    console.log("servidor local em http://localhost:3050")
})
/*Configurações do servidor - Fim - */

/*Configuração do banco de dados -ínicio
importar o módulo mongoose*/
//const mongoose = require('mongoose')
//Configurar o script de conexão
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:wi123@fiaptecnico.5oane.mongodb.net/revisao?retryWrites=true&w=majority')
}
//Configurar o modelo para a coleção alunos
const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina:String
})
//Definir o modelo alunos
const alunos = mongoose.model('alunos',modelo)

/*Configuração do banco de dados - Fim*/

/*Rota para a requisição*/
app.get('/', async (req, res)=>{
    conexao()
    //pesquisar documentos na collection alunos
    const resultado = await alunos.find()
    console.log(resultado)
    //res.send('Funcionando😉😢😜👀✨🤔')
    res.render('index.ejs',{resultado})
})