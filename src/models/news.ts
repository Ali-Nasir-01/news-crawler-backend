import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

interface NewsAttributes {
  id?: number;
  title: string;
  subtitle?: string;
  text?: string;
  category?: string;
  link: string;
  images?: string[];
  publishDate?: Date;
  agency: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class News extends Model<NewsAttributes> implements NewsAttributes {
  public id!: number;
  public title!: string;
  public subtitle?: string;
  public text?: string;
  public category?: string;
  public link!: string;
  public images?: string[];
  public publishDate?: Date;
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
      type: new DataTypes.TEXT(),
      allowNull: false,
    },
    subtitle: {
      type: new DataTypes.TEXT(),
      allowNull: true,
    },
    text: {
      type: new DataTypes.TEXT(),
      allowNull: true,
    },
    category: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    link: {
      type: new DataTypes.TEXT(),
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    publishDate: {
      type: DataTypes.DATE,
      allowNull: true,
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
