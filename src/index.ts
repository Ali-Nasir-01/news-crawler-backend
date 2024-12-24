import 'dotenv/config';
import app from './app';
import { sequelize } from '@/config';
import { __filename, __dirname } from '@/utils/helper';

const PORT = process.env.PORT;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
