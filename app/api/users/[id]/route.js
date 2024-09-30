import UserModel from "@/models/UserModel";
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

  const isUser = await UserModel.findOne({ _id: String(params.id) });
  if (!isUser) {
    return new Response(
      JSON.stringify({
        message: "ایدی کاربر اشتباه است",
      }),
      {
        status: 422,
      }
    );
  }

  await UserModel.findOneAndDelete({ _id: params.id });

  return Response.json({ message: "کاربر با موفقیت حذف شد" });
}
