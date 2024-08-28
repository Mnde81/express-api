import express from 'express';


const app = express();
const port = 3000;






app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Serveris pasileido: http://localhost:${port}`);
});
