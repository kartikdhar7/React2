import React, { useState, useEffect } from 'react';
import ActionList from './ActionList';
import ImpactSummary from './ImpactSummary';
import './index.css';

const App = () => {
  const [actions, setActions] = useState(() => {
    const savedActions = localStorage.getItem('actions');
    return savedActions ? JSON.parse(savedActions) : [];
  });

  useEffect(() => {
    localStorage.setItem('actions', JSON.stringify(actions));
  }, [actions]);

  const addAction = (newAction) => {
    setActions([...actions, newAction]);
  };

  const clearActions = () => {
    setActions([]);
  };

  const removeAction = (id) => {
    setActions(actions.filter((action) => action.id !== id));
  };

  const totalCO2Reduction = actions.reduce((total, action) => total + action.co2Reduction, 0);

  return (
    <div className="app-container">
      <h1>Eco Tracker</h1>
      <ActionList addAction={addAction} />
      <ImpactSummary actions={actions} totalCO2Reduction={totalCO2Reduction} clearActions={clearActions} removeAction={removeAction} />
    </div>
  );
};

export default App;
