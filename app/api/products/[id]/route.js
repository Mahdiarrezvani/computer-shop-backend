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

  const product = await ProductModel.findOne({ _id: params.id });
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

  await ProductModel.findOneAndDelete({ _id: params.id });
  return Response.json({ message: "محصول با موفقیت حذف شد" });
}

export async function PUT(req, { params }) {
  connectToDB();
  const body = await req.json();

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

  const product = await ProductModel.findOne({ _id: params.id });
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

  await ProductModel.findOneAndUpdate({ _id: params.id }, { ...body });
  return Response.json({ message: "محصول با موفقیت ویرایش شد" });
}
