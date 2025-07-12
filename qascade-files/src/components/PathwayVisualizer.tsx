
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pathwayOptions = [
  { label: 'Option 1', value: 'Option1.png', analytics: '/analytics/option1' },
  { label: 'Option 2', value: 'Option2.png', analytics: '/analytics/option2' },
  { label: 'Option 3', value: 'Option3.png', analytics: '/analytics/option3' },
  { label: 'Option 4', value: 'Option4.png', analytics: '/analytics/option4' },
];

export default function PathwayVisualizer() {
  const [selected, setSelected] = useState(pathwayOptions[0].value);
  const navigate = useNavigate();
  const selectedOption = pathwayOptions.find(opt => opt.value === selected);

  return (
    <div style={{ textAlign: 'center', marginTop: 32 }}>
      <h2>Choose a Cell Signaling Pathway</h2>
      <select
        value={selected}
        onChange={e => setSelected(e.target.value)}
        style={{ fontSize: 18, padding: 8, margin: '16px 0' }}
      >
        {pathwayOptions.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <div>
        <img
          src={`/images/${selected}`}
          alt={selected.replace('.png', '')}
          style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc', borderRadius: 8 }}
        />
      </div>
      <button
        style={{
          marginTop: 24,
          padding: '10px 24px',
          fontSize: 16,
          background: 'linear-gradient(90deg, #a78bfa, #38bdf8)',
          color: 'white',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(80,80,120,0.15)'
        }}
        onClick={() => navigate(selectedOption.analytics)}
      >
        View Analytics
      </button>
    </div>
  );
}
