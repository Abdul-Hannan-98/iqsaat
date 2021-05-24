const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'Got the app'
  })
})

app.listen(9999, () => {
  console.log("App is running on port 9999")
})