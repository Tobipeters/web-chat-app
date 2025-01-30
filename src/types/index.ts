export interface IMessage {
  id: string;
  message: string;
  userId: string;
  userName: string
  time: string;
  bgNumber: number
}

export interface IUser {
  name: string;
  id: string;
  bgNumber: number
}
