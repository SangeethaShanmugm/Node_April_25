import express from 'express';
import redis from 'redis'
const app = express();
const port = 9000;

//connect redis
const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
})

//initialize redis key
client.set('aprvisitcount', 0)

app.get("/", (req, res) => {
    client.get('aprvisitcount', (err, aprvisitcount) => { //retrieve current value of apivisitcount key from redis
        res.send(`Number of visits are: ${aprvisitcount}`)
        client.set('aprvisitcount', (+aprvisitcount) + 1)
        console.log(aprvisitcount)
    })

})

app.listen(port, () => {
    console.log('app is running on port ' + port)
})