import React, { useState } from 'react';

const hamiltonian = [
  [2, 54, -54, -54, -54, 54, 0, 0, 0, 0, 0],
  [0, 1, 54, 0, 0, -54, -54, -54, 0, 0, 0],
  [0, 0, 56, 54, 54, -108, -54, -54, 0, 0, 0],
  [0, 0, 0, 3, 54, -54, 54, 0, -54, -54, 0],
  [0, 0, 0, 0, 59, -54, 0, 0, 0, 54, 54],
  [0, 0, 0, 0, 0, 56, 54, 54, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 54, -54, -54, 0],
  [0, 0, 0, 0, 0, 0, 0, 56, 54, 0, -54],
  [0, 0, 0, 0, 0, 0, 0, 0, 111, 54, -54],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 109, 54],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58],
];

function HamiltonianMatrix() {
  return (
    <div className="overflow-x-auto mt-4 mb-2">
      <table className="border-collapse mx-auto">
        <tbody>
          {hamiltonian.map((row, i) => (
            <tr key={i}>
              {row.map((val, j) => (
                <td
                  key={j}
                  title={`H[${i},${j}] = ${val}`}
                  className="w-8 h-8 text-xs text-center border border-gray-700"
                  style={{ background: `rgba(56,189,248,${Math.abs(val)/120})` }}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-xs text-gray-400 mt-1 text-center">Color intensity ∝ |value|. Hover for details.</div>
    </div>
  );
}

function PhotonicInterferometer() {
  return (
    <svg width="320" height="100" className="my-4 mx-auto block">
      <line x1="30" y1="30" x2="290" y2="30" stroke="#38bdf8" strokeWidth="4" />
      <line x1="30" y1="70" x2="290" y2="70" stroke="#a78bfa" strokeWidth="4" />
      <line x1="30" y1="50" x2="290" y2="50" stroke="#fbbf24" strokeWidth="4" />
      <rect x="100" y="20" width="10" height="60" fill="#fff" stroke="#64748b" strokeWidth="2" rx="2" />
      <rect x="200" y="20" width="10" height="60" fill="#fff" stroke="#64748b" strokeWidth="2" rx="2" />
      <circle cx="60" cy="30" r="7" fill="#38bdf8" stroke="#fff" strokeWidth="2" />
      <circle cx="60" cy="50" r="7" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
      <circle cx="60" cy="70" r="7" fill="#a78bfa" stroke="#fff" strokeWidth="2" />
      <text x="80" y="18" fontSize="10" fill="#fff">BS</text>
      <text x="180" y="18" fontSize="10" fill="#fff">BS</text>
      <text x="45" y="28" fontSize="10" fill="#fff">PS</text>
      <text x="45" y="48" fontSize="10" fill="#fff">PS</text>
      <text x="45" y="68" fontSize="10" fill="#fff">PS</text>
    </svg>
  );
}

export default function Option4Analytics() {
  const [tab, setTab] = useState('quantum');
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center py-10 px-4 text-center">
      <div className="mb-6 flex gap-4 justify-center">
        <button className={`px-4 py-2 rounded-t bg-black/40 border-b-2 ${tab==='quantum' ? 'border-purple-400 text-purple-200' : 'border-transparent text-gray-400'}`} onClick={()=>setTab('quantum')}>Quantum Model</button>
        <button className={`px-4 py-2 rounded-t bg-black/40 border-b-2 ${tab==='results' ? 'border-green-400 text-green-200' : 'border-transparent text-gray-400'}`} onClick={()=>setTab('results')}>Results</button>
      </div>
      {tab === 'quantum' && (
        <div className="w-full max-w-3xl bg-black/40 rounded-lg p-6 border border-purple-500/20 shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Quantum Model</h2>
          <div className="mb-6">
            <span className="font-bold text-cyan-300" title="A photonic device that simulates quantum walks using beam splitters and phase shifters.">Photonic Interferometer</span>
            <PhotonicInterferometer />
            <div className="text-xs text-gray-400 mb-2 text-center">Simulates quantum walks on the pathway graph using photons.</div>
          </div>
          <div className="mb-6">
            <span className="font-bold text-cyan-300" title="Encodes the pathway as a quantum system. Each value represents an interaction strength.">Hamiltonian Matrix</span>
            <HamiltonianMatrix />
          </div>
        </div>
      )}
      {tab === 'results' && (
        <div className="w-full max-w-3xl bg-black/40 rounded-lg p-6 border border-green-500/20 shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-green-300 mb-4">Quantum Simulation Results</h2>
          <p className="text-gray-200 mb-2">See the main results and bar plot below.</p>
          <ul className="text-gray-400 text-sm list-disc pl-6 inline-block text-left">
            <li>Quantum walk sampling reveals constructive interference on <span className="font-mono text-cyan-300">010010</span></li>
            <li>Apoptotic core: Fadd → Casp8 → Casp3, with Xiap inhibition suppressed</li>
            <li>Pathway encoded as a Hamiltonian and simulated via photonic quantum walk</li>
          </ul>
        </div>
      )}
      <button className="mt-8 px-6 py-2 rounded bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold shadow-lg" onClick={()=>window.history.back()}>Back to Explorer</button>
    </div>
  );
} 