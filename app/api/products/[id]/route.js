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

  const isUser = await ProductModel.findOne({ _id: params.id });
  if (!isUser) {
    return new Response(
      JSON.stringify({
        message: "ایدی محصول اشتباه است",
      }),
      {
        status: 422,
      }
    );
  }

  const products = await ProductModel.findOneAndDelete({ _id: params.id });
  return Response.json({ message: "محصول با موفقیت حذف شد", data: products });
}

export async function PUT(req, { params }) {
  connectToDB();
  const body = req.json();

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

  const isUser = await ProductModel.findOne({ _id: params.id });
  if (!isUser) {
    return new Response(
      JSON.stringify({
        message: "ایدی محصول اشتباه است",
      }),
      {
        status: 422,
      }
    );
  }

  const products = await ProductModel.findOneAndUpdate(
    { _id: params.id },
    { ...body }
  );
  return Response.json({
    message: "محصول با موفقیت ویرایش شد",
    data: products,
  });
}
