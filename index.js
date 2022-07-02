const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.get('/seianan', (req, res) => {
    res.status(200).send({
        name: 'Roxanne Ruffs',
        age:24,
        sex:'F',
        species:'Canine',
        specification:'Border Collie'
    })
})

app.post('/seianan/:name', (req, res) => {
    const {name} = req.params;
    const info = req.body;

    if(!info){
        res.status(418).send({message: `Need more information about ${name}, ${info}`})
    }

    res.send({
        seianan: `This Seianan's name is ${name} and here is her info: ${JSON.stringify(info.name)}`
    })
})

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);