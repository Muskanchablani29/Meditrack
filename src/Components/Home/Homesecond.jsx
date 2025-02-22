import React from 'react';
import { motion } from 'framer-motion';
import './Homesecond.css';
import image1 from '../Images/feature1.jpg';
import image2 from '../Images/feature2.jpg';
import image3 from '../Images/feature3.jpg';
import image4 from '../Images/feature4.jpeg';

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -50 }, // Reduced x offset for mobile
  hiddenRight: { opacity: 0, x: 50 }, // Reduced x offset for mobile
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } // Slightly faster animation
  },
  exitLeft: { opacity: 0, x: -50, transition: { duration: 0.8, ease: 'easeInOut' } },
  exitRight: { opacity: 0, x: 50, transition: { duration: 0.8, ease: 'easeInOut' } }
};

const CuratedContentPage = () => {
  const cardData = [
    {
      img: image1, // Fixed image import
      alt: 'Curated Content',
      title: 'Curated Content',
      desc: 'Only relevant and high-quality health videos selected from trusted sources.',
      btn: 'Explore Videos'
    },
    {
      img: image2, // Fixed image import
      alt: 'User-Friendly',
      title: 'User-Friendly',
      desc: 'Simple and easy-to-use interface for seamless navigation.',
      btn: 'Start Browsing'
    },
    {
      img: image3, // Fixed image import
      alt: 'Always Updated',
      title: 'Always Updated',
      desc: 'Stay informed with continuously updated health videos.',
      btn: 'See Updates'
    },
    {
      img: image4, // Fixed image import
      alt: 'Diverse Topics',
      title: 'Diverse Topics',
      desc: 'Wide range of topics including medical advice, fitness, and mental wellness.',
      btn: 'Discover More'
    }
  ];

  return (
    <div className="container">
      <motion.h1 
        className="main-heading"
        initial={{ opacity: 0, y: -30 }} // Reduced y offset
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Curated Health Content
      </motion.h1>

      <motion.p 
        className="intro-text"
        initial={{ opacity: 0, y: 30 }} // Reduced y offset
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }} // Reduced delay
      >
        Explore high-quality health videos, carefully selected for your wellness journey.
      </motion.p>

      <div className="content-grid">
        {cardData.map((card, index) => (
          <motion.div
            className="custom-card enhanced-full-width"
            key={index}
            initial={index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
            whileInView="visible"
            exit={index % 2 === 0 ? 'exitLeft' : 'exitRight'}
            variants={cardVariants}
            viewport={{ once: false, amount: 0.1 }} // Reduced amount for earlier animation trigger
            style={{ 
              maxWidth: '100%', 
              boxSizing: 'border-box',
              margin: '10px auto' // Added margin for better spacing
            }}
          >
            <motion.img 
              src={card.img} 
              alt={card.alt} 
              className="card-image-enhanced" 
              whileHover={{ scale: 1.03 }} // Reduced scale effect
              transition={{ duration: 0.3 }}
              style={{ 
                maxWidth: '100%', 
                height: 'auto',
                borderRadius: '8px' // Added border radius
              }}
            />
            <div className="card-content-enhanced">
              <h2 className="content-title-enhanced">{card.title}</h2>
              <p className="content-description-enhanced">{card.desc}</p>
              <motion.button 
                className="action-button-enhanced"
                whileHover={{ scale: 1.05, backgroundColor: '#1abc9c' }} // Reduced scale effect
                transition={{ duration: 0.2 }}
              >
                {card.btn}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CuratedContentPage;
