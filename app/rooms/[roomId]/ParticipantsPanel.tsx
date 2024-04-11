import {
  useCallStateHooks,
  ParticipantsAudio,
} from "@stream-io/video-react-sdk";
import { ParticipantList } from "./participants-list";

export const MyParticipantsPanel = () => {
  const { useParticipants } = useCallStateHooks();

  const participants = useParticipants();

  return (
    <div className="participants-panel">
      <br></br>
      <p className="text-sm font-medium leading-none">Participants</p>
      <br></br>
      <div className="flex -space-x-2 overflow-hidden gap-x-6">
        <ParticipantsAudio participants={participants} />
        {participants.map((p) => (
          <ParticipantList participant={p} key={p.sessionId} />
        ))}
      </div>
    </div>
  );
};
