export interface IUserAttributes {
  id?: number;
  username: string;
  email: string;
  password: string;
}

export interface IUserModel extends IUserAttributes {
  comparePassword(password: string): Promise<boolean>;
}
