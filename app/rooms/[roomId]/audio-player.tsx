"use client";
import {
  Call,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { DescriptionPanel } from "./DescriptionPanel";
import { MyParticipantsPanel } from "./ParticipantsPanel";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { ButtonLive } from "./button";
import { MicButton } from "./mic";
import { generateTokenAction } from "./actions";
import { CardHeader } from "@/components/ui/card";
import { useParams } from "next/navigation";

export default function AudioPlayer() {
  const params = useParams<{ roomId: string }>();
  const { accessToken, user } = useKindeBrowserClient();

  const apiKey = "3eem967jfv8f"; // the API key can be found in the "Credentials" section
  const callId = params.roomId; // the call_id can be found in the "Credentials" section

  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);

  const userId = JSON.stringify(user?.id, null, 2);

  useEffect(() => {
    if (!user) return;
    if (!accessToken?.azp) {
      return;
    }
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: userId,
        name: JSON.stringify(user?.given_name, null, 2) ?? undefined,
        image: JSON.stringify(user?.picture, null, 2) ?? undefined,
      },
      tokenProvider: () => generateTokenAction(),
    });
    const call = client.call("audio_room", callId);
    call.join({ create: true });
    setClient(client);
    setCall(call);

    return () => {
      call
        .leave()
        .then(() => client.disconnectUser())
        .catch(console.error);
    };
  }, [user, callId]);

  return (
    client &&
    call && (
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <StreamVideo client={client}>
            <StreamCall call={call}>
              <DescriptionPanel />
              <MyParticipantsPanel />
              <ButtonLive />
              <MicButton />
            </StreamCall>
          </StreamVideo>
        </div>
      </CardHeader>
    )
  );
}
