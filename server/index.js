const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/pokemon/all', async (req, res) => {
  try {
    // Make a request to the Star Wars API and return the result
   
    // const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
