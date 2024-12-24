import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '@/config/jwt';
import User from '@/models/user';

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log('test');
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(401).send('Unauthorized');
      return;
    }

    const decoded = verifyToken(token) as { id: number };
    const user = await User.findByPk(decoded.id);
    if (!user) {
      res.status(401).send('Unauthorized');
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
};

export default authMiddleware;
