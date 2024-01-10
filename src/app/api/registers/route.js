import { User } from "@/models/User";
import mongoose from "mongoose";

export async function handler(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const user = await User.create(body);
  // return res.status(201).json({
  //     status: 'Successfully',
  //     data: user,
  // })
  return Response.json(user);
}
