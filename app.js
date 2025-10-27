const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/health', (req, res) => res.json({status: 'ok'}));


app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// for rollback rollout and versioning testing---for new public/deploy-status.html page testing.......  
app.get('/version.json', (req, res) => {
  res.json({
    image: process.env.IMAGE_TAG || 'unknown',
    updatedAt: new Date().toISOString()
  });
});



app.listen(PORT, () => console.log(`Listening on ${PORT}`));