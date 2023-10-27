import {
  createRouteHandlerClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const supabase = createRouteHandlerClient({ cookies });
  const { searchParams } = new URL(request.url);

  const { room, password } = body;
  //   const room = searchParams.get("room");
  //   const password = searchParams.get("password") || "";

  const { data } = await supabase
    .from("games")
    .select("*")
    .eq("id", room)
    .single();

  if (!data) {
    return NextResponse.json({ error: "No data" }, { status: 404 });
  }

  if (!data.password) {
    return NextResponse.json({ message: "Success" }, { status: 200 });
  }

  if (data.password !== password) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
