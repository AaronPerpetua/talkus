"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import React from "react";

export default function CreateRoom() {
  const { toast } = useToast();
  const createNewRoom = () => {
    toast({
      description: "Adding new room is for Premium account only.",
      action: <ToastAction altText="PayGcash">Pay GCash</ToastAction>,
    });
  };

  return (
    <Button asChild size="sm" className="ml-auto gap-1" onClick={createNewRoom}>
      <Link href="#">
        Create New Room
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}
