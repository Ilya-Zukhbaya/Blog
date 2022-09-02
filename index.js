import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://admin:www111@cluster0.74hmhhq.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('DB ok'))
  .catch((err) => console.error(err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome here!');
});

app.post('/auth/login', (req, res) => {
  console.log(req.body);

  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: req.body.fullName,
    },
    'secret',
  );
  res.json({
    success: true,
    token,
  });
});

app.listen(4444, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('OK');
});
