import React, { useState } from 'react';
import './DiseaseRemedySearch.css';

const DiseaseRemedySearch = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === '') return;

    // Static video data based on provided links
    const videoList = [
      {
        title: 'Malaria Remedy Search Results',
        thumbnail: 'https://via.placeholder.com/250x150',
        url: 'https://www.youtube.com/results?search_query=Malaria+Remedy'
      },
      {
        title: 'Malaria Remedy Short',
        embedUrl: 'https://www.youtube.com/embed/k0zivPJH4eo'
      },
      {
        title: 'Malaria Remedy Full Video',
        embedUrl: 'https://www.youtube.com/embed/6WAvLyYviJI'
      }
    ];

    setVideos(videoList);
  };

  return (
    <div className="container-disease">
      <h1 className="title">Disease Remedy Finder</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter disease name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="video-grid">
        {videos.length === 0 ? (
          <p className="no-videos">No videos to display. Try searching for a disease.</p>
        ) : (
          videos.map((video, index) => (
            <div key={index} className="video-card">
              {video.embedUrl ? (
                <iframe
                  width="100%"
                  height="200"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-iframe"
                ></iframe>
              ) : (
                <>
                  <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                  <h3 className="video-title">{video.title}</h3>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link">
                    View Search Results
                  </a>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DiseaseRemedySearch;
