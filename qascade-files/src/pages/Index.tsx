
import PathwayVisualizer from '@/components/PathwayVisualizer';

const Index = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-8">
    <header className="mb-10 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">Cell Signaling Pathway Explorer</h1>
      <p className="text-lg md:text-xl text-cyan-200 mb-4 max-w-2xl mx-auto">
        Visualize and compare key cell signaling pathways involved in apoptosis. Select a pathway below to see its molecular cascade.
      </p>
    </header>
    <main className="w-full max-w-xl flex flex-col items-center">
      <PathwayVisualizer />
      <section className="mt-10 bg-black/40 rounded-lg p-6 shadow-lg border border-purple-500/20 max-w-xl w-full">
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">How it works</h2>
        <p className="text-gray-200 text-base">
          This tool lets you explore different cell signaling pathways by selecting from the dropdown above. Each pathway image illustrates the sequence of protein interactions that can lead to programmed cell death (apoptosis). Use this explorer to better understand the molecular mechanisms behind cellular responses.
        </p>
      </section>
    </main>
  </div>
);

export default Index;
