import { useEffect, useCallback, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Homeone.css';
import { NavLink } from 'react-router-dom';

export default function Homeone() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const diseases = ["Flu", "Diabetes", "Hypertension", "Anxiety"];
  let diseaseIndex = 0;

  useEffect(() => {
    function cycleAnimation() {
      const searchBar = document.getElementById("search-bar");
      const loading = document.getElementById("computer-loading");
      const videoList = document.getElementById("computer-videos");
      const videos = document.querySelectorAll(".video-item");

      if (!searchBar || !loading || !videoList) return;

      searchBar.placeholder = diseases[diseaseIndex];
      diseaseIndex = (diseaseIndex + 1) % diseases.length;

      loading.style.display = "flex";
      videoList.style.display = "none";

      setTimeout(() => {
        loading.style.display = "none";
        videoList.style.display = "flex";

        videos.forEach((video, index) => {
          setTimeout(() => {
            video.style.opacity = "1";
          }, index * 750);
        });

        setTimeout(() => {
          videos.forEach(video => video.style.opacity = "0");
          cycleAnimation();
        }, 3000);
      }, 2000);
    }

    cycleAnimation();
  }, []);

  const [videoCount, setVideoCount] = useState(0);
const maxVideos = 10;

// Use a ref to track mounted state
const isMountedRef = useRef(true);

// Add keyframe animation for spinner
useEffect(() => {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes slideInFromLeft {
      0% { transform: translateX(-120%); }
      100% { transform: translateX(0); }
    }
    
    @keyframes slideInFromRight {
      0% { transform: translateX(120%); }
      100% { transform: translateX(0); }
    }
    
    @keyframes slideOutToLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-120%); }
    }
    
    @keyframes slideOutToRight {
      0% { transform: translateX(0); }
      100% { transform: translateX(120%); }
    }
    
    .mobile-video {
      position: absolute;
      width: 80%;
      height: 30px;
      left: 10%;
      background-color: #f5f5f5;
      border-radius: 4px;
      padding: 5px;
      text-align: center;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 5;
    }
    
    .loading-spinner {
      width: 15px;
      height: 15px;
      border: 2px solid #f3f3f3;
      border-top: 2px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto;
    }
  `;
  document.head.appendChild(styleSheet);
  
  return () => {
    if (styleSheet.parentNode) {
      styleSheet.parentNode.removeChild(styleSheet);
    }
  };
}, []);

// Set mounted ref to false on unmount
useEffect(() => {
  return () => {
    isMountedRef.current = false;
  };
}, []);

// Mobile video animation
useEffect(() => {
  const mobile = document.getElementById("mobile");
  if (!mobile) return;
  
  // Clear any existing videos
  const existingVideos = mobile.querySelectorAll('.mobile-video');
  existingVideos.forEach(video => video.remove());
  
  // Function to create a single video
  const createSingleVideo = (index) => {
    if (!isMountedRef.current) return;
    
    const video = document.createElement("div");
    video.className = "mobile-video";
    video.textContent = `Video ${(index % maxVideos) + 1}`;
    video.style.bottom = `${20 + (index % 4) * 40}px`;
    
    const direction = index % 2 === 0 ? "Right" : "Left";
    video.style.animation = `slideInFrom${direction} 0.5s forwards`;
    
    mobile.appendChild(video);
    
    // Change to spinner after delay
    setTimeout(() => {
      if (!video.isConnected || !isMountedRef.current) return;
      
      video.textContent = "";
      const spinner = document.createElement("div");
      spinner.className = "loading-spinner";
      video.appendChild(spinner);
    }, 1500);
    
    // Slide out after delay
    setTimeout(() => {
      if (!video.isConnected || !isMountedRef.current) return;
      
      video.style.animation = `slideOutTo${direction} 0.5s forwards`;
      
      // Remove from DOM after animation
      setTimeout(() => {
        if (video.isConnected) {
          video.remove();
        }
      }, 500);
    }, 3000);
  };
  
  // Create initial videos with staggered timing
  for (let i = 0; i < 4; i++) {
    setTimeout(() => createSingleVideo(i), i * 500);
  }
  
  // Create new videos periodically
  let currentIndex = 4;
  const intervalId = setInterval(() => {
    if (!isMountedRef.current) return;
    createSingleVideo(currentIndex);
    currentIndex++;
  }, 2000);
  
  return () => {
    clearInterval(intervalId);
  };
}, [maxVideos]);


  const handleGetStarted = () => {
    // Use Redux state instead of localStorage
    if (isLoggedIn) {
      navigate("/Remedies");
    } else {
      navigate("/SignUp");
    }
  };

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
          <button className='btn-getstrt' onClick={handleGetStarted}>Get Started</button>
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
            {/* <div className="devicetwo">
              <div className="mobile" id="mobile"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
