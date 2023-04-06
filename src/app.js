import express from "express";

const app = express();

app.get("/hello", (request, response) => {
    response.send('TWEETEROO')
});

app.listen(5000);
