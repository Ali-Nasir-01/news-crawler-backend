import { error } from 'console';
import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;

if (!DB_NAME || !DB_USERNAME || !DB_PORT) {
  throw error('Add DB_NAME, DB_USERNAME and DB_PORT in your .env file');
}
const sequelize = new Sequelize(DB_NAME!, DB_USERNAME!, DB_PASSWORD, {
  host: 'localhost',
  port: Number(DB_PORT)!,
  dialect: 'mysql',
});

export default sequelize;
