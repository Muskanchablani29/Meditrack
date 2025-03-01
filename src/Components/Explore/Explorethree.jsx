import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Explorethree.css';
import disease1 from '../Images/Dengue.jpg';
import disease2 from '../Images/Influenja.jpeg';
import disease3 from '../Images/Coronavirus.webp';
import disease4 from '../Images/Zika.webp';
import disease5 from '../Images/Malaria.webp';
import disease6 from '../Images/Hepatitis.jpeg';
import disease7 from '../Images/Measles.jpg';
import disease8 from '../Images/Chickenpox.jpg';

const DiseaseCard = ({ frontPageClass, image, title, subtitle, shortDescription, linkTo }) => (
  <div className="card">
    <div className={frontPageClass} style={{ backgroundImage: `url(${image})` }}>
      <div className="card-info">
        <h2 className="card-title">{title}</h2>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
    <div className="back-page">
      <div className="card-content">
        <h3>{title}</h3>
        <p className="card-description">{shortDescription}</p>
        <NavLink to={linkTo} className="explore-more-btn">
          Explore More
        </NavLink>
      </div>
    </div>
  </div>
);

DiseaseCard.propTypes = {
  frontPageClass: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

const AddMoreCard = ({ onClick }) => (
  <div className="card add-more-card" onClick={onClick}>
    <div className="add-more-content">
      <div className="add-icon">+</div>
      <h3>Discover More</h3>
      <p>Click to explore additional diseases</p>
    </div>
  </div>
);

const ShowLessCard = ({ onClick }) => (
  <div className="card add-more-card" onClick={onClick}>
    <div className="add-more-content">
      <div className="add-icon">-</div>
      <h3>Show Less</h3>
      <p>Click to collapse extra diseases</p>
    </div>
  </div>
);

const Explorethree = () => {
  const [visibleCards, setVisibleCards] = useState(5);

  const diseaseCards = [
    {
      id: 1,
      frontPageClass: 'front-page-one',
      image: disease1,
      title: 'Dengue',
      subtitle: 'Mosquito-borne viral infection',
      shortDescription: 'Severe flu-like illness spread by mosquitoes.',
      linkTo: '/expo2'
    },
    {
      id: 2,
      frontPageClass: 'front-page-two',
      image: disease2,
      title: 'Influenza',
      subtitle: 'Seasonal flu virus',
      shortDescription: 'A contagious respiratory illness caused by influenza viruses.',
      linkTo: '/expo1'
    },
    {
      id: 3,
      frontPageClass: 'front-page-three',
      image: disease3,
      title: 'COVID-19',
      subtitle: 'Coronavirus disease',
      shortDescription: 'A respiratory illness caused by SARS-CoV-2.',
      linkTo: '/expo3'
    },
    {
      id: 4,
      frontPageClass: 'front-page-four',
      image: disease4,
      title: 'Zika',
      subtitle: 'Mosquito-borne virus',
      shortDescription: 'A virus that can cause birth defects.',
      linkTo: '/expo4'
    },
    {
      id: 5,
      frontPageClass: 'front-page-five',
      image: disease5,
      title: 'Malaria',
      subtitle: 'Life-threatening disease',
      shortDescription: 'Caused by parasites transmitted by mosquitoes.',
      linkTo: '/expo5'
    },
    {
      id: 6,
      frontPageClass: 'front-page-six',
      image: disease6,
      title: 'Hepatitis',
      subtitle: 'Liver infection',
      shortDescription: 'Inflammation of the liver caused by a virus.',
      linkTo: '/diseases/hepatitis'
    },
    {
      id: 7,
      frontPageClass: 'front-page-seven',
      image: disease7,
      title: 'Measles',
      subtitle: 'Highly contagious virus',
      shortDescription: 'Causes a red rash and fever.',
      linkTo: '/diseases/measles'
    },
    {
      id: 8,
      frontPageClass: 'front-page-eight',
      image: disease8,
      title: 'Chickenpox',
      subtitle: 'Varicella-zoster virus',
      shortDescription: 'Causes an itchy rash and fever.',
      linkTo: '/diseases/chickenpox'
    },
  ];

  const showMoreCards = () => {
    setVisibleCards(diseaseCards.length);
  };

  const showLessCards = () => {
    setVisibleCards(5);
  };

  const renderCards = () => {
    const cards = diseaseCards.slice(0, visibleCards).map(card => (
      <DiseaseCard
        key={card.id}
        frontPageClass={card.frontPageClass}
        image={card.image}
        title={card.title}
        subtitle={card.subtitle}
        shortDescription={card.shortDescription}
        linkTo={card.linkTo}
      />
    ));

    if (visibleCards < diseaseCards.length) {
      cards.splice(5, 0, <AddMoreCard key="add-more" onClick={showMoreCards} />);
    } else if (visibleCards === diseaseCards.length) {
      cards.push(<ShowLessCard key="show-less" onClick={showLessCards} />);
    }

    return cards;
  };

  return (
    <div className="wrapper-cards">
      <h1>Explore More About Common Viral Diseases</h1>
      <div className="Card-wrapper-explore">{renderCards()}</div>
    </div>
  );
};

export default Explorethree;
