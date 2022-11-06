import express from "express";
import cors from "cors";


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



const app = express();
app.use(cors())


app.get("/tweets", (request, response) => {
     const resposta = tweets.map((tweet) => {
        const avatar = users.find((user) => user.username === tweet.username).avatar
        return {
            username: tweet.username,
            avatar: avatar,
            tweet: tweet.tweet
        }
     })

    response.send(resposta);
})


app.post = (request, response) => {
    users.push(request.data)
}

app.listen(5000, () => {
    console.log("Server running in port: 5000")
})
