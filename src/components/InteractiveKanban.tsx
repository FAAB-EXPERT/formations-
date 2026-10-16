import React, { useState } from 'react';
import { Plus, ArrowRight, ArrowLeft, AlertCircle, CheckCircle2, Clock, RotateCcw } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  department: string;
  status: 'todo' | 'in_progress' | 'done';
  priority?: 'high' | 'normal';
}

const initialTasks: Task[] = [
  { id: 1, title: "Rédiger les TDR pour la réhabilitation du Lycée", department: "Dir. Technique", status: 'todo', priority: 'normal' },
  { id: 2, title: "Signer l'ordre de mission terrain (District Vallée du Bandama)", department: "Présidence", status: 'todo', priority: 'high' },
  { id: 3, title: "Évaluation offres techniques forage hydraulique", department: "Dir. Marchés", status: 'in_progress', priority: 'high' },
  { id: 4, title: "Validation facture proforma équipement médical", department: "Dir. Financière", status: 'in_progress', priority: 'normal' },
  { id: 5, title: "Réunion de coordination avec les chefs de village", department: "Cabinet", status: 'in_progress', priority: 'normal' },
  { id: 6, title: "Vérification lignes budgétaires décompte N°3", department: "Contrôle Financier", status: 'in_progress', priority: 'high' },
  { id: 7, title: "Validation budget primitif régional 2026", department: "Conseil", status: 'done', priority: 'normal' },
];

