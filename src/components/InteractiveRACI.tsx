import React, { useState } from 'react';
import { Users, CheckCircle2, AlertTriangle, HelpCircle, RotateCcw } from 'lucide-react';

type RaciRole = 'R' | 'A' | 'C' | 'I' | '-';

interface RaciRow {
  id: number;
  task: string;
  assignments: {
    technique: RaciRole;
    marches: RaciRole;
    financier: RaciRole;
    president: RaciRole;
  };
}

const initialRaciData: RaciRow[] = [
  {
    id: 1,
    task: "1. Rédaction du cahier des charges technique du château d'eau",
    assignments: { technique: 'R', marches: 'I', financier: '-', president: 'A' }
  },
  {
    id: 2,
    task: "2. Lancement et publication de l'Appel d'Offres",
    assignments: { technique: 'C', marches: 'R', financier: 'C', president: 'A' }
  },
  {
    id: 3,
    task: "3. Ordonnancement & paiement de l'acompte de démarrage",
    assignments: { technique: 'C', marches: 'I', financier: 'R', president: 'A' }
  },
  {
    id: 4,
    task: "4. Constat contradictoire et réception technique sur le chantier",
    assignments: { technique: 'A', marches: 'I', financier: 'I', president: 'I' }
  }
];

export const InteractiveRACI: React.FC = () => {
  const [rows, setRows] = useState<RaciRow[]>(initialRaciData);

  const handleRoleChange = (rowId: number, column: keyof RaciRow['assignments'], newRole: RaciRole) => {
    setRows(prev => prev.map(row => {
      if (row.id !== rowId) return row;
      return {
        ...row,
        assignments: {
          ...row.assignments,
          [column]: newRole
        }
      };
    }));
  };

  const checkRowStatus = (row: RaciRow) => {
    const roles = Object.values(row.assignments);
    const aCount = roles.filter(r => r === 'A').length;
    const rCount = roles.filter(r => r === 'R').length;

    if (aCount === 0) return { valid: false, message: "Manque d'Approbateur (A) : personne n'est imputable !" };
    if (aCount > 1) return { valid: false, message: `Règle violée : ${aCount} Approbateurs (A) ! Il ne peut y avoir qu'UN SEUL 'A'.` };
    if (rCount === 0) return { valid: false, message: "Aucun Réalisateur (R) désigné : personne ne fait le travail." };
    return { valid: true, message: "Structure RACI valide et équilibrée." };
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-indigo-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Users size={13} /> Atelier Pratique
            </span>
            <h4 className="font-bold text-gray-900 text-lg">Simulateur & Vérificateur de Matrice RACI</h4>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            Modifiez les lettres R-A-C-I pour chaque département. Le vérificateur contrôle instantanément la <strong>Règle d'or : Un seul 'A' (Imputable) par tâche !</strong>
          </p>
        </div>

        <button 
          onClick={() => setRows(initialRaciData)}
          className="text-xs text-indigo-700 bg-white hover:bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 self-start sm:self-auto transition-colors font-medium"
        >
          <RotateCcw size={13} /> Réinitialiser
        </button>
      </div>

      {/* Rappel des 4 lettres */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center text-xs">
          <strong className="text-blue-700 font-black">R = Réalise</strong>
          <span className="text-[10px] text-gray-600 block">Exécute le travail</span>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-2 text-center text-xs">
          <strong className="text-red-700 font-black">A = Approuve (1 seul !)</strong>
          <span className="text-[10px] text-gray-600 block">Rend compte / Imputable</span>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center text-xs">
          <strong className="text-amber-700 font-black">C = Consulté</strong>
          <span className="text-[10px] text-gray-600 block">Avis requis AVANT</span>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-center text-xs">
          <strong className="text-emerald-700 font-black">I = Informé</strong>
          <span className="text-[10px] text-gray-600 block">Tenu au courant APRÈS</span>
        </div>
      </div>

      <div className="overflow-x-auto shadow-2xs border border-gray-200 rounded-xl bg-white mb-4">
        <table className="min-w-full text-xs text-center">
          <thead className="bg-indigo-950 text-white">
            <tr>
              <th className="p-3 text-left w-2/5">Tâche ou Activité Opérationnelle</th>
              <th className="p-3 border-l border-indigo-800">Dir. Technique</th>
              <th className="p-3 border-l border-indigo-800">Dir. Marchés</th>
              <th className="p-3 border-l border-indigo-800">Dir. Financière</th>
              <th className="p-3 border-l border-indigo-800">Président CR</th>
              <th className="p-3 border-l border-indigo-800 text-left">Diagnostic Règle</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map(row => {
              const status = checkRowStatus(row);
              return (
                <tr key={row.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-3 text-left font-semibold text-gray-800">{row.task}</td>

                  {/* Dir Technique */}
                  <td className="p-2 border-l border-gray-200">
                    <select
                      value={row.assignments.technique}
                      onChange={(e) => handleRoleChange(row.id, 'technique', e.target.value as RaciRole)}
                      aria-label={`Rôle RACI pour Dir. Technique sur la tâche: ${row.task}`}
                      className={`font-black rounded-md px-2 py-1 text-xs border focus:outline-hidden ${
                        row.assignments.technique === 'A' ? 'bg-red-50 text-red-700 border-red-300' :
                        row.assignments.technique === 'R' ? 'bg-blue-50 text-blue-700 border-blue-300' :
                        row.assignments.technique === 'C' ? 'bg-amber-50 text-amber-700 border-amber-300' :
                        row.assignments.technique === 'I' ? 'bg-emerald-50 text-emerald-700 border-emerald-300' :
                        'bg-gray-100 text-gray-400 border-gray-200'
                      }`}
                    >
                      <option value="-">-</option>
                      <option value="R">R</option>
                      <option value="A">A</option>
                      <option value="C">C</option>
                      <option value="I">I</option>
                    </select>
                  </td>

                  {/* Dir Marchés */}
                  <td className="p-2 border-l border-gray-200">
                    <select
                      value={row.assignments.marches}
                      onChange={(e) => handleRoleChange(row.id, 'marches', e.target.value as RaciRole)}
                      aria-label={`Rôle RACI pour Dir. Marchés sur la tâche: ${row.task}`}
                      className={`font-black rounded-md px-2 py-1 text-xs border focus:outline-hidden ${
                        row.assignments.marches === 'A' ? 'bg-red-50 text-red-700 border-red-300' :
                        row.assignments.marches === 'R' ? 'bg-blue-50 text-blue-700 border-blue-300' :
                        row.assignments.marches === 'C' ? 'bg-amber-50 text-amber-700 border-amber-300' :
                        row.assignments.marches === 'I' ? 'bg-emerald-50 text-emerald-700 border-emerald-300' :
                        'bg-gray-100 text-gray-400 border-gray-200'
                      }`}
                    >
                      <option value="-">-</option>
                      <option value="R">R</option>
                      <option value="A">A</option>
                      <option value="C">C</option>
                      <option value="I">I</option>
                    </select>
                  </td>

                  {/* Dir Financier */}
                  <td className="p-2 border-l border-gray-200">
                    <select
                      value={row.assignments.financier}
                      onChange={(e) => handleRoleChange(row.id, 'financier', e.target.value as RaciRole)}
                      aria-label={`Rôle RACI pour Dir. Financière sur la tâche: ${row.task}`}
                      className={`font-black rounded-md px-2 py-1 text-xs border focus:outline-hidden ${
                        row.assignments.financier === 'A' ? 'bg-red-50 text-red-700 border-red-300' :
                        row.assignments.financier === 'R' ? 'bg-blue-50 text-blue-700 border-blue-300' :
                        row.assignments.financier === 'C' ? 'bg-amber-50 text-amber-700 border-amber-300' :
                        row.assignments.financier === 'I' ? 'bg-emerald-50 text-emerald-700 border-emerald-300' :
                        'bg-gray-100 text-gray-400 border-gray-200'
                      }`}
                    >
                      <option value="-">-</option>
                      <option value="R">R</option>
                      <option value="A">A</option>
                      <option value="C">C</option>
                      <option value="I">I</option>
                    </select>
                  </td>

                  {/* Président */}
                  <td className="p-2 border-l border-gray-200">
                    <select
                      value={row.assignments.president}
                      onChange={(e) => handleRoleChange(row.id, 'president', e.target.value as RaciRole)}
                      aria-label={`Rôle RACI pour Président CR sur la tâche: ${row.task}`}
                      className={`font-black rounded-md px-2 py-1 text-xs border focus:outline-hidden ${
                        row.assignments.president === 'A' ? 'bg-red-50 text-red-700 border-red-300' :
                        row.assignments.president === 'R' ? 'bg-blue-50 text-blue-700 border-blue-300' :
                        row.assignments.president === 'C' ? 'bg-amber-50 text-amber-700 border-amber-300' :
                        row.assignments.president === 'I' ? 'bg-emerald-50 text-emerald-700 border-emerald-300' :
                        'bg-gray-100 text-gray-400 border-gray-200'
                      }`}
                    >
                      <option value="-">-</option>
                      <option value="R">R</option>
                      <option value="A">A</option>
                      <option value="C">C</option>
                      <option value="I">I</option>
                    </select>
                  </td>

                  {/* Diagnostic */}
                  <td className="p-2 border-l border-gray-200 text-left">
                    <div className="flex items-center gap-1.5">
                      {status.valid ? (
                        <>
                          <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                          <span className="text-[11px] text-emerald-700 font-semibold">{status.message}</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle size={14} className="text-red-600 shrink-0" />
                          <span className="text-[11px] text-red-700 font-bold">{status.message}</span>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 flex items-start gap-2">
        <HelpCircle size={16} className="text-amber-700 shrink-0 mt-0.5" />
        <span>
          <strong>Astuce Pédagogique du Formateur :</strong> Si vous attribuez "A" à la fois au Directeur Technique et au Président sur la même ligne, le système signale une faute de gouvernance. <em>"Si deux personnes sont imputables d'une même tâche, en réalité personne ne l'est !"</em>
        </span>
      </div>
    </div>
  );
};
