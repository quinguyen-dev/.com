import { getCurrentlyPlaying } from "@/lib/spotify";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const cacheTag = request.nextUrl.searchParams.get("current_song") as string;
  revalidateTag(cacheTag);

  const response = await getCurrentlyPlaying();
  if (response.status === 204) {
    return NextResponse.json({});
  }

  const { item } = await response.json();
  const { artists, name, album } = item;

  return NextResponse.json({ artists, name, album });
}
