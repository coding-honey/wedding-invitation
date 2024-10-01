"use server"

import clientPromise from "@/lib/mongodb";
import CommentC from "@/types/comment";
import moment from "moment";

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
  return await collection.find().toArray();
}