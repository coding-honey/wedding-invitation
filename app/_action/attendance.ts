"use server"

import clientPromise from "@/lib/mongodb";
import AttendanceC from "@/types/attendance";

async function getCollection() {
  const client = await clientPromise;
  const db = client.db("wedding-invitation");
  return db.collection("attendance");
}

export async function createAttendance(attendance:AttendanceC) {
  const collection = await getCollection();
  return collection.insertOne(attendance);
}