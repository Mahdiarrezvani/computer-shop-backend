import UserModel from "@/models/UserModel";
import connectToDB from "@/utils/db";

export async function POST(req) {
  connectToDB();
  const body = await req.json();

  const isUser = await UserModel.findOne({ phone_number: body.phone_number });
  if (isUser) {
    return new Response(
      JSON.stringify({
        message: "asdasd",
        body: isUser,
      }),
      {
        status: 422,
      }
    );
  }

  const userInfo = await UserModel.create({ ...body });
  return Response.json({ message: "کاربر یا موفقیت ثبت نام شد", userInfo });
}

export async function GET() {
  connectToDB();
  const users = await UserModel.find({});
  return Response.json({ message: "لیست کاربران", data: users });
}

