import express from 'express';
import { register, login } from '@/controllers/userController';
import authMiddleware from '@/middleware/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.use(authMiddleware);

router.get('/protected', (req, res) => {
  if (req.user) {
    res.send(`Protected content for user: ${req.user.username}`);
  } else {
    res.status(401).send('Unauthorized');
  }
});

export default router;
