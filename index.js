import express from "express";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json())

const users = []
const tweets = []


app.get("/tweets", (request, response) => {
    const resposta = tweets.map((tweet) => {
        const avatar = users.find((user) => user.username === tweet.username).avatar
        return {
            username: tweet.username,
            avatar: avatar,
            tweet: tweet.tweet
        }
    })
    const ultimosTweets = resposta.slice(-10);
    response.send(ultimosTweets);
})


app.post("/sign-up", (request, response) => {

    const newUser = {

        username: request.body.username,
        avatar: request.body.avatar

    }

    users.push(newUser)
    response.send("OK")

})

app.post("/tweets", (request, response) => {
    const newTweet = {
        username: request.body.username,
        tweet: request.body.tweet
    }

    tweets.push(newTweet)
    response.send("OK")
})

app.listen(5000, () => {
    console.log("Server running in port: 5000")
})
