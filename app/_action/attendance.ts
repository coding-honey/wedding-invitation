"use server"

import clientPromise from "@/lib/mongodb";
import AttendanceC from "@/types/attendance";
import moment from "@/lib/moment";

async function getCollection() {
  const client = await clientPromise;
  const db = client.db("wedding-invitation");
  return db.collection<AttendanceC>("attendance");
}

export async function createAttendance(attendance: AttendanceC) {
  const collection = await getCollection();
  const result = await collection.insertOne({...attendance, createdAt: moment().format("YYYY-MM-DD HH:mm:ss")});
  return {...result, insertedId: result.insertedId.toString()}
}