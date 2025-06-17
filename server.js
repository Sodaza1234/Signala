
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let signals = [];

app.post('/api/signal', (req, res) => {
  const signal = req.body;
  signals.push(signal);
  res.status(200).send({ message: 'Signal received' });
});

app.get('/api/signals', (req, res) => {
  res.status(200).json(signals);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
