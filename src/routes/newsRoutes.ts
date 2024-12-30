import { getAllNews, getNewsById } from '@/controllers/newsController';
import { Router } from 'express';

const router = Router();

router.get('/', getAllNews);
router.get('/:id', getNewsById);

export default router;
