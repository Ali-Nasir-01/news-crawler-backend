import { storeTabnakNews } from '@/controllers/newsNormalizerController';
import { Router } from 'express';

const router = Router();

router.post('/store-tabnak-news', storeTabnakNews);

export default router;
