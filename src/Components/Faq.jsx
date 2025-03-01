import React, { useState } from 'react';
import './Faq.css';

export default function Faq() {
  const [userQuestion, setUserQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;
    
    setIsLoading(true);
    try {
      // Get API key from environment variable
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      console.log("API Key available:", apiKey ? "Yes" : "No");
      
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      console.log("Fetching from URL:", url);
      
      const requestBody = {
        contents: [{
          parts: [{ text: userQuestion }]
        }]
      };
      console.log("Request body:", JSON.stringify(requestBody));
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });
      
      console.log("Response status:", response.status);
      console.log("Response headers:", Object.fromEntries([...response.headers]));
      
      const data = await response.json();
      console.log("Response data:", data);
      
      // Extract the answer from the response
      if (data.candidates && data.candidates[0]?.content?.parts) {
        setAiAnswer(data.candidates[0].content.parts[0].text);
      } else {
        console.error("Unexpected response structure:", data);
        setAiAnswer("Sorry, I couldn't generate an answer. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching from Gemini API:", error);
      setAiAnswer("An error occurred while generating the answer. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <section className="section1">  
      <h1>FAQ-Frequently Asked Questions</h1>
      
      {/* AI Question Input */}
      <div className="ai-question-container">
        <h2>Ask Your Health Question</h2>
        <form onSubmit={handleQuestionSubmit}>
          <input
            type="text"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            placeholder="Type your health question here..."
            className="question-input"
          />
          <button type="submit" className="ask-button" disabled={isLoading}>
            {isLoading ? 'Getting Answer...' : 'Get Answer'}
          </button>
        </form>
        
        {aiAnswer && (
          <div className="ai-answer">
            <h3>Answer:</h3>
            <p>{aiAnswer}</p>
          </div>
        )}
      </div>
      
      <div className="description"> 
        <details>
          <summary>What are the most common home remedies for headaches?</summary>
          <p>
            <strong>Hydration:</strong> Dehydration is a common cause of headaches. Drinking plenty of water throughout the day can help prevent headaches. <br /><br />
            <strong>Caffeine:</strong> A small amount of caffeine can relieve headache symptoms, especially in the early stages. However, be cautious, as excessive caffeine can have the opposite effect. <br /><br />
            <strong>Peppermint Oil:</strong> Applying diluted peppermint oil to your temples can provide relief for tension headaches. The menthol in peppermint oil helps relax muscles and ease pain. <br /><br />
            <strong>Ginger Tea:</strong> Ginger has anti-inflammatory properties and can help reduce headache symptoms. Drinking ginger tea or consuming fresh ginger can be effective. <br /><br />
          </p>
        </details>
     
        <details> 
          <summary>How to cure from malaria?</summary>
          <p>
            Malaria is a serious disease caused by parasites transmitted through the bites of infected mosquitoes. While there is no over-the-counter cure for malaria, it can be effectively treated with prescription medications. Here are the steps to manage and treat malaria: <br /><br />
            
            <strong>Diagnosis:</strong> If you suspect you have malaria, seek medical attention immediately. A healthcare professional will conduct a blood test to confirm the presence of the malaria parasite and determine the type of malaria. <br /><br />
            
            <strong>Antimalarial Medications:</strong> The treatment for malaria depends on the type of parasite, the severity of the symptoms, and the patient's age and health condition. Common antimalarial drugs include: <br /><br />
            
            - Chloroquine phosphate: Effective for parasites sensitive to chloroquine. <br /><br />
            
            - Artemisinin-based combination therapies (ACTs): Preferred for chloroquine-resistant malaria. Examples include artemether-lumefantrine (Coartem) and artesunate-mefloquine. <br /><br />
            
            - Atovaquone-proguanil (Malarone), Quinine sulfate with doxycycline, and Primaquine phosphate. <br /><br />
            
            <strong>Supportive Care:</strong> In addition to medications, supportive care is essential:<br /><br />
            
            - Hydration: Drink plenty of fluids to prevent dehydration.<br /><br />
            
            - Rest: Get ample rest to help your body recover.<br /><br />
            
            - Nutrition: Eat a balanced diet to support your immune system.<br /><br />
            
            <strong>Monitoring:</strong> Regular follow-up with a healthcare professional is important to monitor your progress and ensure the effectiveness of the treatment.<br /><br />
            
            <strong>Prevention:</strong> If you live in or travel to areas where malaria is common, take preventive measures such as using insect repellent, sleeping under mosquito nets, and taking prophylactic antimalarial medications as prescribed by a healthcare professional.<br /><br />
            
            For more detailed information, you can check out resources like Mayo Clinic and Cleveland Clinic.
          </p>
        </details>
     
        <details>
          <summary>Best diet for maintaining our health?</summary>
          <p>
            Maintaining a healthy diet is key to overall well-being. Here are some general guidelines for a balanced and nutritious diet: <br /><br />
            
            <strong>Fruits and Vegetables:</strong> <br />
            Aim for at least five servings of fruits and vegetables each day. They are rich in vitamins, minerals, fiber, and antioxidants.
            Choose a variety of colors to ensure a wide range of nutrients. <br /><br />
            
            <strong>Whole Grains:</strong> <br />
            Opt for whole grains like brown rice, quinoa, whole wheat bread, and oats. Whole grains are rich in fiber and can help maintain steady blood sugar levels. <br /><br />
            
            <strong>Lean Protein:</strong> <br />
            Include lean protein sources such as chicken, turkey, fish, tofu, beans, and legumes. Protein is essential for muscle repair and immune function.
            Fatty fish like salmon and mackerel are excellent choices due to their omega-3 fatty acids. <br /><br />
            
            <strong>Healthy Fats:</strong> <br />
            Incorporate healthy fats from sources like avocados, nuts, seeds, and olive oil. These fats support heart health and brain function.
            Limit saturated fats and avoid trans fats. <br /><br />
            
            <strong>Dairy or Dairy Alternatives:</strong> <br />
            Include low-fat dairy products or fortified dairy alternatives like almond milk or soy milk. These are good sources of calcium and vitamin D. <br /><br />
            
            <strong>Hydration:</strong> <br />
            Drink plenty of water throughout the day to stay hydrated.
            Limit sugary drinks and sodas, and consume alcohol in moderation. <br /><br />
            
            <strong>Portion Control:</strong> <br />
            Be mindful of portion sizes to avoid overeating.
            Eating smaller, more frequent meals can help maintain energy levels and prevent overeating. <br /><br />
            
            <strong>Limit Added Sugars and Salt:</strong> <br />
            Reduce your intake of foods and drinks with added sugars.
            Be mindful of salt intake, and choose low-sodium options when possible. <br /><br />
            
            <strong>Balanced Meals:</strong> <br />
            Aim to include a balance of carbohydrates, protein, and healthy fats in each meal.
            Fill half your plate with vegetables and fruits, one-quarter with lean protein, and one-quarter with whole grains. <br /><br />
            
            <strong>Mindful Eating:</strong> <br />
            Pay attention to hunger and fullness cues.
            Eat slowly and savor your food to enjoy the experience and prevent overeating.
            
            Remember, it's always a good idea to consult with a registered dietitian or healthcare professional to create a personalized meal plan that suits your individual needs and preferences. If you have any specific dietary restrictions or health concerns, they can provide tailored advice.
          </p>
        </details>
      </div>
    </section>
  );
}
