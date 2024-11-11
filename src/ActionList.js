import React from 'react';

const ecoActions = [
  { id: 1, name: "Use a reusable water bottle", co2Reduction: 0.5 },
  { id: 2, name: "Take public transport", co2Reduction: 2.6 },
  { id: 3, name: "Eat a plant-based meal", co2Reduction: 0.8 },
  { id: 4, name: "Use energy-efficient light bulbs", co2Reduction: 0.1 },
  { id: 5, name: "Recycle paper", co2Reduction: 0.2 },
];

const ActionList = ({ addAction }) => {
  return (
    <div className="action-list">
      <h2>Available Actions</h2>
      <ul>
        {ecoActions.map((action) => (
          <li key={action.id} className="action-item">
            {action.name} - Reduces CO₂ by {action.co2Reduction} kg
            <button onClick={() => addAction(action)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionList; // Ensure this line is present
