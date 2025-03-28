const express = require ('express');
const bodyParser = require('body-parser');
const { randomBytes } = require ('crypto');
//randomBytes is used here for generating id
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 4000;

const posts = {}; 

app.get("/posts", (req, res) => {
    res.send(posts);
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');

    const { title } = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})