import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../assets/styles/ExploreExoPlanet.css'

const NumberDisplay = ({ number }) => {
  return (
    <div>
      {number >= 1 && number <= 5005 ? (
        <h1>The number you entered is: {number}</h1>
      ) : (
        <h1>Please enter a number between 1 and 5005.</h1>
      )}
    </div>
  );
};

const ExploreExoPlanet = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [submittedNumber, setSubmittedNumber] = useState(null);
  const navigate = useNavigate(); // Call useNavigate to get navigate function

  // Handle the number input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 1 && Number(value) <= 5005)) {
      setInputNumber(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputNumber) {
      setSubmittedNumber(Number(inputNumber));
      navigate('/wormhole', { state: { submittedNumber: Number(inputNumber) } }); // Navigate to new page with state
    }
  };

  // Function to generate a random number between 1 and 5005
  const handleRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 5005) + 1;
    setSubmittedNumber(randomNumber);
    navigate('/wormhole', { state: { submittedNumber: randomNumber } }); // Navigate to new page with state
  };

  return (
    <div className="ExoButtons">
      <form className="ExoForm" onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputNumber}
          onChange={handleInputChange}
          placeholder="Enter a num (1-5005)"
        />
        <button type="submit">Submit</button>
      </form>

      {/* Button to generate a random number */}
      <button className="Buttons" id="one" onClick={handleRandomNumber}>Generate Random Number</button>
      {submittedNumber && <NumberDisplay number={submittedNumber} />}
    </div>
  );
};

export default ExploreExoPlanet;
