
import React, { useEffect, useState } from 'react';

function App() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    fetch('/api/signals')
      .then(res => res.json())
      .then(data => setSignals(data));
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold mb-4">📡 Signal Viewer</h1>
      {signals.map((signal, i) => (
        <div key={i} className="p-2 border mb-2 rounded">
          <p><strong>Type:</strong> {signal.type}</p>
          <p><strong>Confidence:</strong> {signal.confidence}%</p>
          <p><strong>TP:</strong> {signal.tp}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
