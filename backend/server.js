const express = require('express');
const app = express();
const citations = require('./citations.json'); // Charger les citations depuis un fichier JSON

app.get('/citation-du-jour', (req, res) => {
  const citationDuJour = citations[Math.floor(Math.random() * citations.length)];
  res.json(citationDuJour);
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
