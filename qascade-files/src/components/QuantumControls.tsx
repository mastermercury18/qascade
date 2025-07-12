
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Play, Pause, RotateCcw, Settings, Zap, Atom } from 'lucide-react';

const QuantumControls = ({ onSimulationStart, onSimulationStop, onSimulationData }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [coherenceTime, setCoherenceTime] = useState([85]);
  const [interferometerPhases, setInterferometerPhases] = useState([45]);
  const [quantumWalkSteps, setQuantumWalkSteps] = useState([100]);
  const [fockStates, setFockStates] = useState([4]);

  const handleStart = () => {
    setIsRunning(true);
    onSimulationStart();
    
    // Simulate quantum computation
    setTimeout(() => {
      const mockData = {
        pathProbabilities: [0.23, 0.45, 0.18, 0.09, 0.05],
        quantumStates: ['|1,0,1,0⟩', '|0,1,0,1⟩', '|1,1,0,0⟩'],
        interferencePattern: Array.from({length: 10}, (_, i) => Math.sin(i * 0.5) * Math.random()),
      };
      onSimulationData(mockData);
    }, 3000);
  };

  const handleStop = () => {
    setIsRunning(false);
    onSimulationStop();
  };

  const handleReset = () => {
    setIsRunning(false);
    setCoherenceTime([85]);
    setInterferometerPhases([45]);
    setQuantumWalkSteps([100]);
    setFockStates([4]);
    onSimulationStop();
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Quantum Parameters */}
      <Card className="bg-black/40 border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Settings className="h-5 w-5 mr-2 text-purple-400" />
            Quantum Parameters
          </CardTitle>
          <CardDescription className="text-gray-400">
            Configure photonic interferometer settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-gray-300">Coherence Time (μs)</label>
              <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-purple-500/40">
                {coherenceTime[0]}μs
              </Badge>
            </div>
            <Slider
              value={coherenceTime}
              onValueChange={setCoherenceTime}
              max={200}
              min={10}
              step={5}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-gray-300">Interferometer Phase (°)</label>
              <Badge variant="outline" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/40">
                {interferometerPhases[0]}°
              </Badge>
            </div>
            <Slider
              value={interferometerPhases}
              onValueChange={setInterferometerPhases}
              max={360}
              min={0}
              step={15}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-gray-300">Quantum Walk Steps</label>
              <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/40">
                {quantumWalkSteps[0]}
              </Badge>
            </div>
            <Slider
              value={quantumWalkSteps}
              onValueChange={setQuantumWalkSteps}
              max={500}
              min={50}
              step={25}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-gray-300">Fock State Dimension</label>
              <Badge variant="outline" className="bg-orange-500/20 text-orange-400 border-orange-500/40">
                {fockStates[0]}
              </Badge>
            </div>
            <Slider
              value={fockStates}
              onValueChange={setFockStates}
              max={8}
              min={2}
              step={1}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Simulation Control */}
      <Card className="bg-black/40 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Zap className="h-5 w-5 mr-2 text-cyan-400" />
            Simulation Control
          </CardTitle>
          <CardDescription className="text-gray-400">
            Manage quantum pathway optimization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex space-x-3">
            <Button
              onClick={isRunning ? handleStop : handleStart}
              className={`flex-1 ${
                isRunning 
                  ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400 border-red-500/40' 
                  : 'bg-green-500/20 hover:bg-green-500/30 text-green-400 border-green-500/40'
              } border`}
            >
              {isRunning ? (
                <>
                  <Pause className="h-4 w-4 mr-2" />
                  Stop Simulation
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Start Simulation
                </>
              )}
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="bg-gray-500/20 hover:bg-gray-500/30 text-gray-400 border-gray-500/40"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          <Separator className="bg-cyan-500/20" />

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Quantum State</span>
              <Badge className={`${isRunning ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                {isRunning ? 'Coherent' : 'Decoherent'}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Simulation Progress</span>
                <span className="text-xs text-gray-400">{isRunning ? '87%' : '0%'}</span>
              </div>
              <Progress value={isRunning ? 87 : 0} className="w-full h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-400">Photon Count</div>
                <div className="text-cyan-400 font-mono">{isRunning ? '1,247' : '0'}</div>
              </div>
              <div>
                <div className="text-gray-400">QUBO Energy</div>
                <div className="text-purple-400 font-mono">{isRunning ? '-2.847' : '0.000'}</div>
              </div>
            </div>
          </div>

          {/* Quantum State Visualization */}
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-300">Quantum States</span>
              <Atom className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="space-y-2">
              {['|0,1,0,1⟩', '|1,0,1,0⟩', '|1,1,0,0⟩'].map((state, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-400">{state}</span>
                  <div className="w-16 h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000"
                      style={{ width: isRunning ? `${30 + Math.random() * 50}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuantumControls;
