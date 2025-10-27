const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/health', (req, res) => res.json({status: 'ok'}));


app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => console.log(`Listening on ${PORT}`));