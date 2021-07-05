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
                          {currentActivity.name}
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
            <div className="flex items-center mt-2 space-x-2 text-gray-700 rounded-md dark:text-gray-300">
              <div
                className={`flex-shrink-0 w-3 h-3 bg-red-500 rounded-full`}
              ></div>
              <div className="text-sm font-medium leading-tight truncate">
                no more Activity
              </div>
            </div>
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
