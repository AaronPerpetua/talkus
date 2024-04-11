import { CardDescription, CardTitle } from "@/components/ui/card";
import { useCallStateHooks } from "@stream-io/video-react-sdk";

export const DescriptionPanel = () => {
  const { useCallCustomData, useParticipants } = useCallStateHooks();
  const custom = useCallCustomData();
  const participants = useParticipants();
  return (
    <>
      <CardTitle>{custom?.title ?? "Talk About Games"}</CardTitle>
      <CardDescription>
        {custom?.description ?? "Buy me a coffee"}
      </CardDescription>

      <p className="text-sm font-medium leading-none  ">
        {participants.length} participant/s in this room
      </p>
    </>
  );
};
