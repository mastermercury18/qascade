# Quantum Apoptosis Explorer

A modern interactive web app for exploring cell signaling pathways and their quantum-optimized analytics.

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
