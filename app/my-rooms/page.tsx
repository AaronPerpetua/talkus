import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import { Users } from "lucide-react";

export default function MyRooms() {
  return (
    <CardContent>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Link href="rooms/mmhfdzb5evj2">
          <Card x-chunk="dashboard-01-chunk-0 " className=" hover:bg-gray-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Talk About Games
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                RoomID: mmhfdzb5evj2
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="rooms/Ec5sDObPDW">
          <Card x-chunk="dashboard-01-chunk-0 " className=" hover:bg-gray-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Talk About Life
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                RoomID: Ec5sDObPDW
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="rooms/kgKIa37XtIy1y">
          <Card x-chunk="dashboard-01-chunk-0 " className=" hover:bg-gray-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Talk About Love
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                RoomID: kgKIa37XtIy1y
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="rooms/MTfNkgKIa37X">
          <Card x-chunk="dashboard-01-chunk-0 " className=" hover:bg-gray-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Talk About Work
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                RoomID: MTfNkgKIa37X
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </CardContent>
  );
}
