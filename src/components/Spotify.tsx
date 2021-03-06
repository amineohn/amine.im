import { useEffect, useState } from "react";

import { discordId } from "../constants/constants";
import Progress from "../components/Progress";
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
const Spotify = () => {
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

  if (!doing || !doing?.discord_status) return null;

  const currentDate: any = new Date();
  return (
    <>
      <FadeIn>
        {doing?.listening_to_spotify ? (
          <>
            <div className="flex flex-row-reverse w-full mb-3 space-x-2 overflow-auto sm:flex-row sm:space-x-2"></div>
            <div className="flex pb-5 space-x-4 -space-y-0.5 text-gray-700 rounded-md dark:text-gray-300">
              <img
                className="flex-shrink-0 w-16 h-16 rounded-md bg-gray-50 dark:bg-gray-900"
                src={doing.spotify.album_art_url}
              />
              <div className="text-sm leading-tight truncate">
                <FadeIn>
                  <div className="flex justify-between">
                    <span className="font-black text-black dark:text-white">
                      Listening to Spotify
                    </span>
                    <svg
                      className="inline w-5 h-4 mb-1 ml-auto mr-1"
                      viewBox="0 0 168 168"
                    >
                      <path
                        fill="#1ED760"
                        d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-black dark:text-white">
                    <span className="font-normal text-black dark:text-white">
                      by{" "}
                    </span>
                    {doing.spotify.artist
                      .replace(/\;/g, ",")
                      .replace(/\&/g, "and")}{" "}
                  </span>
                  <div className="inline-flex flex-col w-full max-w-full truncate sm:flex-row">
                    <p className="font-normal text-gray-800 text-md dark:text-gray-200">
                      {doing?.listening_to_spotify ? (
                        <>
                          <FadeIn>
                            <a
                              href={`https://open.spotify.com/track/${doing?.spotify.track_id}`}
                              target="_blank"
                              className="overflow-hidden hover:underline"
                            >
                              {doing.spotify.song.replace(/\&/g, "and")}
                            </a>
                            <Progress
                              percentage={
                                (100 *
                                  (currentDate -
                                    doing.spotify.timestamps.start)) /
                                (doing.spotify.timestamps.end -
                                  doing.spotify.timestamps.start)
                              }
                            />
                          </FadeIn>
                        </>
                      ) : null}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex pb-5 space-x-2 space-y-1 text-gray-700 rounded-md dark:text-gray-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-gray-50 dark:bg-gray-900">
                <svg
                  className="flex justify-center w-8 h-8 my-2 ml-2"
                  viewBox="0 0 168 168"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#1ED760"
                    d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739"
                  />
                </svg>
              </div>
              <div className="space-x-4 text-sm leading-tight truncate">
                <FadeIn>
                  <span className="font-medium text-black dark:text-white">
                    Not Playing
                  </span>
                  <span className="text-black dark:text-white">on Spotify</span>
                  <span className="text-black dark:text-white"></span>
                </FadeIn>
              </div>
            </div>
          </>
        )}
      </FadeIn>
    </>
  );
};
export default Spotify;
