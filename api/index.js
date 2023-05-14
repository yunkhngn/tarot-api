const express = require('express');
const res = require('express/lib/response');
const app = express();
const fs =require('fs')

const data = fs.readFileSync('database.json')
const database = JSON.parse(data)

app.get('/api', (req, res) => {
  const response = { status: "Successfully deploying API" };
  res.send(response);
});

app.get('/api/cards/:slug', (req, res) => {
  // Lấy slug từ tham số trong URL
  const slug = req.params.slug

  // Tìm lá bài trong database dựa trên slug
  const card = database.cards.find((card) => card.slug === slug)

  // Nếu không tìm thấy lá bài, trả về mã lỗi 404
  if (!card) {
    return res.status(404).json({ error: 'Card not found' })
  }

  // Nếu tìm thấy lá bài, trả về thông tin của lá bài
  res.json(card)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;