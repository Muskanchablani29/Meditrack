import React, { useState, useEffect } from 'react';
import './SidebarFilter.css';

const SidebarFilter = ({ applyFilters, currentFilters, ageGroups }) => {
  const [specialties, setSpecialties] = useState([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);
  const [sortOption, setSortOption] = useState('relevance');
  const [remedyDifficulty, setRemedyDifficulty] = useState(null);
  const [remedyEffectiveness, setRemedyEffectiveness] = useState(null);

  // Common medical specialties
  const commonSpecialties = [
    'Cardiology',
    'Dermatology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Gastroenterology',
    'Endocrinology',
    'Ophthalmology',
    'Psychiatry',
    'Oncology'
  ];

  // Remedy difficulty levels
  const difficultyLevels = ['Easy', 'Medium', 'Hard'];
  
  // Remedy effectiveness levels
  const effectivenessLevels = ['Low', 'Medium', 'High'];

  useEffect(() => {
    // Initialize specialties
    setSpecialties(commonSpecialties);
    
    // Initialize from current filters if provided
    if (currentFilters) {
      setSelectedSpecialties(currentFilters.selectedSpecialties || []);
      setSelectedRating(currentFilters.selectedRating || null);
      setSelectedAgeGroup(currentFilters.ageGroup || null);
      setSortOption(currentFilters.sortBy || 'relevance');
      setRemedyDifficulty(currentFilters.remedyDifficulty || null);
      setRemedyEffectiveness(currentFilters.remedyEffectiveness || null);
    }
  }, []);

  // Update filters when any selection changes
  useEffect(() => {
    applyFilters({
      selectedSpecialties,
      selectedRating,
      ageGroup: selectedAgeGroup,
      sortBy: sortOption,
      remedyDifficulty,
      remedyEffectiveness
    });
  }, [selectedSpecialties, selectedRating, selectedAgeGroup, sortOption, remedyDifficulty, remedyEffectiveness]);

  const handleSpecialtyChange = (specialty) => {
    setSelectedSpecialties(prev => {
      if (prev.includes(specialty)) {
        return prev.filter(s => s !== specialty);
      } else {
        return [...prev, specialty];
      }
    });
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating === selectedRating ? null : rating);
  };

  const handleAgeGroupChange = (ageGroup) => {
    setSelectedAgeGroup(ageGroup === selectedAgeGroup ? null : ageGroup);
  };

  const handleSortChange = (sortOption) => {
    setSortOption(sortOption);
  };

  const handleDifficultyChange = (difficulty) => {
    setRemedyDifficulty(difficulty === remedyDifficulty ? null : difficulty);
  };

  const handleEffectivenessChange = (effectiveness) => {
    setRemedyEffectiveness(effectiveness === remedyEffectiveness ? null : effectiveness);
  };

  const clearAllFilters = () => {
    setSelectedSpecialties([]);
    setSelectedRating(null);
    setSelectedAgeGroup(null);
    setSortOption('relevance');
    setRemedyDifficulty(null);
    setRemedyEffectiveness(null);
  };

  const hasActiveFilters = () => {
    return selectedSpecialties.length > 0 || 
           selectedRating || 
           selectedAgeGroup || 
           sortOption !== 'relevance' || 
           remedyDifficulty || 
           remedyEffectiveness;
  };

  return (
    <div className="sidebar-filter">
      <h2 className="sidebar-title">Filters</h2>
      
      {/* Clear all filters button */}
      {hasActiveFilters() && (
        <button className="clear-filters-btn" onClick={clearAllFilters}>
          Clear All Filters
        </button>
      )}
      
      {/* Age Group Filter */}
      <div className="filter-section">
        <h3 className="filter-title">Age Group</h3>
        <div className="filter-options">
          {ageGroups && ageGroups.map(group => (
            <div key={group.id} className="filter-option">
              <input
                type="checkbox"
                id={`age-${group.id}`}
                checked={selectedAgeGroup === group.id}
                onChange={() => handleAgeGroupChange(group.id)}
                className="filter-checkbox"
              />
              <label htmlFor={`age-${group.id}`} className="filter-label">
                {group.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Remedy Difficulty Filter */}
      <div className="filter-section">
        <h3 className="filter-title">Remedy Difficulty</h3>
        <div className="filter-options">
          {difficultyLevels.map(difficulty => (
            <div key={difficulty} className="filter-option">
              <input
                type="checkbox"
                id={`difficulty-${difficulty}`}
                checked={remedyDifficulty === difficulty}
                onChange={() => handleDifficultyChange(difficulty)}
                className="filter-checkbox"
              />
              <label htmlFor={`difficulty-${difficulty}`} className="filter-label">
                {difficulty}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Remedy Effectiveness Filter */}
      <div className="filter-section">
        <h3 className="filter-title">Remedy Effectiveness</h3>
        <div className="filter-options">
          {effectivenessLevels.map(effectiveness => (
            <div key={effectiveness} className="filter-option">
              <input
                type="checkbox"
                id={`effectiveness-${effectiveness}`}
                checked={remedyEffectiveness === effectiveness}
                onChange={() => handleEffectivenessChange(effectiveness)}
                className="filter-checkbox"
              />
              <label htmlFor={`effectiveness-${effectiveness}`} className="filter-label">
                {effectiveness}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Sort Options */}
      <div className="filter-section">
        <h3 className="filter-title">Sort Videos By</h3>
        <div className="filter-options">
          <div className="filter-option">
            <input
              type="radio"
              id="sort-relevance"
              checked={sortOption === 'relevance'}
              onChange={() => handleSortChange('relevance')}
              className="filter-radio"
            />
            <label htmlFor="sort-relevance" className="filter-label">
              Relevance
            </label>
          </div>
          <div className="filter-option">
            <input
              type="radio"
              id="sort-duration"
              checked={sortOption === 'duration'}
              onChange={() => handleSortChange('duration')}
              className="filter-radio"
            />
            <label htmlFor="sort-duration" className="filter-label">
              Duration
            </label>
          </div>
          <div className="filter-option">
            <input
              type="radio"
              id="sort-popularity"
              checked={sortOption === 'popularity'}
              onChange={() => handleSortChange('popularity')}
              className="filter-radio"
            />
            <label htmlFor="sort-popularity" className="filter-label">
              Popularity
            </label>
          </div>
        </div>
      </div>
      
      {/* Doctor Specialties Filter */}
      <div className="filter-section">
        <h3 className="filter-title">Doctor Specialties</h3>
        <div className="filter-options">
          {specialties.map(specialty => (
            <div key={specialty} className="filter-option">
              <input
                type="checkbox"
                id={`specialty-${specialty}`}
                checked={selectedSpecialties.includes(specialty)}
                onChange={() => handleSpecialtyChange(specialty)}
                className="filter-checkbox"
              />
              <label htmlFor={`specialty-${specialty}`} className="filter-label">
                {specialty}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Doctor Rating Filter */}
      <div className="filter-section">
        <h3 className="filter-title">Minimum Rating</h3>
        <div className="rating-options">
          {[5, 4, 3, 2, 1].map(rating => (
            <div 
              key={rating} 
              className={`rating-option ${selectedRating === rating ? 'active' : ''}`}
              onClick={() => handleRatingChange(rating)}
            >
              {rating}+ ★
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
