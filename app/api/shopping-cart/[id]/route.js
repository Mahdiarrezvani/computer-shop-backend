import ShoppingCartModel from "@/models/ShoppingCart";
import connectToDB from "@/utils/db";
import { isValidObjectId } from "mongoose";

export async function DELETE(req, { params }) {
  connectToDB();
  if (!isValidObjectId(params.id)) {
    return new Response(
      JSON.stringify({
        message: "ایدی معتبر نمیباشد",
      }),
      {
        status: 404,
      }
    );
  }

  const product = await ShoppingCartModel.findOne({ _id: params.id });
  if (!product) {
    return new Response(
      JSON.stringify({
        message: "ایدی محصول اشتباه است",
      }),
      {
        status: 422,
      }
    );
  }

  await ShoppingCartModel.findOneAndDelete({ _id: params.id });
  return Response.json({ message: "محصول با موفقیت حذف شد" });
}

export async function PUT(req, { params }) {
  connectToDB();
  if (!isValidObjectId(params.id)) {
    return new Response(
      JSON.stringify({
        message: "ایدی معتبر نمیباشد",
      }),
      {
        status: 404,
      }
    );
  }

  const product = await ShoppingCartModel.findOne({ _id: params.id });
  if (!product) {
    return new Response(
      JSON.stringify({
        message: "ایدی محصول اشتباه است",
      }),
      {
        status: 422,
      }
    );
  }
  
  const body = await req.json();
  const productUpdated = await ShoppingCartModel.findOneAndUpdate(
    { _id: params.id },
    { ...body }
  );
  return Response.json({
    message: "محصول با موفقیت ویرایش شد",
    data: productUpdated,
  });
}
