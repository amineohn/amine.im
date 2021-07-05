import { useEffect, useMemo, useState } from "react";

import { discordId } from "../constants/constants";
import { Presence } from "../types/Lanyard";
import FadeIn from "react-fade-in";

enum Operation {
  Event,
  Hello,
  Initialize,
  Heartbeat,
}

enum EventType {
  INIT_STATE = "INIT_STATE",
  PRESENCE_UPDATE = "PRESENCE_UPDATE",
}

type SocketEvent = {
  op: Operation;
  t?: EventType;
  d: Presence | unknown;
};
const Activity = (
  { setActive, ...props }: { setActive: (active: boolean) => void } & any,
  ref: any
) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [doing, setDoing] = useState<Presence>();
  const send = (op: Operation, d?: unknown): void => {
    if (socket !== null) socket.send(JSON.stringify({ op, d }));
  };

  useEffect(() => {
    if (socket === null) return () => {};

    socket.onmessage = function ({ data }: MessageEvent): void {
      const { op, t, d }: SocketEvent = JSON.parse(data);

      if (op === Operation.Hello) {
        setInterval(
          () => send(Operation.Heartbeat),
          (d as { heartbeat_interval: number }).heartbeat_interval
        );
        send(Operation.Initialize, { subscribe_to_id: discordId });
      } else if (op === Operation.Event && t) {
        if ([EventType.INIT_STATE, EventType.PRESENCE_UPDATE].includes(t))
          setDoing(d as Presence);
      }
    };

    socket.onclose = () => {
      setSocket(null);
    };
  }, [socket]);
  useEffect(() => {
    if (!socket) setSocket(new WebSocket("wss://api.lanyard.rest/socket"));
  }, [socket]);

  const currentActivity = useMemo(
    () => doing?.activities.filter((activity) => activity.type === 0)[0],
    [doing]
  );

  useEffect(() => {
    //setActive(currentActivity);
  }, [currentActivity]);

  if (!doing || !doing?.discord_status) return null;
  let Color: string = "747F8D";
  let mode: string = "Online";
  switch (doing.discord_status) {
    case "online":
      Color = "bg-green-500";
      mode = "Online";
      break;
    case "idle":
      Color = "bg-orange-500";
      mode = "Idle";
      break;
    case "dnd":
      Color = "bg-red-500";
      mode = "DnD";
      break;
    case "offline":
      Color = "bg-gray-500";
      mode = "Offline";
      break;
  }
  return (
    <>
      <FadeIn>
        {currentActivity ? (
          <>
            {() => {
              if (currentActivity.name === "Code") {
                const replaced =
                  currentActivity.state
                    ?.replace("📁 ", "")
                    ?.split(" | ")?.[0] || "a file";
                return `Editing ${replaced} in Visual Studio Code`;
              }
            }}
            <FadeIn>
              <div className="flex items-center mt-2 space-x-2 text-gray-700 rounded-md dark:text-gray-300">
                {currentActivity.assets ? (
                  <>
                    <img
                      src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.large_image}.png`}
                      className="flex-shrink-0 w-12 h-12 rounded-md"
                    />
                  </>
                ) : null}
                <div className="text-sm leading-tight truncate">
                  {currentActivity ? (
                    <>
                      <FadeIn>
                        <span className="font-medium text-black dark:text-white">
                          {currentActivity.name}{" "}
                          <img
                            src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.small_image}.png`}
                            className="bottom-0 right-0 inline w-4 h-4 mb-0.5 rounded-full"
                          />
                        </span>
                        {currentActivity.details ? (
                          <span className="text-black dark:text-white">
                            {currentActivity.details
                              ?.replace("📁 ", "")
                              ?.split(" | ")?.[0] || "a file"}
                          </span>
                        ) : null}
                        {currentActivity.state ? (
                          <span className="text-black dark:text-white">
                            {currentActivity.state}
                          </span>
                        ) : null}
                      </FadeIn>
                    </>
                  ) : null}
                </div>
              </div>
            </FadeIn>
          </>
        ) : (
          <>
            <span className="font-medium text-black dark:text-white">
              <svg
                className="inline w-8 h-8 mb-0.5"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.0542 17.2712C35.9711 13.9402 44.0285 13.9402 50.9455 17.2712C57.8624 20.6022 62.8861 26.9018 64.5944 34.3865C66.3028 41.8713 64.5099 49.7266 59.7232 55.7289C54.9365 61.7312 47.677 65.2272 39.9998 65.2272C32.3226 65.2272 25.0631 61.7312 20.2765 55.7289C15.4898 49.7266 13.6968 41.8713 15.4052 34.3865C17.1135 26.9018 22.1372 20.6022 29.0542 17.2712Z"
                  fill="#F2C94C"
                />
                <path
                  d="M50.6066 50.6066C47.7936 53.4196 43.9782 55 40 55C36.0218 55 32.2064 53.4196 29.3934 50.6066"
                  stroke="#333333"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.9497 37.3431C34.2997 36.6003 33.5281 36.011 32.6788 35.609C31.8295 35.2069 30.9193 35 30 35C29.0807 35 28.1705 35.2069 27.3212 35.609C26.4719 36.011 25.7003 36.6003 25.0503 37.3431"
                  stroke="#4F4F4F"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M54.9497 37.3431C54.2997 36.6003 53.5281 36.011 52.6788 35.609C51.8295 35.2069 50.9193 35 50 35C49.0807 35 48.1705 35.2069 47.3212 35.609C46.4719 36.011 45.7003 36.6003 45.0503 37.3431"
                  stroke="#4F4F4F"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm text-black dark:text-white">
              I do nothing sorry
            </span>
          </>
        )}
        <div className="flex items-center mt-2 space-x-2 text-gray-700 rounded-md dark:text-gray-300">
          <div className={`flex-shrink-0 w-3 h-3 ${Color} rounded-full`}></div>
          <div
            title={mode}
            className="text-sm font-medium leading-tight truncate"
          >
            {mode}
          </div>
        </div>
      </FadeIn>
    </>
  );
};
export default Activity;
