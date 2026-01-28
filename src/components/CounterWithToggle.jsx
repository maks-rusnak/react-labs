import React, { useState } from 'react';
import './CounterWithToggle.css';

export default function CounterWithToggle() {
  const [count, setCount] = useState(0);
  const [isIncrement, setIsIncrement] = useState(true); 

  const handleChangeCount = () => {
    if (isIncrement) {
      setCount(prev => prev + 1);
    } else {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Счётчик с переключателем</h1>

        <div className="toggle-wrapper">
          <span className={`label ${!isIncrement ? 'active' : ''}`}>Декремент</span>

          <label className="switch">
            <input
              type="checkbox"
              checked={isIncrement}
              onChange={() => setIsIncrement(prev => !prev)}
            />
            <span className="slider"></span>
          </label>

          <span className={`label ${isIncrement ? 'active' : ''}`}>Инкремент</span>
        </div>

        <div className="counter-display">
          <p className="count-value">{count}</p>
          <p className="mode-text">
            Режим: <strong>{isIncrement ? 'Увеличение (+1)' : 'Уменьшение (-1)'}</strong>
          </p>
        </div>

        <button onClick={handleChangeCount} className="action-button">
          {isIncrement ? '+1' : '-1'}
        </button>
      </div>
    </div>
  );
}