"use server";

import { unstable_noStore } from "next/cache";
import AudioPlayer from "./audio-player";
import NavBar from "@/components/NavBar";
import { Card } from "@/components/ui/card";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import ChatRoom from "@/app/chat/page";

export default async function RoomPage() {
  unstable_noStore();

  const { isAuthenticated } = getKindeServerSession();

  const isLoggedin = await isAuthenticated();
  if (!isLoggedin) {
    redirect("/api/auth/login");
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <NavBar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <AudioPlayer />
          </Card>
          <ChatRoom />
        </div>
      </main>
    </div>
  );
}
