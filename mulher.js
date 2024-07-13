const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Sheyenne Carvalho',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.artstation.com%2Fartwork%2FOyrymg&psig=AOvVaw1IYphVS0cldC41gf9-k9E2&ust=1720125629067000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCL77rdi4cDFQAAAAAdAAAAABAE',
        minibio: 'Desenvolveora'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta )