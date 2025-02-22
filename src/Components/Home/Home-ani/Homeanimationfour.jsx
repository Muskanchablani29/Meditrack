import React, { useEffect, useState } from "react";
import "./Homeanimationfour.css";

const diseaseNames = [
    "Malaria", "Dengue Fever", "Influenza", "Common Cold",
    "Pneumonia", "Chickenpox", "Measles", "Typhoid Fever",
    "Tuberculosis", "Cholera", "Asthma", "Bronchitis",
    "Hepatitis", "COVID-19", "Ebola Virus", "Zika Virus"
];

const videos = [
    { color: "#ff4081", url: "https://www.youtube.com/watch?v=VIDEO1", title: "Video 1" },
    { color: "#3f51b5", url: "https://www.youtube.com/watch?v=VIDEO2", title: "Video 2" },
    { color: "#ff9800", url: "https://www.youtube.com/watch?v=VIDEO3", title: "Video 3" },
    { color: "#4caf50", url: "https://www.youtube.com/watch?v=VIDEO4", title: "Video 4" }
];

const AutoDiseaseSearch = () => {
    const [diseaseIndex, setDiseaseIndex] = useState(0);
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDiseaseIndex((prev) => (prev + 1) % diseaseNames.length);
            setSelectedVideoIndex(Math.floor(Math.random() * videos.length));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container-animationfour">
            <h2>Auto Disease Search - YouTube Videos</h2>
            <div className="search-container">
                <input type="text" className="search-bar" value={diseaseNames[diseaseIndex]} readOnly />
            </div>
            <div className="video-container">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className={`video ${index === selectedVideoIndex ? "selected-video" : "hidden"}`}
                        style={{ backgroundColor: video.color }}
                    >
                        {video.title} <span className="tick-mark">✔</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AutoDiseaseSearch;