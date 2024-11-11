import React from 'react';

const Action = ({ action, removeAction }) => {
  return (
    <div className="action">
      <span>{action.name} - CO₂ Reduction: {action.co2Reduction} kg</span>
      <button onClick={() => removeAction(action.id)}>Delete</button>
    </div>
  );
};

export default Action; // Ensure this line is present
