import CommentModel from "@/models/CommentModel";
import connectToDB from "@/utils/db";

export async function GET() {
  connectToDB();
  const comments = await CommentModel.find({});
  return Response.json({ message: "لیست کامنت ها", data: comments });
}

export async function POST(req) {
  connectToDB();
  const body = req.json();
  const comments = await CommentModel.create({ ...body });
  return Response.json({ message: "لیست کامنت ها", data: comments });
}
