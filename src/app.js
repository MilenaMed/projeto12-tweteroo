import express from "express";
import cors from "cors";

const app = express();

//Ferramentas
app.use(cors())
app.use(express.json())

//Globais
const usuarios = []

app.get("/tweets", (request, response) => {
    const tweets =
        [
            {
                username: "bobesponja",
                avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
                tweet: "Eu amo hambúrguer de siri!"
            }
        ]
    response.send(tweets)
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
    console.log(usuarios)   
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
