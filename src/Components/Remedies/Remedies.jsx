import React, { useState, useEffect } from 'react';
import './DiseaseRemedySearch.css';
import SidebarFilter from './Sidebar';
import { diseaseData } from './DiseaseData';
import { NavLink } from 'react-router-dom';

const Remedies = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    selectedSpecialties: [],
    selectedRating: null,
    ageGroup: null,
    sortBy: 'relevance',
    remedyDifficulty: null,
    remedyEffectiveness: null
  });
  const [doctors, setDoctors] = useState([]);
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [remedies, setRemedies] = useState([]);
  const [filteredRemedies, setFilteredRemedies] = useState([]);
  const [videoSortOrder, setVideoSortOrder] = useState('asc');
  const [diseaseOverview, setDiseaseOverview] = useState('');
  const [currentDisease, setCurrentDisease] = useState('');

  // Age group options
  const ageGroups = [
    { id: 'children', label: 'Children (0-12)', range: [0, 12] },
    { id: 'teens', label: 'Teenagers (13-19)', range: [13, 19] },
    { id: 'adults', label: 'Adults (20-59)', range: [20, 59] },
    { id: 'seniors', label: 'Seniors (60+)', range: [60, 150] }
  ];

  // Apply filters whenever filters or videos/remedies change
  useEffect(() => {
    applyFilters();
  }, [filters, videos, remedies]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const searchKey = query.toLowerCase();
    setCurrentDisease(searchKey);
    
    const diseaseInfo = diseaseData[searchKey] || {
      doctors: [],
      remedies: [],
      videos: [],
      overview: 'No information found for this disease.'
    };

    // Process doctors
    let filteredDoctors = diseaseInfo.doctors || [];
    if (filters.selectedSpecialties?.length) {
      filteredDoctors = filteredDoctors.filter(doctor => 
        filters.selectedSpecialties.includes(doctor.specialty));
    }
    if (filters.selectedRating) {
      filteredDoctors = filteredDoctors.filter(doctor => 
        doctor.rating >= filters.selectedRating);
    }
    setDoctors(filteredDoctors);
    
    // Process videos
    const processedVideos = (diseaseInfo.videos || []).map(video => ({
      ...video,
      duration: video.duration || Math.floor(Math.random() * 480) + 120,
      ageGroup: video.ageGroup || getRandomAgeGroup()
    }));
    
    setVideos(processedVideos);
    setRemedies(diseaseInfo.remedies || []);
    setDiseaseOverview(diseaseInfo.overview || '');
  };

  // Helper function to assign random age group for demo purposes
  const getRandomAgeGroup = () => {
    const groups = ['children', 'teens', 'adults', 'seniors'];
    return groups[Math.floor(Math.random() * groups.length)];
  };

  // Apply all filters to videos and remedies
  const applyFilters = () => {
    // Filter videos
    if (videos.length) {
      let result = [...videos];
      
      // Filter by age group if selected
      if (filters.ageGroup) {
        result = result.filter(video => video.ageGroup === filters.ageGroup);
      }
      
      // Sort videos based on selected sort option
      if (filters.sortBy === 'duration') {
        result = result.sort((a, b) => {
          return videoSortOrder === 'asc' ? a.duration - b.duration : b.duration - a.duration;
        });
      } else if (filters.sortBy === 'popularity' && videos.some(v => v.views)) {
        result = result.sort((a, b) => {
          return (b.views || 0) - (a.views || 0);
        });
      }
      
      setFilteredVideos(result);
    }
    
    // Filter remedies
    if (remedies.length) {
      let filteredRemeds = [...remedies];
      
      // Filter by difficulty
      if (filters.remedyDifficulty) {
        filteredRemeds = filteredRemeds.filter(remedy => 
          remedy.difficulty && remedy.difficulty.toLowerCase() === filters.remedyDifficulty.toLowerCase());
      }
      
      // Filter by effectiveness
      if (filters.remedyEffectiveness) {
        filteredRemeds = filteredRemeds.filter(remedy => 
          remedy.effectiveness && remedy.effectiveness.toLowerCase() === filters.remedyEffectiveness.toLowerCase());
      }
      
      setFilteredRemedies(filteredRemeds);
    } else {
      setFilteredRemedies([]);
    }
  };

  // Handle filter changes from sidebar
  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };

  // Toggle video sort order
  const toggleVideoSort = () => {
    const newOrder = videoSortOrder === 'asc' ? 'desc' : 'asc';
    setVideoSortOrder(newOrder);
    setFilters(prev => ({
      ...prev,
      sortBy: 'duration'
    }));
  };

  // Format duration from seconds to mm:ss
  const formatDuration = (seconds) => {
    if (typeof seconds !== 'number') return 'Unknown';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Get age group label
  const getAgeGroupLabel = (groupId) => {
    const group = ageGroups.find(g => g.id === groupId);
    return group ? group.label : 'All Ages';
  };

  return (
    <div className="remedies-container-top">
      <div className="sidebar-fixed">
        <SidebarFilter 
          applyFilters={handleFilterChange} 
          currentFilters={filters}
          ageGroups={ageGroups}
        />
      </div>

      <div className="content-section">
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
        
        {/* Disease Overview Section */}
        {diseaseOverview && (
          <div className="disease-overview">
            <h2 className="section-title">{currentDisease.charAt(0).toUpperCase() + currentDisease.slice(1)} Overview</h2>
            <p className="overview-text">{diseaseOverview}</p>
          </div>
        )}
        
        {/* Active filters display */}
        {(filters.ageGroup || filters.sortBy !== 'relevance' || filters.remedyDifficulty || filters.remedyEffectiveness) && (
          <div className="active-filters">
            {filters.ageGroup && (
              <div className="filter-tag">
                Age: {getAgeGroupLabel(filters.ageGroup)}
                <span className="remove-filter" onClick={() => handleFilterChange({ ageGroup: null })}>×</span>
              </div>
            )}
            {filters.sortBy !== 'relevance' && (
              <div className="filter-tag">
                Sort: {filters.sortBy.charAt(0).toUpperCase() + filters.sortBy.slice(1)}
                <span className="remove-filter" onClick={() => handleFilterChange({ sortBy: 'relevance' })}>×</span>
              </div>
            )}
            {filters.remedyDifficulty && (
              <div className="filter-tag">
                Difficulty: {filters.remedyDifficulty}
                <span className="remove-filter" onClick={() => handleFilterChange({ remedyDifficulty: null })}>×</span>
              </div>
            )}
            {filters.remedyEffectiveness && (
              <div className="filter-tag">
                Effectiveness: {filters.remedyEffectiveness}
                <span className="remove-filter" onClick={() => handleFilterChange({ remedyEffectiveness: null })}>×</span>
              </div>
            )}
          </div>
        )}

        {/* Videos Section */}
        <div className="videos-section">
          <div className="videos-header">
            <h2 className="section-title">Related Videos</h2>
            {videos.length > 0 && (
              <div className="sort-controls">
                <button 
                  onClick={toggleVideoSort} 
                  className={`sort-button ${filters.sortBy === 'duration' ? 'active' : ''}`}
                >
                  Sort by Duration {videoSortOrder === 'asc' ? '↑' : '↓'}
                </button>
                <button 
                  onClick={() => handleFilterChange({ sortBy: 'popularity' })}
                  className={`sort-button ${filters.sortBy === 'popularity' ? 'active' : ''}`}
                >
                  Sort by Popularity
                </button>
                {filters.sortBy !== 'relevance' && (
                  <button 
                    onClick={() => handleFilterChange({ sortBy: 'relevance' })}
                    className="sort-button"
                  >
                    Reset Sort
                  </button>
                )}
              </div>
            )}
          </div>
          
          {/* Age group filter buttons */}
          {videos.length > 0 && (
            <div className="age-group-filter">
              <div className="filter-title">Filter by Age Group:</div>
              <div className="age-group-options">
                <div 
                  className={`age-group-option ${filters.ageGroup === null ? 'active' : ''}`}
                  onClick={() => handleFilterChange({ ageGroup: null })}
                >
                  All Ages
                </div>
                {ageGroups.map(group => (
                  <div 
                    key={group.id}
                    className={`age-group-option ${filters.ageGroup === group.id ? 'active' : ''}`}
                    onClick={() => handleFilterChange({ ageGroup: group.id })}
                  >
                    {group.label}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Filter results message */}
          {videos.length > 0 && (
            <div className="filter-results-message">
              Showing {filteredVideos.length} of {videos.length} videos
              {filters.ageGroup ? ` for ${getAgeGroupLabel(filters.ageGroup)}` : ''}
            </div>
          )}
          
          {/* Videos grid */}
          <div className="videos-grid">
            {filteredVideos.length > 0 ? filteredVideos.map((video, index) => (
              <div key={index} className="video-card">
                <div className="age-group-tag">
                  {video.ageGroup ? getAgeGroupLabel(video.ageGroup).split(' ')[0] : 'All Ages'}
                </div>
                <div className="video-wrapper">
                  <h3>{video.title}</h3>
                  <div className="video-duration">
                    Duration: {formatDuration(video.duration)}
                  </div>
                  {video.views && (
                    <div className="video-views">
                      {video.views.toLocaleString()} views
                    </div>
                  )}
                  <iframe 
                    width="100%" 
                    height="200" 
                    src={video.embedUrl} 
                    title={video.title} 
                    frameBorder="0" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )) : videos.length > 0 ? (
              <p className="no-results">No videos match your filter criteria.</p>
            ) : (
              <p className="no-videos">No videos found for this condition.</p>
            )}
          </div>
        </div>
        
        {/* Home Remedies Section - Enhanced */}
        <div className="remedies-section">
          <h2 className="section-title">Home Remedies</h2>
          {filteredRemedies.length > 0 ? (
            <div className="remedy-cards">
              {filteredRemedies.map((remedy, index) => (
                <div key={index} className="remedy-card">
                  <h3 className="remedy-title">{remedy.title}</h3>
                  <p className="remedy-description">{remedy.description}</p>
                  <div className="remedy-meta">
                    {remedy.difficulty && (
                      <span className={`difficulty-tag ${remedy.difficulty.toLowerCase()}`}>
                        Difficulty: {remedy.difficulty}
                      </span>
                    )}
                    {remedy.effectiveness && (
                      <span className={`effectiveness-tag ${remedy.effectiveness.toLowerCase()}`}>
                        Effectiveness: {remedy.effectiveness}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : remedies.length > 0 ? (
            <p className="no-results">No remedies match your filter criteria.</p>
          ) : (
            <p className="no-remedies">No remedies found for this condition.</p>
          )}
        </div>
        
        {/* Doctors Section - Enhanced */}
        <div className="doctors-section">
          <h2 className="section-title">Recommended Doctors</h2>
          <div className="doctor-cards">
            {doctors.length > 0 ? doctors.map((doctor, index) => (
              <div key={index} className="doctor-card">
                <img src={doctor.image} alt={doctor.name} className="doctor-img" />
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
                {doctor.rating && (
                  <div className="doctor-rating">
                    {Array(doctor.rating).fill('★').join('')}
                    {Array(5-doctor.rating).fill('☆').join('')}
                  </div>
                )}
                {doctor.experience && (
                  <p className="doctor-experience">Experience: {doctor.experience}</p>
                )}
                {doctor.hospital && (
                  <p className="doctor-hospital">{doctor.hospital}</p>
                )}
                {doctor.contact && (
                  <p className="doctor-contact">{doctor.contact}</p>
                )}
                <NavLink to="/Appointment"><button className="consult-button">Consult Now</button></NavLink>
              </div>
            )) : <p className="no-doctors">No doctors found for this condition.</p>}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Remedies;
