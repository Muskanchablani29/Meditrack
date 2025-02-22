import React, { useEffect, useState } from 'react';
import './Homeanimationone.css';

const TypingAnimation = () => {
    const keyboardLayout = [
        ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Del"],
        ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
        ["Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
        ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
        ["Ctrl", "Win", "Alt", " ", "Alt", "Fn", "Ctrl"]
    ];

    const diseaseNames = [
        "Malaria",
        "Dengue Fever",
        "Influenza",
        "Common Cold",
        "Pneumonia",
        "Chickenpox",
        "Measles",
        "Typhoid Fever",
        "Tuberculosis",
        "Cholera"
    ];

    const [diseaseIndex, setDiseaseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [typingActive, setTypingActive] = useState(true);

    useEffect(() => {
        if (typingActive) {
            if (charIndex < diseaseNames[diseaseIndex].length) {
                const timeout = setTimeout(() => {
                    setSearchText(prev => prev + diseaseNames[diseaseIndex][charIndex]);
                    setCharIndex(prev => prev + 1);
                }, 250);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setCharIndex(0);
                    setDiseaseIndex((prev) => (prev + 1) % diseaseNames.length);
                    setSearchText("");
                }, 2000);
                return () => clearTimeout(timeout);
            }
        }
    }, [charIndex, typingActive, diseaseIndex]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setTypingActive(true);
            setSearchText("");
            setCharIndex(0);
            setDiseaseIndex((prev) => (prev + 1) % diseaseNames.length);
            return;
        }

        setTypingActive(false);

        if (event.key === "Backspace") {
            setSearchText((prev) => prev.slice(0, -1));
        } else if (event.key.length === 1) {
            setSearchText((prev) => prev + event.key);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (

        <div className="key-animation">
            <input
                type="text"
                value={searchText}
                readOnly
                className="search-bar"
            />
            <div className="keyboard">
                {keyboardLayout.flat().map((key, idx) => (
                    <div key={idx} className="key">
                        {key}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TypingAnimation;