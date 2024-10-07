"use server"

import clientPromise from "@/lib/mongodb";
import CommentC from "@/types/comment";
import moment from "@/lib/moment";
import {hashPassword} from "@/lib/bcrypt";
import {ObjectId} from "mongodb";

async function getCollection() {
  const client = await clientPromise;
  const db = client.db("wedding-invitation");
  return db.collection<CommentC>("comment");
}

export async function createComment(comment: Omit<CommentC, '_id'>) {
  const collection = await getCollection();
  const result = await collection.insertOne({
    ...comment,
    password: comment.password.trim() !== '' ? await hashPassword(comment.password) : '',
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
  });
  return {...result, insertedId: result.insertedId.toString()}
}

export async function deleteComment(_id: string) {
  const collection = await getCollection();
  const result = await collection.deleteOne({
    _id: new ObjectId(_id),
  });
  return {...result}
}

const yyyyMMdd = moment().format("YYYY-MM-DD ");

export async function findAllComment() {
  const collection = await getCollection();
  const rows = await collection.find().sort({
    createdAt: -1
  }).toArray();
  return rows.map((row) => {
    let createdAt = row.createdAt != null ? row.createdAt.replace(yyyyMMdd, "") : "";
    createdAt = createdAt.slice(0, createdAt.lastIndexOf(":"));
    return {
      ...row,
      _id: row._id.toString(),
      createdAt: createdAt,
    };
  });
}