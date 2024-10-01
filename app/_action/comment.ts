"use server"

import clientPromise from "@/lib/mongodb";
import CommentC from "@/types/comment";
import moment from "moment";
import 'moment/locale/ko';

async function getCollection() {
  const client = await clientPromise;
  const db = client.db("wedding-invitation");
  return db.collection<CommentC>("comment");
}

export async function createComment(comment: Omit<CommentC, '_id'>) {
  const collection = await getCollection();
  return collection.insertOne({...comment, createdAt: moment().format("YYYY-MM-DD HH:mm:ss")});
}

export async function findAllComment() {
  const collection = await getCollection();
  const rows = await collection.find().toArray();
  return rows.map((row) => {
    return {
      ...row,
      _id: row._id.toString(),
    };
  });
}