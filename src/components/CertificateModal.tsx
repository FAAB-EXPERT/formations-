import React from 'react';
import { X, Award, Printer, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  learnerName: string;
  score: number;
  total: number;
  dateStr: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  learnerName,
  score,
  total,
  dateStr,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const percentage = Math.round((score / total) * 100);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-gray-200 overflow-hidden animate-fadeIn my-8">
        {/* Top actions */}
        <div className="no-print bg-slate-900 text-white px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Award className="text-amber-400" size={18} /> Attestation Officielle de Réussite
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Printer size={14} /> Imprimer l'Attestation
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Certificate Area */}
        <div className="p-8 md:p-12 bg-linear-to-b from-amber-50/40 via-white to-amber-50/20 border-8 border-double border-amber-800/30 m-4 rounded-xl relative text-center">
          
          {/* Institutional Header */}
          <div className="border-b-2 border-amber-900/20 pb-4 mb-6">
            <span className="text-[11px] font-black uppercase tracking-widest text-amber-900 block">
              RÉPUBLIQUE DE CÔTE D'IVOIRE
            </span>
            <span className="text-[9px] uppercase tracking-wider text-gray-500 block">
              Union - Discipline - Travail
            </span>
            <h2 className="text-xl md:text-2xl font-black text-blue-950 uppercase tracking-tight mt-2">
              CONSEIL RÉGIONAL DU GBÊKÊ
            </h2>
            <p className="text-xs text-blue-800 font-semibold tracking-wide">
              Programme de Renforcement des Capacités Opérationnelles des 49 Agents
            </p>
          </div>

          <div className="my-6">
            <span className="text-xs uppercase font-extrabold text-amber-800 tracking-widest">
              ATTESTATION DE FORMATION PROFESSIONNELLE
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mt-2 font-serif">
              Gestion Axée sur les Résultats (GAR)
            </h3>
            <p className="text-xs text-gray-600 mt-1 max-w-lg mx-auto">
              Suivi des Tâches (WBS/Gantt/PERT/Kanban), Pilotage Budgétaire (EVM), Suivi-Évaluation & Conduite du Changement
            </p>
          </div>

          <p className="text-sm text-gray-700">Cette attestation d'évaluation est décernée avec félicitations à :</p>
          <div className="my-3 py-2 border-b-2 border-dashed border-gray-300 max-w-md mx-auto">
            <span className="text-2xl font-extrabold text-blue-900 font-serif">
              {learnerName || "Agent du Conseil Régional du Gbêkê"}
            </span>
          </div>

          <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
            Pour avoir suivi l'intégralité du cursus et validé avec succès l'examen final de connaissances avec une note d'excellence de :
          </p>
          
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold px-4 py-1.5 rounded-full my-3 text-sm">
            <CheckCircle2 size={16} className="text-emerald-600" />
            <span>Score : {score} / {total} ({percentage}%) - ADMIS(E)</span>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-200 text-left text-xs">
            <div>
              <span className="text-[10px] text-gray-500 block uppercase font-bold">Fait à Bouaké, le :</span>
              <span className="font-semibold text-gray-800">{dateStr}</span>
              <div className="mt-4 flex items-center gap-1.5 text-blue-900 font-bold">
                <ShieldCheck size={16} className="text-blue-700" />
                <span>Certification Validée</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-gray-500 block uppercase font-bold">L'Expert Formateur Consultant :</span>
              <span className="font-bold text-gray-900 block text-sm">Koffié Fabien Michael</span>
              <span className="text-[10px] text-gray-500 block">Économiste, Expert en Étude de Développement</span>
              <div className="mt-3 text-[10px] text-blue-700 italic">
                Propriété intellectuelle M. Koffié F. M.
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 text-[9px] text-gray-400 border-t border-gray-100">
            Document officiel généré numériquement sur la plateforme E-Learning du Conseil Régional du Gbêkê.
          </div>
        </div>
      </div>
    </div>
  );
};
