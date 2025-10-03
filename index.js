const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/crash', (req, res) => {
    res.status(200).json({
        message: "server crashed done ✅"
    })
    process.exit(1);
})

app.get('/:id', (req,res) => {
    res.send(`<h2>Hello from id : ${req.params.id}</h2>`)
})

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}

module.exports = app