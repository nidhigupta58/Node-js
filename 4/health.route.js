import express from 'express';

const router = express.Router();
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is healthy and running'
  });
});
export const healthRoute = router;