// ACESSANDO VIA METODO PURO

// const http = require('http')
// const port = 3000
// const server = http.createServer((req, res) => {
//     res.end('Hello WORLD')
// })

// server.listen(port, () => {
//     console.log("Server ON!")
// })

// ACESSANDO METODO EXPRESS
const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})
app.get("/contato", function(req,res){
    res.sendFile(__dirname + "/Contato.html")
})

app.listen(3000,function(){
    console.log("server LOADED")
})

