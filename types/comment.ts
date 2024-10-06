import {ObjectId} from "mongodb";

export default class CommentC {
  _id?: ObjectId | string;
  name: string = '';
  password: string = '';
  content: string = '';
  createdAt?: string;
}
