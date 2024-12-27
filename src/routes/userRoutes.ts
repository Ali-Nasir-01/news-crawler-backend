import { Router } from 'express';
import { getAllUsers, deleteUser } from '@/controllers/userController';

const router = Router();

router.get('/', getAllUsers);
router.post('/:id', deleteUser);

export default router;
