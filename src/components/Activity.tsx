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
    setActive(currentActivity);
  }, [currentActivity]);

  if (!doing || !doing?.discord_status) return null;
  let Color: string = "747F8D";
  let mode: string = "Online";
  switch (doing.discord_status) {
    case "online":
      Color = "bg-green-400";
      mode = "Online";
      break;
    case "idle":
      Color = "bg-orange-500";
      mode = "Idle";
      break;
    case "dnd":
      Color = "bg-red-500";
      mode = "AFK";
      break;
    case "offline":
      Color = "bg-gray-500";
      mode = "Offline";
      break;
  }
  const name = currentActivity?.name?.replace("Code", "Visual Studio Code");
  const state =
    currentActivity?.state?.replace("📁 ", "")?.split(" | ")?.[0] ||
    "a file".replace(`${[0]}.tsx`, `${[0]}`);
  return (
    <>
      <FadeIn>
        {currentActivity ? (
          <>
            <FadeIn>
              <div className="flex items-center space-x-2 text-gray-700 rounded-md dark:text-gray-300">
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
                          {name}{" "}
                          <img
                            src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.small_image}.png`}
                            className="bottom-0 right-0 inline w-4 h-4 mb-0.5 rounded-full"
                          />
                        </span>
                        {currentActivity.details ? (
                          <span className="text-black dark:text-white"></span>
                        ) : null}
                        {currentActivity.state ? (
                          <span className="text-black dark:text-white">
                            {state}
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
            <div className="flex items-center space-x-2 text-gray-700 rounded-md dark:text-gray-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-gray-50 dark:bg-gray-800">
                <svg
                  className="flex justify-center w-16 h-16 mb-5 -mx-2 -my-1.5"
                  viewBox="0 0 128 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62.2083 46.1667C62.2083 44.9511 62.6912 43.7853 63.5508 42.9258C64.4103 42.0662 65.5761 41.5833 66.7917 41.5833C68.0072 41.5833 69.173 42.0662 70.0326 42.9258C70.8921 43.7853 71.375 44.9511 71.375 46.1667V48.4583C71.375 49.0661 71.6164 49.649 72.0462 50.0788C72.476 50.5086 73.0589 50.75 73.6667 50.75H80.5417C81.1495 50.75 81.7324 50.9914 82.1621 51.4212C82.5919 51.851 82.8333 52.4339 82.8333 53.0417V59.9167C82.8333 60.5244 82.5919 61.1073 82.1621 61.5371C81.7324 61.9669 81.1495 62.2083 80.5417 62.2083H78.25C77.0344 62.2083 75.8686 62.6912 75.0091 63.5508C74.1496 64.4103 73.6667 65.5761 73.6667 66.7917C73.6667 68.0072 74.1496 69.173 75.0091 70.0326C75.8686 70.8921 77.0344 71.375 78.25 71.375H80.5417C81.1495 71.375 81.7324 71.6164 82.1621 72.0462C82.5919 72.476 82.8333 73.0589 82.8333 73.6667V80.5417C82.8333 81.1494 82.5919 81.7323 82.1621 82.1621C81.7324 82.5919 81.1495 82.8333 80.5417 82.8333H73.6667C73.0589 82.8333 72.476 82.5919 72.0462 82.1621C71.6164 81.7323 71.375 81.1494 71.375 80.5417V78.25C71.375 77.0344 70.8921 75.8686 70.0326 75.0091C69.173 74.1495 68.0072 73.6667 66.7917 73.6667C65.5761 73.6667 64.4103 74.1495 63.5508 75.0091C62.6912 75.8686 62.2083 77.0344 62.2083 78.25V80.5417C62.2083 81.1494 61.9669 81.7323 61.5371 82.1621C61.1074 82.5919 60.5245 82.8333 59.9167 82.8333H53.0417C52.4339 82.8333 51.851 82.5919 51.4212 82.1621C50.9915 81.7323 50.75 81.1494 50.75 80.5417V73.6667C50.75 73.0589 50.5086 72.476 50.0788 72.0462C49.649 71.6164 49.0661 71.375 48.4583 71.375H46.1667C44.9511 71.375 43.7853 70.8921 42.9258 70.0326C42.0662 69.173 41.5833 68.0072 41.5833 66.7917C41.5833 65.5761 42.0662 64.4103 42.9258 63.5508C43.7853 62.6912 44.9511 62.2083 46.1667 62.2083H48.4583C49.0661 62.2083 49.649 61.9669 50.0788 61.5371C50.5086 61.1073 50.75 60.5244 50.75 59.9167V53.0417C50.75 52.4339 50.9915 51.851 51.4212 51.4212C51.851 50.9914 52.4339 50.75 53.0417 50.75H59.9167C60.5245 50.75 61.1074 50.5086 61.5371 50.0788C61.9669 49.649 62.2083 49.0661 62.2083 48.4583V46.1667Z"
                    stroke="#EE466B"
                    strokeWidth="2"
                    className="transform rotate-0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm leading-tight truncate">
                <>
                  <FadeIn>
                    <span className="font-medium text-black dark:text-white">
                      Doing nothing
                    </span>
                    <span className="text-black dark:text-white"></span>
                    <span className="text-black dark:text-white">
                      status: no
                    </span>
                  </FadeIn>
                </>
              </div>
            </div>
          </>
        )}
        <div
          className={`flex items-center mt-4 space-x-2 text-black dark:text-white rounded-full py-1 px-1 w-20`}
        >
          <div
            className={`flex-shrink-0 w-3 h-3 ${Color} rounded-full mt-0.5 animate-bounce`}
          ></div>
          <div
            title={mode}
            className="text-sm font-normal leading-tight truncate"
          >
            {mode}
          </div>
        </div>
      </FadeIn>
    </>
  );
};
export default Activity;
