import express from "express";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json())

const users = [
    {
        username: "lulamolusco",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    },

]

const tweets = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },

    {
        username: "lulamolusco",
        tweet: "aprendendo back-end"
    }
]


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
