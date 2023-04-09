import express from "express";
import cors from "cors";

const app = express();

//Ferramentas
app.use(cors())
app.use(express.json())

//Globais
let usuarios = [];
const tweets = [];

//Tweets já criados
app.get("/tweets", (request, response) => {
    if (tweets.length > 10) {
        const ultimosTweets = tweets.slice(-10)
        response.send(ultimosTweets)
    }
    else {
        response.send(tweets)
    }
});

// Criar usuário
app.post("/sign-up", (request, response) => {
    const novoUsuário =
    {
        username: request.body.username,
        avatar: request.body.avatar
    }

    usuarios.push(novoUsuário)
    response.send("OK")
})


//Criando tweets
app.post("/tweets", (request, response) => {

    //Checando se tem conta
    const TemConta = usuarios.find(u => u.username === request.body.username)
    const foto = usuarios.find(user => user.username === request.body.username)

    if (!TemConta) {
        response.send("UNAUTHORIZED")
    }

    const posttweet =
    {
        username: request.body.username,
        avatar: foto.avatar,
        tweet: request.body.tweet
    }

    tweets.push(posttweet)
    response.send("OK")
})

app.listen(5000); 
