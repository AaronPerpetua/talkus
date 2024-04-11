"use client";

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
 
import { useRouter } from 'next/navigation' 

export const ButtonLive = () => {
  // this utility hook returns the call object from the <StreamCall /> context
  const call = useCall();
  // will emit a new value whenever the call goes live or stops being live.
  // we can use it to update the button text or adjust any other UI elements
  const { useIsCallLive } = useCallStateHooks();
  const isLive = useIsCallLive();
  const router = useRouter()
  return (
    <button
      className={` ${
        isLive
          ? "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          : "bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
      }`}
      onClick={async () => {
        if (isLive) {
          await call?.stopLive();
          router.push('/talkus')
        } else {
          await call?.goLive();
        }
      }}
    >
      {isLive ? "Leave Room" : "Start Talking "}
    </button>
  );
};
