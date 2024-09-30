import ArticleModel from "@/models/ArticleModel";
import connectToDB from "@/utils/db";

export async function GET() {
  connectToDB();
  const articles = await ArticleModel.find({});
  return Response.json({ message: "لیست مقالات", data: articles });
}

export async function POST(req) {
  connectToDB();
  const body = await req.json();
  const articles = await ArticleModel.create({ ...body });
  return Response.json({ message: "مقاله با موفقیت ثبت شد", data: articles });
}
