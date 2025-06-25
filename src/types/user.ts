export interface IUser {
    _id: string;
    name: string;
    email: string;
    image: string;
    password: string;
    role: "user" | "admin";
    isDelete?: boolean;
  }
  