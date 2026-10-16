import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, AlertTriangle, ArrowRight, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CertificateModal } from './CertificateModal';

interface Question {
  id: number;
  module: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    module: "Module 1",
    question: "Quelle est la règle d'or concernant la WBS (Work Breakdown Structure) ?",
    options: [
      "Toute tâche non réalisée par le Président est supprimée.",
      "Une tâche qui ne figure pas dans la WBS est considérée comme hors budget et hors périmètre.",
      "La WBS ne contient que les dépenses financières sans les activités techniques.",
      "La WBS remplace le contrat des entreprises prestataires."
    ],
    correct: 1,
    explanation: "Dans l'architecture du projet, la règle absolue stipule qu'une tâche absente de la WBS est considérée hors budget et hors périmètre, protégeant ainsi l'institution contre les dérives non autorisées."
  },
  {
    id: 2,
    module: "Module 1",
    question: "Sur le diagramme de PERT, qu'implique le 'Chemin Critique' tracé en rouge ?",
    options: [
      "Il indique les tâches les plus coûteuses du projet.",
      "Il montre les tâches secondaires avec une marge de manœuvre de 30 jours.",
      "Il représente la durée minimale absolue avec ZÉRO marge de manœuvre (tout retard décale la date de fin).",
      "Il indique les activités réservées exclusivement à la tutelle préfectorale."
    ],
    correct: 2,
    explanation: "Sur le chemin critique, il n'y a aucune marge de flottement. La moindre défaillance ou lenteur sur cette séquence reporte mécaniquement l'inauguration de l'ouvrage."
  },
  {
    id: 3,
    module: "Module 2",
    question: "Pourquoi la comptabilité budgétaire classique de l'administration est-elle insuffisante pour piloter un projet ?",
    options: [
      "Elle n'est pas acceptée par le Trésor Public.",
      "Elle est aveugle à la réalité physique : si 50% du budget est payé, elle ne sait pas si 50% ou seulement 10% du dispensaire est construit.",
      "Elle coûte trop cher à mettre en place par les informaticiens.",
      "Elle ne s'applique qu'aux entreprises privées du BTP."
    ],
    correct: 1,
    explanation: "La comptabilité budgétaire légale suit la légalité de la dépense mais ne croise pas le paiement avec l'avancement physique réel sur le terrain, masquant ainsi les goulots d'étranglement."
  },
  {
    id: 4,
    module: "Module 2",
    question: "Si l'Indice de Performance des Délais (IPD = CA / CP) ressort à 0.70, quel est le diagnostic ?",
    options: [
      "Le projet avance 30% plus vite que prévu.",
      "Le projet a coûté 70 millions de FCFA de moins.",
      "Le projet n'avance qu'à 70% de la cadence programmée : retard grave sur le terrain.",
      "Le projet doit être immédiatement annulé par décret."
    ],
    correct: 2,
    explanation: "Un indice inférieur à 1 indique une sous-performance. Un IPD de 0.70 signifie que le travail physique réalisé n'atteint que 70% de l'objectif calendaire programmé."
  },
  {
    id: 5,
    module: "Module 3",
    question: "Pourquoi l'équipe d'une évaluation à Mi-Parcours ou Ex-Post doit-elle impérativement intégrer des consultants externes ?",
    options: [
      "Parce que les agents internes ne savent pas utiliser d'ordinateur.",
      "Pour garantir une neutralité absolue vis-à-vis des décideurs politiques et rassurer les bailleurs de fonds.",
      "Pour remplacer le Directeur Technique pendant ses congés.",
      "C'est une obligation imposée par le code du travail ivoirien."
    ],
    correct: 1,
    explanation: "L'indépendance des experts externes assure une analyse objective non biaisée par des affinités internes ou des contraintes politiques locales, condition sine qua non pour les partenaires techniques et financiers."
  },
  {
    id: 6,
    module: "Module 3",
    question: "Quel est l'objectif premier d'une Évaluation Ex-Post réalisée 3 à 5 ans après la clôture du projet ?",
    options: [
      "Payer le solde des factures de l'entreprise de construction.",
      "Analyser la viabilité (pérennité) de l'ouvrage et mesurer l'impact réel et durable sur le niveau de vie des populations.",
      "Organiser une seconde cérémonie d'inauguration pour les nouveaux élus.",
      "Détruire les archives pour libérer de l'espace dans les bureaux du Conseil."
    ],
    correct: 1,
    explanation: "L'évaluation ex-post mesure la pérennité : l'école fonctionne-t-elle toujours ? Le taux de scolarisation a-t-il durablement grimpé ? Les équipements sont-ils entretenus ?"
  },
  {
    id: 7,
    module: "Module 4",
    question: "Qui a formalisé le concept novateur de la 'Direction par les Objectifs' en 1954 ?",
    options: [
      "Leon Rosenberg",
      "Peter Drucker",
      "L'ACDI",
      "Le Président du Conseil Régional"
    ],
    correct: 1,
    explanation: "En 1954, Peter Drucker a révolutionné le management moderne en démontrant qu'une institution doit être pilotée par ses objectifs finaux mesurables plutôt que par la simple routine quotidienne des tâches."
  },
  {
    id: 8,
    module: "Module 4",
    question: "Dans la chaîne de résultats GAR (Intrants ➔ Activités ➔ Extrants ➔ Effets ➔ Impacts), qu'est-ce qu'un Extrant ?",
    options: [
      "Les crédits alloués par le Trésor Public.",
      "Le produit direct et immédiat des activités (ex: Le centre de santé construit et équipé).",
      "La disparition définitive des maladies hydriques dans 10 ans.",
      "Le changement d'attitude des usagers."
    ],
    correct: 1,
    explanation: "L'extrant (output/livrable) est le produit physique ou le service immédiat issu des activités (ex: les kilomètres de route reprofilés, le bâtiment livré)."
  },
  {
    id: 9,
    module: "Module 5",
    question: "Dans la matrice RACI, quelle est la règle d'or absolue pour la lettre 'A' (Accountable / Approbateur) ?",
    options: [
      "Il faut mettre 'A' pour tous les membres du Comité de Direction.",
      "Il ne doit y avoir qu'UN SEUL 'A' par tâche pour garantir une imputabilité claire.",
      "La lettre 'A' ne s'applique qu'au Trésorier Payeur.",
      "La lettre 'A' peut se déléguer sans limite à des stagiaires."
    ],
    correct: 1,
    explanation: "S'il y a plus d'un 'A', personne ne se sent véritablement responsable de rendre des comptes. Un seul décideur final doit porter l'imputabilité devant l'institution."
  },
  {
    id: 10,
    module: "Module 5",
    question: "Quelle est la nuance fondamentale entre 'Responsabilité' et 'Imputabilité' (Responsabilisation) ?",
    options: [
      "Ce sont exactement deux mots synonymes interchangeables.",
      "La responsabilité (obligation de faire) se délègue, mais l'imputabilité (obligation de rendre compte) ne se délègue JAMAIS.",
      "L'imputabilité ne concerne que les agents stagiaires.",
      "La responsabilité ne s'applique qu'aux dépenses financières."
    ],
    correct: 1,
    explanation: "Un Directeur peut déléguer l'exécution d'un plan à son ingénieur (Responsable), mais en cas d'accident ou d'erreur grave, c'est le Directeur qui demeure imputable devant l'autorité."
  },
  {
    id: 11,
    module: "Module 6",
    question: "Dans la Matrice Pouvoir / Intérêt, comment traiter les 'Latents' (Pouvoir Fort, Intérêt Faible, ex: Ministères de tutelle) ?",
    options: [
      "Les ignorer totalement car ils ne s'intéressent pas au projet.",
      "Les maintenir satisfaits et respecter leurs prérogatives réglementaires pour éviter qu'ils ne bloquent le dossier.",
      "Les convoquer à toutes les réunions de chantier hebdomadaires.",
      "Leur transférer le budget d'investissement du Conseil."
    ],
    correct: 1,
    explanation: "Les Latents ont le pouvoir de bloquer un projet par un simple refus de visa ou contrôle de légalité. La stratégie requise est de les maintenir satisfaits sans les surcharger inutilement."
  },
  {
    id: 12,
    module: "Module Supplémentaire",
    question: "Dans un Partenariat Public-Privé (PPP), à quel moment se produit généralement le goulot d'étranglement le plus sévère ?",
    options: [
      "Lors du nettoyage du site le dernier jour.",
      "Lors de la structuration juridique interministérielle et lors du Closing Financier (accord des banques de prêter les fonds).",
      "Pendant la rédaction du compte-rendu de réunion.",
      "Au moment de la pose de la première pierre."
    ],
    correct: 1,
    explanation: "Dans les PPP, les retards critiques surviennent très tôt : lenteurs administratives des avis ministériels (étape 2) et incapacité du partenaire privé à mobiliser les prêts bancaires (étape 5 : Closing financier)."
  }
];

