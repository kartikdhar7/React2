import React from 'react';
import Action from './Action';

const ImpactSummary = ({ actions, totalCO2Reduction, clearActions, removeAction }) => {
  // Group actions by name and count occurrences
  const actionCounts = actions.reduce((acc, action) => {
    acc[action.name] = (acc[action.name] || 0) + 1;
    return acc;
  }, {});

  // Determine color based on CO₂ saved
  const getImpactColor = () => {
    if (totalCO2Reduction < 0.5) return 'red';
    if (totalCO2Reduction >= 0.5 && totalCO2Reduction < 1) return 'orange';
    return 'green';
  };

  return (
    <div className="impact-summary">
      <h2>Impact Summary</h2>
      <p style={{ color: getImpactColor() }}>
        Total CO₂ Reduction: {totalCO2Reduction.toFixed(2)} kg
      </p>
      <ul>
        {Object.entries(actionCounts).map(([name, count]) => (
          <li key={name} className="summary-item">
            {name} - Count: {count} - Total Reduction: {(count * actions.find(a => a.name === name).co2Reduction).toFixed(2)} kg
          </li>
        ))}
      </ul>
      <button onClick={clearActions}>Clear All Actions</button>
      {actions.length === 0 && <p>No actions tracked yet. Start by adding some eco-friendly actions!</p>}
    </div>
  );
};

export default ImpactSummary;
