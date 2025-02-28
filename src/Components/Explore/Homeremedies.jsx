import React, { useState, useMemo, useCallback } from 'react';
import './HomeRemedies.css';
import { FaSearch, FaClock, FaBookmark } from 'react-icons/fa';
import aleovera from '../Images/Aleovera.jpeg'
import tea from '../Images/ChammolineTea.jpeg'
import ginger from '../Images/GingerTea.webp'
import turmerric from '../Images/Turmerric.jpeg'

// Sample data for home remedies - moved outside component
const remediesData = [
  {
    id: 1,
    title: 'Natural Honey for Sore Throat',
    description: 'Honey has antibacterial properties that can help soothe a sore throat and suppress coughs. Mix with warm water and lemon for best results.',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924',
    category: 'Cold & Flu',
    readTime: '3 min'
  },
  {
    id: 2,
    title: 'Ginger Tea for Nausea',
    description: 'Ginger contains compounds that can help relieve nausea and motion sickness. Steep fresh ginger in hot water for a soothing remedy.',
    image: ginger,
    category: 'Digestive',
    readTime: '4 min'
  },
  {
    id: 3,
    title: 'Aloe Vera for Skin Burns',
    description: 'The gel from aloe vera plants contains compounds that reduce pain and inflammation while promoting skin healing for minor burns.',
    image: aleovera,
    category: 'Skin Care',
    readTime: '5 min'
  },
  {
    id: 4,
    title: 'Peppermint Oil for Headaches',
    description: 'Peppermint oil contains menthol which can help relax muscles and ease pain. Apply diluted oil to temples for tension headache relief.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108',
    category: 'Pain Relief',
    readTime: '3 min'
  },
  {
    id: 5,
    title: 'Chamomile Tea for Better Sleep',
    description: 'Chamomile contains antioxidants that may promote sleepiness and reduce insomnia. Enjoy a cup before bedtime for better sleep quality.',
    image: tea,
    category: 'Sleep',
    readTime: '4 min'
  },
  {
    id: 6,
    title: 'Turmeric for Inflammation',
    description: 'Curcumin in turmeric has powerful anti-inflammatory effects. Mix with black pepper and honey in warm milk for a golden remedy.',
    image: turmerric,
    category: 'Inflammation',
    readTime: '6 min'
  }
];

// Filter categories - moved outside component
const categories = ['All', 'Cold & Flu', 'Digestive', 'Skin Care', 'Pain Relief', 'Sleep', 'Inflammation'];

// Extracted RemedyCard component
const RemedyCard = React.memo(({ remedy }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img 
          src={`${remedy.image}?auto=format&fit=crop&w=600&q=80`} 
          alt={remedy.title} 
          className="card-image" 
          loading="lazy"
          width="600"
          height="400"
        />
        <span className="card-category">{remedy.category}</span>
      </div>
      <div className="card-content-home">
        <h3 className="card-title">{remedy.title}</h3>
        <p className="card-description">{remedy.description}</p>
        <div className="card-footer">
          <a href="#" className="read-more">Read More</a>
          <div className="card-info">
            <FaClock /> {remedy.readTime}
          </div>
        </div>
      </div>
    </div>
  );
});

// Extracted FilterTab component
const FilterTab = React.memo(({ category, isActive, onClick }) => (
  <div
    className={`filter-tab ${isActive ? 'active' : ''}`}
    onClick={() => onClick(category)}
  >
    {category}
  </div>
));

// NoResults component
const NoResults = React.memo(() => (
  <div style={{ margin: '50px 0', color: '#7f8c8d' }}>
    <h3>No remedies found</h3>
    <p>Try adjusting your search or filter criteria</p>
  </div>
));

const HomeRemedies = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Direct search input handler without debounce
  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
  }, []);

  // Memoize the filter click handler
  const handleFilterClick = useCallback((category) => {
    setActiveFilter(category);
  }, []);

  // Memoize filtered remedies to prevent unnecessary recalculations
  const filteredRemedies = useMemo(() => {
    return remediesData.filter(remedy => {
      const matchesFilter = activeFilter === 'All' || remedy.category === activeFilter;
      const matchesSearch = remedy.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           remedy.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="container-remedies-home">
      <div className="title-section">
        <h1 className="title">Natural Home Remedies</h1>
        <p className="subtitle">
          Discover traditional healing methods using natural ingredients that have been 
          passed down through generations to treat common ailments.
        </p>
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for remedies..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

      <div className="filter-tabs">
        {categories.map(category => (
          <FilterTab
            key={category}
            category={category}
            isActive={activeFilter === category}
            onClick={handleFilterClick}
          />
        ))}
      </div>

      <div className="grid-container">
        {filteredRemedies.map(remedy => (
          <RemedyCard key={remedy.id} remedy={remedy} />
        ))}
      </div>

      {filteredRemedies.length > 0 && (
        <div className="pagination">
          <div className="page-button active">1</div>
          <div className="page-button">2</div>
          <div className="page-button">3</div>
          <div className="page-button">...</div>
          <div className="page-button">8</div>
        </div>
      )}

      {filteredRemedies.length === 0 && <NoResults />}
    </div>
  );
};

export default HomeRemedies;
