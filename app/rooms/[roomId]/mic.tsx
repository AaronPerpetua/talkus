"use client";
import { useCallStateHooks } from "@stream-io/video-react-sdk";

export const MicButton = () => {
  const { useMicrophoneState } = useCallStateHooks();
  const { microphone, isMute } = useMicrophoneState();
  return (
    <button
      className={` ${
        isMute
          ? "bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
      }`}
      onClick={async () => {
        if (isMute) {
          await microphone.enable();
        } else {
          await microphone.disable();
        }
      }}
    >
      {isMute ? "Unmute" : "Mute"}
    </button>
  );
};
