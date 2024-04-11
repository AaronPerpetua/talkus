"use server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import MyRooms from "../my-rooms/page";
import NavBar from "@/components/NavBar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowUpRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreateRoom from "../my-rooms/create-room";

export default async function TalkUs() {
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
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Available Rooms</CardTitle>
                <CardDescription>
                  Talk and make friends to everyone.
                </CardDescription>
              </div>
        <CreateRoom/>
            </CardHeader>
            <MyRooms />
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Friends</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
            <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        Following friends functionality is under development.
      </AlertDescription>
    </Alert>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
