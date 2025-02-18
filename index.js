const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Stateless App</title>
        <style>
            body { background-color: yellow; }
        </style>
    </head>
    <body>
        <h1>Welcome to Stateless App v2</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});