import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
// import userRoutes from '@/routes/userRoutes';
import authRoutes from '@/routes/authRoutes';

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use('/users', userRoutes);
app.use('/api/auth', authRoutes);

app.use(cors());
app.options('*', cors());

export default app;
