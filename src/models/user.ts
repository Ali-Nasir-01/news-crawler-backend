import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import bcrypt from 'bcryptjs';
import { IUserAttributes, IUserModel } from './types/userModel';

// Define the attributes for the User model
interface UserCreationAttributes extends Optional<IUserAttributes, 'id'> {}

class User extends Model<IUserAttributes, UserCreationAttributes> implements IUserModel {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    sequelize,
    hooks: {
      beforeCreate: async (user: User) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
      beforeUpdate: async (user: User) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  },
);

export default User;
