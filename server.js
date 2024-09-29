const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware untuk menyajikan file statis
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Download</title>
    </head>
    <body>
        <h1>Welcome to Petani Connect</h1>
        <a href="/download/apk">Download APK Petani Connect</a>
    </body>
    </html>
`);
});
// Rute untuk mengunduh file
app.get('/download/apk', (req, res) => {
    const file = path.join(__dirname, './database/app-release.apk');
    res.download(file, (err) => {
        if (err) {
            console.error('Error downloading the file:', err);
            res.status(500).send('Error downloading file');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
