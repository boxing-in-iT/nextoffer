export const createPeerConnection = (): RTCPeerConnection => {
  const configuration: RTCConfiguration = {
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302", // STUN-сервер Google
      },
    ],
  };

  const peerConnection = new RTCPeerConnection(configuration);

  // Логгирование ICE кандидатов
  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      console.log("New ICE candidate:", event.candidate);
    }
  };

  // Логгирование состояния подключения
  peerConnection.onconnectionstatechange = () => {
    console.log("Connection state:", peerConnection.connectionState);
  };

  return peerConnection;
};

export const startScreenAndAudioCapture =
  async (): Promise<MediaStream | null> => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true, // Захват аудио
      });

      // Альтернативно, можно комбинировать аудио с микрофона:
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      audioStream.getAudioTracks().forEach((track) => stream.addTrack(track));

      return stream;
    } catch (error) {
      console.error("Ошибка при захвате экрана и аудио:", error);
      return null;
    }
  };
