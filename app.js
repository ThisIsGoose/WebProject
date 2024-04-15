const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

//The following four gets allow for my multiple webpages to be accessible.
//This get is kind of a default get. When simply http://localhost:3000/ is accessed, it will pull up my home page.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//The next three gets were created in a way that allowed the hyperlinks I have on my site to remain functional.
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

//The following lines of code are for my form on the contact page.
app.post('/submit-form', (req, res) => {
    const email = req.body.email;
    res.send(`We will respond to your comment at this address: ` + email);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});