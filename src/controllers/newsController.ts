import { Request, Response } from 'express';
import News from '@/models/news';

export const getAllNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const { agency } = req.query;
    const filter = agency ? { where: { agency: String(agency) } } : {};
    const news = await News.findAll(filter);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error });
  }
};

export const getNewsById = async (req: Request, res: Response): Promise<void> => {
  try {
    const news = await News.findByPk(req.params.id);
    if (!news) {
      res.status(404).json({ message: 'News not found' });
      return;
    }
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error });
  }
};
