import lady1 from './Images/Lady1.jpeg'
import lady2 from './Images/lady2.jpeg'
import lady3 from './Images/lady4.avif'
import lady4 from './Images/lady3.jpeg'
import lady5 from './Images/lady6.jpeg'
import lady6 from './Images/lady5.avif'
import man1 from './Images/man1.jpeg'
import man2 from './Images/man2.jpeg'
import man3 from './Images/man3.jpeg'
import man4 from './Images/man4.avif'
import man5 from './Images/man5.jpeg'
import man6 from './Images/man6.jpeg'
export const diseaseData = {
    "diabetes": {
      doctors: [
        { name: 'Dr. John Doe', specialty: 'Endocrinologist', image: man1, rating: 5, experience: '15 years', hospital: 'Mayo Clinic', contact: '+1-555-123-4567' },
        { name: 'Dr. Jane Smith', specialty: 'Diabetes Specialist', image: man2, rating: 4, experience: '12 years', hospital: 'Cleveland Clinic', contact: '+1-555-987-6543' },
        { name: 'Dr. Robert Johnson', specialty: 'Endocrinologist', image: man3, rating: 5, experience: '20 years', hospital: 'Johns Hopkins Hospital', contact: '+1-555-456-7890' }
      ],
      remedies: [
        { 
          title: 'Monitor blood sugar levels regularly',
          description: 'Check your blood glucose levels at least 2-4 times daily using a glucose meter to maintain optimal control.',
          difficulty: 'Easy',
          effectiveness: 'High'
        },
        { 
          title: 'Include fiber-rich foods in your diet',
          description: 'Foods high in fiber like beans, fruits, vegetables, and whole grains help regulate blood sugar levels.',
          difficulty: 'Medium',
          effectiveness: 'High'
        },
        { 
          title: 'Exercise daily',
          description: 'Aim for at least 30 minutes of moderate physical activity most days to improve insulin sensitivity.',
          difficulty: 'Medium',
          effectiveness: 'High'
        },
        { 
          title: 'Avoid sugary drinks',
          description: 'Replace sodas and sweetened beverages with water, unsweetened tea, or other sugar-free options.',
          difficulty: 'Medium',
          effectiveness: 'High'
        },
        { 
          title: 'Cinnamon supplementation',
          description: 'Some studies suggest 1-6 grams of cinnamon daily may help improve insulin sensitivity.',
          difficulty: 'Easy',
          effectiveness: 'Medium'
        },
        { 
          title: 'Apple cider vinegar',
          description: 'Taking 1-2 tablespoons before meals may improve insulin sensitivity and lower blood sugar responses.',
          difficulty: 'Easy',
          effectiveness: 'Medium'
        }
      ],
      videos: [ 
        { title: 'Managing Diabetes Naturally', embedUrl: 'https://www.youtube.com/embed/fB4uhCZe1cc', duration: 420, ageGroup: 'adults' }, // 7 min
        { title: 'Diabetes Meal Plan Tips', embedUrl: 'https://www.youtube.com/embed/wvMJAY8EVwE', duration: 315, ageGroup: 'adults' }, // 5:15 min
        { title: 'Diabetes Symptoms and Treatment', embedUrl: 'https://www.youtube.com/embed/wNnw9Luiv2M', duration: 600, ageGroup: 'adults' }, // 10 min
        { title: 'Diabetes Diet and Exercise', embedUrl: 'https://www.youtube.com/embed/HDmPmgarS5Q', duration: 180, ageGroup: 'seniors' }, // 3 min
        { title: 'Diabetes Prevention and Management', embedUrl: 'https://www.youtube.com/embed/hbLdXC3wHGE', duration: 540, ageGroup: 'adults' }, // 9 min
        { title: 'Diabetes in Children', embedUrl: 'https://www.youtube.com/embed/jkIGYALUQbw', duration: 240, ageGroup: 'children' }, // 4 min
        { title: 'Teen Diabetes Management', embedUrl: 'https://www.youtube.com/embed/DeT135wW1dI', duration: 360, ageGroup: 'teens' }, // 6 min
      ],
      overview: "Diabetes is a chronic condition that affects how your body turns food into energy. Most of the food you eat is broken down into sugar (glucose) and released into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin, which acts like a key to let the blood sugar into your body's cells for use as energy."
    },
    "hypertension": {
      doctors: [
        { name: 'Dr. Emily Johnson', specialty: 'Cardiologist', image: lady1, rating: 4, experience: '10 years', hospital: 'Cleveland Clinic', contact: '+1-555-222-3333' },
        { name: 'Dr. Michael Brown', specialty: 'Blood Pressure Expert', image: man4, rating: 5, experience: '18 years', hospital: 'Mount Sinai Hospital', contact: '+1-555-444-5555' },
        { name: 'Dr. Sarah Williams', specialty: 'Nephrologist', image: lady2, rating: 4, experience: '14 years', hospital: 'Massachusetts General Hospital', contact: '+1-555-666-7777' }
      ],
      remedies: [
        { 
          title: 'Reduce salt intake',
          description: 'Limit sodium to less than 2,300 mg per day, ideally aiming for less than 1,500 mg for most adults.',
          difficulty: 'Medium',
          effectiveness: 'High'
        },
        { 
          title: 'Stay physically active',
          description: 'Aim for at least 150 minutes of moderate-intensity exercise per week to help lower blood pressure.',
          difficulty: 'Medium',
          effectiveness: 'High'
        },
        { 
          title: 'Practice stress management',
          description: 'Regular meditation, deep breathing exercises, or yoga can help reduce stress and lower blood pressure.',
          difficulty: 'Easy',
          effectiveness: 'Medium'
        },
        { 
          title: 'Increase potassium intake',
          description: 'Consume potassium-rich foods like bananas, potatoes, avocados, and leafy greens to help balance sodium levels.',
          difficulty: 'Easy',
          effectiveness: 'Medium'
        },
        { 
          title: 'DASH diet',
          description: 'Follow the Dietary Approaches to Stop Hypertension (DASH) diet, which emphasizes fruits, vegetables, whole grains, and lean proteins.',
          difficulty: 'Medium',
          effectiveness: 'High'
        },
        { 
          title: 'Limit alcohol consumption',
          description: 'Restrict alcohol to moderate levels - up to one drink per day for women and up to two for men.',
          difficulty: 'Medium',
          effectiveness: 'Medium'
        }
      ],
      videos: [
        { title: 'Hypertension Guide', embedUrl: 'https://www.youtube.com/embed/sNCtvsY3TS8', duration: 480, ageGroup: 'adults' },
        { title: 'Lower Blood Pressure Exercises', embedUrl: 'https://www.youtube.com/embed/EsVLl_bEcXw', duration: 360, ageGroup: 'seniors' },
        { title: 'Hypertension Diet Tips', embedUrl: 'https://www.youtube.com/embed/tEBoMcsAUnc', duration: 420, ageGroup: 'adults' },
        { title: 'Managing Hypertension in Teens', embedUrl: 'https://www.youtube.com/embed/4S61thaFehA', duration: 300, ageGroup: 'teens' },
        { title: 'Hypertension Prevention', embedUrl: 'https://www.youtube.com/embed/agFV4oKlIHY', duration: 540, ageGroup: 'adults' }
      ],
      overview: "Hypertension, or high blood pressure, is a common condition where the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease. Blood pressure is determined by the amount of blood your heart pumps and the amount of resistance to blood flow in your arteries."
    },  
    "tuberculosis": {
      doctors: [
        { 
          name: "Dr. Rajesh Kumar", 
          specialty: "Pulmonologist", 
          image: man5, 
          rating: 5, 
          experience: "15 years", 
          hospital: "AIIMS, New Delhi", 
          contact: "+91-555-111-2222" 
        },
        { 
          name: "Dr. Anjali Mehta", 
          specialty: "Infectious Disease Specialist", 
          image: lady2, 
          rating: 4, 
          experience: "12 years", 
          hospital: "Apollo Hospitals, Chennai", 
          contact: "+91-555-333-4444" 
        },
        { 
          name: "Dr. Vikram Singh", 
          specialty: "Respiratory Medicine", 
          image: man6, 
          rating: 4, 
          experience: "10 years", 
          hospital: "Fortis Hospital, Mumbai", 
          contact: "+91-555-555-6666" 
        }
      ],
      remedies: [
        { 
          title: "Complete the full course of antibiotics",
          description: "Ensure you take the full course of prescribed antibiotics to effectively treat TB and prevent drug resistance.",
          difficulty: "Medium",
          effectiveness: "High"
        },
        { 
          title: "Maintain good nutrition",
          description: "Consume a balanced diet rich in vitamins and minerals to support your immune system during treatment.",
          difficulty: "Easy",
          effectiveness: "Medium"
        },
        { 
          title: "Avoid tobacco and alcohol",
          description: "Refrain from smoking and drinking alcohol as they can weaken your immune system and hinder recovery.",
          difficulty: "Medium",
          effectiveness: "High"
        },
        { 
          title: "Practice good hygiene",
          description: "Cover your mouth when coughing or sneezing and wash your hands regularly to prevent the spread of TB.",
          difficulty: "Easy",
          effectiveness: "High"
        },
        { 
          title: "Regular follow-up visits",
          description: "Attend all scheduled follow-up appointments with your healthcare provider to monitor your progress.",
          difficulty: "Medium",
          effectiveness: "High"
        }
      ],
      videos: [
        { 
          title: "Understanding Tuberculosis", 
          embedUrl: "https://www.youtube.com/embed/HJ09TJdRCPk", 
          duration: 600, 
          ageGroup: "adults" 
        },
        { 
          title: "TB Treatment and Management", 
          embedUrl: "https://www.youtube.com/embed/TmtvczBur5c", 
          duration: 480, 
          ageGroup: "adults" 
        },
        { 
          title: "Preventing Tuberculosis", 
          embedUrl: "https://www.youtube.com/embed/hAXnQgU4bsg", 
          duration: 540, 
          ageGroup: "adults" 
        },
        { 
          title: "Tuberculosis Remedy", 
          embedUrl: "https://www.youtube.com/embed/ByG2hNRq0C4", 
          duration: 420, 
          ageGroup: "adults" 
        },
        { 
          title: "TB Awareness for Teens", 
          embedUrl: "https://www.youtube.com/embed/6P6zBHpWiGA", 
          duration: 360, 
          ageGroup: "teens" 
        }
      ],
      overview: "Tuberculosis (TB) is an infectious disease caused by bacteria that most often affects the lungs. It spreads through the air when people with TB cough, sneeze, or spit. TB is preventable and curable. Symptoms include a prolonged cough, chest pain, weakness, fatigue, weight loss, fever, and night sweats. Treatment typically involves a long course of antibiotics."
    },
    "hepatitis": {
      doctors: [
        { 
          name: "Dr. Priya Sharma", 
          specialty: "Hepatologist", 
          image: lady3, 
          rating: 5, 
          experience: "20 years", 
          hospital: "Medanta - The Medicity, Gurgaon", 
          contact: "+91-555-777-8888" 
        },
        { 
          name: "Dr. Sameer Patel", 
          specialty: "Gastroenterologist", 
          image: man4, 
          rating: 4, 
          experience: "16 years", 
          hospital: "Lilavati Hospital, Mumbai", 
          contact: "+91-555-999-0000" 
        },
        { 
          name: "Dr. Ananya Gupta", 
          specialty: "Infectious Disease Specialist", 
          image: lady6, 
          rating: 5, 
          experience: "12 years", 
          hospital: "Fortis Escorts Hospital, New Delhi", 
          contact: "+91-555-222-3333" 
        }
      ],
      remedies: [
        { 
          title: "Vaccination",
          description: "Get vaccinated against hepatitis A and B to prevent infection.",
          difficulty: "Easy",
          effectiveness: "High"
        },
        { 
          title: "Avoid alcohol consumption",
          description: "Limit or avoid alcohol to prevent further liver damage.",
          difficulty: "Medium",
          effectiveness: "High"
        },
        { 
          title: "Maintain a healthy diet",
          description: "Consume a balanced diet rich in fruits, vegetables, lean proteins, and whole grains to support liver health.",
          difficulty: "Easy",
          effectiveness: "Medium"
        },
        { 
          title: "Practice safe hygiene",
          description: "Wash hands thoroughly and avoid sharing personal items like razors and toothbrushes to prevent the spread of hepatitis.",
          difficulty: "Easy",
          effectiveness: "High"
        },
        { 
          title: "Regular medical check-ups",
          description: "Schedule regular check-ups with your healthcare provider to monitor liver function and overall health.",
          difficulty: "Medium",
          effectiveness: "High"
        }
      ],
      videos: [
        { 
          title: "Understanding Hepatitis", 
          embedUrl: "https://www.youtube.com/embed/vqQRWFyuJpY", 
          duration: 480, 
          ageGroup: "adults" 
        },
        { 
          title: "Hepatitis Prevention Tips", 
          embedUrl: "https://www.youtube.com/embed/AbTnc0p1F18", 
          duration: 360, 
          ageGroup: "adults" 
        },
        { 
          title: "Living with Hepatitis", 
          embedUrl: "https://www.youtube.com/embed/Awxacb8sYFI", 
          duration: 420, 
          ageGroup: "adults" 
        },
        { 
          title: "Hepatitis Awareness for Teens", 
          embedUrl: "https://www.youtube.com/embed/kUH_6ZH0UQY", 
          duration: 300, 
          ageGroup: "teens" 
        },
        { 
          title: "Hepatitis Treatment Options", 
          embedUrl: "https://www.youtube.com/embed/3FIUJHovRBw", 
          duration: 540, 
          ageGroup: "adults" 
        }
      ],
      overview: "Hepatitis is an inflammation of the liver, commonly caused by viral infections (hepatitis A, B, C, D, and E), excessive alcohol consumption, toxins, and certain medications. Symptoms can include fatigue, jaundice (yellowing of the skin and eyes), abdominal pain, and dark urine. Vaccines are available for hepatitis A and B, and treatment varies depending on the type and severity of the disease."
    },
    "malaria": {
      doctors: [
        { 
          name: "Dr. Amit Verma", 
          specialty: "Infectious Disease Specialist", 
          image: man4, 
          rating: 5, 
          experience: "18 years", 
          hospital: "Max Super Speciality Hospital, Delhi", 
          contact: "+91-555-888-9999" 
        },
        { 
          name: "Dr. Ritu Malhotra", 
          specialty: "Tropical Medicine Specialist", 
          image: lady6, 
          rating: 4, 
          experience: "12 years", 
          hospital: "Kokilaben Dhirubhai Ambani Hospital, Mumbai", 
          contact: "+91-555-111-2222" 
        },
        { 
          name: "Dr. Siddharth Gupta", 
          specialty: "Parasitologist", 
          image: man5, 
          rating: 4, 
          experience: "15 years", 
          hospital: "Manipal Hospitals, Bangalore", 
          contact: "+91-555-333-4444" 
        }
      ],
      remedies: [
        { 
          title: "Antimalarial Medications",
          description: "Take prescribed antimalarial drugs such as chloroquine or artemisinin-based combination therapies (ACTs) to treat and prevent malaria.",
          difficulty: "Medium",
          effectiveness: "High"
        },
        { 
          title: "Insect Repellents",
          description: "Use insect repellents containing DEET, picaridin, or oil of lemon eucalyptus to prevent mosquito bites.",
          difficulty: "Easy",
          effectiveness: "Medium"
        },
        { 
          title: "Mosquito Nets",
          description: "Sleep under insecticide-treated mosquito nets to reduce the risk of mosquito bites while sleeping.",
          difficulty: "Easy",
          effectiveness: "High"
        },
        { 
          title: "Wear Protective Clothing",
          description: "Wear long-sleeved shirts and long pants to reduce exposure to mosquito bites, especially during peak mosquito activity times.",
          difficulty: "Medium",
          effectiveness: "Medium"
        },
        { 
          title: "Environmental Control",
          description: "Eliminate standing water around living areas to reduce mosquito breeding sites.",
          difficulty: "Medium",
          effectiveness: "High"
        }
      ],
      videos: [
        { 
          title: "Understanding Malaria", 
          embedUrl: "https://www.youtube.com/embed/tQ1FkG1Si3w", 
          duration: 600, 
          ageGroup: "adults" 
        },
        { 
          title: "Malaria Prevention Tips", 
          embedUrl: "https://www.youtube.com/embed/qw6jnFqZ-Hk", 
          duration: 480, 
          ageGroup: "adults" 
        },
        { 
          title: "Living with Malaria", 
          embedUrl: "https://www.youtube.com/embed/pXs2Gj2spMo", 
          duration: 540, 
          ageGroup: "adults" 
        },
        { 
          title: "Malaria Awareness for Children", 
          embedUrl: "https://www.youtube.com/embed/RdwLPPiRSRA", 
          duration: 420, 
          ageGroup: "children" 
        },
        { 
          title: "Malaria Treatment Options", 
          embedUrl: "https://www.youtube.com/embed/H8IRmyzxrEY", 
          duration: 480, 
          ageGroup: "adults" 
        }
      ],
      overview: "Malaria is a life-threatening disease caused by Plasmodium parasites, which are transmitted to humans through the bites of infected female Anopheles mosquitoes. Symptoms include fever, chills, headache, muscle pain, and fatigue. Severe cases can lead to complications such as organ failure or death. Prevention involves avoiding mosquito bites and taking antimalarial medications, while treatment includes specific antimalarial drugs."
    },
    "Dengue":{
      doctors: [
        { name: 'Dr. Emily Johnson', specialty: 'Cardiologist', image: lady4, rating: 4, experience: '8 years', hospital: 'General Hospital', contact: '+1-555-123-4567' },
        { name: 'Dr. Michael Brown', specialty: 'Blood Pressure Expert', image: man5, rating: 5, experience: '12 years', hospital: 'City Medical Center', contact: '+1-555-987-6543' }
      ],
      remedies: [
        {
          title: 'Rest and hydration',
          description: 'Get plenty of rest and drink plenty of water to help your body fight the infection.',
          difficulty: 'Easy',
          effectiveness: 'High'
        }
        ,
        {
          title: 'Stay hydrated',
          description: 'Drink plenty of water throughout the day to stay hydrated.',
          difficulty: 'Easy',
          effectiveness: 'High'
        },
        {
          title: 'Wash your hands frequently',
          description: 'Wash your hands thoroughly with soap and water or use hand sanitizer.',
          difficulty: 'Easy',
          effectiveness: 'High'
        },
        {
          title: 'Avoid close contact with sick individuals',
          description: 'Avoid close contact with sick individuals to reduce the risk of dengue transmission.',
          difficulty: 'Medium',
          effectiveness: 'High'
        },
        {
          title: 'Practice good hygiene',
          description: 'Cover your mouth when coughing or sneezing and wash your hands regularly.',
          difficulty: 'Easy',
          effectiveness: 'High'
        }
      ],
      videos: [
        { title: 'Dengue Fever Guide', embedUrl: '', duration: 360, ageGroup: 'adults' },
        { title: 'Dengue Remedy', embedUrl: '', duration: 420, ageGroup: 'adults' },
        { title: 'Dengue Prevention', embedUrl: '', duration: 480, ageGroup: 'seniors' },
        { title: 'Dengue Awareness', embedUrl: '', duration: 300, ageGroup: 'children' },
        { title: 'Dengue Treatment', embedUrl: '', duration: 540, ageGroup: 'adults' }
      ],
      overview: "Dengue fever is a viral infection caused by dengue virus. It spreads through the air when an infected person coughs, sneezes, or talks. Dengue fever is preventable and curable. Symptoms include high fever, headache, muscle and joint pain, nausea, vomiting, and diarrhea. Treatment typically involves rest, fluids, and antibiotics."
    },
    "Typhoid": {
      doctors: [
        { name: 'Dr. Emily Johnson', specialty: 'Cardiologist', image: lady4, rating: 4, experience: '8 years', hospital: 'General Hospital', contact: '+1-555-123-4567'},
        { name: 'Dr. Michael Brown', specialty: 'Blood Pressure Expert', image: man5, rating: 5, experience: '12 years', hospital: 'City Medical Center', contact: '+00000000000000' }
        ],
      remedies: [
        {
          title: 'Rest and hydration',
          description: 'Get plenty of rest and drink plenty of water to help your body fight the infection.',
          difficulty: 'Easy',
          effectiveness: 'High'
        },
        {
          title: 'Stay hydrated',
          description: 'Drink plenty of water throughout the day to stay hydrated.',
          difficulty: 'Easy',
          effectiveness: 'High'
        },
        {
          title: 'Wash your hands frequently',
          description: 'Wash your hands thoroughly with soap and water or use hand sanitizer.',
          difficulty: 'Easy',
          effectiveness: 'High'
        },
        {
          title: 'Avoid close contact with sick individuals',
          description: 'Avoid close contact with sick individuals to reduce the risk of typhoid fever transmission.',
          difficulty: 'Medium',
          effectiveness: 'High'
        },
        {
          title: 'Practice good hygiene',
          description: 'Cover your mouth when coughing or sneezing and wash your hands regularly.',
          difficulty: 'Easy',
          effectiveness: 'High'
        }
      ],
      videos: [
        { title: 'Typhoid Fever Guide', embedUrl: '', duration: 360, ageGroup: 'adults' },
        { title: 'Typhoid Remedy', embedUrl: '', duration: 420, ageGroup: 'adults' },
        { title: 'Typhoid Prevention', embedUrl: '', duration: 480, ageGroup: 'seniors' },
        { title: 'Typhoid Awareness', embedUrl: '', duration: 300, ageGroup: 'children' },
        { title: 'Typhoid Treatment', embedUrl: '', duration: 540, ageGroup: 'adults' }
      ]
    },
    "cold_and_cough": {
  "doctors": [
    { 
      "name": "Dr. Neha Sharma", 
      "specialty": "Pulmonologist", 
      "image": "lady1", 
      "rating": 5, 
      "experience": "10 years", 
      "hospital": "Fortis Hospital, Delhi", 
      "contact": "+91-555-777-8888" 
    },
    { 
      "name": "Dr. Rajesh Kapoor", 
      "specialty": "General Physician", 
      "image": "man2", 
      "rating": 4, 
      "experience": "15 years", 
      "hospital": "Apollo Hospitals, Mumbai", 
      "contact": "+91-555-444-6666" 
    },
    { 
      "name": "Dr. Priya Nair", 
      "specialty": "ENT Specialist", 
      "image": "lady3", 
      "rating": 4, 
      "experience": "12 years", 
      "hospital": "Aster CMI Hospital, Bangalore", 
      "contact": "+91-555-222-3333" 
    }
  ],
  "remedies": [
    { 
      "title": "Steam Inhalation",
      "description": "Inhale steam from a bowl of hot water to relieve nasal congestion and soothe the throat.",
      "difficulty": "Easy",
      "effectiveness": "High"
    },
    { 
      "title": "Honey and Warm Water",
      "description": "Mix a teaspoon of honey in warm water or tea to soothe a sore throat and suppress coughing.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    },
    { 
      "title": "Saltwater Gargle",
      "description": "Gargle with warm salt water to reduce throat irritation and kill bacteria.",
      "difficulty": "Easy",
      "effectiveness": "High"
    },
    { 
      "title": "Herbal Teas",
      "description": "Drink teas made with ginger, tulsi, or chamomile to reduce inflammation and boost immunity.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    },
    { 
      "title": "Stay Hydrated",
      "description": "Drink plenty of fluids like water, soups, and juices to stay hydrated and thin mucus.",
      "difficulty": "Easy",
      "effectiveness": "High"
    }
  ],
  "videos": [
    { 
      "title": "Understanding Cold and Cough", 
      "embedUrl": "https://www.youtube.com/embed/example1", 
      "duration": 600, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Home Remedies for Cough", 
      "embedUrl": "https://www.youtube.com/embed/example2", 
      "duration": 480, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Cold Prevention Tips", 
      "embedUrl": "https://www.youtube.com/embed/example3", 
      "duration": 540, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Cough Awareness for Children", 
      "embedUrl": "https://www.youtube.com/embed/example4", 
      "duration": 420, 
      "ageGroup": "children" 
    },
    { 
      "title": "Treating Cold and Cough", 
      "embedUrl": "https://www.youtube.com/embed/example5", 
      "duration": 480, 
      "ageGroup": "adults" 
    }
  ],
  "overview": "Cold and cough are common respiratory conditions caused by viral infections. Symptoms include a runny nose, sore throat, coughing, sneezing, and mild fever. While there is no cure, symptoms can be managed with home remedies, hydration, and over-the-counter medications. Preventive measures include maintaining hygiene, avoiding close contact with infected individuals, and boosting immunity through a healthy diet."
},
"migraine": {
  "doctors": [
    { 
      "name": "Dr. Anjali Mehta", 
      "specialty": "Neurologist", 
      "image": "lady7", 
      "rating": 5, 
      "experience": "20 years", 
      "hospital": "AIIMS, Delhi", 
      "contact": "+91-555-999-8888" 
    },
    { 
      "name": "Dr. Karan Malhotra", 
      "specialty": "Headache Specialist", 
      "image": "man8", 
      "rating": 4, 
      "experience": "15 years", 
      "hospital": "Narayana Health, Bangalore", 
      "contact": "+91-555-666-7777" 
    },
    { 
      "name": "Dr. Priya Desai", 
      "specialty": "Pain Management Specialist", 
      "image": "lady9", 
      "rating": 4, 
      "experience": "12 years", 
      "hospital": "Kokilaben Dhirubhai Ambani Hospital, Mumbai", 
      "contact": "+91-555-444-5555" 
    }
  ],
  "remedies": [
    { 
      "title": "Stress Management",
      "description": "Practice relaxation techniques like yoga, meditation, or deep breathing to reduce stress, a common migraine trigger.",
      "difficulty": "Medium",
      "effectiveness": "High"
    },
    { 
      "title": "Cold Compress",
      "description": "Apply a cold compress or ice pack to the forehead to numb the pain and reduce inflammation.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    },
    { 
      "title": "Hydration",
      "description": "Drink plenty of water to stay hydrated, as dehydration can trigger migraines.",
      "difficulty": "Easy",
      "effectiveness": "High"
    },
    { 
      "title": "Caffeine",
      "description": "Consume a small amount of caffeine, which can help alleviate migraine pain in its early stages.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    },
    { 
      "title": "Regular Sleep Schedule",
      "description": "Maintain a consistent sleep routine to prevent migraines caused by irregular sleep patterns.",
      "difficulty": "Medium",
      "effectiveness": "High"
    }
  ],
  "videos": [
    { 
      "title": "Understanding Migraines", 
      "embedUrl": "https://www.youtube.com/embed/example1", 
      "duration": 600, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Migraine Triggers and Prevention", 
      "embedUrl": "https://www.youtube.com/embed/example2", 
      "duration": 480, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Managing Migraine Pain", 
      "embedUrl": "https://www.youtube.com/embed/example3", 
      "duration": 540, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Migraine Awareness for Children", 
      "embedUrl": "https://www.youtube.com/embed/example4", 
      "duration": 420, 
      "ageGroup": "children" 
    },
    { 
      "title": "Treatment Options for Migraines", 
      "embedUrl": "https://www.youtube.com/embed/example5", 
      "duration": 480, 
      "ageGroup": "adults" 
    }
  ],
  "overview": "Migraine is a neurological condition characterized by intense, throbbing headaches often accompanied by nausea, sensitivity to light and sound, and visual disturbances. Triggers include stress, hormonal changes, certain foods, and irregular sleep patterns. While there is no cure, migraines can be managed through lifestyle changes, medications, and preventive measures."
},
  "cancer": {
  "doctors": [
    { 
      "name": "Dr. Sunita Reddy", 
      "specialty": "Medical Oncologist", 
      "image": "lady12", 
      "rating": 5, 
      "experience": "22 years", 
      "hospital": "Max Super Speciality Hospital, Delhi", 
      "contact": "+91-555-777-8888" 
    },
    { 
      "name": "Dr. Vijay Kumar", 
      "specialty": "Hematologist-Oncologist", 
      "image": "man13", 
      "rating": 5, 
      "experience": "18 years", 
      "hospital": "Fortis Hospital, Bangalore", 
      "contact": "+91-555-999-6666" 
    },
    { 
      "name": "Dr. Anusha Iyer", 
      "specialty": "Pediatric Oncologist", 
      "image": "lady13", 
      "rating": 4, 
      "experience": "15 years", 
      "hospital": "Apollo Hospitals, Chennai", 
      "contact": "+91-555-555-4444" 
    },
    { 
      "name": "Dr. Ravi Tandon", 
      "specialty": "Surgical Oncologist", 
      "image": "man14", 
      "rating": 4, 
      "experience": "20 years", 
      "hospital": "Kokilaben Dhirubhai Ambani Hospital, Mumbai", 
      "contact": "+91-555-222-1111" 
    }
  ],
  "remedies": [
    { 
      "title": "Green Tea",
      "description": "Rich in antioxidants, drinking green tea may help fight free radicals and support overall immunity.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    },
    { 
      "title": "Ginger Tea",
      "description": "Ginger helps alleviate nausea often caused by chemotherapy and boosts digestion.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    },
    { 
      "title": "Exercise and Yoga",
      "description": "Moderate physical activity or yoga can reduce fatigue and improve emotional well-being.",
      "difficulty": "Medium",
      "effectiveness": "High"
    },
    { 
      "title": "Turmeric",
      "description": "Include turmeric in your diet, as it contains curcumin, which has anti-inflammatory properties.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    },
    { 
      "title": "Fresh Fruits and Vegetables",
      "description": "Consume a diet rich in fruits and vegetables for essential nutrients that strengthen the immune system.",
      "difficulty": "Easy",
      "effectiveness": "High"
    },
    { 
      "title": "Vitamin D",
      "description": "Spend time in sunlight or take supplements to maintain healthy levels of Vitamin D, which supports cell regulation.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    }
  ],
  "videos": [
    { 
      "title": "How to Support a Loved One with Cancer", 
      "embedUrl": "https://www.youtube.com/embed/example6", 
      "duration": 600, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Nutritional Tips for Cancer Patients", 
      "embedUrl": "https://www.youtube.com/embed/example7", 
      "duration": 480, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Introduction to Palliative Care", 
      "embedUrl": "https://www.youtube.com/embed/example8", 
      "duration": 540, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Children’s Guide to Understanding Cancer", 
      "embedUrl": "https://www.youtube.com/embed/example9", 
      "duration": 480, 
      "ageGroup": "children" 
    },
    { 
      "title": "Success Stories of Cancer Survivors", 
      "embedUrl": "https://www.youtube.com/embed/example10", 
      "duration": 600, 
      "ageGroup": "adults" 
    }
  ],
  "overview": "Cancer is a diverse group of diseases characterized by abnormal cell growth that can invade or spread to other parts of the body. Common treatments include surgery, chemotherapy, and radiation. Emerging therapies, like immunotherapy and precision medicine, offer promising advancements. Early detection and preventive measures, including screenings and lifestyle adjustments, play a vital role in managing the disease effectively.",
  "additional_content": {
    "prevention_strategies": [
      "Eat a balanced, low-sugar diet.",
      "Avoid exposure to harmful chemicals and toxins.",
      "Stay physically active and maintain a healthy weight.",
      "Undergo regular medical check-ups and cancer screenings."
    ],
    "recent_advancements": [
      "Gene-editing technologies like CRISPR.",
      "Tumor organoid models for personalized treatment.",
      "AI-based algorithms for early diagnosis."
    ],
    "support_resources": [
      "Access to nutritional counselors for diet planning.",
      "Mental health support for coping with emotional challenges."
    ]
  }
},
  "coronavirus": {
  "doctors": [
    { 
      "name": "Dr. Anil Mathur", 
      "specialty": "Infectious Disease Specialist", 
      "image": "man15", 
      "rating": 5, 
      "experience": "20 years", 
      "hospital": "AIIMS, Delhi", 
      "contact": "+91-555-111-2222" 
    },
    { 
      "name": "Dr. Sneha Kapoor", 
      "specialty": "Pulmonologist", 
      "image": "lady16", 
      "rating": 5, 
      "experience": "18 years", 
      "hospital": "Fortis Hospital, Mumbai", 
      "contact": "+91-555-333-4444" 
    },
    { 
      "name": "Dr. Rajiv Nair", 
      "specialty": "Critical Care Specialist", 
      "image": "man17", 
      "rating": 4, 
      "experience": "15 years", 
      "hospital": "Apollo Hospitals, Bangalore", 
      "contact": "+91-555-555-6666" 
    },
    { 
      "name": "Dr. Priya Sharma", 
      "specialty": "Virologist", 
      "image": "lady17", 
      "rating": 4, 
      "experience": "12 years", 
      "hospital": "Kokilaben Dhirubhai Ambani Hospital, Mumbai", 
      "contact": "+91-555-777-8888" 
    }
  ],
  "remedies": [
    { 
      "title": "Steam Inhalation",
      "description": "Inhale steam to relieve nasal congestion and soothe respiratory passages.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    },
    { 
      "title": "Hydration",
      "description": "Drink plenty of fluids like water, herbal teas, and soups to stay hydrated and support recovery.",
      "difficulty": "Easy",
      "effectiveness": "High"
    },
    { 
      "title": "Vitamin C and Zinc",
      "description": "Consume foods rich in Vitamin C and Zinc or take supplements to boost immunity.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    },
    { 
      "title": "Rest and Isolation",
      "description": "Get adequate rest and self-isolate to prevent the spread of the virus.",
      "difficulty": "Easy",
      "effectiveness": "High"
    },
    { 
      "title": "Ginger and Honey",
      "description": "Mix ginger and honey in warm water to soothe the throat and reduce coughing.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    },
    { 
      "title": "Breathing Exercises",
      "description": "Practice deep breathing or pranayama to improve lung function and reduce stress.",
      "difficulty": "Medium",
      "effectiveness": "High"
    }
  ],
  "videos": [
    { 
      "title": "Understanding COVID-19 Symptoms and Prevention", 
      "embedUrl": "https://www.youtube.com/embed/example1", 
      "duration": 600, 
      "ageGroup": "adults" 
    },
    { 
      "title": "How to Use Masks Effectively", 
      "embedUrl": "https://www.youtube.com/embed/example2", 
      "duration": 480, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Home Care for COVID-19 Patients", 
      "embedUrl": "https://www.youtube.com/embed/example3", 
      "duration": 540, 
      "ageGroup": "adults" 
    },
    { 
      "title": "COVID-19 Awareness for Children", 
      "embedUrl": "https://www.youtube.com/embed/example4", 
      "duration": 420, 
      "ageGroup": "children" 
    },
    { 
      "title": "Vaccination and Its Importance", 
      "embedUrl": "https://www.youtube.com/embed/example5", 
      "duration": 600, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Mental Health During the Pandemic", 
      "embedUrl": "https://www.youtube.com/embed/example6", 
      "duration": 480, 
      "ageGroup": "adults" 
    }
  ],
  "overview": "Coronavirus disease (COVID-19) is caused by the SARS-CoV-2 virus. It primarily affects the respiratory system, with symptoms ranging from mild (fever, cough, fatigue) to severe (difficulty breathing, organ failure). Preventive measures include wearing masks, maintaining social distance, and getting vaccinated. Treatment focuses on symptom management and supportive care.",
  "additional_content": {
    "prevention_strategies": [
      "Wear a properly fitted mask in crowded or enclosed spaces.",
      "Wash hands frequently with soap and water or use hand sanitizer.",
      "Maintain physical distance of at least 1 meter from others.",
      "Get vaccinated and stay updated with booster doses.",
      "Avoid touching your face, especially eyes, nose, and mouth."
    ],
    "recent_advancements": [
      "Development of mRNA vaccines like Pfizer-BioNTech and Moderna.",
      "Introduction of antiviral drugs such as Remdesivir and Molnupiravir.",
      "Advances in monoclonal antibody treatments for severe cases."
    ],
    "support_resources": [
      "Online teleconsultation services for COVID-19 patients.",
      "Mental health helplines for coping with pandemic-related stress.",
      "Government portals for vaccination and health updates."
    ]
  }
},
"anxiety": {
  "doctors": [
    { 
      "name": "Dr. Smita Sharma", 
      "specialty": "Psychiatrist", 
      "image": "lady18", 
      "rating": 5, 
      "experience": "20 years", 
      "hospital": "AIIMS, Delhi", 
      "contact": "+91-555-111-2222" 
    },
    { 
      "name": "Dr. Arjun Malhotra", 
      "specialty": "Clinical Psychologist", 
      "image": "man19", 
      "rating": 5, 
      "experience": "18 years", 
      "hospital": "NIMHANS, Bangalore", 
      "contact": "+91-555-333-4444" 
    },
    { 
      "name": "Dr. Priya Kapoor", 
      "specialty": "Therapist (CBT Specialist)", 
      "image": "lady19", 
      "rating": 4, 
      "experience": "15 years", 
      "hospital": "Fortis Mental Health Centre, Mumbai", 
      "contact": "+91-555-555-6666" 
    },
    { 
      "name": "Dr. Rohan Iyer", 
      "specialty": "Behavioral Therapist", 
      "image": "man20", 
      "rating": 4, 
      "experience": "12 years", 
      "hospital": "Apollo Hospitals, Chennai", 
      "contact": "+91-555-777-8888" 
    }
  ],
  "remedies": [
    { 
      "title": "Mindfulness Meditation",
      "description": "Practice mindfulness techniques to calm the mind and focus on the present moment.",
      "difficulty": "Medium",
      "effectiveness": "High"
    },
    { 
      "title": "Deep Breathing Exercises",
      "description": "Engage in deep breathing (e.g., 4-7-8 technique) to reduce stress and lower anxiety levels.",
      "difficulty": "Easy",
      "effectiveness": "High"
    },
    { 
      "title": "Physical Activity",
      "description": "Regular exercise, like yoga or walking, releases endorphins and lowers stress.",
      "difficulty": "Medium",
      "effectiveness": "High"
    },
    { 
      "title": "Journaling",
      "description": "Write down anxious thoughts to understand triggers and process emotions.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    },
    { 
      "title": "Aromatherapy",
      "description": "Use essential oils like lavender or chamomile to promote relaxation and reduce anxiety.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    },
    { 
      "title": "Caffeine Reduction",
      "description": "Limit caffeine intake to avoid heightening anxious feelings.",
      "difficulty": "Easy",
      "effectiveness": "Medium"
    }
  ],
  "videos": [
    { 
      "title": "Understanding Anxiety Disorders", 
      "embedUrl": "https://www.youtube.com/embed/example1", 
      "duration": 600, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Techniques to Manage Anxiety", 
      "embedUrl": "https://www.youtube.com/embed/example2", 
      "duration": 480, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Mindfulness Meditation for Anxiety", 
      "embedUrl": "https://www.youtube.com/embed/example3", 
      "duration": 540, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Anxiety Awareness for Teens", 
      "embedUrl": "https://www.youtube.com/embed/example4", 
      "duration": 420, 
      "ageGroup": "teens" 
    },
    { 
      "title": "Cognitive Behavioral Therapy Explained", 
      "embedUrl": "https://www.youtube.com/embed/example5", 
      "duration": 600, 
      "ageGroup": "adults" 
    },
    { 
      "title": "Breathing Exercises for Stress Relief", 
      "embedUrl": "https://www.youtube.com/embed/example6", 
      "duration": 480, 
      "ageGroup": "adults" 
    }
  ],
  "overview": "Anxiety is a common mental health condition characterized by excessive worry, fear, and physical symptoms such as a racing heart or sweating. It can be triggered by stress, trauma, or even genetic factors. Treatments often include therapy, lifestyle changes, and, in some cases, medication. Anxiety is manageable with consistent self-care practices and professional support.",
  
},


    "Asthma": {
      doctors: [
        { name: 'Dr. Emily Johnson', specialty: 'Cardiologist', image: {lady4}, rating: 4, experience: '8 years', hospital: 'General Hospital', contact: '+1-555-123-4567' },
        { name: 'Dr. Michael Brown', specialty: 'Blood Pressure Expert', image: {man5}, rating: 5, experience: '12 years', hospital: 'City Medical Center', contact: '+1-555-987-6543' }
      ],
      remedies: [
        { 
          title: 'Reduce salt intake',
          description: 'Limit sodium to less than 2,300 mg per day.',
          difficulty: 'Medium',
          effectiveness: 'Medium'
        },
        { 
          title: 'Stay active',
          description: 'Regular physical activity helps control asthma symptoms.',
          difficulty: 'Medium',
          effectiveness: 'High'
        },
        { 
          title: 'Manage stress',
          description: 'Practice relaxation techniques to reduce asthma triggers.',
          difficulty: 'Medium',
          effectiveness: 'Medium'
        },
        { 
          title: 'Increase potassium intake',
          description: 'Consume potassium-rich foods to help balance electrolytes.',
          difficulty: 'Easy',
          effectiveness: 'Low'
        }
      ],
      videos: [
        { title: 'Hypertension Guide', embedUrl: 'https://www.youtube.com/embed/vD6YpXcNv6c', duration: 360, ageGroup: 'adults' },
        { title: 'Lower Blood Pressure Exercises', embedUrl: 'https://www.youtube.com/embed/3s7XbPSJOpM', duration: 420, ageGroup: 'adults' }
      ],
      overview: "Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, a whistling sound (wheezing) when you breathe out and shortness of breath."
    },
    "HIV": {
      doctors: [
        { name: 'Dr. Emily Johnson', specialty: 'Cardiologist', image: 'https://via.placeholder.com/100', rating: 4, experience: '8 years', hospital: 'General Hospital', contact: '+1-555-123-4567' },
        { name: 'Dr. Michael Brown', specialty: 'Blood Pressure Expert', image: 'https://via.placeholder.com/100', rating: 5, experience: '12 years', hospital: 'City Medical Center', contact: '+1-555-987-6543' }
      ],
      remedies: [
        { 
          title: 'Reduce salt intake',
          description: 'Limit sodium to less than 2,300 mg per day.',
          difficulty: 'Medium',
          effectiveness: 'Medium'
        },
        { 
          title: 'Stay active',
          description: 'Regular physical activity helps maintain overall health.',
          difficulty: 'Medium',
          effectiveness: 'Medium'
        },
        { 
          title: 'Manage stress',
          description: 'Practice relaxation techniques to support immune function.',
          difficulty: 'Medium',
          effectiveness: 'Medium'
        },
        { 
          title: 'Increase potassium intake',
          description: 'Consume potassium-rich foods to help balance electrolytes.',
          difficulty: 'Easy',
          effectiveness: 'Low'
        }
      ],
      videos: [
        { title: 'Hypertension Guide', embedUrl: 'https://www.youtube.com/embed/vD6YpXcNv6c', duration: 360, ageGroup: 'adults' },
        { title: 'Lower Blood Pressure Exercises', embedUrl: 'https://www.youtube.com/embed/3s7XbPSJOpM', duration: 420, ageGroup: 'adults' }
      ],
      overview: "HIV (human immunodeficiency virus) is a virus that attacks the body's immune system. If HIV is not treated, it can lead to AIDS (acquired immunodeficiency syndrome)."
    },
    "Zika Virus": {
      doctors: [
        { name: 'Dr. Emily Johnson', specialty: 'Cardiologist', image: 'https://via.placeholder.com/100', rating: 4, experience: '8 years', hospital: 'General Hospital', contact: '+1-555-123-4567' },
        { name: 'Dr. Michael Brown', specialty: 'Blood Pressure Expert', image: 'https://via.placeholder.com/100', rating: 5, experience: '12 years', hospital: 'City Medical Center', contact: '+1-555-987-6543' }
      ],
      remedies: [
        { 
          title: 'Reduce salt intake',
          description: 'Limit sodium to less than 2,300 mg per day.',
          difficulty: 'Medium',
          effectiveness: 'Low'
        },
        { 
          title: 'Stay active',
          description: 'Regular physical activity helps maintain overall health.',
          difficulty: 'Medium',
          effectiveness: 'Medium'
        },
        { 
          title: 'Manage stress',
          description: 'Practice relaxation techniques to support recovery.',
          difficulty: 'Medium',
          effectiveness: 'Medium'
        },
        { 
          title: 'Increase potassium intake',
          description: 'Consume potassium-rich foods to help balance electrolytes.',
          difficulty: 'Easy',
          effectiveness: 'Low'
        }
      ],
      videos: [
        { title: 'Hypertension Guide', embedUrl: 'https://www.youtube.com/embed/vD6YpXcNv6c', duration: 360, ageGroup: 'adults' },
        { title: 'Lower Blood Pressure Exercises', embedUrl: 'https://www.youtube.com/embed/3s7XbPSJOpM', duration: 420, ageGroup: 'adults' }
      ],
      overview: "Zika virus is a mosquito-borne flavivirus that was first identified in Uganda in 1947 in monkeys. It was later identified in humans in 1952 in Uganda and the United Republic of Tanzania."
    },
    "Polio": {
      doctors: [
        { name: 'Dr. Emily Johnson', specialty: 'Cardiologist', image: 'https://via.placeholder.com/100', rating: 4, experience: '8 years', hospital: 'General Hospital', contact: '+1-555-123-4567' },
        { name: 'Dr. Michael Brown', specialty: 'Blood Pressure Expert', image: 'https://via.placeholder.com/100', rating: 5, experience: '12 years', hospital: 'City Medical Center', contact: '+1-555-987-6543' }
      ],
      remedies: [
        { 
          title: 'Reduce salt intake',
          description: 'Limit sodium to less than 2,300 mg per day.',
          difficulty: 'Medium',
          effectiveness: 'Low'
        },
        { 
          title: 'Stay active',
          description: 'Regular physical activity helps maintain mobility.',
          difficulty: 'Medium',
          effectiveness: 'Medium'
        },
        { 
          title: 'Manage stress',
          description: 'Practice relaxation techniques to support recovery.',
          difficulty: 'Medium',
          effectiveness: 'Medium'
        },
        { 
          title: 'Increase potassium intake',
          description: 'Consume potassium-rich foods to help balance electrolytes.',
          difficulty: 'Easy',
          effectiveness: 'Low'
        }
      ],
      videos: [
        { title: 'Hypertension Guide', embedUrl: 'https://www.youtube.com/embed/vD6YpXcNv6c', duration: 360, ageGroup: 'adults' },
        { title: 'Lower Blood Pressure Exercises', embedUrl: 'https://www.youtube.com/embed/3s7XbPSJOpM', duration: 420, ageGroup: 'adults' }
      ],
      overview: "Polio, or poliomyelitis, is a disabling and life-threatening disease caused by the poliovirus. The virus spreads from person to person and can infect a person's spinal cord, causing paralysis."
    }
  };
  