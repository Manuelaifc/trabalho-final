import express from 'express';

const PORT = process.env.PORT || 8091;

const app = express();

app.listen(PORT, () => console.log('Servidor iniciado na porta ' + PORT));