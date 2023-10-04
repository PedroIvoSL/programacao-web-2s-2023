const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Change as needed

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Serve the HTML form
});

app.post('/submit', (req, res) => {
    // Handle form submission here
    const formData = req.body;
    // Implement data storage or further processing as needed
    console.log('Form Data:', formData);
    res.send('Appointment submitted successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
