import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
// import userRoutes from '@/routes/userRoutes';
import healthCheckRoutes from '@/routes/healthCheckRoutes';
import authRoutes from '@/routes/authRoutes';

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use('/users', userRoutes);
app.use('/api/health', healthCheckRoutes);
app.use('/api/auth', authRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use(cors());
app.options('*', cors());

export default app;
