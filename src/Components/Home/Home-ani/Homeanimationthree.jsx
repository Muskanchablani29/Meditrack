import React, { useState, useEffect } from "react";
import "./Homeanimationthree.css";

const videoData = [
    { title: "Disease Prevention Tips", views: 500000, date: "2024-02-01", tag: "views" },
    { title: "How to Cure Malaria", views: 200000, date: "2024-02-10", tag: "relevant" },
    { title: "Influenza Symptoms", views: 800000, date: "2023-12-15", tag: "views" },
    { title: "Healthy Habits", views: 120000, date: "2024-01-05", tag: "recent" },
    { title: "COVID-19 Updates", views: 900000, date: "2024-02-14", tag: "recent" },
    { title: "Tuberculosis Treatment", views: 600000, date: "2023-11-20", tag: "views" },
];

const VideoFilter = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState(videoData);

    useEffect(() => {
        if (selectedFilters.length === 0) {
            setFilteredVideos(videoData);
        } else {
            setFilteredVideos(videoData.filter(video => selectedFilters.includes(video.tag)));
        }
    }, [selectedFilters]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedFilters([]);
            const randomIndex = Math.floor(Math.random() * 3);
            const filterOptions = ["relevant", "views", "recent"];
            setSelectedFilters([filterOptions[randomIndex]]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleFilterChange = (tag) => {
        setSelectedFilters(prev => 
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    return (
        <div className="container-animationthree">
            <div className="sidebar">
                <h3>Filter Videos</h3>
                <div className="filter-group">
                    {['relevant', 'views', 'recent'].map(tag => (
                        <label key={tag}>
                            <input 
                                type="checkbox" 
                                value={tag} 
                                checked={selectedFilters.includes(tag)} 
                                onChange={() => handleFilterChange(tag)}
                            /> {`Most ${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
                        </label>
                    ))}
                </div>
            </div>
            <div className="main-content">
                <h2>Filtered YouTube Videos</h2>
                <div className="video-container">
                    {filteredVideos.map((video, index) => (
                        <div key={index} className="video fade-in" style={{ background: getRandomColor(), animationDelay: `${index * 0.2}s` }}>
                            <div className="tag">{video.tag}</div>
                            {video.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const getRandomColor = () => {
    const colors = ["#ff4081", "#3f51b5", "#ff9800", "#4caf50", "#009688", "#673ab7"];
    return colors[Math.floor(Math.random() * colors.length)];
};

export default VideoFilter;
