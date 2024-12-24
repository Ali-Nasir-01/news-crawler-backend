import { IUserModel } from '@/models/types/userModel';

declare global {
  namespace Express {
    export interface Request {
      user?: IUserModel;
    }
  }
}
