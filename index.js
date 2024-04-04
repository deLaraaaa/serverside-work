import express from "express"; // Importando o express
import path, { dirname } from "path"; 
import { fileURLToPath } from 'url';  /* As linhas 2 e 3 importam os modulos 'path', 'dirname' e 'url' para trabalhar com arquivos e caminhos de diretórios */

const __dirname = dirname(fileURLToPath(import.meta.url)); /* Atribuindo o caminho do diretório atual a variável '__dirname' */

const app = express(); // Inicializando o express
const port = 3000; // Definindo a porta do servidor para testes

app.use(express.urlencoded({ extended: true })); /* Middleware chamado body-parser para receber dados de formulários */
app.use(express.static(path.join(__dirname, 'public'))); /* Middleware para servir arquivos estáticos (como HTML (no nosso caso EJS), e CSS) */

app.get('/login', (req, res) => { // Renderiza a página de login usando GET request
    res.render('login.ejs');
}); 

app.post('/', (req, res) => { /* Renderiza a página inicial usando POST request e passando os dados do formulário */
    const username = req.body.username;  /* Recebe o nome do usuário do formulário e armazena em uma constante */
    const age = new Date().getFullYear() - new Date(req.body.nasc).getFullYear(); /* Calcula a idade do usuário a partir da data de nascimento do formulário (usa apenas o ano, passível de bugs) */
    res.render('index.ejs', { username: username, age: age }); /* Renderiza a página inicial passando o nome do usuário e a idade */
}); 

app.listen(port, () => { // Inicializa o servidor na porta definida (3000)
    console.log(`Server is running on port ${port}`);
});