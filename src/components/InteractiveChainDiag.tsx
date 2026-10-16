import React, { useState } from 'react';
import { Target, AlertTriangle, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface Scenario {
  id: number;
  title: string;
  situation: string;
  breakLevel: 'Intrants ➔ Activités' | 'Activités ➔ Extrants' | 'Extrants ➔ Effets/Impacts';
  typeGoulot: 'Goulot Administratif' | 'Goulot Opérationnel' | 'Goulot Stratégique';
  cause: string;
  remedy: string;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Cas 1 : L'école sans instituteurs ni élèves",
    situation: "Le bâtiment de 3 classes a été achevé dans les délais et payé à 100%. Mais à la rentrée, aucun enseignant n'a été affecté par le Ministère et les enfants continuent de faire 7 km à pied.",
    breakLevel: 'Extrants ➔ Effets/Impacts',
    typeGoulot: 'Goulot Stratégique',
    cause: "Défaut d'alignement interinstitutionnel et absence de convention préalable avec la DRENA (Éducation Nationale). On a géré les briques (extrant) sans penser à l'impact (scolarisation).",
    remedy: "Conditionner tout futur projet scolaire à la signature d'un accord d'affectation de personnel dès la phase de programmation budgétaire."
  },
  {
    id: 2,
    title: "Cas 2 : L'entreprise abandonne le chantier du château d'eau",
    situation: "Les travaux ont débuté avec enthousiasme, mais le chantier s'est figé depuis 4 mois. L'entrepreneur affirme ne pas avoir reçu le paiement de ses deux premiers décomptes.",
    breakLevel: 'Activités ➔ Extrants',
    typeGoulot: 'Goulot Opérationnel',
    cause: "Circuit de mandatement grippé (visa financier lent, signature du Président en attente, blocage des fonds au Trésor). L'entreprise est en rupture de trésorerie.",
    remedy: "Mettre en place un tableau de bord partagé avec le Trésorier Payeur Régional et instituer un délai maximum strict de 15 jours pour le traitement des décomptes visés."
  },
  {
    id: 3,
    title: "Cas 3 : Les fonds sont votés, mais rien ne commence après 6 mois",
    situation: "Le budget de 50 millions a été voté et approuvé par la Tutelle préfectorale en janvier. En juillet, les Termes de Référence n'ont toujours pas été validés et l'appel d'offres n'est pas rédigé.",
    breakLevel: 'Intrants ➔ Activités',
    typeGoulot: 'Goulot Administratif',
    cause: "Manque d'imputabilité claire (pas de matrice RACI), surcharge de travail non anticipée à la Direction des Marchés, lenteur dans la rédaction des spécifications techniques.",
    remedy: "Désigner formellement un Chef de Projet par lettre de mission avec un calendrier à rebours (rétro-planning) et des jalons bimensuels opposables."
  }
];

export const InteractiveChainDiag: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(scenarios[0]);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm mt-8">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <AlertTriangle size={13} /> Diagnostic GAR
        </span>
        <h4 className="font-bold text-gray-900 text-lg">Détecteur de Rupture dans la Chaîne de Résultats</h4>
      </div>
      <p className="text-xs text-gray-600 mb-5">
        Sélectionnez une situation vécue au Conseil Régional pour localiser où la chaîne logique s'est brisée et identifier le remède institutionnel approprié.
      </p>

      {/* Selector buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
        {scenarios.map(sc => (
          <button
            key={sc.id}
            onClick={() => setSelectedScenario(sc)}
            className={`p-3 rounded-xl text-left border transition-all text-xs font-bold ${
              selectedScenario.id === sc.id 
                ? 'bg-blue-900 text-white border-blue-950 shadow-md' 
                : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50'
            }`}
          >
            {sc.title}
          </button>
        ))}
      </div>

      {/* Scenario detail card */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-2xs space-y-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Situation constatée sur le terrain :</span>
          <p className="text-sm font-medium text-gray-800 mt-1 italic bg-amber-50/50 p-3 rounded-lg border border-amber-200/50">
            "{selectedScenario.situation}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3.5">
            <span className="text-xs font-black text-red-700 uppercase tracking-wider block mb-1">
              Rupture : {selectedScenario.breakLevel}
            </span>
            <span className="text-sm font-bold text-red-900 block mb-2">{selectedScenario.typeGoulot}</span>
            <p className="text-xs text-red-800 leading-relaxed">
              <strong>Cause profonde :</strong> {selectedScenario.cause}
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3.5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black text-emerald-800 uppercase tracking-wider block mb-1 flex items-center gap-1">
                <ShieldCheck size={14} className="text-emerald-600" /> Remède GAR Recommandé
              </span>
              <p className="text-xs text-emerald-900 leading-relaxed font-medium mt-2">
                {selectedScenario.remedy}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-emerald-200/60 text-[11px] text-emerald-700 flex items-center gap-1 font-semibold">
              <CheckCircle2 size={13} /> Rétablit la culture de la redevabilité
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
