const express = require('express');
const app = express();
const port = 5000; // You can change the port
const cors = require('cors');

app.use(cors({
  origin: 'https://client-project-theta-six.vercel.app/', // Replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});