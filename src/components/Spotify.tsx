/* eslint-disable consistent-return */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable func-names */
import { useEffect, useState } from 'react';

import FadeIn from 'react-fade-in';

import { Presence } from '../types/Lanyard';

enum Operation {
  Event,
  Hello,
  Initialize,
  Heartbeat,
}

enum EventType {
  INIT_STATE = 'INIT_STATE',
  PRESENCE_UPDATE = 'PRESENCE_UPDATE',
}

type SocketEvent = {
  op: Operation;
  t?: EventType;
  d: Presence | unknown;
};

const discordId = '762055588762877973';
const Spotify = (
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
    if (!socket) setSocket(new WebSocket('wss://api.lanyard.rest/socket'));
  }, [socket]);

  if (!doing || !doing?.discord_status) return null;
  return (
    <>
      {doing?.listening_to_spotify ? (
        <div className="flex flex-row-reverse w-full mb-8 space-x-0 sm:flex-row sm:space-x-2">
          <svg className="w-5 h-4 mt-1 ml-auto" viewBox="0 0 168 168">
            <path
              fill="#1ED760"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
            />
          </svg>
          <div className="inline-flex flex-col w-full max-w-full truncate sm:flex-row">
            <p className="font-medium text-gray-800 dark:text-gray-200">
              {doing?.listening_to_spotify ? (
                <>
                  <FadeIn>
                    <a
                      href={`https://open.spotify.com/track/${doing?.spotify.track_id}`}
                    >
                      {doing.spotify.song.replace(/\&/g, 'and')} by{' '}
                      {doing.spotify.artist
                        .replace(/\;/g, ',')
                        .replace(/\&/g, 'and')}
                    </a>
                  </FadeIn>
                </>
              ) : null}
            </p>
            <span className="hidden mx-2 text-gray-500 dark:text-gray-300 sm:block">
              {' '}
              –{' '}
            </span>
            <p className="text-gray-500 truncate dark:text-gray-300 max-w-max">
              Spotify
              <span className="absolute inline w-2 h-2 mt-2 ml-1 space-x-1 bg-red-500 rounded-full animate-pulse" />
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row-reverse w-full mb-8 space-x-0 sm:flex-row sm:space-x-2">
          <svg className="w-5 h-4 mt-1 ml-auto" viewBox="0 0 168 168">
            <path
              fill="#1ED760"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
            />
          </svg>
          <div className="inline-flex flex-col w-full max-w-full truncate sm:flex-row">
            <p className="font-medium text-gray-800 dark:text-gray-200">
              <FadeIn>Not Playing</FadeIn>
            </p>
            <span className="hidden mx-2 text-gray-500 dark:text-gray-300 sm:block">
              {' '}
              –{' '}
            </span>
            <p className="text-gray-500 truncate dark:text-gray-300 max-w-max">
              Spotify
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default Spotify;