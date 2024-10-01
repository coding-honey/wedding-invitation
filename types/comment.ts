import {ObjectId} from "mongodb";

export default class CommentC {
  _id?: ObjectId;
  name: string = '';
  content: string = '';
  createdAt?: string;
}
