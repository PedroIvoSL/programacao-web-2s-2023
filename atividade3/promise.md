# promise.md

```markdown
# Promise em JavaScript

As Promises são um recurso importante em JavaScript para trabalhar com código assíncrono de forma mais organizada e legível. Elas representam um valor que pode estar disponível agora, no futuro ou nunca.

## Sintaxe

```javascript
const minhaPromise = new Promise((resolve, reject) => {
  // Código assíncrono
  // Chame resolve(valor) quando a operação for bem-sucedida
  // Chame reject(erro) quando a operação falhar
});
