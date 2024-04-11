import { StreamVideoParticipant } from "@stream-io/video-react-sdk";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const ParticipantList = ({
  participant,
}: {
  participant: StreamVideoParticipant;
}) => {
  // `isSpeaking` information is available on the participant object,
  // and it is automatically detected by our system and updated by our SDK.
  const { isSpeaking } = participant;
  return (
    <div className={`participant ${isSpeaking ? "speaking" : ""} `}>
      <Avatar className="size-20">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Badge variant="outline">{participant.name}</Badge>
    </div>
  );
};
