const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('node_modules/bootstrap/dist'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/dados', (req, res) => {
  const { name, address, phoneNumber, appointmentDate } = req.body;
  res.render(__dirname + '/views/dados.html', { name, address, phoneNumber, appointmentDate });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
