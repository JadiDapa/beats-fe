export default interface Account {
  id?: number;
  email?: string;
  username: string;
  password: string;
  isAdmin?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
