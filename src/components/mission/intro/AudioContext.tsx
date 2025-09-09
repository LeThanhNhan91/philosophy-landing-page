"use client";
import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";

interface AudioContextType {
  isMusicPlaying: boolean;
  playMusic: () => void;
  toggleMusic: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within an AudioProvider");
  return context;
};

interface AudioProviderProps {
  children: ReactNode;
}

export const AudioProvider: FC<AudioProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);

  // Khôi phục trạng thái phát từ localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const pref = localStorage.getItem("music-pref");
    if (pref === "on") {
      audioRef.current
        ?.play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => {
          // Trình duyệt chặn autoplay: chờ người dùng click nút ở header
          setIsMusicPlaying(false);
        });
    }
  }, []);

  const playMusic = () => {
    audioRef.current
      ?.play()
      .then(() => {
        setIsMusicPlaying(true);
        if (typeof window !== "undefined") localStorage.setItem("music-pref", "on");
      })
      .catch((error) => console.error("Audio play failed:", error));
  };

  const toggleMusic = () => {
    if (isMusicPlaying) {
      audioRef.current?.pause();
      setIsMusicPlaying(false);
      if (typeof window !== "undefined") localStorage.setItem("music-pref", "off");
    } else {
      audioRef.current
        ?.play()
        .then(() => {
          setIsMusicPlaying(true);
          if (typeof window !== "undefined") localStorage.setItem("music-pref", "on");
        })
        .catch((error) => console.error("Audio play failed:", error));
    }
  };

  const contextValue: AudioContextType = { isMusicPlaying, playMusic, toggleMusic };

  return (
    <AudioContext.Provider value={contextValue}>
      <audio ref={audioRef} src="/podcast/music.mp3" loop />
      {children}
    </AudioContext.Provider>
  );
};
