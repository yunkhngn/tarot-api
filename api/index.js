const express = require('express');
const res = require('express/lib/response');
const app = express();
const fs =require('fs')

const databasePath = './database.json'

const data = fs.readFileSync(databasePath)
const database = JSON.parse(data)

app.get('/api', (req, res) => {
  const response = { status: "Successfully deploying API" };
  res.send(response);
});

// Trả về tất cả các lá bài
app.get('/api/cards', (req, res) => {
  res.json(database.cards)
})

// Tra 1 lá bài
app.get('/api/cards/:slug', (req, res) => {
  const slug = req.params.slug
  const card = database.cards.find((card) => card.slug === slug)
  if (!card) {
    return res.status(404).json({ error: 'Card not found' })
  }
  res.json(card)
})

// Random 3 lá bài
app.get('/api/random', (req, res) => {
  const cards = database.cards.sort(() => 0.5 - Math.random()).slice(0, 3)
  res.json(cards)
})

// Tra thông tin của một lá bài bất kì
app.get('/api/cards/:slug/:field/', (req, res) => {
  const slug = req.params.slug
  const field = req.params.field
  const card = database.cards.find(card => card.slug === slug)

  if (!card) {
    return res.status(404).json({ message: 'Card not found' })
  }

  if (card[field]) {
    res.json({ 
      [field]: card[field] })
  } else {
    res.status(404).json({ message: `Field ${field} not found` })
  }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;