import express from 'express';
import { healthRoute } from './health.route.js';
const PORT = 3000;

const app = express();
app.use(express.json());

app.use(healthRoute);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the Task Manager API interface' 
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
