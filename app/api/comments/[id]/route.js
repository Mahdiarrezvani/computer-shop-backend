import CommentModel from "@/models/CommentModel";
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

  const comments = await CommentModel.findOne({ _id: params.id });
  if (!comments) {
    return new Response(
      JSON.stringify({
        message: "ایدی کامنت اشتباه است",
      }),
      {
        status: 422,
      }
    );
  }

  await CommentModel.findOneAndDelete({ _id: params.id });
  return Response.json({ message: "کامنت یا موفقیت حذف شد" });
}

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

  const comments = await CommentModel.findOne({ _id: params.id });
  if (!comments) {
    return new Response(
      JSON.stringify({
        message: "ایدی کامنت اشتباه است",
      }),
      {
        status: 422,
      }
    );
  }

  const body = req.json();
  await CommentModel.findOneAndUpdate({ _id: params.id }, { ...body });
  return Response.json({ message: "کامنت یا موفقیت ویرایش شد" });
}
