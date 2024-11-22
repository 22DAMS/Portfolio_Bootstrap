import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath  } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT;

// Configurar carpeta "public" para servir archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Manejo de rutas no definidas
app.use((req, res) => {
    res.status(404).send('Página no encontrada.');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});