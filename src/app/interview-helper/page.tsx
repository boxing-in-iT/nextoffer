"use client";

import React, { useRef, useEffect, useState } from "react";
import { useMediaStream } from "@/context/MediaStreamContext";
import Logo from "@/assets/logo.svg";
import { Button } from "@/components/Button/Button";
import { ButtonVariants } from "@/components/Button/types";

const InterviewPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { stream } = useMediaStream();

  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    if (stream) {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      const mediaRecorder = new MediaRecorder(stream);
      setRecorder(mediaRecorder);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prev) => [...prev, event.data]);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setAudioChunks([]);
      };
    }
  }, [stream, audioChunks]);

  const handleStartRecording = () => {
    if (recorder && !recording) {
      recorder.start();
      setRecording(true);
    }
  };

  const handleStopRecording = () => {
    if (recorder && recording) {
      recorder.stop();
      setRecording(false);
    }
  };

  const handlePlayAudio = () => {
    if (audioRef.current && audioUrl) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex w-full gap-5 h-screen">
      <div className="w-1/3">
        <div className="flex-1 flex items-center justify-center bg-black rounded-lg">
          {stream ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              className="w-full h-full rounded-lg"
            ></video>
          ) : (
            <p className="text-white">Нет активного захвата</p>
          )}
        </div>
        <div className="flex gap-4">
          <Button
            variant={ButtonVariants.PRIMARY}
            className="px-5 py-2 rounded-md font-bold"
            onClick={handleStartRecording}
            isDisabled={recording}
          >
            Start Recording
          </Button>
          <Button
            variant={ButtonVariants.SECONDARY}
            className="px-5 py-2 rounded-md font-bold"
            onClick={handleStopRecording}
            isDisabled={!recording}
          >
            Stop Recording
          </Button>
          <Button
            variant={ButtonVariants.SECONDARY_SQUARE}
            className="px-5 py-2 rounded-md font-bold"
            onClick={handlePlayAudio}
            isDisabled={!audioUrl}
          >
            Play
          </Button>
        </div>
        {audioUrl && (
          <audio ref={audioRef} src={audioUrl} controls className="mt-5" />
        )}
      </div>
      <div className="flex-1 h-screen border-l-2 border-[#CAC4D0]">
        <div className="flex w-full justify-between items-center border-b-2 border-[#CAC4D0]">
          <div className="flex gap-2 ">
            <Logo />
            <p className=" font-bold text-[36px]">NextOffer</p>
          </div>
          <div className="mr-5">
            <Button
              variant={ButtonVariants.RED}
              className="px-5 py-1 rounded-md font-bold text-2xl"
            >
              Exit
            </Button>
          </div>
        </div>
        <div className="flex-1 h-full bg-black p-5"></div>
      </div>
    </div>
  );
};

export default InterviewPage;
