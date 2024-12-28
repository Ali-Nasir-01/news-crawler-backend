import { Model, DataTypes } from 'sequelize';
import { sequelize } from '@/config';

class News extends Model {
  public id!: number;
  public title!: string;
  public body!: string;
  public category!: string;
  public link!: string;
  public agency!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

News.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    body: {
      type: new DataTypes.TEXT(),
      allowNull: true,
    },
    category: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    link: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
    agency: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'news',
    sequelize,
  },
);

export default News;
