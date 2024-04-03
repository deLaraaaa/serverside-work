import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/', (req, res) => {
    const username = req.body.username;
    const age = new Date().getFullYear() - new Date(req.body.nasc).getFullYear();
    res.render('index.ejs', { username: username, age: age });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});