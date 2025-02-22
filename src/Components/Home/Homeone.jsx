import { useEffect, useCallback, useState } from 'react';
import './Homeone.css';
import { NavLink } from 'react-router-dom';

export default function Homeone() {
  const diseases = ["Flu", "Diabetes", "Hypertension", "Anxiety"];
  let diseaseIndex = 0;

  useEffect(() => {
    function cycleAnimation() {
      const searchBar = document.getElementById("search-bar");
      const loading = document.getElementById("computer-loading");
      const videoList = document.getElementById("computer-videos");
      const videos = document.querySelectorAll(".video-item");

      if (!searchBar || !loading || !videoList) return;

      // Update search bar with disease name
      searchBar.placeholder = diseases[diseaseIndex];
      diseaseIndex = (diseaseIndex + 1) % diseases.length;

      // Show loading spinner
      loading.style.display = "flex";
      videoList.style.display = "none";

      setTimeout(() => {
        // Show video list after loading
        loading.style.display = "none";
        videoList.style.display = "flex";

        // Show videos one by one
        videos.forEach((video, index) => {
          setTimeout(() => {
            video.style.opacity = "1";
          }, index * 750);
        });

        setTimeout(() => {
          // Hide all videos before next cycle
          videos.forEach(video => video.style.opacity = "0");
          cycleAnimation();
        }, 3000);
      }, 2000);
    }

    cycleAnimation();
  }, []);

  const [videoCount, setVideoCount] = useState(0);
  const maxVideos = 10;

  const createVideo = useCallback((index) => {
    const mobile = document.getElementById("mobile");
    if (!mobile) return;
  
    const video = document.createElement("div");
    video.classList.add("video");
    video.innerText = `Video ${(index % maxVideos) + 1}`;
    video.style.bottom = `${index * 40}px`;
    video.style.width = '80%';
    video.style.height = '30px';
    video.style.left = '10%';
    
    // Determine direction based on index
    const direction = index % 2 === 0 ? "right" : "left";
    
    // Set initial position
    video.style.transform = `translateX(${direction === "left" ? "-120%" : "120%"})`;
    
    mobile.appendChild(video);
  
    // Add animation
    video.style.animation = `slideIn${direction === "left" ? "Left" : "Right"} 3s ease-in-out`;
  
    const spinnerTimeout = setTimeout(() => {
      video.innerText = "";
      const spinner = document.createElement("div");
      spinner.classList.add("loading-spinner");
      video.appendChild(spinner);
    }, 2000);
  
    const removeTimeout = setTimeout(() => {
      if (video.parentNode) {
        video.parentNode.removeChild(video);
      }
    }, 4000);
  
    return () => {
      clearTimeout(spinnerTimeout);
      clearTimeout(removeTimeout);
    };
  }, [maxVideos]);
  
  // Update the startSequence function
  const startSequence = useCallback(() => {
    createVideo(videoCount);
    setVideoCount((prevCount) => (prevCount + 1) % maxVideos);
  }, [createVideo, videoCount, maxVideos]);
  

  useEffect(() => {
    const intervalId = setInterval(startSequence, 2000);
    return () => clearInterval(intervalId);
  }, [startSequence]);

  return (
    <div className="home-one">
      <div className="home-one-con">
        <div className="left-con">
          <h1 className="title">Discover Your Cure:</h1>
          <p className="description">
            MediTrack is your go-to platform for discovering health-related videos tailored to your needs.
            Simply enter your condition, and we will provide curated YouTube videos offering valuable insights,
            solutions, and expert guidance. Whether you're looking for natural remedies, medical treatments, or expert opinions,
            MediTrack has you covered.
          </p>
          <NavLink to="/Remedies"><button className='btn-getstrt'>Get Started</button></NavLink>
        </div>
        <div className="right-con">
          <div className="right-con1">
            <div className="deviceone">
              <div className="deviceone-container">
                <input type="text" id="search-bar" className="search-bar" placeholder="Search..." />
              <div id="computer-loading" className="loading">
                <div className="video-loader"></div>
              </div>
              <div id="computer-videos" className="video-list">
                <div className="video-item">Video1</div>
                <div className="video-item">Video2</div>
                <div className="video-item">Video3</div>
              </div>
              </div>
            </div>
            <div className="devicetwo">
              <div className="mobile" id="mobile"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

