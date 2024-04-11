"use server";

import { Button } from "@/components/ui/button";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Login() {
  const { isAuthenticated } = getKindeServerSession();

  const isLoggedin = await isAuthenticated();
  if (isLoggedin) {
    redirect("/talkus");
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">TalkUs App</h1>
            <p className="text-balance text-muted-foreground">
              Let's talk and Connect
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Button type="submit" className="w-full">
                <LoginLink>Sign in</LoginLink>
              </Button>
            </div>
            <div className="grid gap-2">
              <Button type="submit" className="w-full">
                <RegisterLink>Sign up</RegisterLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block"></div>
    </div>
  );
}
