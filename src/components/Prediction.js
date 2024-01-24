import React, { useState, useEffect } from 'react';

const Prediction = ({ prediction_result }) => {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    hypertension: '',
    heart_disease: '',
    bmi: '',
    HbA1c_level: '',
    blood_glucose_level: '',
    smoking_history: '',
  });

  const [predictionResult, setPredictionResult] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const numericFormData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, parseFloat(value)])
    );

    try {
      const response = await fetch('https://diabetes-prediction-backend-production.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(numericFormData),
      });

      const jsonData = await response.json();

      // Set the prediction result in state
      setPredictionResult(jsonData.prediction_result);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Use useEffect to log the prediction result after state update
  useEffect(() => {
    console.log(predictionResult);
    
    
  }, [predictionResult]);
  return (
    <div className='userInputforPrediction'>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: 10 }}>
            <label htmlFor="gender">Gender:</label>
            <input type="number" id="gender" name="gender" placeholder="0 for Male, 1 for Female" value={formData.gender}
              onChange={handleChange} />

            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" placeholder="Enter your age" value={formData.age}
              onChange={handleChange} />

            <label htmlFor="hypertension">Hypertension:</label>
            <input type="number" id="hypertension" name="hypertension" placeholder="1 for yes, 0 for no" value={formData.hypertension}
              onChange={handleChange} />
          </div>

          <div style={{ flex: 1, marginLeft: 10 }}>
            <label htmlFor="heart_disease">Heart Disease:</label>
            <input type="number" id="heart_disease" name="heart_disease" placeholder="1 for yes, 0 for no" value={formData.heart_disease} onChange={handleChange} />

            <label htmlFor="bmi">BMI:</label>
            <input type="number" id="bmi" name="bmi" placeholder="Enter your BMI" value={formData.bmi} onChange={handleChange} />

            <label htmlFor="HbA1c_level">HbA1c Level:</label>
            <input type="number" id="HbA1c_level" name="HbA1c_level" placeholder="Enter your HbA1c level" value={formData.HbA1c_level} onChange={handleChange} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: 10 }}>
            <label htmlFor="blood_glucose_level">Blood Glucose Level:</label>
            <input type="number" id="blood_glucose_level" name="blood_glucose_level" placeholder="Enter your blood glucose level" value={formData.blood_glucose_level} onChange={handleChange} />
          </div>

          <div style={{ flex: 1, marginLeft: 10 }}>
            <label htmlFor="smoking_history">Smoking History:</label>
            <input type="number" id="smoking_history" name="smoking_history" placeholder="1.No Info 2.current 3.ever 4.former 5.never 6.not current" value={formData.smoking_history} onChange={handleChange} />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    <div>{predictionResult}</div>
    </div>


  )
}

export default Prediction