export const InteractiveKanban: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [wipLimit, setWipLimit] = useState(3);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDept, setNewTaskDept] = useState('Dir. Technique');

  const inProgressCount = tasks.filter(t => t.status === 'in_progress').length;
  const isBottleneck = inProgressCount > wipLimit;

  const moveTask = (id: number, direction: 'forward' | 'backward') => {
    setTasks(prev => prev.map(task => {
      if (task.id !== id) return task;
      if (direction === 'forward') {
        if (task.status === 'todo') return { ...task, status: 'in_progress' };
        if (task.status === 'in_progress') return { ...task, status: 'done' };
      } else {
        if (task.status === 'done') return { ...task, status: 'in_progress' };
        if (task.status === 'in_progress') return { ...task, status: 'todo' };
      }
      return task;
    }));
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        title: newTaskTitle.trim(),
        department: newTaskDept,
        status: 'todo',
        priority: 'normal'
      }
    ]);
    setNewTaskTitle('');
  };

  const resetBoard = () => {
    setTasks(initialTasks);
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">Atelier Pratique</span>
            <h4 className="font-bold text-gray-900 text-base">Simulateur Kanban & Détection du Goulot</h4>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            Déplacez les dossiers entre les colonnes. Si la colonne <strong>En cours</strong> dépasse la limite WIP ({wipLimit}), le goulot s'active automatiquement !
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs bg-white border border-gray-200 px-2.5 py-1.5 rounded-lg shadow-2xs">
            <span className="text-gray-600 font-medium">Capacité WIP max :</span>
            <select 
              value={wipLimit} 
              onChange={(e) => setWipLimit(Number(e.target.value))}
              aria-label="Sélectionner la capacité WIP maximale"
              className="font-bold text-blue-700 bg-transparent focus:outline-hidden cursor-pointer"
            >
              <option value={2}>2 dossiers</option>
              <option value={3}>3 dossiers</option>
              <option value={4}>4 dossiers</option>
              <option value={5}>5 dossiers</option>
            </select>
          </div>
          <button 
            onClick={resetBoard}
            className="text-xs text-gray-600 hover:text-gray-900 flex items-center gap-1 bg-white border border-gray-200 px-2 py-1.5 rounded-lg transition-colors"
            title="Réinitialiser le tableau"
          >
            <RotateCcw size={13} /> Reset
          </button>
        </div>
      </div>

      {isBottleneck && (
        <div className="bg-red-500 text-white px-4 py-2.5 rounded-lg mb-4 text-xs font-medium flex items-center justify-between shadow-sm animate-pulse">
          <div className="flex items-center gap-2">
            <AlertCircle size={18} className="shrink-0" />
            <span><strong>Alerte Goulot d'Étranglement !</strong> Il y a {inProgressCount} dossiers en cours (capacité maximale conseillée : {wipLimit}). Les agents sont surchargés et les décaissements ralentissent.</span>
          </div>
          <span className="bg-white text-red-600 text-[11px] font-black px-2 py-0.5 rounded-full uppercase ml-2 shrink-0">WIP Dépassé</span>
        </div>
      )}

      {/* Grid columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* À FAIRE */}
        <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-2xs flex flex-col">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
            <span className="font-bold text-xs uppercase tracking-wider text-slate-700">1. À Faire (Backlog)</span>
            <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2 py-0.5 rounded-full">
              {tasks.filter(t => t.status === 'todo').length}
            </span>
          </div>
          <div className="space-y-2.5 flex-1 min-h-[140px]">
            {tasks.filter(t => t.status === 'todo').map(task => (
              <div key={task.id} className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs shadow-2xs hover:border-slate-300 transition-colors">
                <div className="flex items-start justify-between gap-1 mb-1.5">
                  <span className="font-semibold text-slate-800 leading-snug">{task.title}</span>
                  {task.priority === 'high' && (
                    <span className="bg-red-100 text-red-700 text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0">Urgent</span>
                  )}
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-150">
                  <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-600">{task.department}</span>
                  <button 
                    onClick={() => moveTask(task.id, 'forward')}
                    className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-0.5 bg-blue-50 px-2 py-0.5 rounded transition-colors"
                  >
                    Démarrer <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EN COURS */}
        <div className={`rounded-xl p-3 border shadow-2xs flex flex-col transition-colors ${isBottleneck ? 'bg-red-50/60 border-red-300' : 'bg-amber-50/40 border-amber-200'}`}>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-amber-200/60">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs uppercase tracking-wider text-amber-900">2. En Cours (WIP)</span>
              {isBottleneck && (
                <span className="bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded animate-pulse">Goulot</span>
              )}
            </div>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isBottleneck ? 'bg-red-600 text-white' : 'bg-amber-200 text-amber-900'}`}>
              {inProgressCount} / {wipLimit}
            </span>
          </div>
          <div className="space-y-2.5 flex-1 min-h-[140px]">
            {tasks.filter(t => t.status === 'in_progress').map(task => (
              <div key={task.id} className="bg-white border border-amber-200 rounded-lg p-2.5 text-xs shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-start justify-between gap-1 mb-1.5">
                  <span className="font-semibold text-gray-800 leading-snug">{task.title}</span>
                  <Clock size={13} className="text-amber-500 shrink-0 mt-0.5" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-gray-500 pt-1 border-t border-gray-100">
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">{task.department}</span>
                  <div className="flex gap-1">
                    <button 
                      onClick={() => moveTask(task.id, 'backward')}
                      className="text-gray-500 hover:text-gray-800 p-1 rounded bg-gray-50 transition-colors"
                      title="Revenir à faire"
                    >
                      <ArrowLeft size={11} />
                    </button>
                    <button 
                      onClick={() => moveTask(task.id, 'forward')}
                      className="text-green-700 hover:text-green-900 font-bold flex items-center gap-0.5 bg-green-50 px-2 py-0.5 rounded transition-colors"
                    >
                      Terminer <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TERMINÉ */}
        <div className="bg-emerald-50/40 rounded-xl p-3 border border-emerald-200 shadow-2xs flex flex-col">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-emerald-200">
            <span className="font-bold text-xs uppercase tracking-wider text-emerald-900">3. Terminé (Done)</span>
            <span className="bg-emerald-200 text-emerald-900 text-xs font-bold px-2 py-0.5 rounded-full">
              {tasks.filter(t => t.status === 'done').length}
            </span>
          </div>
          <div className="space-y-2.5 flex-1 min-h-[140px]">
            {tasks.filter(t => t.status === 'done').map(task => (
              <div key={task.id} className="bg-white border border-emerald-200 rounded-lg p-2.5 text-xs shadow-2xs opacity-85">
                <div className="flex items-start justify-between gap-1 mb-1.5">
                  <span className="font-medium text-gray-600 line-through leading-snug">{task.title}</span>
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1 border-t border-gray-100">
                  <span className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded">{task.department}</span>
                  <button 
                    onClick={() => moveTask(task.id, 'backward')}
                    className="text-slate-500 hover:text-slate-800 font-medium text-[10px] bg-slate-50 px-1.5 py-0.5 rounded"
                  >
                    Reprendre
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ajout rapide d'un dossier */}
      <form onSubmit={addTask} className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row gap-2">
        <input 
          type="text" 
          placeholder="Ajouter un nouveau dossier ou tâche administrative..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="flex-1 text-xs bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-hidden focus:border-blue-500"
        />
        <select 
          value={newTaskDept}
          onChange={(e) => setNewTaskDept(e.target.value)}
          aria-label="Sélectionner la direction concernée"
          className="text-xs bg-white border border-gray-300 rounded-lg px-2.5 py-2 font-medium text-gray-700"
        >
          <option value="Dir. Technique">Dir. Technique</option>
          <option value="Dir. Financière">Dir. Financière</option>
          <option value="Dir. Marchés">Dir. Marchés</option>
          <option value="Trésorerie">Trésorerie</option>
          <option value="Cabinet Présidence">Cabinet Présidence</option>
        </select>
        <button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center justify-center gap-1 transition-colors"
        >
          <Plus size={14} /> Ajouter
        </button>
      </form>
    </div>
  );
};
