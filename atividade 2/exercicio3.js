// Função para imprimir uma matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i].join('\t'));
    }
  }
  
  // Função para multiplicar matrizes
  function multiplicarMatrizes(matrizA, matrizB) {
    const numRowsA = matrizA.length;
    const numColsA = matrizA[0].length;
    const numRowsB = matrizB.length;
    const numColsB = matrizB[0].length;
  
    if (numColsA !== numRowsB) {
      console.log("Não é possível calcular a multiplicação das matrizes.");
      return;
    }
  
    const matrizC = [];
  
    for (let i = 0; i < numRowsA; i++) {
      matrizC[i] = [];
      for (let j = 0; j < numColsB; j++) {
        let sum = 0;
        for (let k = 0; k < numColsA; k++) {
          sum += matrizA[i][k] * matrizB[k][j];
        }
        matrizC[i][j] = sum;
      }
    }
  
    return matrizC;
  }
  
  // Matrizes de exemplo (A: 3x2, B: 2x3)
  const matrizA = [
    [1, 3],
    [2, 5]
  ];
  
  const matrizB = [
    [2, 2],
    [0, 1]
  ];
  
  // Multiplicar as matrizes AxB
  const matrizC = multiplicarMatrizes(matrizA, matrizB);
  
  if (matrizC) {
    console.log("Resultado da multiplicação AxB:");
    imprimirMatriz(matrizC);
  }
  