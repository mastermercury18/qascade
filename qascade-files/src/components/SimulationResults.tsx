
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Target, TrendingUp, Zap, FlaskConical } from 'lucide-react';

const SimulationResults = ({ data }) => {
  const pathwayData = [
    { name: 'p53→PUMA→BAX', probability: 0.45, confidence: 0.87 },
    { name: 'AKT→p53→Casp3', probability: 0.23, confidence: 0.65 },
    { name: 'PUMA→BAX→Casp3', probability: 0.18, confidence: 0.73 },
    { name: 'p53→BAX', probability: 0.09, confidence: 0.52 },
    { name: 'Direct Casp3', probability: 0.05, confidence: 0.34 },
  ];

  const interferenceData = Array.from({ length: 20 }, (_, i) => ({
    step: i,
    amplitude: Math.sin(i * 0.3) * Math.exp(-i * 0.05) + Math.random() * 0.1,
    phase: Math.cos(i * 0.4) * 0.8,
  }));

  if (!data && pathwayData.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <Target className="h-16 w-16 mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-semibold text-white mb-2">No Results Yet</h3>
          <p>Run a quantum simulation to see pathway optimization results</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Optimal Path</p>
                <p className="text-2xl font-bold text-green-400">87.3%</p>
              </div>
              <Target className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Quantum Efficiency</p>
                <p className="text-2xl font-bold text-cyan-400">94.7%</p>
              </div>
              <Zap className="h-8 w-8 text-cyan-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border-purple-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">QUBO Score</p>
                <p className="text-2xl font-bold text-purple-400">-2.847</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-orange-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Apoptosis Rate</p>
                <p className="text-2xl font-bold text-orange-400">76.2%</p>
              </div>
              <FlaskConical className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pathway Probabilities */}
        <Card className="bg-black/40 border-green-500/20">
          <CardHeader>
            <CardTitle className="text-white">Apoptotic Pathway Probabilities</CardTitle>
            <CardDescription className="text-gray-400">
              Quantum-optimized protein cascade rankings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pathwayData}>
                  <CartesianGrid strokeDasharray="3,3" stroke="#374151" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#9CA3AF"
                    fontSize={10}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Bar 
                    dataKey="probability" 
                    fill="url(#greenGradient)"
                    radius={[2, 2, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <Separator className="my-4 bg-green-500/20" />
            
            <div className="space-y-3">
              {pathwayData.slice(0, 3).map((pathway, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-500/20 text-green-400">#{index + 1}</Badge>
                      <span className="text-sm text-gray-300 font-mono">{pathway.name}</span>
                    </div>
                    <Progress 
                      value={pathway.confidence * 100} 
                      className="mt-1 h-1"
                    />
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-green-400 font-semibold">{(pathway.probability * 100).toFixed(1)}%</div>
                    <div className="text-xs text-gray-400">conf: {(pathway.confidence * 100).toFixed(0)}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quantum Interference Pattern */}
        <Card className="bg-black/40 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-white">Quantum Interference Pattern</CardTitle>
            <CardDescription className="text-gray-400">
              Photonic quantum walk evolution
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={interferenceData}>
                  <CartesianGrid strokeDasharray="3,3" stroke="#374151" />
                  <XAxis 
                    dataKey="step" 
                    stroke="#9CA3AF"
                    fontSize={12}
                  />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Line 
                    type="monotone" 
                    dataKey="amplitude" 
                    stroke="#22d3ee" 
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="phase" 
                    stroke="#a855f7" 
                    strokeWidth={2}
                    strokeDasharray="5,5"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <Separator className="my-4 bg-cyan-500/20" />

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-400 mb-2">Quantum States</div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-mono text-cyan-400">|1,0,1,0⟩</span>
                    <span className="text-white">0.456</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono text-purple-400">|0,1,0,1⟩</span>
                    <span className="text-white">0.332</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono text-green-400">|1,1,0,0⟩</span>
                    <span className="text-white">0.212</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-gray-400 mb-2">Coherence Metrics</div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Fidelity</span>
                    <span className="text-cyan-400">0.947</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Entanglement</span>
                    <span className="text-purple-400">0.623</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Purity</span>
                    <span className="text-green-400">0.891</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analysis */}
      <Card className="bg-black/40 border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-white">Biological Interpretation</CardTitle>
          <CardDescription className="text-gray-400">
            Quantum-enhanced pathway analysis for cancer suppression
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Optimal Cascade: p53→PUMA→BAX</h4>
              <p className="text-gray-300 mb-4">
                The quantum optimization identified the p53-mediated apoptotic pathway as the most 
                efficient route to programmed cell death, with 87.3% confidence based on 
                constructive quantum interference patterns.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Tumor Suppressor Activation</span>
                  <Badge className="bg-blue-500/20 text-blue-400">p53: Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Pro-apoptotic Signaling</span>
                  <Badge className="bg-green-500/20 text-green-400">PUMA/BAX: Enhanced</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Execution Phase</span>
                  <Badge className="bg-red-500/20 text-red-400">Caspase: Triggered</Badge>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Quantum Advantage</h4>
              <p className="text-gray-300 mb-4">
                Photonic quantum interference allowed exploration of 10^6 pathway combinations 
                simultaneously, identifying constructive interference patterns that correspond 
                to synergistic protein interactions.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="text-xs text-gray-400 mb-2">QUBO Energy Landscape</div>
                <div className="h-16 bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-green-500/20 rounded relative">
                  <div className="absolute left-3/4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">Global minimum achieved at -2.847</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimulationResults;
