export type ModuleId = 
  | 'accueil'
  | 'm1'
  | 'm2'
  | 'm3'
  | 'm4'
  | 'm5'
  | 'm6'
  | 'msupp'
  | 'lexique'
  | 'quiz';

export interface ModuleNav {
  id: ModuleId;
  title: string;
  shortTitle: string;
  badge?: string;
}

export interface LexiqueItem {
  term: string;
  def: string;
  category: 'sigles' | 'dictionnaire' | 'lean';
  tag?: string;
}

export interface QuizQuestion {
  id: number;
  moduleId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface KanbanTask {
  id: string;
  title: string;
  tag: string;
  status: 'todo' | 'in_progress' | 'done';
  priority?: 'high' | 'normal' | 'low';
  assignee?: string;
  daysWaiting?: number;
}
