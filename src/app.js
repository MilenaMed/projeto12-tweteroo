import express from "express";
import cors from "cors";

const app = express();

//Ferramentas
app.use(cors())
app.use(express.json())

//Globais
const usuarios = [];
const tweets =[

];


//Tweets já criados
app.get("/tweets", (request, response) => {
        if(tweets.length > 10){
            const ultimosTweets = tweets.slice(-10)
            response.send(ultimosTweets)
        }
        else{
            response.send(tweets)
        }
    });

// Criar usuário
app.post("/sign-up", (request, response) => {
    const novoUsuário =
        [
            {
                username: request.body.username,
                avatar: request.body.avatar
             }
        ]
    usuarios.push(novoUsuário) 
    response.send("OK")
})

app.post("/tweets", (request, response) => {
    const tweet =
        [
            {
                username: request.body.username,
                tweet: request.body.tweet
            }
        ]

    tweets.push(tweet)
    response.send("OK")
})

app.listen(5000); 
