import React, { useState } from 'react';
import { Filter, DollarSign, AlertCircle, CheckCircle2, RotateCcw } from 'lucide-react';

interface ProjectReq {
  id: number;
  title: string;
  cost: number; // en Millions FCFA
  category: 'Must' | 'Should' | 'Could' | 'Wont';
  description: string;
}

const defaultProjects: ProjectReq[] = [
  { id: 1, title: "Réparation d'urgence du château d'eau communal (panne moteur)", cost: 25, category: 'Must', description: "15 000 habitants sans eau potable depuis 10 jours." },
  { id: 2, title: "Réfection de la toiture arrachée du dispensaire de Diabo", cost: 18, category: 'Must', description: "Risque imminent d'inondation de la pharmacie et des salles d'accouchement." },
  { id: 3, title: "Reprofilage de la piste vivrière rurale (désenclavement récoltes)", cost: 45, category: 'Should', description: "Essentiel pour l'évacuation de la production d'anacarde et d'igname vers Bouaké." },
  { id: 4, title: "Installation de lampadaires solaires au grand marché", cost: 20, category: 'Should', description: "Sécurisation des commerçantes à la tombée de la nuit." },
  { id: 5, title: "Construction d'un foyer polyvalent des jeunes", cost: 35, category: 'Could', description: "Demande sociale forte des mutuelles, valorisant pour les loisirs." },
  { id: 6, title: "Aménagement paysager et fontaine sur l'esplanade du Conseil", cost: 30, category: 'Could', description: "Prestige et esthétique institutionnelle." },
  { id: 7, title: "Achat d'une flotte de berlines de grand luxe pour les élus", cost: 120, category: 'Wont', description: "Requête démesurée, hors mandat prioritaire des populations." },
];

export const InteractiveMoSCoW: React.FC = () => {
  const [projects, setProjects] = useState<ProjectReq[]>(defaultProjects);
  const budgetPlafond = 110; // 110 Millions FCFA budget d'investissement annuel disponible

  const setCategory = (id: number, cat: ProjectReq['category']) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, category: cat } : p));
  };

  const mustTotal = projects.filter(p => p.category === 'Must').reduce((sum, p) => sum + p.cost, 0);
  const shouldTotal = projects.filter(p => p.category === 'Should').reduce((sum, p) => sum + p.cost, 0);
  const couldTotal = projects.filter(p => p.category === 'Could').reduce((sum, p) => sum + p.cost, 0);
  const wontTotal = projects.filter(p => p.category === 'Wont').reduce((sum, p) => sum + p.cost, 0);

  const retainedBudget = mustTotal + shouldTotal + couldTotal;
  const isBudgetExceeded = retainedBudget > budgetPlafond;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Filter size={13} /> Arbitrage Budgétaire
            </span>
            <h4 className="font-bold text-gray-900 text-lg">Simulateur d'Arbitrage MoSCoW (Budget Limité)</h4>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            Enveloppe d'investissement disponible : <strong>{budgetPlafond} Millions FCFA</strong>. Classez les projets reçus des communautés pour ne pas dépasser le plafond !
          </p>
        </div>

        <button 
          onClick={() => setProjects(defaultProjects)}
          className="text-xs text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 self-start sm:self-auto transition-colors font-medium"
        >
          <RotateCcw size={13} /> Réinitialiser
        </button>
      </div>

      {/* Jauge Budgétaire */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs mb-6">
        <div className="flex justify-between items-center mb-2 text-xs">
          <span className="font-bold text-gray-700 flex items-center gap-1">
            <DollarSign size={14} className="text-emerald-600" />
            Budget Retenu (Must + Should + Could) : <strong className={`ml-1 text-sm ${isBudgetExceeded ? 'text-red-600' : 'text-emerald-700'}`}>{retainedBudget} M FCFA</strong>
          </span>
          <span className="font-semibold text-gray-500">Plafond : {budgetPlafond} M FCFA</span>
        </div>
        
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden flex">
          <div style={{ width: `${Math.min((mustTotal / budgetPlafond) * 100, 100)}%` }} className="bg-red-500 h-full" title={`Must: ${mustTotal} M`}></div>
          <div style={{ width: `${Math.min((shouldTotal / budgetPlafond) * 100, 100)}%` }} className="bg-amber-500 h-full" title={`Should: ${shouldTotal} M`}></div>
          <div style={{ width: `${Math.min((couldTotal / budgetPlafond) * 100, 100)}%` }} className="bg-emerald-500 h-full" title={`Could: ${couldTotal} M`}></div>
        </div>

        {isBudgetExceeded ? (
          <div className="mt-2 text-xs text-red-600 font-bold flex items-center gap-1.5">
            <AlertCircle size={14} /> Dépassement budgétaire de {retainedBudget - budgetPlafond} M FCFA ! Rétrogradez certains projets en "Won't have" ou "Could have".
          </div>
        ) : (
          <div className="mt-2 text-xs text-emerald-700 font-medium flex items-center gap-1.5">
            <CheckCircle2 size={14} /> Enveloppe respectée ! Il reste {budgetPlafond - retainedBudget} M FCFA de marge de sécurité budgétaire.
          </div>
        )}
      </div>

      {/* Liste des projets */}
      <div className="space-y-3">
        {projects.map(proj => (
          <div key={proj.id} className="bg-white border border-gray-200 rounded-xl p-3.5 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-800 text-sm">{proj.title}</span>
                <span className="bg-slate-100 text-slate-800 text-xs font-black px-2 py-0.5 rounded border border-slate-200 shrink-0">
                  {proj.cost} M FCFA
                </span>
              </div>
              <p className="text-xs text-gray-600">{proj.description}</p>
            </div>

            <div className="flex items-center gap-1.5 shrink-0 self-end md:self-auto">
              <button 
                onClick={() => setCategory(proj.id, 'Must')}
                className={`text-xs px-2.5 py-1.5 rounded-lg font-bold transition-all ${proj.category === 'Must' ? 'bg-red-600 text-white shadow-xs' : 'bg-gray-100 text-gray-600 hover:bg-red-50'}`}
              >
                M (Vital)
              </button>
              <button 
                onClick={() => setCategory(proj.id, 'Should')}
                className={`text-xs px-2.5 py-1.5 rounded-lg font-bold transition-all ${proj.category === 'Should' ? 'bg-amber-600 text-white shadow-xs' : 'bg-gray-100 text-gray-600 hover:bg-amber-50'}`}
              >
                S (Important)
              </button>
              <button 
                onClick={() => setCategory(proj.id, 'Could')}
                className={`text-xs px-2.5 py-1.5 rounded-lg font-bold transition-all ${proj.category === 'Could' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-gray-100 text-gray-600 hover:bg-emerald-50'}`}
              >
                C (Confort)
              </button>
              <button 
                onClick={() => setCategory(proj.id, 'Wont')}
                className={`text-xs px-2.5 py-1.5 rounded-lg font-bold transition-all ${proj.category === 'Wont' ? 'bg-gray-800 text-white shadow-xs' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                W (Rejeté)
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
