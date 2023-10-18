const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { numA, numB, operation } = req.body;
  let result;

  switch (operation) {
    case '+':
      result = parseFloat(numA) + parseFloat(numB);
      break;
    case '-':
      result = parseFloat(numA) - parseFloat(numB);
      break;
    case '*':
      result = parseFloat(numA) * parseFloat(numB);
      break;
    case '/':
      result = parseFloat(numA) / parseFloat(numB);
      break;
    default:
      result = 'Invalid operation';
  }

  res.render('calculate', { result, numA, numB, operation });
});

module.exports = router;
