# Qascade

A modern interactive web app for exploring cell signaling pathways and their quantum-optimized analytics.

<img width="904" height="640" alt="Screenshot 2025-08-15 at 1 43 21 PM" src="https://github.com/user-attachments/assets/2fe30ae0-0465-44e4-a9a9-7c05a5f666e2" />
<img width="889" height="636" alt="Screenshot 2025-08-15 at 1 43 32 PM" src="https://github.com/user-attachments/assets/926ae2ab-56f8-4ec3-8196-7725c03f9f4c" />

🔍 How It Works
1. Graph Generation from Protein Cascades
The user selects a synthetic signaling network which is represented as a directed graph.
Each protein interaction is converted into an edge with a specific weight, derived from simulated activation probabilities or experimental heuristics.
2. QUBO Mapping
The graph is transformed into an adjacency matrix, encoding:
Edge weights (biological cost/efficiency)
Node constraints (e.g., inhibition, dual activation)
This matrix is used to formulate a QUBO problem, aiming to minimize the total signaling cost while reaching apoptotic targets.
3. Quantum Circuit Construction
Using the Perceval quantum photonic framework, the adjacency matrix is embedded into a linear interferometer.
A series of beam splitters and phase shifters are configured to simulate quantum walk dynamics over the protein network.
4. Quantum Path Sampling
The interferometer samples Fock states, simulating boson interference patterns.
High-probability output modes correspond to constructively interfering cascades — i.e., biologically plausible and efficient signaling paths.
5. Result Analysis
Quantum sampling results are mapped back to the biological graph.
Optimal paths leading to apoptosis are extracted and visualized.
Output probabilities are used to infer confidence scores for each path.

## Features

- **Pathway Explorer**: Select from multiple cell signaling pathways and view detailed static diagrams.
- **Analytics Pages**: For each pathway, access a dedicated analytics page with:
  - Quantum simulation results (dominant Fock states, pathway-specific findings)
  - Photonic interferometer visualization
  - Hamiltonian matrix visualizer (color-coded, interactive)
  - Clean, centered, modern UI
- **Quantum Model Tab**: Learn how quantum walks, photonic interferometers, and Hamiltonians are used to analyze biological networks.
- **Results Tab**: See quantum simulation outcomes for each pathway.
- **Navigation**: Easily switch between the explorer and analytics pages.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Visit the local URL shown in your terminal (e.g., http://localhost:8080/).

## Project Structure

- `src/components/PathwayVisualizer.tsx` — Main pathway dropdown and image display
- `src/pages/OptionXAnalytics.tsx` — Analytics pages for each pathway (with quantum model and results)
- `public/images/` — Static pathway images
- `hacktj11/unmodified.ipynb` — Original quantum simulation notebook (for reference)

## Technologies Used
- React + TypeScript
- Tailwind CSS
- Vite
- Custom SVG and matrix visualizations

## Quantum Biology Concepts
- **Photonic Interferometer**: Simulates quantum walks on protein networks
- **Hamiltonian Matrix**: Encodes pathway as a quantum system
- **Quantum Walk Sampling**: Reveals dominant biological outcomes

## Customization
- To add or update pathways, edit the images in `public/images/` and update the dropdown in `PathwayVisualizer.tsx`.
- To change analytics or quantum model details, edit the corresponding `OptionXAnalytics.tsx` page.

---

For more details on the quantum simulation, see `hacktj11/unmodified.ipynb`.
