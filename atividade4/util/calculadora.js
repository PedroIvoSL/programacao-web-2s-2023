// util/calculadora.js

module.exports = {
  soma: (a, b) => a + b,
  subtrair: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => (b !== 0 ? a / b : "Divisão por zero não é permitida"),
};