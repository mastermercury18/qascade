
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Plus, X, Upload, Dna } from 'lucide-react';

const ProteinNetworkInput = () => {
  const [proteins, setProteins] = useState([
    { id: 'p53', name: 'p53', type: 'tumor-suppressor', expression: 0.8 },
    { id: 'akt', name: 'AKT', type: 'survival', expression: 0.6 },
    { id: 'puma', name: 'PUMA', type: 'pro-apoptotic', expression: 0.7 },
  ]);

  const [newProtein, setNewProtein] = useState({
    name: '',
    type: 'pro-apoptotic',
    expression: 0.5,
  });

  const [interactions, setInteractions] = useState([
    { from: 'p53', to: 'puma', weight: 0.8, type: 'activation' },
    { from: 'akt', to: 'p53', weight: -0.6, type: 'inhibition' }
  ]);

  const proteinTypes = [
    'tumor-suppressor',
    'pro-apoptotic',
    'anti-apoptotic',
    'survival',
    'executor',
    'regulatory'
  ];

  const addProtein = () => {
    if (newProtein.name) {
      setProteins([...proteins, {
        id: newProtein.name.toLowerCase(),
        ...newProtein
      }]);
      setNewProtein({ name: '', type: 'pro-apoptotic', expression: 0.5 });
    }
  };

  const removeProtein = (id) => {
    setProteins(proteins.filter(p => p.id !== id));
    setInteractions(interactions.filter(i => i.from !== id && i.to !== id));
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'tumor-suppressor': return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'pro-apoptotic': return 'bg-green-500/20 text-green-400 border-green-500/40';
      case 'anti-apoptotic': return 'bg-red-500/20 text-red-400 border-red-500/40';
      case 'survival': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40';
      case 'executor': return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
      case 'regulatory': return 'bg-gray-500/20 text-gray-400 border-gray-500/40';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/40';
    }
  };

  return (
    <Card className="bg-black/40 border-cyan-500/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Dna className="h-5 w-5 mr-2 text-cyan-400" />
          Protein Network Configuration
        </CardTitle>
        <CardDescription className="text-gray-400">
          Define proteins and interactions for quantum optimization
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Add New Protein */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white">Add Protein</h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="protein-name" className="text-gray-300">Name</Label>
              <Input
                id="protein-name"
                value={newProtein.name}
                onChange={(e) => setNewProtein({...newProtein, name: e.target.value})}
                placeholder="e.g., BAX, Caspase-3"
                className="bg-slate-800/50 border-gray-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="protein-type" className="text-gray-300">Type</Label>
              <Select 
                value={newProtein.type} 
                onValueChange={(value) => setNewProtein({...newProtein, type: value})}
              >
                <SelectTrigger className="bg-slate-800/50 border-gray-600 text-white">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-gray-600">
                  {proteinTypes.map(type => (
                    <SelectItem key={type} value={type} className="text-white hover:bg-slate-700">
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="expression" className="text-gray-300">
              Expression Level: {newProtein.expression.toFixed(2)}
            </Label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={newProtein.expression}
              onChange={(e) => setNewProtein({...newProtein, expression: parseFloat(e.target.value)})}
              className="w-full mt-1"
            />
          </div>
          <Button onClick={addProtein} className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/40">
            <Plus className="h-4 w-4 mr-2" />
            Add Protein
          </Button>
        </div>

        <Separator className="bg-cyan-500/20" />

        {/* Current Proteins */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white">Network Components ({proteins.length})</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {proteins.map((protein) => (
              <div key={protein.id} className="flex items-center justify-between bg-slate-800/30 rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <div>
                    <div className="text-white font-semibold">{protein.name}</div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className={getTypeColor(protein.type)}>
                        {protein.type}
                      </Badge>
                      <span className="text-xs text-gray-400">
                        expr: {protein.expression.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => removeProtein(protein.id)}
                  variant="ghost"
                  size="sm"
                  className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-cyan-500/20" />

        {/* Network Statistics */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">Network Statistics</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Proteins</span>
                <span className="text-cyan-400">{proteins.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Interactions</span>
                <span className="text-purple-400">{interactions.length}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Pro-apoptotic</span>
                <span className="text-green-400">
                  {proteins.filter(p => p.type === 'pro-apoptotic').length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Anti-apoptotic</span>
                <span className="text-red-400">
                  {proteins.filter(p => p.type === 'anti-apoptotic').length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Import/Export */}
        <Separator className="bg-cyan-500/20" />
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1 bg-slate-800/50 border-gray-600 text-gray-300 hover:bg-slate-700/50">
            <Upload className="h-4 w-4 mr-2" />
            Import CSV
          </Button>
          <Button variant="outline" className="flex-1 bg-slate-800/50 border-gray-600 text-gray-300 hover:bg-slate-700/50">
            Export Network
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProteinNetworkInput;
