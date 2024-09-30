import ShoppingCartModel from "@/models/ShoppingCart";
import connectToDB from "@/utils/db";

export async function GET() {
  connectToDB();
  const shoppingCart = await ShoppingCartModel.find({});
  return Response.json({ message: "لیست سبد خرید کاربر", data: shoppingCart });
}

export async function POST(req) {
  connectToDB();
  const body = req.json();
  const product = await ShoppingCartModel.create({ ...body });
  return Response.json({ message: "محصول با موفقیت به سبد خرید اضافه شد", data: product });
}
