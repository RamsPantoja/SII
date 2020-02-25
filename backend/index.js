import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

const port = 8000;

app.listen(port, () => {
    return console.log(`http://localhost:${port}`);
});
