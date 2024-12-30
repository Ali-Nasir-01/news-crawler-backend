import { Request, Response } from 'express';
import News from '@/models/news';

export const storeTabnakNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const newsArray = req.body.news;

    const tabnakNews = newsArray.map((newsItem: any) => {
      const { publishDate, ...rest } = newsItem;
      let timestamp = null;

      if (publishDate) {
        timestamp = Date.parse(publishDate);
        if (isNaN(timestamp)) {
          throw new Error(`Invalid date format: ${publishDate}`);
        }
      }

      return {
        ...rest,
        publishDate: timestamp,
        agency: 'تابناک',
      };
    });

    await News.bulkCreate(tabnakNews);

    res.status(201).json({ message: 'News stored successfully' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
