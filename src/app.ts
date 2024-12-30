import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import userRoutes from '@/routes/userRoutes';
import healthCheckRoutes from '@/routes/healthCheckRoutes';
import authRoutes from '@/routes/authRoutes';
import normalizerRoutes from '@/routes/normalizeRoutes';
import authMiddleware from './middleware/auth';

const app = express();

app.use(helmet());

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));

app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/health', healthCheckRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', normalizerRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use(cors());
app.options('*', cors());

export default app;
