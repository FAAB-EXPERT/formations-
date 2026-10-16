import React, { useState } from 'react';
import { Calculator, AlertTriangle, CheckCircle2, TrendingUp, TrendingDown, DollarSign, RotateCcw } from 'lucide-react';

export const InteractiveEVM: React.FC = () => {
  const [cp, setCp] = useState<number>(60); // Coût Planifié en Millions FCFA
  const [ca, setCa] = useState<number>(42); // Coût Acquis en Millions FCFA
  const [cr, setCr] = useState<number>(55); // Coût Réel en Millions FCFA
  const bac = 100; // Budget total à l'achèvement

  const ipd = cp > 0 ? parseFloat((ca / cp).toFixed(2)) : 1;
  const ipc = cr > 0 ? parseFloat((ca / cr).toFixed(2)) : 1;
  const ed = ca - cp; // Écart de délai en Millions FCFA
  const ec = ca - cr; // Écart de coût en Millions FCFA
  const eac = ipc > 0 ? Math.round(bac / ipc) : bac; // Estimation finale

  const getScheduleStatus = () => {
    if (ipd >= 1) return { text: "Projet en avance ou dans les délais", color: "text-emerald-700 bg-emerald-50 border-emerald-300", icon: CheckCircle2 };
    if (ipd >= 0.85) return { text: "Léger retard opérationnel (Vigilance)", color: "text-amber-700 bg-amber-50 border-amber-300", icon: AlertTriangle };
    return { text: "Retard critique sur le chantier ! (Goulot détecté)", color: "text-red-700 bg-red-50 border-red-300", icon: AlertTriangle };
  };

  const getCostStatus = () => {
    if (ipc >= 1) return { text: "Économies ou stricte conformité financière", color: "text-emerald-700 bg-emerald-50 border-emerald-300", icon: TrendingUp };
    if (ipc >= 0.85) return { text: "Dépassement modéré des coûts", color: "text-amber-700 bg-amber-50 border-amber-300", icon: AlertTriangle };
    return { text: "Déficit budgétaire lourd (Gaspillage / Surcoût)", color: "text-red-700 bg-red-50 border-red-300", icon: TrendingDown };
  };

  const scheduleInfo = getScheduleStatus();
  const costInfo = getCostStatus();

  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50/40 border border-indigo-200/80 rounded-2xl p-6 shadow-sm mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Calculator size={13} /> Outil Interactif
            </span>
            <h4 className="font-bold text-gray-900 text-lg">Simulateur & Calculateur EVM en Temps Réel</h4>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            Ajustez les curseurs des 3 piliers (exprimés en Millions FCFA pour un budget total BAC de {bac} M FCFA) pour observer les indices de performance.
          </p>
        </div>

        <button 
          onClick={() => { setCp(60); setCa(42); setCr(55); }}
          className="text-xs text-indigo-700 bg-white hover:bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 self-start sm:self-auto transition-colors font-medium"
        >
          <RotateCcw size={13} /> Cas d'école par défaut
        </button>
      </div>

      {/* Sliders Input */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-5 rounded-xl border border-indigo-100 shadow-2xs mb-6">
        {/* CP */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold text-blue-900 flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span> CP (Coût Planifié)
            </label>
            <span className="text-sm font-extrabold text-blue-700">{cp} M FCFA</span>
          </div>
          <input 
            type="range" 
            min="10" 
            max="100" 
            value={cp} 
            onChange={(e) => setCp(Number(e.target.value))}
            className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <p className="text-[11px] text-gray-500 mt-1">Ce qu'on aurait dû faire à ce stade.</p>
        </div>

        {/* CA */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold text-emerald-900 flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> CA (Coût Acquis)
            </label>
            <span className="text-sm font-extrabold text-emerald-700">{ca} M FCFA</span>
          </div>
          <input 
            type="range" 
            min="10" 
            max="100" 
            value={ca} 
            onChange={(e) => setCa(Number(e.target.value))}
            className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <p className="text-[11px] text-gray-500 mt-1">La valeur du travail RÉELLEMENT fait.</p>
        </div>

        {/* CR */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold text-rose-900 flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span> CR (Coût Réel)
            </label>
            <span className="text-sm font-extrabold text-rose-700">{cr} M FCFA</span>
          </div>
          <input 
            type="range" 
            min="10" 
            max="100" 
            value={cr} 
            onChange={(e) => setCr(Number(e.target.value))}
            className="w-full h-2 bg-rose-100 rounded-lg appearance-none cursor-pointer accent-rose-600"
          />
          <p className="text-[11px] text-gray-500 mt-1">Ce qui a RÉELLEMENT été payé.</p>
        </div>
      </div>

      {/* KPI Display Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">Indice Délais (IPD)</span>
          <div className="flex items-baseline gap-2">
            <span className={`text-2xl font-black ${ipd >= 1 ? 'text-emerald-600' : 'text-red-600'}`}>{ipd}</span>
            <span className="text-xs text-gray-500 font-semibold">(CA / CP)</span>
          </div>
          <p className={`text-[11px] mt-2 font-medium px-2 py-1 rounded border ${scheduleInfo.color}`}>
            {ed >= 0 ? `+${ed} M FCFA d'avance` : `${ed} M FCFA de retard`}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">Indice Coûts (IPC)</span>
          <div className="flex items-baseline gap-2">
            <span className={`text-2xl font-black ${ipc >= 1 ? 'text-emerald-600' : 'text-red-600'}`}>{ipc}</span>
            <span className="text-xs text-gray-500 font-semibold">(CA / CR)</span>
          </div>
          <p className={`text-[11px] mt-2 font-medium px-2 py-1 rounded border ${costInfo.color}`}>
            {ec >= 0 ? `+${ec} M FCFA sous budget` : `${ec} M FCFA de déficit`}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">Efficience des fonds</span>
          <div className="text-2xl font-black text-indigo-700">
            {Math.round(ipc * 100)} %
          </div>
          <p className="text-[11px] text-gray-600 mt-2">
            Pour 100 FCFA décaissés, vous recevez {Math.round(ipc * 100)} FCFA de travail physique.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">Coût Final Estimé (EAC)</span>
          <div className={`text-2xl font-black ${eac > bac ? 'text-red-600' : 'text-emerald-600'}`}>
            {eac} M FCFA
          </div>
          <p className="text-[11px] text-gray-600 mt-2">
            Budget initial : {bac} M FCFA {eac > bac ? `(+${eac - bac} M de surcoût probable)` : '(Maîtrisé)'}
          </p>
        </div>
      </div>

      {/* Synthesis Diagnostic */}
      <div className="bg-white p-4 rounded-xl border-l-4 border-indigo-600 shadow-2xs">
        <h5 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
          <DollarSign size={16} className="text-indigo-600" /> Diagnostic du Chef de Projet & Identification du Goulot
        </h5>
        <div className="text-xs text-gray-700 space-y-1.5 leading-relaxed">
          {ipd < 1 && ipc < 1 && (
            <p>
              🔴 <strong>Situation Critique Combinée :</strong> Le chantier est à la fois en retard physique ({ipd < 0.85 ? 'retard important' : 'léger retard'}) et en dépassement financier (IPC = {ipc}). Le gestionnaire doit immédiatement convoquer l'entreprise pour justifier les surcoûts et vérifier si des factures ont été liquidées sans réception technique.
            </p>
          )}
          {ipd < 1 && ipc >= 1 && (
            <p>
              🟡 <strong>Retard avec dépenses maîtrisées :</strong> L'entreprise dépense peu ou n'a pas été payée. Le <strong>goulot d'étranglement est probablement administratif</strong> (factures en souffrance au Trésor ou attente de signature), ce qui paralyse l'approvisionnement des matériaux sur site.
            </p>
          )}
          {ipd >= 1 && ipc < 1 && (
            <p>
              🟠 <strong>Avance au prix de surcoûts :</strong> L'avancement physique est rapide (IPD = {ipd}), mais le chantier consomme trop de crédits (IPC = {ipc}). Attention aux heures supplémentaires ou aux avenants mal négociés.
            </p>
          )}
          {ipd >= 1 && ipc >= 1 && (
            <p>
              🟢 <strong>Excellente Performance Institutionnelle :</strong> Le projet est en avance et en deçà du budget. C'est l'exemple type d'une coordination interservices réussie et d'une saine gestion axée sur les résultats.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
