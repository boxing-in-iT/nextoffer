"use client";

import { startScreenAndAudioCapture } from "@/utils/webrtc";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useMediaStream } from "@/context/MediaStreamContext";

const CaptureScreen: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const { setStream } = useMediaStream();
  const router = useRouter();

  const startCapture = async () => {
    const stream = await startScreenAndAudioCapture();
    if (stream) {
      setStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsCapturing(true);
      router.push("/interview-helper");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!isCapturing ? (
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={startCapture}
        >
          Старт захвата
        </button>
      ) : (
        <div>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted={false}
            className="border rounded shadow-lg"
          ></video>
        </div>
      )}
    </div>
  );
};

export default CaptureScreen;
