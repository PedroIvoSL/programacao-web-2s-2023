// index.js

const express = require("express");
const app = express();
const calculadora = require("./util/calculadora");

// Rota para soma
app.get("/somar/:a/:b", (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.soma(a, b);
  res.send(`Resultado da soma: ${resultado}`);
});

// Rota para subtração
app.get("/subtrair/:a/:b", (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.subtrair(a, b);
  res.send(`Resultado da subtração: ${resultado}`);
});

// Rota para multiplicação
app.get("/multiplicar/:a/:b", (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.multiplicar(a, b);
  res.send(`Resultado da multiplicação: ${resultado}`);
});

// Rota para divisão
app.get("/dividir/:a/:b", (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.dividir(a, b);
  res.send(`Resultado da divisão: ${resultado}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
