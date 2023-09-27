function aguardar(segundos) {
  return new Promise((resolve, reject) => {
    if (segundos > 0) {
      setTimeout(() => {
        resolve(`Esperei ${segundos} segundos.`);
      }, segundos * 1000);
    } else {
      reject('O tempo deve ser maior que 0 segundos.');
    }
  });
}

aguardar(3)
  .then((mensagem) => {
    console.log(mensagem); // Saída após 3 segundos: "Esperei 3 segundos."
  })
  .catch((erro) => {
    console.error(erro);
  });