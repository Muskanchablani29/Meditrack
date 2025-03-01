import React, { useState, useEffect } from "react";
import "./MeditationPage.css";
import { PlayCircle, PauseCircle } from "lucide-react";

const meditationVideos = [
  { id: 1, title: "Mindfulness Meditation", url: "https://www.youtube.com/embed/1vx8iUvfyCY" },
  { id: 2, title: "Deep Breathing Exercise", url: "https://www.youtube.com/embed/395ZloN4Rr8?si=wvrxjVi8y9pZpF1z" },
  { id: 3, title: "Sleep Meditation", url: "https://www.youtube.com/embed/W19PdslW7iw" }
];

const meditationSteps = [
  "Find a quiet and comfortable place to sit.",
  "Close your eyes and take deep breaths.",
  "Focus on your breath and let go of distractions.",
  "Gently bring your mind back when it wanders.",
  "Continue for 5-10 minutes, or as long as comfortable."
];

const affirmations = [
  "You are calm, strong, and in control.",
  "Peace flows through you with every breath.",
  "You are exactly where you need to be."
];

export default function MeditationPage() {
  const [timer, setTimer] = useState(300); // Default 5 min timer
  const [isRunning, setIsRunning] = useState(false);
  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    setAffirmation(affirmations[Math.floor(Math.random() * affirmations.length)]);
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  return (
    <div className="meditation-container">
      <h1 className="meditation-title">Meditation & Relaxation</h1>
      
      <div className="affirmation-box">
        <p className="affirmation-text">{affirmation}</p>
      </div>

      <div className="video-grid">
        {meditationVideos.map((video) => (
          <div key={video.id} className="video-card">
            <h2 className="video-title">{video.title}</h2>
            <iframe
              className="video-frame"
              src={video.url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      <div className="steps-container">
        <h2 className="steps-title">Steps to Meditate</h2>
        <div className="steps-grid">
          {meditationSteps.map((step, index) => (
            <div key={index} className="step-card">
              <p className="step-text">{index + 1}. {step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="timer-section">
        <h2 className="timer-title">Meditation Timer</h2>
        <p className="timer-display">{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}</p>
        <button className="timer-button" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? <PauseCircle size={24} /> : <PlayCircle size={24} />} {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
}