export const QuizSection: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [learnerName, setLearnerName] = useState('');
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const score = calculateScore();
    if (score >= 10) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback if confetti encounters sandbox issue
      }
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const score = calculateScore();
  const percentage = Math.round((score / quizQuestions.length) * 100);
  const isPassed = score >= 10; // 80% requis (10/12)

  const todayStr = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      <div className="bg-linear-to-r from-blue-900 via-indigo-900 to-blue-950 text-white p-6 md:p-8 rounded-2xl shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="bg-amber-400 text-blue-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
              Certification d'Aptitude
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold">Examen Final : Les 12 Défis de la GAR</h2>
            <p className="text-blue-200 text-sm mt-1 max-w-2xl">
              Évaluation officielle de validation des compétences pour les 49 agents du Conseil Régional du Gbêkê. Seuil de réussite fixé à <strong>80% (10 bonnes réponses sur 12)</strong> pour débloquer l'attestation nominative !
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xs border border-white/20 p-4 rounded-xl text-center shrink-0">
            <span className="text-xs uppercase text-blue-200 block font-bold">Progression</span>
            <span className="text-2xl font-black">{answeredCount} / {quizQuestions.length}</span>
            <span className="text-[10px] text-blue-300 block">Questions répondues</span>
          </div>
        </div>

        {/* Learner name input */}
        <div className="mt-6 pt-5 border-t border-white/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <label className="text-xs text-blue-200 font-bold shrink-0">
            Nom et Prénoms de l'Agent :
          </label>
          <input 
            type="text" 
            placeholder="Ex : KOUASSI Yao Emmanuel..." 
            value={learnerName}
            onChange={(e) => setLearnerName(e.target.value)}
            className="flex-1 text-sm bg-white text-gray-900 px-3.5 py-2 rounded-lg font-medium focus:outline-hidden focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>

      {/* Result banner if submitted */}
      {isSubmitted && (
        <div className={`p-6 rounded-2xl border shadow-sm animate-fadeIn ${
          isPassed 
            ? 'bg-emerald-50 border-emerald-300 text-emerald-950' 
            : 'bg-amber-50 border-amber-300 text-amber-950'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              {isPassed ? (
                <div className="p-3 bg-emerald-600 text-white rounded-full">
                  <CheckCircle2 size={32} />
                </div>
              ) : (
                <div className="p-3 bg-amber-600 text-white rounded-full">
                  <AlertTriangle size={32} />
                </div>
              )}
              <div>
                <h3 className="text-xl font-black">
                  {isPassed ? "Félicitations ! Examen Validé avec Succès !" : "Examen non validé : Recommencez après révision"}
                </h3>
                <p className="text-sm mt-1">
                  Votre note : <strong>{score} / {quizQuestions.length} ({percentage}%)</strong>. 
                  {isPassed 
                    ? " Vous maîtrisez parfaitement l'ingénierie de la GAR, le suivi budgétaire EVM et les mécanismes anti-goulot !" 
                    : " Consultez les explications détaillées ci-dessous et réessayez pour obtenir l'attestation."
                  }
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {isPassed && (
                <button
                  onClick={() => setIsCertModalOpen(true)}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-sm transition-all"
                >
                  <Award size={16} /> Ouvrir mon Attestation
                </button>
              )}
              <button
                onClick={handleReset}
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw size={14} /> Recommencer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Questions list */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {quizQuestions.map((q, qIndex) => {
          const isAnswered = selectedAnswers[q.id] !== undefined;
          const selectedOption = selectedAnswers[q.id];
          const isCorrect = isSubmitted && selectedOption === q.correct;

          return (
            <div 
              key={q.id} 
              className={`bg-white rounded-2xl p-6 border shadow-2xs transition-all ${
                isSubmitted 
                  ? isCorrect 
                    ? 'border-emerald-300 ring-2 ring-emerald-50' 
                    : 'border-red-300 ring-2 ring-red-50'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Question {qIndex + 1} • {q.module}
                </span>
                {isSubmitted && (
                  <span className={`text-xs font-black flex items-center gap-1 ${isCorrect ? 'text-emerald-700' : 'text-red-600'}`}>
                    {isCorrect ? <><CheckCircle2 size={14} /> +1 Point</> : <><XCircle size={14} /> 0 Point</>}
                  </span>
                )}
              </div>

              <h3 className="font-bold text-gray-900 text-base mb-4 leading-snug">
                {q.question}
              </h3>

              <div className="space-y-2.5">
                {q.options.map((opt, optIndex) => {
                  const isOptSelected = selectedOption === optIndex;
                  const isOptCorrect = isSubmitted && optIndex === q.correct;
                  const isOptWrongSelected = isSubmitted && isOptSelected && !isOptCorrect;

                  let optClass = "border-gray-200 hover:bg-slate-50 text-gray-800";
                  if (isOptSelected && !isSubmitted) {
                    optClass = "border-blue-600 bg-blue-50/70 text-blue-900 font-semibold";
                  } else if (isOptCorrect) {
                    optClass = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                  } else if (isOptWrongSelected) {
                    optClass = "border-red-500 bg-red-50 text-red-950 font-medium";
                  }

                  return (
                    <div
                      key={optIndex}
                      onClick={() => handleSelect(q.id, optIndex)}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 cursor-pointer transition-all ${optClass}`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border ${
                        isOptCorrect 
                          ? 'bg-emerald-600 text-white border-emerald-600' 
                          : isOptWrongSelected 
                            ? 'bg-red-600 text-white border-red-600' 
                            : isOptSelected 
                              ? 'bg-blue-600 text-white border-blue-600' 
                              : 'border-gray-300 text-gray-500 bg-white'
                      }`}>
                        {String.fromCharCode(65 + optIndex)}
                      </span>
                      <span className="flex-1 leading-snug">{opt}</span>
                    </div>
                  );
                })}
              </div>

              {/* Detailed explanation after submission */}
              {isSubmitted && (
                <div className="mt-4 pt-3 border-t border-gray-100 bg-slate-50 p-3 rounded-xl text-xs text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900 block mb-1">Raisonnement Pédagogique :</span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}

        {!isSubmitted ? (
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-4 z-10">
            <div>
              <span className="text-xs font-semibold text-gray-600 block">
                {answeredCount} sur {quizQuestions.length} questions répondues
              </span>
              <span className="text-[11px] text-gray-400">
                Vous pourrez consulter les réponses et imprimer l'attestation après validation.
              </span>
            </div>

            <button
              type="submit"
              disabled={answeredCount === 0}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                answeredCount === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-700 hover:bg-blue-800 text-white cursor-pointer hover:shadow-lg'
              }`}
            >
              Soumettre mes Réponses <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          isPassed && (
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => setIsCertModalOpen(true)}
                className="bg-linear-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-3 cursor-pointer"
              >
                <Award size={22} className="text-amber-300" />
                <span>Générer et Imprimer mon Attestation Officielle</span>
              </button>
            </div>
          )
        )}
      </form>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        learnerName={learnerName.trim()}
        score={score}
        total={quizQuestions.length}
        dateStr={todayStr}
      />
    </div>
  );
};
