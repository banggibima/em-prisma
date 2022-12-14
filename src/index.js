import express from 'express';

import User from './routes/user';

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', User);

app.listen(port, () => {
  console.log(`Endpoint: http://localhost:${port}`);
});
