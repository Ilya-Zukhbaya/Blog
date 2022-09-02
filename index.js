import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome here!');
});

app.post('/auth/login', (req, res) => {
  console.log(req.body);
  res.json({
    success: true,
    confirm: req.body,
  });
});

app.listen(4444, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('OK');
});
