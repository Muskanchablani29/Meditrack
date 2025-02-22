import { useEffect, useState } from "react";
import "./Homeanimationtwo.css";

const diseaseNames = [
  "Malaria", "Dengue Fever", "Influenza", "Common Cold",
  "Pneumonia", "Chickenpox", "Measles", "Typhoid Fever",
  "Tuberculosis", "Cholera", "Asthma", "Bronchitis",
  "Hepatitis", "COVID-19", "Ebola Virus", "Zika Virus"
];

const videoLinks = [
  "https://www.youtube.com/watch?v=VIDEO1",
  "https://www.youtube.com/watch?v=VIDEO2",
  "https://www.youtube.com/watch?v=VIDEO3",
  "https://www.youtube.com/watch?v=VIDEO4"
];

export default function AutoDiseaseSearch() {
  const [diseaseIndex, setDiseaseIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDiseaseIndex((prevIndex) => (prevIndex + 1) % diseaseNames.length);
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-twoanimation">
      <h2 className="title">Auto Disease Search - YouTube Videos</h2>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          value={diseaseNames[diseaseIndex]}
          readOnly
        />
      </div>
      {loading ? (
        <p className="loading-text">🔍 Searching for videos...</p>
      ) : (
        <div className="video-container">
          {videoLinks.map((link, index) => (
            <div
              key={index}
              className={`video-box color-${index}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => window.open(link, "_blank")}
            >
              Video {index + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
