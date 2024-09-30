import ProductModel from "@/models/ProductModel";
import connectToDB from "@/utils/db";

export async function POST(req) {
  connectToDB();
  const body = await req.json();
  const products = await ProductModel.create({ ...body });
  return Response.json({ message: "محصول با موفقیت انجام شد", data: products });
}

export async function GET() {
  connectToDB();
  const products = await ProductModel.find({});
  return Response.json({ message: "لیست محصولات", data: products });
}
