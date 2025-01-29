// context/MediaStreamContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

type MediaStreamContextType = {
  stream: MediaStream | null;
  setStream: (stream: MediaStream | null) => void;
};

const MediaStreamContext = createContext<MediaStreamContextType | undefined>(
  undefined
);

export const MediaStreamProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [stream, setStream] = useState<MediaStream | null>(null);

  return (
    <MediaStreamContext.Provider value={{ stream, setStream }}>
      {children}
    </MediaStreamContext.Provider>
  );
};

export const useMediaStream = (): MediaStreamContextType => {
  const context = useContext(MediaStreamContext);
  if (!context) {
    throw new Error("useMediaStream must be used within a MediaStreamProvider");
  }
  return context;
};
