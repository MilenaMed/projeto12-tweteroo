import express from "express";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json())

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

app.post("/sign-up", (request, response) => {
    request.body
    
    const novoUsuário =
        [
            {
                username: "bobesponja",
                avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png"
            }
        ]
    response.send("OK")
})

app.listen(5000); 
