import express from 'express';

const app = express();

app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Nidhi Kinha\n');   
});

app.get('/about', (req, res) => {
    res.status(200).send('About Nidhi Gupta\n');   
});

app.get('/contact', (req, res) => {
    // res.status(200).send('Contact Nidhi');   
    res.json({
        phone: '123-456-7890',
        email: 'gnidhi58@gmail.com'
    });
});

app.get('/welcome/:name', (req, res) => {
    let name = req.params.name;
    res.status(200).send(`Welcome to ${name} Kinha\n`);   
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});