import React, { useState, useMemo, useCallback } from 'react';

const NumberListAnalyzer = () => {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Calculate statistics using useMemo
  const { sum, largest } = useMemo(() => {
    if (numbers.length === 0) {
      return { sum: 0, largest: null };
    }
    return {
      sum: numbers.reduce((acc, num) => acc + num, 0),
      largest: Math.max(...numbers)
    };
  }, [numbers]);

  // Add number to the list
  const handleAddNumber = () => {
    const num = Number(inputValue);
    if (!isNaN(num)) {
      setNumbers(prev => [...prev, num]);
      setInputValue('');
    }
  };

  // Remove number using useCallback
  const handleRemoveNumber = useCallback((index) => {
    setNumbers(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAddNumber();
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a number"
        />
        <button onClick={handleAddNumber}>Add Number</button>
      </div>

      <div>
        <h3>Statistics</h3>
        <p>Sum: {sum}</p>
        <p>Largest: {largest !== null ? largest : 'N/A'}</p>
        <p>Count: {numbers.length}</p>
      </div>

      <div>
        <h3>Numbers List</h3>
        {numbers.length === 0 ? (
          <p>No numbers added yet</p>
        ) : (
          <ul>
            {numbers.map((number, index) => (
              <li key={index}>
                {number}
                <button onClick={() => handleRemoveNumber(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NumberListAnalyzer;