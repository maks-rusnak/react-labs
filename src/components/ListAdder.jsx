import React, { useState } from 'react';
import './ListAdder.css';

export default function ListAdder() {
  const [items, setItems] = useState([]); // массив объектов { id, text }
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      setItems(prev => [
        ...prev,
        { id: Date.now(), text: inputValue.trim() }
      ]);
      setInputValue('');
    }
  };

  const isButtonDisabled = !inputValue.trim();

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Добавить элемент в список</h1>

        <div className="input-group">
          <input
            type="text"
            className="text-input"
            placeholder="Введите текст..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <button
            onClick={handleAdd}
            disabled={isButtonDisabled}
            className="add-button"
          >
            Добавить
          </button>
        </div>

        <ul className="items-list">
          {items.length === 0 ? (
            <li className="empty-message">Список пуст</li>
          ) : (
            items.map(item => (
              <li key={item.id} className="list-item">
                {item.text}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}