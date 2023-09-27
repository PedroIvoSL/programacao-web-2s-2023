const express = require('express');
const app = express();
const port = 3000; 

app.use(express.static('node_modules/bootstrap/dist'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/data', (req, res) => {
  const { name, address, phoneNumber, appointmentDate } = req.body;
  if (!name || !address || !phoneNumber || !appointmentDate) {

    res.send('<script>alert("All fields are required."); window.history.back();</script>');
  } else {

    res.render(__dirname + '/views/data.html', { name, address, phoneNumber, appointmentDate });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
