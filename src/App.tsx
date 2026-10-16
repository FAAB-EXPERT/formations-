import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Home, 
  Target, 
  BarChart, 
  Users, 
  ShieldCheck, 
  AlertTriangle, 
  BookA,
  Menu,
  X,
  GraduationCap,
  ChevronRight,
  Filter,
  Maximize,
  Minimize,
  Search,
  ArrowRight,
  ArrowDown,
  CalendarDays,
  Clock,
  CheckCircle2,
  AlertCircle,
  LineChart,
  Landmark,
  FileBarChart,
  FileText,
  History,
  Globe,
  Award,
  Printer,
  Copy,
  Check,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

import { InteractiveKanban } from './components/InteractiveKanban';
import { InteractiveEVM } from './components/InteractiveEVM';
import { InteractiveRACI } from './components/InteractiveRACI';
import { InteractiveMoSCoW } from './components/InteractiveMoSCoW';
import { InteractiveChainDiag } from './components/InteractiveChainDiag';
import { QuizSection } from './components/QuizSection';

// --- COMPOSANTS DE CONTENU DES MODULES ---

const AccueilContent: React.FC = () => (
  <div className="space-y-6 animate-fadeIn pb-4">
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-6 md:p-8 rounded-2xl shadow-sm border-l-8 border-amber-400">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="bg-amber-400 text-blue-950 text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Région du Gbêkê
        </span>
        <span className="text-blue-200 text-xs font-medium">Session Pluriannuelle 2026</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Bienvenue sur la plateforme E-Learning</h2>
      <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">
        Programme officiel de renforcement des capacités opérationnelles des agents du Conseil Régional du Gbêkê : Gestion Axée sur les Résultats (GAR), suivi des tâches, pilotage budgétaire et gouvernance éthique.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Target className="text-blue-600" /> Objectifs du Projet
          </h3>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            La présente convention a pour objet la réalisation d'un projet de formation de <strong>49 agents</strong> du
            Conseil Régional du Gbêkê. L'impact visé est l'accroissement mesurable de la performance opérationnelle de l'institution.
          </p>
          <ul className="space-y-2.5 text-xs text-gray-700">
            <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> <span><strong>GAR :</strong> Passer d'une simple gestion des moyens à une véritable culture de l'impact sociétal.</span></li>
            <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> <span><strong>Suivi des tâches :</strong> Élaborer des tableaux de bord dynamiques pour piloter l'avancement opérationnel (WBS/Gantt/Kanban).</span></li>
            <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> <span><strong>Suivi Budgétaire :</strong> Garantir une efficience financière optimale grâce à la Valeur Acquise (EVM).</span></li>
            <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> <span><strong>Suivi-Évaluation :</strong> Mettre en place des outils d'aide à la décision et mesurer l'impact à long terme.</span></li>
            <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> <span><strong>Coordination :</strong> Briser le travail en "silo" au profit d'une collaboration fluide (Matrice RACI).</span></li>
            <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> <span><strong>Éthique & Conduite :</strong> Consolider la crédibilité de l'action publique régionale et accompagner le changement humain (PROSCI/ADKAR).</span></li>
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span className="font-semibold text-blue-700">49 Agents Certifiables</span>
          <span>Bouaké, Côte d'Ivoire</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <GraduationCap className="text-blue-600" /> L'Équipe Pédagogique
          </h3>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-blue-700 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-xs">
                KFM
              </div>
              <div>
                <p className="font-extrabold text-blue-900 text-xl leading-tight">Koffié Fabien Michael</p>
                <p className="text-xs text-gray-600 mt-0.5">Économiste, Expert en étude de développement</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded mt-1">
                  Consultant Formateur
                </span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200/70 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-blue-700 font-medium">
                <span>✉</span>
                <a href="mailto:Fabien.frikupgeneration@gmail.com" className="hover:underline">Fabien.frikupgeneration@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-blue-700 font-medium">
                <span>✆</span>
                <span>07 48 08 27 39</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-xs text-amber-900">
          <strong>Validation du parcours :</strong> Chaque agent ayant complété les 6 modules et réussi le Quiz final (au moins 80% de bonnes réponses) obtiendra une attestation officielle personnalisée et imprimable.
        </div>
      </div>
    </div>

    {/* MICRO-TEXTE DE CONFIDENTIALITÉ ET PROTECTION PI */}
    <div className="mt-12 pt-6 border-t border-gray-200">
      <p className="text-[9px] text-gray-400 text-justify leading-relaxed select-none cursor-default bg-slate-50 p-4 rounded-xl border border-slate-200">
        <strong>Clause de Confidentialité et Protection de la Propriété Intellectuelle :</strong> L'ensemble de l'ingénierie pédagogique, des textes, des concepts de formation (notamment les applications pratiques de la GAR, les schémas d'organisation, les logigrammes des processus PIP/PPP, les matrices RACI et de décision), ainsi que l'architecture globale de cette plateforme interactive, constituent la propriété intellectuelle exclusive de M. Koffié Fabien Michael. Toute reproduction, copie, diffusion, adaptation, ou exploitation commerciale et professionnelle, même partielle, des idées, supports et méthodologies présentés sur cette interface, par quelque procédé ou support que ce soit, est formellement interdite sans l'autorisation écrite préalable et explicite de l'auteur, conformément aux dispositions du Code de la Propriété Intellectuelle. Toute utilisation non autorisée sera considérée comme une contrefaçon et un vol de propriété intellectuelle, exposant le ou les contrevenants à des poursuites judiciaires rigoureuses. Pour toute demande d'utilisation, de reproduction, d'adaptation ou de partenariat institutionnel, la personne ou l'entité intéressée a l'obligation stricte de contacter officiellement le créateur via les coordonnées professionnelles dûment indiquées dans la section "L'Équipe Pédagogique" ci-dessus.
      </p>
    </div>
  </div>
);

const Module1Content: React.FC = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="border-b pb-4">
      <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Module Fondamental 1</span>
      <h2 className="text-2xl font-bold text-gray-900 mt-1">Élaboration d'un tableau de bord et suivi des tâches</h2>
    </div>
    
    {/* 1. L'ARCHITECTURE DU PROJET */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <Target size={24} className="text-blue-600" /> 1. L'architecture du projet
      </h3>
      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
        Structurer un projet (en tâches, produits et ressources) est la première étape pour clarifier les responsabilités. Sans cette architecture stricte, les différents services (Technique, Financier, Juridique) risquent de se marcher sur les pieds ou d'attendre les informations des autres, créant ainsi un <strong>goulot d'étranglement</strong> majeur dès le démarrage de l'exécution d'une infrastructure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <strong className="text-blue-800 text-base block mb-2">WBS (Tâches)</strong>
          <span className="text-xs text-gray-700">Décomposition hiérarchique du travail. <span className="underline font-semibold">Règle absolue :</span> une tâche qui ne figure pas dans la WBS est considérée comme hors budget et hors périmètre.</span>
        </div>
        <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
          <strong className="text-indigo-800 text-base block mb-2">PBS (Produits)</strong>
          <span className="text-xs text-gray-700">Product Breakdown Structure. Se concentre spécifiquement sur les livrables concrets (ex: Le bâtiment du centre de santé, les lits d'hospitalisation).</span>
        </div>
        <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
          <strong className="text-purple-800 text-base block mb-2">GBS (Global)</strong>
          <span className="text-xs text-gray-700">Global Breakdown Structure. Intégration systémique de toutes les structures (coûts, RH, tâches) dans un cadre unifié.</span>
        </div>
      </div>
    </div>

    {/* 2. CARTOGRAPHIE ET MODÉLISATION */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <Search size={24} className="text-blue-600" /> 2. Cartographie et Modélisation des Processus
      </h3>
      
      <div className="space-y-8">
        
        {/* 2.1 Cartographie */}
        <div className="bg-indigo-50/70 p-6 rounded-2xl border border-indigo-100">
          <h4 className="font-bold text-indigo-900 mb-3 text-lg">2.1 La Cartographie des Processus (La Vue Globale Macro)</h4>
          <p className="text-sm text-gray-700 mb-4">
            La cartographie consiste à recenser et classer les grands flux de fonctionnement du Conseil Régional. Elle permet de visualiser "qui interagit avec qui". C'est l'outil idéal pour repérer si un département centralise trop de responsabilités et forme un <strong>goulot d'étranglement</strong> institutionnel.
          </p>
          
          <div className="bg-white p-4 rounded-xl border border-indigo-200 shadow-xs">
            <h5 className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Exemple : Cycle de vie global d'une requête communautaire</h5>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center text-sm">
              <div className="w-full md:w-1/4 bg-blue-100 text-blue-900 p-3 rounded-xl border border-blue-200">
                <span className="block font-black mb-1 text-xs">1. DEMANDE</span>
                <span className="text-[11px] text-gray-700">Populations / Mutuelles</span>
              </div>
              <ArrowRight className="hidden md:block text-gray-400" />
              <ArrowDown className="md:hidden text-gray-400" />
              
              <div className="w-full md:w-1/4 bg-yellow-100 text-yellow-900 p-3 rounded-xl border border-yellow-200">
                <span className="block font-black mb-1 text-xs">2. STRATÉGIE</span>
                <span className="text-[11px] text-gray-700">Présidence / COPIL</span>
              </div>
              <ArrowRight className="hidden md:block text-gray-400" />
              <ArrowDown className="md:hidden text-gray-400" />

              <div className="w-full md:w-1/4 bg-purple-100 text-purple-900 p-3 rounded-xl border border-purple-200">
                <span className="block font-black mb-1 text-xs">3. EXÉCUTION</span>
                <span className="text-[11px] text-gray-700">Services Techniques & Trésor</span>
              </div>
              <ArrowRight className="hidden md:block text-gray-400" />
              <ArrowDown className="md:hidden text-gray-400" />

              <div className="w-full md:w-1/4 bg-green-100 text-green-900 p-3 rounded-xl border border-green-200">
                <span className="block font-black mb-1 text-xs">4. IMPACT</span>
                <span className="text-[11px] text-gray-700">Bénéficiaires (Réception)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2.2 Modélisation */}
        <div className="bg-blue-50/70 p-6 rounded-2xl border border-blue-100">
          <h4 className="font-bold text-blue-900 mb-3 text-lg">2.2 La Modélisation des Processus (L'Analyse Détaillée Micro)</h4>
          <p className="text-sm text-gray-700 mb-4">
            La modélisation zoome à l'intérieur d'une étape (via un Logigramme) pour détailler l'action administrative. En encadrant le processus par une <strong>date de début</strong> et une <strong>date de fin</strong>, on trouve l'étape exacte qui crée le <strong>goulot d'étranglement</strong> opérationnel (le blocage du dossier).
          </p>
          
          <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-xs overflow-x-auto">
            <h5 className="text-center font-bold text-gray-600 mb-4 uppercase text-xs tracking-wider">Modélisation : Processus de paiement d'un décompte de travaux</h5>
            <div className="flex items-center min-w-max gap-4 justify-center">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 border-2 border-green-500 text-green-800 px-4 py-2 rounded-full font-bold text-sm">
                  DÉBUT
                </div>
                <span className="text-xs font-bold text-gray-600 mt-2 flex items-center gap-1"><CalendarDays size={12}/> 01/10/2026</span>
              </div>
              
              <ArrowRight className="text-gray-400" />
              
              <div className="bg-gray-50 border-2 border-blue-400 p-3 rounded-xl text-center w-40">
                <span className="text-sm font-semibold text-gray-800 block mb-1">Attachement des travaux</span>
                <span className="text-xs text-gray-500 bg-gray-200 px-2 rounded">Service Technique</span>
              </div>
              
              <ArrowRight className="text-gray-400" />

              <div className="bg-yellow-50 border-2 border-yellow-400 p-3 rounded-xl text-center shadow-xs w-44 relative">
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full font-bold animate-pulse shadow-sm">Goulot d'étranglement !</span>
                <span className="text-sm font-semibold text-gray-800 block mb-1">Contrôle & Visa financier</span>
                <span className="text-xs text-gray-500 bg-gray-200 px-2 rounded">Dir. Financière</span>
              </div>

              <ArrowRight className="text-gray-400" />
              
              <div className="bg-gray-50 border-2 border-blue-400 p-3 rounded-xl text-center w-40">
                <span className="text-sm font-semibold text-gray-800 block mb-1">Mandatement</span>
                <span className="text-xs text-gray-500 bg-gray-200 px-2 rounded">Trésorier Payeur</span>
              </div>

              <ArrowRight className="text-gray-400" />

              <div className="flex flex-col items-center">
                <div className="bg-red-100 border-2 border-red-500 text-red-800 px-4 py-2 rounded-full font-bold text-sm">
                  FIN
                </div>
                <span className="text-xs font-bold text-gray-600 mt-2 flex items-center gap-1"><CalendarDays size={12}/> 25/10/2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 3. MACRO ET RÉTRO PLANNING */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <CalendarDays size={24} className="text-blue-600" /> 3. Stratégies Temporelles : Macro et Rétro-planning
      </h3>
      <p className="text-gray-700 mb-6 text-sm">
        L'accumulation de dossiers au même moment par manque d'anticipation est la première cause de création d'un <strong>goulot d'étranglement</strong>. Ces tableaux (avec suivi précis des dates et du statut) permettent au Conseil Régional de lisser la charge de travail de ses agents.
      </p>
      
      <div className="space-y-8">
        <div>
          <h4 className="font-bold text-indigo-800 border-b border-indigo-200 pb-2 mb-3 text-lg">Le Macro-planning (Projet de Construction de Centre de Santé)</h4>
          <p className="text-sm text-gray-600 mb-4">Planification chronologique globale. C'est le tableau de bord privilégié des élus et décideurs pour suivre l'avancement global.</p>
          <div className="overflow-x-auto shadow-2xs border border-gray-200 rounded-xl">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-indigo-900 text-white text-xs">
                <tr>
                  <th className="p-3 border-b whitespace-nowrap">Grandes Tâches</th>
                  <th className="p-3 border-b">Jalons Clés</th>
                  <th className="p-3 border-b">Date de début</th>
                  <th className="p-3 border-b">Date de fin</th>
                  <th className="p-3 border-b text-center">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white text-xs sm:text-sm">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-semibold text-gray-800">1. Études & Faisabilité</td>
                  <td className="p-3 text-gray-600">Validation des TDR</td>
                  <td className="p-3 text-gray-500">01/01/2026</td>
                  <td className="p-3 text-gray-500">15/02/2026</td>
                  <td className="p-3 text-center"><span className="px-3 py-1 bg-green-100 text-green-800 font-bold rounded-full text-xs">Terminé</span></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-semibold text-gray-800">2. Passation des Marchés</td>
                  <td className="p-3 text-gray-600">Signature du Contrat</td>
                  <td className="p-3 text-gray-500">16/02/2026</td>
                  <td className="p-3 text-gray-500">30/03/2026</td>
                  <td className="p-3 text-center"><span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold rounded-full text-xs flex items-center justify-center gap-1"><Clock size={12}/> En cours</span></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-semibold text-gray-800">3. Exécution des Travaux</td>
                  <td className="p-3 text-gray-600">Gros Œuvre achevé</td>
                  <td className="p-3 text-gray-500">01/04/2026</td>
                  <td className="p-3 text-gray-500">30/08/2026</td>
                  <td className="p-3 text-center"><span className="px-3 py-1 bg-gray-100 text-gray-600 font-bold rounded-full text-xs">À faire</span></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-semibold text-gray-800">4. Équipement & Réception</td>
                  <td className="p-3 text-gray-600">Remise des clés</td>
                  <td className="p-3 text-gray-500">01/09/2026</td>
                  <td className="p-3 text-gray-500">15/10/2026</td>
                  <td className="p-3 text-center"><span className="px-3 py-1 bg-gray-100 text-gray-600 font-bold rounded-full text-xs">À faire</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-teal-800 border-b border-teal-200 pb-2 mb-3 text-lg">Le Rétro-planning (Organisation de l'Inauguration)</h4>
          <p className="text-sm text-gray-600 mb-4">Planification inversée, calculée à rebours à partir d'une <strong>date butoir inamovible</strong> (ex: cérémonie présidée par une haute autorité).</p>
          <div className="overflow-x-auto shadow-2xs border border-gray-200 rounded-xl">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-teal-900 text-white text-xs">
                <tr>
                  <th className="p-3 border-b">Tâches</th>
                  <th className="p-3 border-b">Jalons / Événements</th>
                  <th className="p-3 border-b">Date (À rebours)</th>
                  <th className="p-3 border-b">Responsable</th>
                  <th className="p-3 border-b text-center">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white text-xs sm:text-sm">
                <tr className="bg-red-50 border-l-4 border-red-500">
                  <td className="p-3 font-bold text-red-700">Inauguration Officielle</td>
                  <td className="p-3 font-semibold text-red-600">Coupure du ruban</td>
                  <td className="p-3 font-black text-red-600">Date Butoir : 30 Octobre</td>
                  <td className="p-3 text-red-700 font-semibold">Président CR</td>
                  <td className="p-3 text-center"><span className="px-3 py-1 bg-red-100 text-red-800 font-bold rounded-full text-xs">Objectif</span></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-semibold text-gray-800">Nettoyage et logistique chaises/tentes</td>
                  <td className="p-3 text-gray-600">Site prêt pour invités</td>
                  <td className="p-3 text-gray-500 font-medium">J-5 : 25 Octobre</td>
                  <td className="p-3 text-gray-700">Moyens Généraux</td>
                  <td className="p-3 text-center"><span className="px-3 py-1 bg-gray-100 text-gray-600 font-bold rounded-full text-xs">À faire</span></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-semibold text-gray-800">Réception technique & levée des réserves</td>
                  <td className="p-3 text-gray-600">Signature PV Réception</td>
                  <td className="p-3 text-gray-500 font-medium">J-15 : 15 Octobre</td>
                  <td className="p-3 text-gray-700">Service Technique</td>
                  <td className="p-3 text-center"><span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold rounded-full text-xs flex items-center justify-center gap-1"><Clock size={12}/> En cours</span></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-semibold text-gray-800">Fin d'installation des lits et frigos médicaux</td>
                  <td className="p-3 text-gray-600">Dernier équipement livré</td>
                  <td className="p-3 text-gray-500 font-medium">J-30 : 01 Octobre</td>
                  <td className="p-3 text-gray-700">Fournisseur / Prestataire</td>
                  <td className="p-3 text-center"><span className="px-3 py-1 bg-green-100 text-green-800 font-bold rounded-full text-xs">Terminé</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    {/* 4. REPRÉSENTATIONS GRAPHIQUES */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <BarChart size={24} className="text-blue-600" /> 4. Outils Graphiques de Suivi (Gantt, PERT, Kanban)
      </h3>

      <div className="space-y-12">
        
        {/* DIAGRAMME DE GANTT */}
        <div>
          <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-6 h-6 rounded-md flex justify-center items-center text-xs">A</span> 
            Le Diagramme de GANTT (Projet de Forage Hydraulique)
          </h4>
          <p className="text-sm text-gray-600 mb-3">
            Visualisation des tâches sur un calendrier. Il met en évidence les chevauchements : si le GANTT montre que la "Direction des Marchés" doit traiter 10 appels d'offres la même semaine, il signale un énorme <strong>goulot d'étranglement</strong> imminent en termes de charge administrative.
          </p>
          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 overflow-x-auto shadow-inner">
            <div className="min-w-[700px]">
              {/* Entête */}
              <div className="grid grid-cols-6 gap-2 border-b border-gray-300 pb-2 mb-3 text-xs font-bold text-gray-500 text-center">
                <div className="text-left pl-2">Tâches Opérationnelles</div>
                <div>Janvier</div><div>Février</div><div>Mars</div><div>Avril</div><div>Mai</div>
              </div>
              {/* Lignes */}
              <div className="grid grid-cols-6 gap-2 items-center mb-3">
                <div className="text-sm font-semibold text-gray-700 pl-2">Étude Géophysique & TDR</div>
                <div className="col-start-2 col-span-1 bg-blue-500 h-7 rounded-md shadow-xs flex items-center px-2">
                  <span className="text-white text-[10px] font-bold">1 Mois</span>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-2 items-center mb-3">
                <div className="text-sm font-semibold text-gray-700 pl-2">Appel d'offres Marché Public</div>
                <div className="col-start-3 col-span-2 bg-indigo-500 h-7 rounded-md shadow-xs opacity-90 flex items-center px-2">
                   <span className="text-white text-[10px] font-bold">2 Mois de procédure</span>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-2 items-center mb-3">
                <div className="text-sm font-semibold text-gray-700 pl-2">Travaux de Forage & Château d'eau</div>
                <div className="col-start-5 col-span-2 bg-orange-500 h-7 rounded-md shadow-xs flex items-center px-2">
                   <span className="text-white text-[10px] font-bold">Exécution sur site</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIAGRAMME DE PERT */}
        <div>
          <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
            <span className="bg-red-500 text-white w-6 h-6 rounded-md flex justify-center items-center text-xs">B</span> 
            Le Diagramme de PERT (Le Chemin Critique)
          </h4>
          <p className="text-sm text-gray-600 mb-3">
            Le réseau calcule la durée minimale absolue du projet. Le tracé en rouge représente le <strong>chemin critique</strong>. Sur cette séquence, il n'y a <em>zéro marge de manœuvre</em>. La moindre erreur du service technique ou du fournisseur sur ce chemin crée instantanément un <strong>goulot d'étranglement</strong> qui retarde l'inauguration.
          </p>
          <div className="border border-gray-200 rounded-xl p-6 bg-white overflow-x-auto shadow-inner flex justify-center">
            <div className="flex items-center min-w-max">
              <div className="w-12 h-12 rounded-full border-4 border-gray-400 flex items-center justify-center font-bold text-xs bg-gray-50">DÉB</div>
              
              <div className="flex flex-col mx-2 gap-8 relative">
                <div className="h-px bg-red-500 w-16 absolute top-1/4 -left-2 rotate-12 origin-left"></div>
                <div className="h-px bg-gray-400 w-16 absolute bottom-1/4 -left-2 -rotate-12 origin-left"></div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex items-center">
                  <div className="p-3 bg-red-50 border-2 border-red-500 rounded-lg text-center w-32 shadow-xs relative">
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow-xs">Critique</span>
                    <span className="block font-bold text-red-800 text-xs mb-1">Passation Marché</span>
                    <span className="text-xs font-semibold bg-white text-red-600 px-2 py-1 rounded">45 jours</span>
                  </div>
                  <ArrowRight className="text-red-500 mx-2" />
                  <div className="p-3 bg-red-50 border-2 border-red-500 rounded-lg text-center w-32 shadow-xs relative">
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow-xs">Critique</span>
                    <span className="block font-bold text-red-800 text-xs mb-1">Exécution Travaux</span>
                    <span className="text-xs font-semibold bg-white text-red-600 px-2 py-1 rounded">90 jours</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 bg-gray-50 border-2 border-gray-400 rounded-lg text-center w-32">
                    <span className="block font-bold text-gray-700 text-xs mb-1">Sensibilisation Pop.</span>
                    <span className="text-xs font-semibold bg-white text-gray-500 px-2 py-1 rounded">Marge: 20 jours</span>
                  </div>
                  <ArrowRight className="text-gray-400 mx-2" />
                  <div className="p-3 bg-gray-50 border-2 border-gray-400 rounded-lg text-center w-32">
                    <span className="block font-bold text-gray-700 text-xs mb-1">Comité de gestion</span>
                    <span className="text-xs font-semibold bg-white text-gray-500 px-2 py-1 rounded">Marge: 15 jours</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mx-2 gap-8 relative">
                <div className="h-px bg-red-500 w-16 absolute top-1/4 -right-2 -rotate-12 origin-right"></div>
                <div className="h-px bg-gray-400 w-16 absolute bottom-1/4 -right-2 rotate-12 origin-right"></div>
              </div>

              <div className="w-12 h-12 rounded-full border-4 border-red-600 flex items-center justify-center font-bold text-xs text-red-700 bg-red-50 ml-16">FIN</div>
            </div>
          </div>
        </div>

        {/* MÉTHODE KANBAN */}
        <div>
          <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
            <span className="bg-teal-500 text-white w-6 h-6 rounded-md flex justify-center items-center text-xs">C</span> 
            Le Tableau KANBAN (Le Flux Tendu de l'Administration)
          </h4>
          <p className="text-sm text-gray-600 mb-3">
            C'est le management visuel par excellence pour les bureaux du Conseil. Son atout diagnostic est redoutable : si votre colonne "En cours" (au milieu) déborde de dossiers de décaissement alors que la colonne "Terminé" reste vide, vous venez d'identifier visuellement le <strong>goulot d'étranglement</strong> de votre département !
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-200 p-5 rounded-xl border border-gray-300 shadow-inner">
            <div className="bg-gray-100 rounded-lg p-3 border border-gray-300 shadow-xs">
              <h5 className="font-bold text-gray-700 mb-3 flex justify-between items-center border-b border-gray-300 pb-2">
                <span>À FAIRE (Backlog)</span>
                <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full">2</span>
              </h5>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-xs border-l-4 border-gray-500 text-sm font-medium text-gray-800">
                  Rédiger les TDR pour la réhabilitation du Lycée.
                </div>
                <div className="bg-white p-3 rounded-lg shadow-xs border-l-4 border-orange-400 text-sm font-medium text-gray-800 flex justify-between items-start">
                  <span>Signer l'ordre de mission (Mission Terrain)</span>
                  <AlertCircle size={16} className="text-orange-500"/>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-3 border-2 border-dashed border-red-400 shadow-xs relative pt-6 mt-4 md:mt-0">
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-[11px] px-3 py-1 rounded-full font-black shadow-md uppercase tracking-wider whitespace-nowrap z-10">Goulot d'étranglement !</span>
              <h5 className="font-bold text-red-900 mb-3 flex justify-between items-center border-b border-red-200 pb-2">
                <span>EN COURS (WIP)</span>
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">4</span>
              </h5>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-md border-l-4 border-blue-500 text-sm font-medium text-gray-800 transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="flex justify-between items-center mb-1 border-b pb-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Dossier #402</span>
                    <Clock size={14} className="text-yellow-600" />
                  </div>
                  Évaluation offres techniques (Forage).
                </div>
                <div className="bg-white p-3 rounded-lg shadow-md border-l-4 border-yellow-500 text-sm font-medium text-gray-800 transform rotate-1 hover:rotate-0 transition-transform">
                  Validation de la facture proforma du matériel.
                </div>
                <div className="bg-white p-3 rounded-lg shadow-md border-l-4 border-purple-500 text-sm font-medium text-gray-800">
                  Réunion de coordination avec les chefs de village.
                </div>
                <div className="bg-white p-3 rounded-lg shadow-md border-l-4 border-red-500 text-sm font-medium text-gray-800 opacity-80">
                  Vérification des lignes budgétaires (En attente).
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-3 border border-green-200 shadow-xs">
              <h5 className="font-bold text-green-900 mb-3 flex justify-between items-center border-b border-green-200 pb-2">
                <span>TERMINÉ (Done)</span>
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">1</span>
              </h5>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-xs border-l-4 border-green-500 text-sm font-medium text-gray-500 opacity-60">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-600" />
                    <span className="line-through">Validation budget primitif 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Kanban Simulator */}
          <InteractiveKanban />
        </div>

      </div>
    </div>
  </div>
);

const Module2Content: React.FC = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="border-b pb-4">
      <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Module Fondamental 2</span>
      <h2 className="text-2xl font-bold text-gray-900 mt-1">Suivi Budgétaire & Valeur Acquise (EVM)</h2>
    </div>
    
    <div className="bg-indigo-50/70 p-6 rounded-2xl border border-indigo-100">
      <p className="text-indigo-900 text-base md:text-lg leading-relaxed">
        L'EVM (Earned Value Management) transmue le suivi budgétaire classique en un véritable instrument de pilotage de la performance. Son atout majeur est sa capacité à croiser <strong>le budget dépensé</strong> avec <strong>l'avancement physique réel</strong> sur le terrain.
      </p>
    </div>

    {/* 1. LES LIMITES DE LA COMPTABILITÉ CLASSIQUE */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <Landmark size={24} className="text-blue-600" /> 1. Pourquoi la comptabilité classique est insuffisante ?
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="p-5 border border-red-200 rounded-xl bg-red-50/60">
          <h4 className="font-bold text-red-800 text-lg mb-2 flex items-center gap-2"><FileBarChart size={18}/> Comptabilité Budgétaire (Publique)</h4>
          <p className="text-sm text-gray-700 mb-3">
            C'est la comptabilité légale de l'État et du Conseil Régional. Elle suit le cycle <strong>Engagement → Liquidation → Ordonnancement → Paiement</strong>.
          </p>
          <ul className="text-xs text-red-900 space-y-2 list-disc pl-4">
            <li><strong>Son but :</strong> Vérifier la régularité et la légalité de la dépense. Savoir s'il reste des crédits sur la ligne budgétaire.</li>
            <li><strong>Sa faille en gestion de projet :</strong> Elle est totalement aveugle à la réalité physique. Si 50% du budget est payé, elle ne dit pas si l'on a construit 50% du dispensaire ou seulement 10%.</li>
            <li><strong>Conséquence :</strong> Elle masque dramatiquement le véritable <strong>goulot d'étranglement</strong>.</li>
          </ul>
        </div>
        
        <div className="p-5 border border-green-200 rounded-xl bg-green-50/60">
          <h4 className="font-bold text-green-800 text-lg mb-2 flex items-center gap-2"><Target size={18}/> Comptabilité de Gestion (EVM)</h4>
          <p className="text-sm text-gray-700 mb-3">
            C'est la comptabilité du chef de projet. Elle traduit l'avancement physique (briques posées, études validées) en valeur monétaire.
          </p>
          <ul className="text-xs text-green-900 space-y-2 list-disc pl-4">
            <li><strong>Son but :</strong> Mesurer la performance croisée (Délais / Coûts / Réalisation physique).</li>
            <li><strong>Sa force :</strong> Elle permet de comparer exactement ce qui a été fait par rapport à ce qui a été payé et ce qui était prévu.</li>
            <li><strong>Conséquence :</strong> Elle permet de localiser instantanément où se situe le <strong>goulot d'étranglement</strong> institutionnel.</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
        <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2"><AlertTriangle size={18}/> Le vrai visage du Goulot d'Étranglement Financier</h4>
        <p className="text-xs text-gray-700 leading-relaxed">
          Souvent, face à un projet en retard (ex: construction d'une école), l'administration accuse spontanément le prestataire ou l'équipe technique. Or, l'analyse des écarts (EVM) révèle très souvent que les agents techniques ont fait leur travail, mais que le prestataire a arrêté le chantier faute de paiement. <br/><br/>
          Le véritable <strong>goulot d'étranglement</strong> n'est donc pas l'exécution technique, mais <strong>le processus de décaissement</strong> (lourdeurs administratives, attente de signature du Président, validation lente du COPIL ou blocage au Trésor Public). La comptabilité de gestion permet de prouver mathématiquement cette défaillance institutionnelle.
        </p>
      </div>
    </div>

    {/* 2. LES TROIS PILIERS DE L'EVM */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <Target size={24} className="text-blue-600" /> 2. Les Variables Fondamentales (CP, CA, CR)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-xs border border-blue-200 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-2">
            <div className="text-2xl font-black text-blue-700">CP</div>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-bold">Planifié</span>
          </div>
          <h4 className="font-bold text-gray-800 border-b pb-1 mb-2">Coût Planifié</h4>
          <p className="text-xs text-gray-600">Expression monétaire de la portion du travail dont l'achèvement était théoriquement programmé à la date T.</p>
          <p className="text-xs text-blue-600 font-medium mt-2">Ce qu'on AURAIT DÛ dépenser pour ce qu'on AURAIT DÛ faire.</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-xs border border-green-200 hover:shadow-md transition-shadow relative">
          <div className="flex justify-between items-center mb-2">
            <div className="text-2xl font-black text-green-700">CA</div>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-bold">Acquis</span>
          </div>
          <h4 className="font-bold text-gray-800 border-b pb-1 mb-2">Coût Acquis (Valeur)</h4>
          <p className="text-xs text-gray-600">Valeur budgétaire du travail dont l'exécution physique est dûment constatée.</p>
          <p className="text-xs text-green-600 font-medium mt-2">Ce qu'on AURAIT DÛ dépenser pour ce qu'on a RÉELLEMENT fait.</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-xs border border-red-200 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-2">
            <div className="text-2xl font-black text-red-700">CR</div>
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-bold">Réel</span>
          </div>
          <h4 className="font-bold text-gray-800 border-b pb-1 mb-2">Coût Réel</h4>
          <p className="text-xs text-gray-600">Sommation absolue des coûts effectivement encourus et décaissements réalisés.</p>
          <p className="text-xs text-red-600 font-medium mt-2">Ce qu'on a RÉELLEMENT payé au total à ce jour.</p>
        </div>
      </div>
    </div>

    {/* 3. REPRÉSENTATION GRAPHIQUE : LA COURBE EN S */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <LineChart size={24} className="text-blue-600" /> 3. La Courbe en S : Représentation du Cumul
      </h3>
      <p className="text-gray-700 mb-6 text-sm">
        Ce graphique superpose les trois indicateurs. Il permet de voir d'un seul coup d'œil la santé financière et opérationnelle du projet à une date précise (ici, au Mois 4). Si la courbe du Coût Acquis (CA) s'effondre alors que le temps passe, le graphique hurle la présence d'un <strong>goulot d'étranglement</strong> majeur !
      </p>

      {/* Graphique SVG Courbe en S stylisé */}
      <div className="border border-gray-200 rounded-xl p-4 md:p-8 bg-gray-50 flex flex-col items-center shadow-inner">
        <h4 className="font-bold text-gray-700 mb-6 uppercase tracking-widest text-xs text-center">Évolution cumulative des coûts du projet</h4>
        
        <div className="relative w-full max-w-2xl h-64 md:h-80 bg-white border-l-2 border-b-2 border-gray-400 pl-2 pb-2">
          
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 ml-2 mt-2 opacity-10 pointer-events-none">
            {[...Array(30)].map((_, i) => <div key={i} className="border border-gray-400"></div>)}
          </div>

          <div className="absolute top-0 bottom-0 left-[66%] border-l-2 border-dashed border-gray-400 opacity-70 flex flex-col items-end pt-2">
            <span className="bg-gray-700 text-white text-[10px] px-2 py-1 rounded-l-md font-bold absolute -left-[72px]">Aujourd'hui</span>
          </div>

          <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
            <path 
              d="M 10,250 C 100,240 150,150 250,100 S 400,20 500,10" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="drop-shadow-xs"
              vectorEffect="non-scaling-stroke"
            />
            <path 
              d="M 10,250 C 90,245 140,200 220,160 S 300,140 330,135" 
              fill="none" 
              stroke="#22c55e" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="drop-shadow-xs"
              vectorEffect="non-scaling-stroke"
            />
            <path 
              d="M 10,250 C 100,230 140,180 230,120 S 310,90 330,80" 
              fill="none" 
              stroke="#ef4444" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="drop-shadow-xs"
              vectorEffect="non-scaling-stroke"
            />
            
            <circle cx="66%" cy="30%" r="5" fill="#ef4444" />
            <circle cx="66%" cy="40%" r="5" fill="#3b82f6" />
            <circle cx="66%" cy="60%" r="5" fill="#22c55e" />
          </svg>

          <div className="absolute -left-12 top-0 bottom-0 flex flex-col justify-between text-xs font-bold text-gray-500 py-2 items-end">
            <span>100M</span>
            <span>80M</span>
            <span>60M</span>
            <span>40M</span>
            <span>20M</span>
            <span>0</span>
          </div>

          <div className="absolute -bottom-6 left-2 right-0 flex justify-between text-xs font-bold text-gray-500">
            <span>M1</span>
            <span>M2</span>
            <span>M3</span>
            <span className="text-gray-800">M4</span>
            <span>M5</span>
            <span>M6</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-blue-500 rounded"></div>
            <span className="text-xs font-bold text-gray-700">Coût Planifié (CP)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-green-500 rounded"></div>
            <span className="text-xs font-bold text-gray-700">Coût Acquis (CA)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-red-500 rounded"></div>
            <span className="text-xs font-bold text-gray-700">Coût Réel (CR)</span>
          </div>
        </div>
      </div>
    </div>

    {/* 4. DIAGNOSTIC DU GOULOT VIA LES INDICATEURS */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <AlertCircle size={24} className="text-blue-600" /> 4. Diagnostic par les Indicateurs (KPI)
      </h3>
      <p className="text-gray-700 text-sm mb-6">
        Les ratios permettent de traduire le graphique en constats chiffrés et opposables en réunion de COPIL. Si les indices sont inférieurs à 1, l'alerte rouge est déclenchée.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-bold text-indigo-900 text-lg">IPD</h4>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-black px-2 py-1 rounded">CA / CP</span>
          </div>
          <p className="text-sm font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-3">Indice de Performance des Délais</p>
          <div className="bg-white p-3 rounded-lg shadow-2xs text-xs">
            <p className="text-red-600 font-bold mb-1">Résultat : 0.70 (Retard grave)</p>
            <p className="text-gray-600">Le projet n'avance qu'à 70% de la vitesse prévue. L'avancement physique (CA) stagne. <strong>Diagnostic :</strong> Il faut chercher le <strong>goulot d'étranglement</strong> qui bloque la production technique.</p>
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-bold text-teal-900 text-lg">IPC</h4>
            <span className="bg-teal-100 text-teal-800 text-xs font-black px-2 py-1 rounded">CA / CR</span>
          </div>
          <p className="text-sm font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-3">Indice de Performance des Coûts</p>
          <div className="bg-white p-3 rounded-lg shadow-2xs text-xs">
            <p className="text-red-600 font-bold mb-1">Résultat : 0.85 (Déficit budgétaire)</p>
            <p className="text-gray-600">Pour chaque 100 FCFA dépensés (CR), on n'obtient que 85 FCFA de valeur réelle (CA). <strong>Diagnostic :</strong> Dérives des coûts, gaspillages ou paiements effectués sans contrepartie physique valable.</p>
          </div>
        </div>
      </div>

      {/* Interactive EVM Calculator Tool */}
      <InteractiveEVM />
    </div>
  </div>
);

const Module3Content: React.FC = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="border-b pb-4">
      <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Module Fondamental 3</span>
      <h2 className="text-2xl font-bold text-gray-900 mt-1">Outils de Suivi-Évaluation</h2>
    </div>

    {/* 1. OUTILS DE CADRAGE STRATÉGIQUE */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <BookOpen size={24} className="text-blue-600" /> 1. Les Outils de Cadrage et de Planification
      </h3>
      <p className="text-gray-700 text-sm mb-4">Avant même d'aller sur le terrain, le projet doit être solidement ancré sur le plan documentaire pour éviter toute ambiguïté d'exécution.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <h4 className="font-bold text-blue-800 mb-2">Charte & Lettre de Mission</h4>
          <p className="text-xs text-gray-700 leading-relaxed">L'acte de naissance officiel. Elle nomme le chef de projet, lui confère son autorité institutionnelle et définit les grands objectifs de son mandat.</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
          <h4 className="font-bold text-indigo-800 mb-2">Termes de Référence (TDR)</h4>
          <p className="text-xs text-gray-700 leading-relaxed">C'est le <strong>"Quoi"</strong>. Le cahier des charges détaillé fixant le contexte, les résultats attendus, les livrables exigés et les profils requis.</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
          <h4 className="font-bold text-purple-800 mb-2">Note Méthodologique</h4>
          <p className="text-xs text-gray-700 leading-relaxed">C'est le <strong>"Comment"</strong>. Réponse technique aux TDR, elle explique la démarche, les outils de collecte de données et le chronogramme d'intervention.</p>
        </div>
      </div>
    </div>

    {/* 2. CONSTITUTION DE L'ÉQUIPE DE MISSION */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <Users size={24} className="text-blue-600" /> 2. La Constitution de l'Équipe de Mission
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        Une mission de terrain pour évaluer un projet ne se fait <strong>jamais seul</strong>. Pour garantir l'objectivité, l'équipe doit être <em>pluridisciplinaire</em>. La constitution de cette équipe varie en fonction du type de rapport à produire :
      </p>

      <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mb-6">
        <h4 className="font-bold text-gray-800 mb-3 border-b pb-2 text-sm">Les Profils Incontournables de la Mission</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-3 items-start">
            <div className="bg-blue-100 p-2 rounded-full text-blue-700 mt-0.5 shrink-0"><Target size={16}/></div>
            <div>
              <strong className="text-xs text-gray-900">1. Le Chef de Mission (Expert S&E)</strong>
              <p className="text-[11px] text-gray-600">Garant de la méthodologie, il vérifie les indicateurs (IOV), conduit les entretiens et rédige le rapport final.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="bg-orange-100 p-2 rounded-full text-orange-700 mt-0.5 shrink-0"><ShieldCheck size={16}/></div>
            <div>
              <strong className="text-xs text-gray-900">2. L'Expert Technique (Ingénieur)</strong>
              <p className="text-[11px] text-gray-600">Contrôle l'avancement physique (PBS) et valide la qualité technique des réalisations (béton, matériaux).</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="bg-green-100 p-2 rounded-full text-green-700 mt-0.5 shrink-0"><Landmark size={16}/></div>
            <div>
              <strong className="text-xs text-gray-900">3. Le Contrôleur Financier</strong>
              <p className="text-[11px] text-gray-600">Croise l'avancement physique validé avec les décaissements réels pour éviter les fraudes (EVM).</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="bg-purple-100 p-2 rounded-full text-purple-700 mt-0.5 shrink-0"><Users size={16}/></div>
            <div>
              <strong className="text-xs text-gray-900">4. Le Représentant Local</strong>
              <p className="text-[11px] text-gray-600">Bénéficiaire ou chef de village, il atteste de la transparence et confirme si le projet répond à un besoin réel.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
         <h4 className="font-bold text-indigo-900 mb-2 text-xs">Comment se forme l'équipe selon le rapport ?</h4>
         <ul className="text-xs text-indigo-800 space-y-2 list-disc pl-5">
           <li><strong>Pour un Rapport d'Avancement :</strong> L'équipe est généralement <em>interne</em> au Conseil Régional (Direction Technique + Direction S&E). C'est un contrôle de routine.</li>
           <li><strong>Pour une Évaluation à Mi-parcours ou Ex-Post :</strong> L'équipe intègre obligatoirement des <em>consultants externes et indépendants</em>. Cela garantit une neutralité totale face aux décideurs politiques et rassure les bailleurs de fonds.</li>
         </ul>
      </div>
    </div>

    {/* 3. LE CYCLE DES RAPPORTS ET LEURS COMPOSANTS */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <FileText size={24} className="text-blue-600" /> 3. Le Cycle des Rapports et leurs Composants
      </h3>
      
      <p className="text-gray-700 text-sm mb-6">
        Les constatations de l'équipe de mission alimentent une chaîne de rapports précis à l'attention des décideurs du Conseil Régional. Chaque rapport a une périodicité et une structure bien définies.
      </p>

      <div className="space-y-6">
        
        {/* Rapport d'Avancement */}
        <div className="border border-blue-200 rounded-xl overflow-hidden">
          <div className="bg-blue-50 p-4 border-b border-blue-200 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h4 className="font-bold text-blue-900 text-lg flex items-center gap-2">
              <Clock size={20} className="text-blue-600"/> A. Le Rapport d'Avancement (Le Suivi Continu)
            </h4>
            <span className="bg-white text-blue-800 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
              Période : Mensuelle ou Trimestrielle
            </span>
          </div>
          <div className="p-5 bg-white">
            <p className="text-sm text-gray-700 mb-3">Rédigé par l'équipe interne, il fait le point sur l'exécution des tâches (WBS) et la consommation du budget (EVM). C'est l'outil d'alerte rapide.</p>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Composants clés :</span>
              <ul className="text-xs text-gray-700 space-y-1 list-disc pl-5">
                <li>État d'avancement physique (Tâches réalisées vs prévues).</li>
                <li>État de consommation budgétaire (Dépenses réelles vs planifiées).</li>
                <li>Difficultés rencontrées (Goulots d'étranglement immédiats).</li>
                <li>Plan d'action pour la période suivante.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Évaluation à Mi-Parcours */}
        <div className="border border-orange-200 rounded-xl overflow-hidden">
          <div className="bg-orange-50 p-4 border-b border-orange-200 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h4 className="font-bold text-orange-900 text-lg flex items-center gap-2">
              <AlertCircle size={20} className="text-orange-600"/> B. L'Évaluation à Mi-Parcours (Le Diagnostic Vital)
            </h4>
            <div className="flex flex-col items-end">
               <span className="bg-white text-orange-800 text-xs font-bold px-3 py-1 rounded-full border border-orange-200 mb-1">
                 Période : À 50% du temps ou 50% du budget
               </span>
               <span className="text-[10px] text-orange-700 italic">Généralement 1 seule fois, ou annuelle pour les méga-projets.</span>
            </div>
          </div>
          <div className="p-5 bg-white">
            <p className="text-sm text-gray-700 mb-3">Réalisée avec un consultant externe. Son but n'est pas de sanctionner, mais de rectifier. Si le projet dérive, c'est ce rapport qui propose des mesures correctives majeures, voire la réorientation totale des activités.</p>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Composants clés :</span>
              <ul className="text-xs text-gray-700 space-y-1 list-disc pl-5">
                <li>Analyse de la pertinence (Le projet répond-il toujours aux besoins initiaux ?).</li>
                <li>Évaluation de l'efficacité et de l'efficience à mi-chemin.</li>
                <li>Actualisation des risques et hypothèses.</li>
                <li><strong>Recommandations de réajustement majeur</strong> (Budget, délais, périmètre).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Évaluations Finales et Ex-Post */}
        <div className="border border-green-200 rounded-xl overflow-hidden">
          <div className="bg-green-50 p-4 border-b border-green-200 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h4 className="font-bold text-green-900 text-lg flex items-center gap-2">
              <CheckCircle2 size={20} className="text-green-600"/> C. L'Évaluation d'Impact (Finale) & L'Évaluation Ex-Post
            </h4>
            <span className="bg-white text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
              Période : À la clôture et des années plus tard
            </span>
          </div>
          <div className="p-5 bg-white grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            <div>
              <h5 className="font-bold text-green-800 text-sm mb-1 border-b pb-1">1. L'Évaluation d'Impact (Finale)</h5>
              <p className="text-xs text-gray-600 mb-2">Réalisée à la <strong>clôture immédiate</strong> du projet.</p>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 h-full">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Composants clés :</span>
                <ul className="text-xs text-gray-700 space-y-1 list-disc pl-4">
                  <li>Bilan total des réalisations physiques (Livrables).</li>
                  <li>Mesure des premiers effets sur les comportements des bénéficiaires.</li>
                  <li>Clôture financière (Budget final).</li>
                  <li>Document des "Leçons apprises" (Lessons learned).</li>
                </ul>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-teal-800 text-sm mb-1 border-b pb-1 flex items-center gap-2"><History size={14}/> 2. L'Évaluation Ex-Post</h5>
              <p className="text-xs text-gray-600 mb-2">Réalisée par des auditeurs <strong>3 à 5 ans après</strong> la fin du projet.</p>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 h-full">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Composants clés :</span>
                <ul className="text-xs text-gray-700 space-y-1 list-disc pl-4">
                  <li><strong>Analyse de la Viabilité (Pérennité) :</strong> L'infrastructure (ex: l'école) est-elle entretenue et fonctionne-t-elle toujours ?</li>
                  <li><strong>Mesure de l'Impact lourd :</strong> Le taux de scolarisation de la région a-t-il réellement augmenté sur le long terme ?</li>
                  <li>Identification des effets inattendus de long terme (positifs ou négatifs).</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
);

const Module4Content: React.FC = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="border-b pb-4">
      <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Module Fondamental 4</span>
      <h2 className="text-2xl font-bold text-gray-900 mt-1">L'Approche GAR (Gestion Axée sur les Résultats)</h2>
    </div>

    {/* 1. L'HISTOIRE ET LA GENÈSE */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <History size={24} className="text-blue-600" /> 1. La Grande Histoire de la GAR
      </h3>
      <p className="text-gray-700 mb-6 text-sm">
        La GAR n'est pas née du jour au lendemain. C'est le fruit d'une longue évolution des pratiques de management et de la coopération internationale, passant d'une simple "gestion des dépenses" à une véritable "culture de l'impact".
      </p>

      <div className="relative border-l-4 border-blue-200 ml-4 space-y-6 pb-4">
        <div className="relative pl-6">
          <div className="absolute -left-3.5 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-xs"></div>
          <h4 className="font-bold text-gray-800 text-sm">L'Après-Guerre & le Plan Marshall</h4>
          <p className="text-xs text-gray-600 mt-1">Au départ, la logique de développement était purement basée sur les <strong>moyens (intrants)</strong>. L'idée dominante était : "Si nous injectons des millions de dollars, le développement suivra automatiquement". L'échec de nombreux projets dans les pays du Sud a prouvé que l'argent seul ne garantit pas la réussite.</p>
        </div>

        <div className="relative pl-6">
          <div className="absolute -left-3.5 top-1 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow-xs"></div>
          <h4 className="font-bold text-indigo-900 text-sm">1954 : Peter Drucker et la Direction par les Objectifs</h4>
          <p className="text-xs text-gray-600 mt-1">Le célèbre théoricien du management Peter Drucker introduit l'idée révolutionnaire qu'une organisation ne doit pas être gérée par l'accumulation de ses tâches quotidiennes, mais par les <strong>objectifs finaux qu'elle souhaite atteindre</strong>.</p>
        </div>

        <div className="relative pl-6">
          <div className="absolute -left-3.5 top-1 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-xs"></div>
          <h4 className="font-bold text-purple-900 text-sm">1969 : L'USAID et Leon Rosenberg (Cabinet PCI)</h4>
          <p className="text-xs text-gray-600 mt-1">L'Agence des États-Unis pour le Développement International (USAID) confie au cabinet <strong>Practical Concepts Incorporated (PCI)</strong> de Leon Rosenberg la mission de structurer l'aide au développement. Ils inventent alors la matrice du <strong>Cadre Logique</strong>, reliant pour la première fois les activités aux objectifs globaux.</p>
        </div>

        <div className="relative pl-6">
          <div className="absolute -left-3.5 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-xs"></div>
          <h4 className="font-bold text-green-900 text-sm">Les années 1990 : L'ACDI et la naissance de la GAR</h4>
          <p className="text-xs text-gray-600 mt-1">S'inspirant de ces décennies d'évolution, l'<strong>Agence Canadienne de Développement International (ACDI)</strong> valide et conceptualise officiellement la "Gestion Axée sur les Résultats". Elle devient progressivement la norme mondiale pour justifier l'utilisation des fonds publics et l'aide internationale.</p>
        </div>
      </div>
    </div>

    {/* 2. LE CONTEXTE DE LA COOPÉRATION INTERNATIONALE */}
    <div className="bg-indigo-50/70 p-6 rounded-2xl shadow-xs border border-indigo-100">
      <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
        <Globe size={24} className="text-indigo-600" /> 2. La Coopération Internationale au cœur de la GAR
      </h3>
      <p className="text-sm text-indigo-800 mb-4">
        Si la GAR s'est imposée de manière universelle, c'est sous la pression des citoyens et de la communauté internationale. Les contribuables des pays donateurs exigeaient de la <strong>redevabilité</strong> (savoir où et comment leur argent était utilisé).
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-xs border border-indigo-100">
          <h4 className="font-bold text-gray-800 text-sm mb-2 flex items-center gap-2"><Landmark size={16} className="text-blue-600"/> Les Institutions (FMI, OMC, CAD)</h4>
          <p className="text-xs text-gray-600">Le <strong>Fonds Monétaire International (FMI)</strong>, l'<strong>OMC</strong> et le <strong>Comité d'Aide au Développement (CAD)</strong> de l'OCDE ont progressivement imposé la GAR comme condition <em>sine qua non</em> pour l'octroi d'aides. L'objectif était d'harmoniser l'aide multilatérale et bilatérale autour d'un langage commun axé sur la preuve du résultat.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-xs border border-indigo-100">
          <h4 className="font-bold text-gray-800 text-sm mb-2 flex items-center gap-2"><Users size={16} className="text-green-600"/> Le Rôle des ONG</h4>
          <p className="text-xs text-gray-600">Les <strong>Organisations Non Gouvernementales (ONG)</strong> ont été des pionnières de l'impact sur le terrain. Elles ont prouvé qu'un projet n'est réussi que si la population s'approprie l'ouvrage. Elles ont milité pour qu'on arrête de compter les "écoles construites" (Extrants) pour commencer à compter les "enfants éduqués" (Impacts).</p>
        </div>
      </div>
    </div>

    {/* 3. POURQUOI LA GAR ET SES OBJECTIFS */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <Target size={24} className="text-blue-600" /> 3. Pourquoi utiliser la GAR aujourd'hui ?
      </h3>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 text-sm text-gray-700 space-y-3">
          <p>L'objectif fondamental de la GAR est d'instaurer une culture de la performance. Pour le Conseil Régional du Gbêkê, l'importance de son application se résume en quatre points cruciaux :</p>
          <ul className="list-disc pl-5 space-y-2 font-medium text-xs">
            <li>Justifier chaque franc dépensé par un changement positif mesurable sur le territoire.</li>
            <li>Améliorer la transparence et restaurer la confiance vis-à-vis des populations.</li>
            <li>Garantir la <strong>viabilité</strong> et la durabilité des infrastructures.</li>
            <li>Faciliter la captation de financements extérieurs : aujourd'hui, les bailleurs ne financent plus des "activités", ils financent des "impacts".</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 bg-blue-900 text-white p-5 rounded-2xl text-center shadow-lg">
          <span className="block text-lg font-black mb-2 border-b border-blue-700 pb-2">L'ESSENTIEL</span>
          <p className="text-xs italic leading-relaxed">"Ne me dites pas combien de réunions vous avez tenues ni combien le puits a coûté... Dites-moi plutôt combien de maladies hydriques ont disparu dans le village."</p>
        </div>
      </div>
    </div>

    {/* 4. REPÉRER LES GOULOTS D'ÉTRANGLEMENT AVEC LA GAR */}
    <div className="bg-red-50/70 p-6 rounded-2xl shadow-xs border border-red-100">
      <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
        <AlertTriangle size={24} className="text-red-600" /> 4. La GAR pour repérer les Goulots d'Étranglement
      </h3>
      <p className="text-sm text-red-800 mb-4">
        Au-delà de la planification, la chaîne de résultats de la GAR (<em>Intrants → Activités → Extrants → Effets → Impacts</em>) est un formidable outil de diagnostic. En observant où la chaîne se brise, on localise exactement la nature du <strong>goulot d'étranglement</strong>.
      </p>
      <div className="space-y-3">
        <div className="bg-white p-4 rounded-xl shadow-xs flex items-start gap-3 border-l-4 border-yellow-400">
          <ArrowRight className="text-yellow-500 mt-1 shrink-0" size={18}/>
          <div>
            <strong className="text-sm text-gray-800 block mb-1">Goulot Administratif (Brisure entre Intrants et Activités)</strong>
            <p className="text-xs text-gray-600">L'argent est disponible, le personnel est là, mais les activités ne démarrent pas. Le blocage est purement institutionnel : lourdeurs dans la passation des marchés, décaissements bloqués au Trésor Public, ou attentes interminables de signatures.</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-xs flex items-start gap-3 border-l-4 border-orange-400">
          <ArrowRight className="text-orange-500 mt-1 shrink-0" size={18}/>
          <div>
            <strong className="text-sm text-gray-800 block mb-1">Goulot Opérationnel (Brisure entre Activités et Extrants)</strong>
            <p className="text-xs text-gray-600">Les équipes travaillent, l'argent est dépensé, mais le bâtiment n'est pas livré. Le blocage se situe sur le terrain : incompétence du prestataire, rupture de stock de matériaux, ou mauvaise coordination entre les services du Conseil (le travail en "silos").</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-xs flex items-start gap-3 border-l-4 border-red-500">
          <ArrowRight className="text-red-600 mt-1 shrink-0" size={18}/>
          <div>
            <strong className="text-sm text-gray-800 block mb-1">Goulot Stratégique (Brisure entre Extrants et Effets/Impacts)</strong>
            <p className="text-xs text-gray-600">Le dispensaire est achevé et parfaitement équipé (Extrant validé), mais aucune population ne s'y rend. C'est le pire des goulots : le projet a été mal pensé à la base. Il n'y a pas de personnel médical affecté, ou le lieu est trop éloigné du village. C'est un échec total d'impact.</p>
          </div>
        </div>
      </div>

      {/* Interactive Results Chain Diagnostic */}
      <InteractiveChainDiag />
    </div>

    {/* 5. LES CONDITIONS INDISPENSABLES AU SUCCÈS DE LA GAR */}
    <div className="bg-indigo-50/70 p-6 rounded-2xl shadow-xs border border-indigo-100">
      <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
        <ShieldCheck size={24} className="text-indigo-600" /> 5. Les Conditions Indispensables au Succès de la GAR
      </h3>
      <p className="text-sm text-indigo-800 mb-6">
        La GAR n'est pas une méthode miracle. C'est une approche exigeante qui <strong>se fragilise très rapidement</strong> si l'environnement institutionnel n'est pas assaini. Pour qu'elle fonctionne réellement, elle doit s'appuyer sur trois grands piliers complémentaires :
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pilier 1 : Gouvernance & Éthique */}
        <div className="bg-white p-5 rounded-xl shadow-xs border-t-4 border-blue-500">
          <h4 className="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2">
            <Landmark size={18} className="text-blue-600"/> Bonne Gouvernance & Éthique
          </h4>
          <ul className="text-xs text-gray-700 space-y-2 list-none pl-0">
            <li className="flex gap-2"><span className="text-blue-500">•</span> <span><strong>L'organisation :</strong> Chacun doit connaître son rôle exact (via la <em>Matrice RACI</em>) pour éviter la dilution des responsabilités.</span></li>
            <li className="flex gap-2"><span className="text-blue-500">•</span> <span><strong>Les influences :</strong> Il faut gérer les jeux de pouvoir avec la <em>Matrice Pouvoir / Intérêt</em> des parties prenantes.</span></li>
            <li className="flex gap-2"><span className="text-blue-500">•</span> <span><strong>L'Intégrité :</strong> Une morale, une éthique et une déontologie irréprochables sont requises. La corruption ou le mensonge sur les indicateurs détruisent la crédibilité de la GAR.</span></li>
          </ul>
        </div>

        {/* Pilier 2 : Gestion des Risques */}
        <div className="bg-white p-5 rounded-xl shadow-xs border-t-4 border-orange-500">
          <h4 className="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2">
            <AlertTriangle size={18} className="text-orange-600"/> Gestion des Risques
          </h4>
          <p className="text-xs text-gray-700 leading-relaxed">
            Parce que la GAR est orientée vers les résultats futurs, il est vital d'anticiper tout ce qui pourrait faire dérailler le projet. L'identification systématique, l'évaluation et la mitigation des risques (climatiques, financiers, politiques) constituent le bouclier qui protège l'atteinte de l'impact final.
          </p>
        </div>

        {/* Pilier 3 : Conduite du Changement */}
        <div className="bg-white p-5 rounded-xl shadow-xs border-t-4 border-green-500">
          <h4 className="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2">
            <Users size={18} className="text-green-600"/> Conduite du Changement
          </h4>
          <p className="text-xs text-gray-700 mb-2">
            Imposer la GAR bouleverse les habitudes et crée naturellement de la <strong>résistance au changement</strong>. Il faut manager l'humain :
          </p>
          <ul className="text-xs text-gray-700 space-y-2 list-none pl-0">
            <li className="flex gap-2"><span className="text-green-500">•</span> <span>Appliquer la méthodologie <strong>PROSCI</strong> pour encadrer la transition.</span></li>
            <li className="flex gap-2"><span className="text-green-500">•</span> <span>Aligner le projet avec le <strong>Triangle PCT</strong> (Sponsor, Projet, Changement).</span></li>
            <li className="flex gap-2"><span className="text-green-500">•</span> <span>Accompagner individuellement l'agent avec le modèle <strong>ADKAR</strong>.</span></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
);

const Module5Content: React.FC = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="border-b pb-4">
      <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Module Fondamental 5</span>
      <h2 className="text-2xl font-bold text-gray-900 mt-1">Gestion des Équipes & Coordination Interservices</h2>
    </div>
    
    {/* 1. LE CONTEXTE ET LES OBJECTIFS */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <Users size={24} className="text-blue-600" /> 1. Pourquoi coordonner les équipes ?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
          <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
            <AlertTriangle size={18} /> Le constat (Le chaos organisationnel)
          </h4>
          <p className="text-xs text-gray-700 leading-relaxed">
            Dans de nombreuses administrations, le travail se fait en "silos". Les agents se retrouvent souvent à faire le travail des autres pour compenser les retards, ou inversement, des tâches cruciales sont abandonnées car "tout le monde pensait que l'autre s'en chargeait". Le résultat : épuisement, conflits, et <strong>dilution totale des responsabilités</strong>.
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
          <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
            <Target size={18} /> L'objectif et les résultats visés
          </h4>
          <p className="text-xs text-gray-700 leading-relaxed">
            La gestion des équipes ne consiste pas seulement à "donner des ordres", mais à créer de la <strong>synergie</strong>. L'objectif est de clarifier formellement "Qui fait Quoi". Le résultat visé est une exécution fluide où chaque direction (Technique, Financière, Marchés) intervient exactement au bon moment, sans empiéter sur les prérogatives des autres.
          </p>
        </div>
      </div>
    </div>

    {/* 2. RESPONSABILITÉ VS RESPONSABILISATION */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <ShieldCheck size={24} className="text-blue-600" /> 2. Responsabilité vs Responsabilisation (Imputabilité)
      </h3>
      <p className="text-gray-700 text-sm mb-6">
        Pour qu'une équipe fonctionne bien, il est vital de comprendre la différence entre ces deux concepts souvent confondus. L'efficacité naît lorsque les deux sont parfaitement alignés.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500 shadow-2xs">
          <h4 className="font-bold text-blue-900 text-base mb-2">La Responsabilité (Obligation de FAIRE)</h4>
          <p className="text-xs text-gray-700 mb-3">
            C'est l'exécution physique et technique de la tâche. Celui qui est responsable est celui qui "transpire" sur le dossier.
          </p>
          <ul className="text-xs text-blue-800 list-disc pl-5 font-medium space-y-1">
            <li>Exemple : L'ingénieur qui dessine le plan du forage.</li>
            <li>Règle d'or : La responsabilité <strong>peut se déléguer</strong> (un chef peut confier la rédaction d'un rapport à son assistant).</li>
          </ul>
        </div>

        <div className="flex-1 bg-indigo-50 p-5 rounded-xl border-l-4 border-indigo-500 shadow-2xs">
          <h4 className="font-bold text-indigo-900 text-base mb-2">La Responsabilisation / Imputabilité (Obligation de RENDRE COMPTE)</h4>
          <p className="text-xs text-gray-700 mb-3">
            C'est l'autorité ultime. Celui qui est imputable est celui qui devra répondre de l'échec ou du succès devant le Président ou les populations.
          </p>
          <ul className="text-xs text-indigo-800 list-disc pl-5 font-medium space-y-1">
            <li>Exemple : Le Directeur Technique qui valide et signe le plan.</li>
            <li>Règle d'or : L'imputabilité <strong>ne se délègue JAMAIS</strong>. En cas d'effondrement du forage, c'est le Directeur qui est mis en cause, pas le stagiaire qui a fait le dessin.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* 3. LA MATRICE RACI (EXPLICATION) */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <Users size={24} className="text-blue-600" /> 3. Clarifier les rôles avec la Matrice RACI
      </h3>
      <p className="text-gray-700 text-sm mb-6">
        La matrice RACI est un outil visuel qui permet d'affecter un rôle précis à chaque acteur pour une tâche donnée, évitant ainsi le fameux syndrome du "c'est pas mon travail".
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-50 rounded-xl text-center border-t-4 border-blue-500 shadow-xs hover:-translate-y-0.5 transition-transform">
          <div className="text-3xl font-black text-blue-600 mb-2">R</div>
          <div className="font-bold text-gray-800 text-xs">Réalisateur (Responsible)</div>
          <div className="text-[11px] text-gray-600 mt-2">Celui qui exécute le travail. Il peut y avoir plusieurs "R" pour une tâche complexe.</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl text-center border-t-4 border-red-500 shadow-xs hover:-translate-y-0.5 transition-transform">
          <div className="text-3xl font-black text-red-600 mb-2">A</div>
          <div className="font-bold text-gray-800 text-xs">Approbateur (Accountable)</div>
          <div className="text-[11px] text-gray-600 mt-2">L'autorité. Celui qui valide le travail et rend des comptes. <strong className="text-red-600">Un seul "A" par tâche !</strong></div>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl text-center border-t-4 border-yellow-500 shadow-xs hover:-translate-y-0.5 transition-transform">
          <div className="text-3xl font-black text-yellow-600 mb-2">C</div>
          <div className="font-bold text-gray-800 text-xs">Consulté (Consulted)</div>
          <div className="text-[11px] text-gray-600 mt-2">L'expert dont l'avis est requis AVANT d'agir. (Communication bidirectionnelle).</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl text-center border-t-4 border-green-500 shadow-xs hover:-translate-y-0.5 transition-transform">
          <div className="text-3xl font-black text-green-600 mb-2">I</div>
          <div className="font-bold text-gray-800 text-xs">Informé (Informed)</div>
          <div className="text-[11px] text-gray-600 mt-2">Tenu au courant APRÈS l'action, souvent pour prendre le relais. (Communication unidirectionnelle).</div>
        </div>
      </div>
    </div>

    {/* 4. COMMENT REMPLIR LA MATRICE (CAS PRATIQUE) */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <FileBarChart size={24} className="text-blue-600" /> 4. Cas Pratique : Comment remplir la matrice ?
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        Le remplissage est très simple : On place les <strong>Activités / Tâches en lignes (ordonnées)</strong> et les <strong>Acteurs / Directions en colonnes (abscisses)</strong>. Au croisement des deux, on attribue la lettre appropriée.
      </p>

      <div className="overflow-x-auto shadow-2xs border border-gray-200 rounded-xl mb-6">
        <table className="min-w-full text-sm text-center">
          <thead className="bg-indigo-900 text-white text-xs">
            <tr>
              <th className="p-3 border-b text-left bg-indigo-950 w-1/3">Activités (Ordonnées) ↓ \ Acteurs →</th>
              <th className="p-3 border-b border-l border-indigo-800">Directeur Technique</th>
              <th className="p-3 border-b border-l border-indigo-800">Directeur Marchés</th>
              <th className="p-3 border-b border-l border-indigo-800">Directeur Financier</th>
              <th className="p-3 border-b border-l border-indigo-800">Président du Conseil</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white text-xs">
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-semibold text-gray-800 text-left">1. Rédiger le cahier des charges technique</td>
              <td className="p-3 border-l bg-blue-50 font-bold text-blue-700">R (Réalise)</td>
              <td className="p-3 border-l text-gray-500">I (Informé)</td>
              <td className="p-3 border-l text-gray-500">-</td>
              <td className="p-3 border-l bg-red-50 font-bold text-red-700">A (Approuve)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-semibold text-gray-800 text-left">2. Lancer l'Appel d'Offres</td>
              <td className="p-3 border-l bg-yellow-50 font-bold text-yellow-700">C (Consulté)</td>
              <td className="p-3 border-l bg-blue-50 font-bold text-blue-700">R (Réalise)</td>
              <td className="p-3 border-l bg-yellow-50 font-bold text-yellow-700">C (Consulté)</td>
              <td className="p-3 border-l bg-red-50 font-bold text-red-700">A (Approuve)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-semibold text-gray-800 text-left">3. Payer l'acompte de démarrage</td>
              <td className="p-3 border-l bg-yellow-50 font-bold text-yellow-700">C (Consulté)</td>
              <td className="p-3 border-l bg-green-50 font-bold text-green-700">I (Informé)</td>
              <td className="p-3 border-l bg-blue-50 font-bold text-blue-700">R (Réalise)</td>
              <td className="p-3 border-l bg-red-50 font-bold text-red-700">A (Approuve)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-semibold text-gray-800 text-left">4. Valider l'achèvement des travaux sur site</td>
              <td className="p-3 border-l bg-red-50 font-bold text-red-700">A (Approuve)</td>
              <td className="p-3 border-l bg-green-50 font-bold text-green-700">I (Informé)</td>
              <td className="p-3 border-l bg-green-50 font-bold text-green-700">I (Informé)</td>
              <td className="p-3 border-l bg-green-50 font-bold text-green-700">I (Informé)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl text-xs text-gray-700 italic">
        <strong>Observation sur la Ligne 4 :</strong> Remarquez que pour la "Validation sur site", c'est le Directeur Technique qui est "A" (Approbateur final et imputable de la qualité des travaux), tandis que le Président n'est que "I" (Informé). L'imputabilité technique a bien été transférée à l'expert.
      </div>

      {/* Interactive RACI Simulator */}
      <InteractiveRACI />
    </div>
  </div>
);

const Module6Content: React.FC = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="border-b pb-4">
      <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Module Fondamental 6</span>
      <h2 className="text-2xl font-bold text-gray-900 mt-1">Éthique, Gouvernance & Conduite du Changement</h2>
    </div>

    {/* 1. CLARIFICATION DES CONCEPTS ÉTHIQUES */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <ShieldCheck size={24} className="text-blue-600" /> 1. Morale, Déontologie et Éthique
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-5 rounded-xl border-t-4 border-t-blue-500">
          <h4 className="font-bold text-blue-900 mb-2 text-sm">La Morale</h4>
          <p className="text-xs text-gray-700 leading-relaxed">Relève de la sphère privée et de l'intime (honnêteté, éducation). Elle est subjective et indique ce qui est "Bien" ou "Mal".</p>
        </div>
        <div className="bg-red-50 p-5 rounded-xl border-t-4 border-t-red-500">
          <h4 className="font-bold text-red-900 mb-2 text-sm">La Déontologie</h4>
          <p className="text-xs text-gray-700 leading-relaxed">C'est le code des <strong>obligations juridiques</strong> (secret professionnel, probité). Elle est stricte, écrite et sanctionnable par la loi.</p>
        </div>
        <div className="bg-green-50 p-5 rounded-xl border-t-4 border-t-green-500">
          <h4 className="font-bold text-green-900 mb-2 text-sm">L'Éthique Pro</h4>
          <p className="text-xs text-gray-700 leading-relaxed">C'est le questionnement sur "comment bien faire" face à des situations complexes (conflits d'intérêts) où la règle n'a pas tout prévu.</p>
        </div>
      </div>
    </div>

    {/* 2. POLITIQUE VS ADMINISTRATION */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <Landmark size={24} className="text-blue-600" /> 2. La Frontière : Politique / Administration
      </h3>
      <p className="text-sm text-gray-700 mb-6">
        Au sein du Conseil Régional, les crises déontologiques surviennent souvent quand <strong>chacun fait le travail de l'autre</strong>. Il faut clarifier les pouvoirs via une <strong>Matrice de Décision</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200">
          <h4 className="font-bold text-indigo-900 text-base mb-2">La Sphère Politique (Les Élus)</h4>
          <ul className="text-xs text-gray-700 space-y-2 list-disc pl-4">
            <li><strong>Leur Rôle :</strong> Ils portent la vision, fixent les grandes orientations et assument le risque politique face aux populations.</li>
            <li><strong>La ligne rouge (Ingérence) :</strong> Un élu ne doit pas s'immiscer dans l'exécution technique (ex: imposer une entreprise).</li>
          </ul>
        </div>
        <div className="bg-teal-50 p-5 rounded-xl border border-teal-200">
          <h4 className="font-bold text-teal-900 text-base mb-2">La Sphère Administrative (Les Agents)</h4>
          <ul className="text-xs text-gray-700 space-y-2 list-disc pl-4">
            <li><strong>Leur Rôle :</strong> Ils exécutent la vision politique avec neutralité, loyauté et expertise technique.</li>
            <li><strong>La ligne rouge (Dérive) :</strong> Un agent ne doit pas bloquer un dossier par opposition politique ou pour des intérêts personnels.</li>
          </ul>
        </div>
      </div>

      {/* Matrice de Décision */}
      <div className="overflow-x-auto shadow-2xs border border-gray-200 rounded-xl">
        <table className="min-w-full text-xs text-left">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="p-3 border-b">Étape de la Matrice de Décision</th>
              <th className="p-3 border-b">Acteur en charge</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-bold text-blue-700">1. Recommander (Évaluer)</td>
              <td className="p-3 text-gray-600">L'Administration Technique recommande objectivement.</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-bold text-yellow-600">2. Approuver (Contrôler)</td>
              <td className="p-3 text-gray-600">Le Directeur Financier vérifie la légalité et le budget.</td>
            </tr>
            <tr className="hover:bg-gray-50 bg-red-50">
              <td className="p-3 font-bold text-red-700">3. Décider (Signer)</td>
              <td className="p-3 text-gray-800 font-bold">L'Autorité Politique (Président) décide et assume.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* 3. L'ANALYSE DES PARTIES PRENANTES */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <Users size={24} className="text-blue-600" /> 3. L'Analyse des Parties Prenantes (Pouvoir / Intérêt)
      </h3>
      <p className="text-sm text-gray-700 mb-6">
        Avant d'initier un changement ou un projet, il faut cartographier les acteurs qui gravitent autour pour éviter les blocages. C'est le rôle de la <strong>Matrice Pouvoir / Intérêt</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        
        {/* Q1: Latents */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 shadow-xs">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-yellow-900 text-base">Les Latents</h4>
            <span className="bg-yellow-200 text-yellow-900 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Maintenir Satisfaits</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-yellow-700 mb-3 bg-white w-fit px-2 py-1 rounded shadow-2xs border border-yellow-100">
            <span>POUVOIR : FORT</span>
            <span className="text-gray-300">|</span>
            <span>INTÉRÊT : FAIBLE</span>
          </div>
          <p className="text-xs text-gray-700">Ils peuvent bloquer le projet s'ils sont mécontents, mais ne s'y intéressent pas au quotidien. Il faut éviter de les contrarier.</p>
          <p className="text-[11px] text-gray-500 mt-2 italic">Ex: Ministères de tutelle (Finances, Intérieur), Autorités distantes.</p>
        </div>

        {/* Q2: Promoteurs */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 shadow-xs relative">
          <span className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold shadow-xs animate-pulse">Acteurs Clés !</span>
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-red-900 text-base">Les Promoteurs</h4>
            <span className="bg-red-200 text-red-900 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Collaborer Étroitement</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-red-700 mb-3 bg-white w-fit px-2 py-1 rounded shadow-2xs border border-red-100">
            <span>POUVOIR : FORT</span>
            <span className="text-gray-300">|</span>
            <span>INTÉRÊT : FORT</span>
          </div>
          <p className="text-xs text-gray-700">Ce sont les alliés ou les adversaires principaux. Ils ont le pouvoir de faire réussir ou échouer le projet, et sont très impliqués.</p>
          <p className="text-[11px] text-gray-500 mt-2 italic">Ex: Président du Conseil Régional, Bailleurs de fonds (Banque Mondiale), Préfet.</p>
        </div>

        {/* Q3: Apathiques */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-xs">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-gray-800 text-base">Les Apathiques</h4>
            <span className="bg-gray-200 text-gray-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Surveiller</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-gray-600 mb-3 bg-white w-fit px-2 py-1 rounded shadow-2xs border border-gray-100">
            <span>POUVOIR : FAIBLE</span>
            <span className="text-gray-300">|</span>
            <span>INTÉRÊT : FAIBLE</span>
          </div>
          <p className="text-xs text-gray-700">Ils n'ont ni l'envie ni la capacité d'influencer le projet. Une communication minimale suffit (site web, affichage public).</p>
          <p className="text-[11px] text-gray-500 mt-2 italic">Ex: Le grand public d'une autre région non concerné par l'infrastructure.</p>
        </div>

        {/* Q4: Défenseurs */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 shadow-xs">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-green-900 text-base">Les Défenseurs</h4>
            <span className="bg-green-200 text-green-900 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Maintenir Informés</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black text-green-700 mb-3 bg-white w-fit px-2 py-1 rounded shadow-2xs border border-green-100">
            <span>POUVOIR : FAIBLE</span>
            <span className="text-gray-300">|</span>
            <span>INTÉRÊT : FORT</span>
          </div>
          <p className="text-xs text-gray-700">Ils veulent vraiment que le projet se fasse, mais n'ont pas le pouvoir de le financer ou de le signer. Ils sont de formidables relais d'opinion.</p>
          <p className="text-[11px] text-gray-500 mt-2 italic">Ex: Les populations locales du village, la Mutuelle de développement, les ONG locales.</p>
        </div>
      </div>
    </div>

    {/* 4. RÉSISTANCE AU CHANGEMENT */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <LineChart size={24} className="text-blue-600" /> 4. La Résistance au Changement (Courbe de Transition)
      </h3>
      <p className="text-sm text-gray-700 mb-6">
        Imposer l'éthique et la GAR génère de la résistance. Le graphique ci-dessous (inspiré de la courbe de Kübler-Ross) illustre l'évolution de la motivation et de la performance d'un agent dans le temps face au changement.
      </p>

      {/* Graphique SVG Courbe du Changement */}
      <div className="border border-gray-200 rounded-xl p-4 md:p-8 bg-gray-50 flex flex-col items-center shadow-inner mb-8">
        <h4 className="font-bold text-gray-700 mb-6 uppercase tracking-widest text-xs text-center">Évolution de la Performance & Motivation</h4>
        
        <div className="relative w-full max-w-2xl h-64 bg-white border-l-2 border-b-2 border-gray-400 pl-2 pb-2">
          {/* Grille de fond */}
          <div className="absolute inset-0 grid grid-cols-5 grid-rows-4 ml-2 mt-2 opacity-10 pointer-events-none">
            {[...Array(20)].map((_, i) => <div key={i} className="border border-gray-400"></div>)}
          </div>

          <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
            {/* Ligne de performance initiale */}
            <line x1="0" y1="100" x2="500" y2="100" stroke="#9ca3af" strokeWidth="2" strokeDasharray="5,5" vectorEffect="non-scaling-stroke" />
            
            {/* Courbe principale */}
            <path 
              d="M 0,100 C 50,100 80,180 150,220 C 250,280 350,280 400,100 C 450,20 500,40 500,40" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="drop-shadow-md"
              vectorEffect="non-scaling-stroke"
            />
            
            {/* Points d'étape */}
            <circle cx="50" cy="100" r="7" fill="#ef4444" className="shadow-xs" />
            <circle cx="150" cy="220" r="7" fill="#ef4444" />
            <circle cx="280" cy="265" r="8" fill="#f97316" stroke="#fff" strokeWidth="2" />
            <circle cx="380" cy="140" r="7" fill="#22c55e" />
            <circle cx="480" cy="35" r="8" fill="#22c55e" stroke="#fff" strokeWidth="2" />
            
            <text x="50" y="80" fontSize="13" fill="#ef4444" fontWeight="bold" textAnchor="middle">1. Déni</text>
            <text x="150" y="245" fontSize="13" fill="#ef4444" fontWeight="bold" textAnchor="middle">2. Colère</text>
            <text x="280" y="295" fontSize="13" fill="#f97316" fontWeight="bold" textAnchor="middle">3. Dépression (Creux)</text>
            <text x="380" y="120" fontSize="13" fill="#22c55e" fontWeight="bold" textAnchor="middle">4. Acceptation</text>
            <text x="480" y="20" fontSize="13" fill="#22c55e" fontWeight="bold" textAnchor="middle">5. Engagement</text>
          </svg>

          <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Performance</div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Temps</div>
        </div>
      </div>
      
      <div className="space-y-4 pl-4 border-l-4 border-gray-300">
        <div className="relative pl-6 bg-gray-50 p-4 rounded-r-xl border-b border-gray-200">
          <div className="absolute -left-[27px] top-4 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-xs"></div>
          <h4 className="font-bold text-gray-800 text-sm mb-1">Étape 1 : Le Déni & La Colère</h4>
          <p className="text-xs text-red-700 font-medium mb-2">Comportement : "C'est encore un outil pour nous fliquer !" Rejet total des nouvelles règles.</p>
          <p className="text-xs text-gray-700"><strong className="text-blue-700">✅ Solution (Plan d'action) :</strong> Écouter sans juger. Ne pas imposer par la force, mais organiser des réunions pour expliquer rationnellement le "Pourquoi" du changement (le manque de résultats actuels).</p>
        </div>
        
        <div className="relative pl-6 bg-gray-50 p-4 rounded-r-xl border-b border-gray-200">
          <div className="absolute -left-[27px] top-4 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-xs"></div>
          <h4 className="font-bold text-gray-800 text-sm mb-1">Étape 2 : Le Marchandage & La Dépression (Le creux)</h4>
          <p className="text-xs text-orange-700 font-medium mb-2">Comportement : Baisse de motivation, tentative de contourner les règles, découragement.</p>
          <p className="text-xs text-gray-700"><strong className="text-blue-700">✅ Solution (Plan d'action) :</strong> Accompagnement de proximité (Coaching). Montrer que l'erreur est permise au début. Fournir des formations pratiques pour rassurer l'agent sur ses capacités.</p>
        </div>
        
        <div className="relative pl-6 bg-gray-50 p-4 rounded-r-xl">
          <div className="absolute -left-[27px] top-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-xs"></div>
          <h4 className="font-bold text-gray-800 text-sm mb-1">Étape 3 : L'Acceptation & L'Engagement</h4>
          <p className="text-xs text-green-700 font-medium mb-2">Comportement : L'agent teste les outils, comprend qu'ils le protègent et adhère à la nouvelle culture.</p>
          <p className="text-xs text-gray-700"><strong className="text-blue-700">✅ Solution (Plan d'action) :</strong> Célébrer les victoires. Valoriser publiquement les agents qui ont réussi à utiliser la GAR pour créer des "champions" en interne qui motiveront les autres.</p>
        </div>
      </div>
    </div>

    {/* 5. MÉTHODE PROSCI (PCT & ADKAR AVEC PLAN D'ACTION) */}
    <div className="bg-indigo-50/70 p-6 rounded-2xl shadow-xs border border-indigo-100">
      <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
        <Target size={24} className="text-indigo-600" /> 5. La Conduite du Changement : Méthodologie PROSCI
      </h3>
      <p className="text-sm text-indigo-800 mb-6">
        <strong>PROSCI</strong> est la méthode de référence mondiale en gestion du changement. Elle utilise le <strong>Triangle PCT</strong> pour piloter le projet global et le modèle <strong>ADKAR</strong> pour coacher l'individu (avec un plan d'action pour chaque lettre).
      </p>

      <div className="grid grid-cols-1 gap-6">
        {/* Le Triangle PCT */}
        <div className="bg-white p-5 rounded-xl shadow-xs border border-indigo-100">
          <h4 className="font-bold text-blue-900 mb-3 border-b pb-2 flex items-center gap-2 text-base">
            <AlertTriangle size={18}/> Le Triangle PCT (Prosci Change Triangle)
          </h4>
          <p className="text-xs text-gray-600 mb-3">La réussite dépend de 3 piliers qui doivent être parfaitement alignés au sein du Conseil :</p>
          <ul className="text-xs text-gray-700 space-y-3 list-disc pl-5">
            <li>
              <strong className="text-blue-700">1. Le Sponsor (Leadership) :</strong> Au sommet du triangle. Si le Président du Conseil ne soutient pas ouvertement la réforme face aux équipes, le projet échouera.
            </li>
            <li>
              <strong className="text-blue-700">2. Project Management :</strong> La gestion technique (Matrice RACI, Budget EVM). C'est le côté "Structurel" de la méthode.
            </li>
            <li>
              <strong className="text-blue-700">3. Change Management :</strong> La gestion de l'humain. Accompagner la transition pour éviter les blocages psychologiques.
            </li>
          </ul>
        </div>

        {/* Le Modèle ADKAR avec Plan d'Action */}
        <div className="bg-white p-5 rounded-xl shadow-xs border border-indigo-100">
          <h4 className="font-bold text-teal-900 mb-4 border-b pb-2 flex items-center gap-2 text-base">
            <CheckCircle2 size={18}/> Le Modèle ADKAR & Son Plan d'Action
          </h4>
          <p className="text-xs text-gray-600 mb-4">Les 5 étapes obligatoires pour faire évoluer un agent, accompagnées des actions à mener :</p>
          
          <ul className="space-y-4">
            <li className="bg-teal-50 p-3.5 rounded-xl border border-teal-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-black text-white bg-teal-600 px-3 py-1 rounded shadow-xs text-base">A</span> 
                <span className="text-teal-900 font-bold text-sm">Awareness (Sensibilisation)</span>
              </div>
              <p className="text-xs text-gray-700 mb-1"><em>Objectif :</em> Faire comprendre le "Pourquoi" du changement.</p>
              <p className="text-xs text-gray-800"><strong className="text-teal-700">➜ Plan d'action :</strong> Organiser des réunions plénières animées par le Président pour exposer les dysfonctionnements actuels et la nécessité de la GAR.</p>
            </li>

            <li className="bg-teal-50 p-3.5 rounded-xl border border-teal-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-black text-white bg-teal-600 px-3 py-1 rounded shadow-xs text-base">D</span> 
                <span className="text-teal-900 font-bold text-sm">Desire (Désir)</span>
              </div>
              <p className="text-xs text-gray-700 mb-1"><em>Objectif :</em> Susciter l'envie de participer (Qu'est-ce que j'y gagne ?).</p>
              <p className="text-xs text-gray-800"><strong className="text-teal-700">➜ Plan d'action :</strong> Impliquer les managers de proximité (Directeurs) pour rassurer leurs agents, écouter leurs craintes lors d'entretiens individuels et montrer que l'outil valorisera les bons travailleurs.</p>
            </li>

            <li className="bg-teal-50 p-3.5 rounded-xl border border-teal-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-black text-white bg-teal-600 px-3 py-1 rounded shadow-xs text-base">K</span> 
                <span className="text-teal-900 font-bold text-sm">Knowledge (Connaissance)</span>
              </div>
              <p className="text-xs text-gray-700 mb-1"><em>Objectif :</em> Former aux nouvelles méthodes.</p>
              <p className="text-xs text-gray-800"><strong className="text-teal-700">➜ Plan d'action :</strong> Déployer cette plateforme E-learning, distribuer le lexique de gestion de projet, et organiser des ateliers pratiques sur l'élaboration du cadre logique.</p>
            </li>

            <li className="bg-teal-50 p-3.5 rounded-xl border border-teal-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-black text-white bg-teal-600 px-3 py-1 rounded shadow-xs text-base">A</span> 
                <span className="text-teal-900 font-bold text-sm">Ability (Aptitude)</span>
              </div>
              <p className="text-xs text-gray-700 mb-1"><em>Objectif :</em> S'assurer de la capacité à appliquer sur le terrain.</p>
              <p className="text-xs text-gray-800"><strong className="text-teal-700">➜ Plan d'action :</strong> Mettre en place un système de "parrainage" (Coaching) où un expert S&E accompagne les agents lors de la rédaction de leurs premiers TDR ou rapports d'avancement.</p>
            </li>

            <li className="bg-teal-50 p-3.5 rounded-xl border border-teal-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-black text-white bg-teal-600 px-3 py-1 rounded shadow-xs text-base">R</span> 
                <span className="text-teal-900 font-bold text-sm">Reinforcement (Renforcement)</span>
              </div>
              <p className="text-xs text-gray-700 mb-1"><em>Objectif :</em> Célébrer les réussites et pérenniser le changement.</p>
              <p className="text-xs text-gray-800"><strong className="text-teal-700">➜ Plan d'action :</strong> Récompenser les équipes (primes, félicitations publiques) ayant livré des projets dans les délais grâce à la GAR, et intégrer le respect de l'éthique dans l'évaluation annuelle de l'agent.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* 6. PLAN D'ACTION ET REMARQUE FINALE */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <FileText size={24} className="text-green-500" /> 6. Plan d'Action & Itinéraire Technique
      </h3>
      <p className="text-sm text-gray-700 mb-4">Voici l'itinéraire technique complet pour implémenter la Gouvernance et la GAR au sein du Conseil Régional :</p>
      
      <div className="space-y-4 mb-6">
        <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl border border-gray-200 border-l-4 border-l-blue-500">
          <div className="text-blue-800 font-black pt-0.5">01</div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">Cadrage par le Sponsor (L'Engagement)</h4>
            <p className="text-xs text-gray-600 mt-1">Le Président réunit les directions pour expliquer la méthode GAR et exiger publiquement la transparence. C'est l'étape <em>Awareness</em>.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl border border-gray-200 border-l-4 border-l-orange-500">
          <div className="text-orange-800 font-black pt-0.5">02</div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">Clarification et Dématérialisation</h4>
            <p className="text-xs text-gray-600 mt-1">Mettre en place la Matrice de Décision et tracer numériquement les dossiers (Flowchart). On voit en temps réel qui crée le "goulot d'étranglement" par favoritisme ou lenteur.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl border border-gray-200 border-l-4 border-l-green-500">
          <div className="text-green-800 font-black pt-0.5">03</div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">Formation, Coaching et Sanctions</h4>
            <p className="text-xs text-gray-600 mt-1">Former les agents (Knowledge), les accompagner sur le terrain (Ability), valoriser ceux qui réussissent et sanctionner les dérives éthiques (Reinforcement).</p>
          </div>
        </div>
      </div>

      {/* Remarque conclusive */}
      <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-2xl flex gap-4 items-start">
        <BookOpen className="text-yellow-600 shrink-0" size={24}/>
        <div>
          <h4 className="font-bold text-yellow-900 mb-1 text-sm">Remarque Conclusive sur l'Éthique et la GAR</h4>
          <p className="text-xs text-yellow-800 leading-relaxed">
            En définitive, la Gestion Axée sur les Résultats (GAR) n'est pas qu'une simple méthode technique de plus. <strong>C'est un contrat moral entre l'Administration et les Populations.</strong><br/><br/>
            Tous les outils du monde (Gantt, PERT, Kanban, EVM) seront inutiles si l'intégrité fait défaut. L'éthique et la gouvernance ne sont donc pas des "modules de politesse", elles sont <strong>le moteur indispensable</strong> sans lequel la machine de la GAR ne peut tout simplement pas fonctionner au sein du Conseil Régional.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ModSupplementContent: React.FC = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="border-b pb-4">
      <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Module Complémentaire</span>
      <h2 className="text-2xl font-bold text-gray-900 mt-1">Sélection de Projets (MoSCoW) & Financement (PIP & PPP)</h2>
    </div>
    
    {/* 1. LA MÉTHODE MOSCOW */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <Filter size={24} className="text-blue-600" /> 1. La méthode MoSCoW (Organiser les besoins)
      </h3>
      
      <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 mb-6 shadow-2xs">
        <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2 text-sm">
          <Users size={18} /> Pourquoi utiliser MoSCoW au Conseil Régional ?
        </h4>
        <p className="text-xs text-gray-700 leading-relaxed">
          Lors des tournées de recueil des besoins, le Conseil Régional est inondé de requêtes venant des populations, des mutuelles et des chefs de village (écoles, routes, forages). <strong>Le paradoxe du développement local : les besoins sont infinis, mais le budget de la collectivité est limité.</strong>
          <br/><br/>
          La méthode MoSCoW est indispensable pour <strong>classer et prioriser objectivement</strong> ces dizaines de projets. Elle évite les choix basés sur le favoritisme politique ("on construit dans mon village d'abord") et permet d'expliquer de manière transparente aux populations pourquoi un projet a été retenu en priorité absolue et pourquoi un autre a été reporté.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-xl shadow-2xs">
          <h4 className="font-bold text-red-800 text-sm">M - Must have (Le Vital)</h4>
          <p className="text-xs text-red-900 mt-1">Urgences absolues ou obligations légales. Sans ce projet, la région court un danger grave. (Ex: réparation d'un château d'eau en panne, centre de santé sans toit).</p>
        </div>
        <div className="p-4 border-l-4 border-orange-500 bg-orange-50 rounded-r-xl shadow-2xs">
          <h4 className="font-bold text-orange-800 text-sm">S - Should have (L'Important)</h4>
          <p className="text-xs text-orange-900 mt-1">Projets à très forte valeur ajoutée, mais qui peuvent attendre quelques mois si le budget vital est épuisé. (Ex: reprofilage d'une route secondaire).</p>
        </div>
        <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-xl shadow-2xs">
          <h4 className="font-bold text-green-800 text-sm">C - Could have (Le Confort)</h4>
          <p className="text-xs text-green-900 mt-1">Projets de confort ou d'opportunité. Utiles à la cohésion, mais facilement sacrifiables. (Ex: construction d'un foyer des jeunes ou embellissement d'une place).</p>
        </div>
        <div className="p-4 border-l-4 border-gray-500 bg-gray-50 rounded-r-xl shadow-2xs">
          <h4 className="font-bold text-gray-800 text-sm">W - Won't have (L'Exclu)</h4>
          <p className="text-xs text-gray-900 mt-1">Requêtes hors budget, non matures ou irréalistes. Elles sont <strong>explicitement rejetées</strong> pour l'année en cours et reportées à plus tard.</p>
        </div>
      </div>

      {/* Interactive MoSCoW Simulator */}
      <InteractiveMoSCoW />
    </div>

    {/* STRATÉGIES DE FINANCEMENT (PIP & PPP) AVEC GOULOTS */}
    <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <Landmark size={24} className="text-blue-600" /> 2. Le Financement et l'Identification des Goulots
      </h3>
      <p className="text-sm text-gray-700 mb-6">
        Une fois les projets prioritaires sélectionnés, la collectivité structure leur financement. L'analyse de ces logigrammes est vitale car elle prouve que <strong>les retards (goulots d'étranglement) proviennent très souvent des décideurs et de l'administration</strong>, et pas seulement des techniciens sur le terrain.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* PIP */}
        <div className="bg-indigo-50/70 p-5 rounded-2xl border border-indigo-200 shadow-xs flex flex-col">
          <h3 className="font-bold text-indigo-900 text-base mb-1 flex items-center gap-2">
            <FileBarChart size={18} className="text-indigo-700"/> Le PIP (Programme d'Investissement Public)
          </h3>
          <p className="text-xs text-indigo-800 mb-4">Financement public classique inscrit au budget (Programme Triennal). Implique toute la chaîne de contrôle de l'État.</p>
          
          {/* Logigramme PIP Détaillé */}
          <div className="p-3 bg-white rounded-xl border border-indigo-200 shadow-inner flex-1 flex flex-col">
            <h4 className="text-center text-[10px] font-black text-indigo-800 mb-3 uppercase tracking-widest">Le Cycle du PIP (Étape par Étape)</h4>
            
            <div className="flex flex-col items-center text-center space-y-1.5 relative flex-1">
              {/* Etape 1 */}
              <div className="w-full bg-indigo-50 p-2 rounded-lg border border-indigo-200 relative pt-4">
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Populations & Dir. Technique</span>
                <strong className="block text-indigo-900 text-xs">1. Recueil des Besoins & Études</strong>
                <span className="text-[10px] text-indigo-700 leading-tight block">Consultation de la base et réalisation des études de faisabilité technique.</span>
              </div>
              <ArrowDown className="text-indigo-300 shrink-0" size={14} />

              {/* Etape 2 */}
              <div className="w-full bg-blue-50 p-2 rounded-lg border border-blue-200 relative pt-4">
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">CESER</span>
                <strong className="block text-blue-900 text-xs">2. Avis Consultatif</strong>
                <span className="text-[10px] text-blue-700 leading-tight block">Le Conseil Économique, Social, Environnemental et Régional émet son avis.</span>
              </div>
              <ArrowDown className="text-indigo-300 shrink-0" size={14} />

              {/* Etape 3 */}
              <div className="w-full bg-purple-50 p-2 rounded-lg border border-purple-200 relative pt-4">
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Président CR & Conseillers</span>
                <strong className="block text-purple-900 text-xs">3. Arbitrage & Vote du Programme</strong>
                <span className="text-[10px] text-purple-700 leading-tight block">Le Conseil vote le budget et le Programme Triennal.</span>
              </div>
              <ArrowDown className="text-indigo-300 shrink-0" size={14} />

              {/* Etape 4 */}
              <div className="w-full bg-red-50 p-2 rounded-lg border border-red-300 relative pt-4">
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs animate-pulse">Goulot Légal</span>
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Préfet de Région (Tutelle)</span>
                <strong className="block text-red-900 text-xs">4. Approbation de la Tutelle</strong>
                <span className="text-[10px] text-red-700 leading-tight block">Contrôle de légalité et approbation formelle du budget.</span>
              </div>
              <ArrowDown className="text-indigo-300 shrink-0" size={14} />

              {/* Etape 5 */}
              <div className="w-full bg-orange-50 p-2 rounded-lg border border-orange-300 relative pt-4">
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs animate-pulse">Goulot Admin</span>
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Direction des Marchés</span>
                <strong className="block text-orange-900 text-xs">5. Passation du Marché Public</strong>
                <span className="text-[10px] text-orange-700 leading-tight block">Lancement de l'appel d'offres et sélection du prestataire.</span>
              </div>
              <ArrowDown className="text-indigo-300 shrink-0" size={14} />

              {/* Etape 6 */}
              <div className="w-full bg-yellow-50 p-2 rounded-lg border border-yellow-300 relative pt-4">
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Contrôleur Financier</span>
                <strong className="block text-yellow-900 text-xs">6. Engagement & Visa Préalable</strong>
                <span className="text-[10px] text-yellow-800 leading-tight block">Vérification de la disponibilité des crédits.</span>
              </div>
              <ArrowDown className="text-indigo-300 shrink-0" size={14} />

              {/* Etape 7 */}
              <div className="w-full bg-teal-50 p-2 rounded-lg border border-teal-200 relative pt-4">
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Prestataire & Dir. Technique</span>
                <strong className="block text-teal-900 text-xs">7. Exécution & Suivi des Travaux</strong>
                <span className="text-[10px] text-teal-700 leading-tight block">Réalisation physique et certification technique des décomptes.</span>
              </div>
              <ArrowDown className="text-indigo-300 shrink-0" size={14} />

              {/* Etape 8 */}
              <div className="w-full bg-green-50 p-2 rounded-lg border border-green-400 relative pt-4 border-l-4 border-l-green-500">
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs animate-pulse">Goulot Trésorerie</span>
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-700 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Payeur Régional (Trésor)</span>
                <strong className="block text-green-900 text-xs">8. Paiement & Livraison Finale</strong>
                <span className="text-[10px] text-green-800 leading-tight block">Le Président ordonnance, le Payeur décaisse. Livraison aux bénéficiaires.</span>
              </div>
            </div>
            
            {/* Explication des Goulots PIP */}
            <div className="mt-4 bg-red-50 p-3 rounded-lg border-l-4 border-red-500 text-xs text-red-800">
              <strong>Diagnostic :</strong> Le retard d'un projet PIP n'est pas toujours dû au chantier (Étape 7). Les <strong>vrais goulots décisionnels</strong> se trouvent souvent dans les lenteurs de la Tutelle (Étape 4), la lourdeur des appels d'offres (Étape 5) ou le manque de liquidités au Trésor pour payer les décomptes (Étape 8).
            </div>
          </div>
        </div>

        {/* PPP */}
        <div className="bg-teal-50/70 p-5 rounded-2xl border border-teal-200 shadow-xs flex flex-col">
          <h3 className="font-bold text-teal-900 text-base mb-1 flex items-center gap-2">
            <Globe size={18} className="text-teal-700"/> Le PPP (Partenariat Public-Privé)
          </h3>
          <p className="text-xs text-teal-800 mb-4">Contrat long terme. Le Privé finance, construit et exploite. Évite l'endettement public immédiat mais exige une ingénierie complexe.</p>
          
          {/* Logigramme PPP Détaillé */}
          <div className="p-3 bg-white rounded-xl border border-teal-200 shadow-inner flex-1 flex flex-col">
            <h4 className="text-center text-[10px] font-black text-teal-800 mb-3 uppercase tracking-widest">Le Cycle du PPP (Étape par Étape)</h4>
            
            <div className="flex flex-col items-center text-center space-y-1.5 relative flex-1">
              {/* Etape 1 */}
              <div className="w-full bg-teal-50 p-2 rounded-lg border border-teal-200 relative pt-4">
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Président CR & CNP-PPP</span>
                <strong className="block text-teal-900 text-xs">1. Identification & Étude Préalable</strong>
                <span className="text-[10px] text-teal-700 leading-tight block">Le Conseil définit le besoin. Le Comité National des PPP valide l'éligibilité.</span>
              </div>
              <ArrowDown className="text-teal-300 shrink-0" size={14} />

              {/* Etape 2 */}
              <div className="w-full bg-blue-50 p-2 rounded-lg border border-blue-300 relative pt-4">
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs animate-pulse">Goulot Juridique</span>
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">CNP-PPP & Ministères</span>
                <strong className="block text-blue-900 text-xs">2. Structuration & Avis Favorable</strong>
                <span className="text-[10px] text-blue-700 leading-tight block">Montage financier, juridique et avis des Ministères (Finances/Budget).</span>
              </div>
              <ArrowDown className="text-teal-300 shrink-0" size={14} />

              {/* Etape 3 */}
              <div className="w-full bg-orange-50 p-2 rounded-lg border border-orange-300 relative pt-4">
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Direction des Marchés</span>
                <strong className="block text-orange-900 text-xs">3. Dialogue Compétitif / Appel d'Offres</strong>
                <span className="text-[10px] text-orange-700 leading-tight block">Mise en concurrence internationale pour sélectionner le partenaire privé.</span>
              </div>
              <ArrowDown className="text-teal-300 shrink-0" size={14} />

              {/* Etape 4 */}
              <div className="w-full bg-purple-50 p-2 rounded-lg border border-purple-200 relative pt-4">
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Président CR, Préfet, Privé</span>
                <strong className="block text-purple-900 text-xs">4. Signature du Contrat PPP</strong>
                <span className="text-[10px] text-purple-700 leading-tight block">Approbation par la tutelle et engagement des parties (15-30 ans).</span>
              </div>
              <ArrowDown className="text-teal-300 shrink-0" size={14} />

              {/* Etape 5 */}
              <div className="w-full bg-red-50 p-2 rounded-lg border border-red-300 relative pt-4">
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs animate-pulse">Goulot Bancaire</span>
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-red-700 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Partenaire Privé & Banques</span>
                <strong className="block text-red-900 text-xs">5. Closing Financier & Construction</strong>
                <span className="text-[10px] text-red-800 leading-tight block">Le privé lève les fonds (banques) et réalise l'infrastructure à ses risques.</span>
              </div>
              <ArrowDown className="text-teal-300 shrink-0" size={14} />

              {/* Etape 6 */}
              <div className="w-full bg-yellow-50 p-2 rounded-lg border border-yellow-300 relative pt-4">
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Partenaire Privé</span>
                <strong className="block text-yellow-900 text-xs">6. Exploitation & Rémunération</strong>
                <span className="text-[10px] text-yellow-800 leading-tight block">Le privé gère le service et se paie (usagers ou loyer de la Région).</span>
              </div>
              <ArrowDown className="text-teal-300 shrink-0" size={14} />

              {/* Etape 7 */}
              <div className="w-full bg-green-50 p-2 rounded-lg border border-green-300 relative pt-4 border-l-4 border-l-green-500">
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-700 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">Conseil Régional</span>
                <strong className="block text-green-900 text-xs">7. Rétrocession (Transfert)</strong>
                <span className="text-[10px] text-green-800 leading-tight block">À la fin du contrat, l'ouvrage redevient propriété publique.</span>
              </div>
            </div>

            {/* Explication des Goulots PPP */}
            <div className="mt-4 bg-red-50 p-3 rounded-lg border-l-4 border-red-500 text-xs text-red-800">
              <strong>Diagnostic :</strong> Dans un PPP, le risque est transféré. Les <strong>blocages majeurs</strong> interviennent souvent très tôt : lors de la structuration juridique interministérielle (Étape 2) ou lorsque l'entreprise privée n'arrive finalement pas à convaincre les banques de prêter l'argent (Étape 5 : Closing financier).
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const LexiqueContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedTerm, setCopiedTerm] = useState<string | null>(null);

  const sigles = [
    { term: "ACDI", def: "Agence Canadienne de Développement International (Pionnière de la GAR)." },
    { term: "ADKAR", def: "Acronyme de la conduite du changement : Awareness (Sensibilisation), Desire (Désir), Knowledge (Connaissance), Ability (Aptitude), Reinforcement (Renforcement)." },
    { term: "APD", def: "Aide Publique au Développement (Ressources financières transférées par les pays développés)." },
    { term: "BAC", def: "Budget At Completion (Budget à l'Achèvement). Le budget total validé pour terminer l'intégralité du projet." },
    { term: "CA (ou GA)", def: "Coût Acquis (ou Valeur Acquise). Expression monétaire du travail réellement accompli sur le terrain à une date T." },
    { term: "CAD", def: "Comité d'Aide au Développement de l'OCDE." },
    { term: "CBS", def: "Cost Breakdown Structure. Structure de décomposition des coûts pour un suivi budgétaire fin." },
    { term: "COPIL", def: "Comité de Pilotage. Instance décisionnelle de haut niveau." },
    { term: "COTECH", def: "Comité Technique. Instance opérationnelle de gestion quotidienne." },
    { term: "CP", def: "Coût Planifié. Valeur du travail dont l'achèvement était programmé à une date donnée." },
    { term: "CPI (ou IPC)", def: "Cost Performance Index (Indice de Performance des Coûts). Indicateur mesurant l'efficience financière." },
    { term: "CR", def: "Coût Réel. Dépenses effectives comptabilisées pour la réalisation des travaux." },
    { term: "DPPD", def: "Document de Programmation Pluriannuelle des Dépenses (Cadre budgétaire triennal)." },
    { term: "EVM", def: "Earned Value Management (Gestion par la Valeur Acquise)." },
    { term: "FMI", def: "Fonds Monétaire International." },
    { term: "GAR", def: "Gestion Axée sur les Résultats." },
    { term: "GATT", def: "General Agreement on Tariffs and Trade (Accord général sur les tarifs douaniers et le commerce)." },
    { term: "GBS", def: "Global Breakdown Structure. Intégration systémique des structures de découpage." },
    { term: "IOV", def: "Indicateurs Objectivement Vérifiables. Données concrètes prouvant l'atteinte d'un résultat." },
    { term: "KPI", def: "Key Performance Indicator (Indicateur Clé de Performance)." },
    { term: "MCL", def: "Matrice du Cadre Logique. Résumé structuré de la logique d'intervention." },
    { term: "OCDE", def: "Organisation de Coopération et de Développement Économiques." },
    { term: "PBS", def: "Product Breakdown Structure. Hiérarchie des produits (résultats physiques)." },
    { term: "PCI", def: "Practical Concepts Incorporated (Inventeur historique du cadre logique)." },
    { term: "PCT", def: "Prosci Change Triangle (Sponsor, Project Management, Change Management). Triangle modélisant les 3 piliers de la réussite d'un projet." },
    { term: "PDR", def: "Plan de Développement Régional. Cadre stratégique de la collectivité." },
    { term: "PIP", def: "Programme d'Investissement Public. Projets inscrits au budget de l'État." },
    { term: "PPP", def: "Partenariat Public-Privé. Financement et gestion d'infrastructures par le secteur privé." },
    { term: "RACI", def: "Matrice des responsabilités : Réalisateur, Approbateur, Consulté, Informé." },
    { term: "SI", def: "Système d'Information. Ensemble des ressources gérant l'information." },
    { term: "SPI (ou IPD)", def: "Schedule Performance Index (Indice de Performance des Délais). Indicateur mesurant l'efficacité temporelle." },
    { term: "TDR", def: "Termes de Référence. Spécifications d'une mission ou d'un contrat." },
    { term: "USAID", def: "United States Agency for International Development." },
    { term: "WBS", def: "Work Breakdown Structure. Décomposition hiérarchique du travail à effectuer." }
  ];

  const dictionnaire = [
    { term: "Acteur institutionnel", def: "Organisation officielle (Ministère, Mairie) impliquée dans le projet." },
    { term: "Activité", def: "Action entreprise ou travail mené au sein d'un projet en vue de transformer des intrants (ressources) en extrants (livrables)." },
    { term: "Alignement stratégique", def: "Vérification de la cohérence entre un projet et la vision de la direction." },
    { term: "Arbre à problèmes", def: "Représentation graphique liant les causes aux conséquences d'une situation." },
    { term: "Bailleur de fonds", def: "Institution finançant l'intervention (ex: Banque Mondiale)." },
    { term: "Bénéficiaires", def: "Populations profitant directement ou indirectement des résultats." },
    { term: "Cadre de Rendement", def: "Tableau synthétique reliant activités, extrants et impacts." },
    { term: "Cadre Logique (Matrice du)", def: "Outil de planification et de suivi synthétisant la logique d'intervention, les indicateurs, les sources de vérification et les risques d'un projet." },
    { term: "Causes profondes", def: "Origines réelles d'un dysfonctionnement, par opposition aux symptômes." },
    { term: "Chemin critique", def: "Séquence de tâches dont le retard impacte la date de fin du projet." },
    { term: "Commanditaire (Sponsor)", def: "Autorité qui autorise le projet et en garantit le financement." },
    { term: "Conduite du Changement", def: "Accompagnement de l'humain pour garantir l'adoption de nouvelles méthodes de travail (ex: méthode PROSCI)." },
    { term: "Conséquence", def: "Dans un arbre à problèmes, c'est l'effet négatif ou la répercussion directe du problème central sur les populations ou l'environnement." },
    { term: "Contrainte", def: "Facteur limitant (budget, temps, ressources humaines) qui restreint la marge de manœuvre dans l'exécution du projet." },
    { term: "Courbe de Transition", def: "Graphique modélisant les étapes psychologiques de la résistance face au changement (Déni, Colère, Dépression, Acceptation)." },
    { term: "Déontologie", def: "Obligations juridiques et règles strictes régissant l'agent public." },
    { term: "Effet", def: "Changement de comportement, d'état ou de condition à moyen terme chez les bénéficiaires, découlant de l'utilisation des extrants du projet." },
    { term: "Efficacité", def: "Capacité à atteindre les objectifs fixés." },
    { term: "Efficience", def: "Capacité à atteindre les objectifs au meilleur coût (optimisation des ressources)." },
    { term: "Éthique professionnelle", def: "Réflexion sur la justesse des actes dans l'exercice des fonctions." },
    { term: "Extrants (Livrables)", def: "Produits immédiats des activités du projet (ex: bâtiment achevé)." },
    { term: "Flowchart (Logigramme)", def: "Représentation graphique d'un processus étape par étape." },
    { term: "Gouvernance", def: "Mode de direction fondé sur la transparence et la redevabilité." },
    { term: "Hypothèse", def: "Condition externe nécessaire au succès mais non contrôlée par l'équipe." },
    { term: "Impact", def: "Changement sociétal durable à long terme sur le territoire." },
    { term: "Imputabilité (Redevabilité)", def: "Obligation de rendre compte de ses actes et résultats (Accountability)." },
    { term: "Indicateur", def: "Unité de mesure permettant d'apprécier un résultat ou une performance." },
    { term: "Intrants (Ressources)", def: "Moyens mobilisés (argent, temps, personnel) pour agir." },
    { term: "Jalon (Milestone)", def: "Événement majeur marquant la fin d'une étape clé." },
    { term: "Logique d'intervention", def: "L'enchaînement causal au cœur de la GAR : Intrants → Activités → Extrants → Effets → Impacts." },
    { term: "Maître d'Ouvrage", def: "Le client final pour qui le projet est réalisé (Le Conseil Régional)." },
    { term: "Matrice de Décision", def: "Outil de gouvernance clarifiant les pouvoirs en séparant l'instruction (Recommander), le contrôle (Approuver) et l'autorité (Décider)." },
    { term: "Matrice Pouvoir / Intérêt", def: "Outil cartographiant les parties prenantes (Promoteurs, Latents, etc.) pour adapter la stratégie de collaboration." },
    { term: "Méthode MoSCOW", def: "Technique de priorisation (Must, Should, Could, Won't)." },
    { term: "Mitiger un risque", def: "Réduire la probabilité ou l'impact d'un événement négatif." },
    { term: "Parties prenantes (Stakeholders)", def: "Tout individu ou groupe concerné par ou influençant le projet." },
    { term: "Problème", def: "Situation négative existante et avérée (et non la simple absence d'une solution) que l'intervention cherche à résoudre." },
    { term: "PROSCI", def: "Méthodologie mondiale de référence pour la conduite du changement (utilisant les outils ADKAR et le Triangle PCT)." },
    { term: "Résultat", def: "Changement descriptible ou mesurable qui découle d'une relation de cause à effet. Englobe les extrants, les effets et les impacts." },
    { term: "Risque", def: "Événement ou condition externe incertaine qui, s'il se concrétise, aura un effet négatif sur l'atteinte des objectifs du projet." },
    { term: "Silo (Travailler en)", def: "Cloisonnement entre services nuisant à la coordination." },
    { term: "Viabilité (Pérennité)", def: "Capacité d'un projet à durer après la fin de l'aide extérieure." }
  ];

  const lean = [
    { term: "Gemba / Gemba Walk", def: "Action de se rendre sur le 'lieu réel' pour observer les problèmes vécus par les agents au quotidien." },
    { term: "Goulot d'étranglement", def: "Étape d'un processus qui limite la capacité globale et crée des retards importants. Dans l'administration, il est souvent lié au décaissement ou à la validation." },
    { term: "Kaizen", def: "Philosophie de l'amélioration continue par petits pas quotidiens." },
    { term: "Kanban", def: "Système de management visuel des tâches (À faire → En cours → Terminé)." },
    { term: "Muda", def: "Tout type de gaspillage (temps, papier, processus inutiles) ne créant pas de valeur pour l'usager." },
    { term: "Poka-Yoké", def: "Dispositif 'anti-erreur' empêchant la réalisation d'une faute (ex: case obligatoire dans un logiciel)." },
    { term: "SMED", def: "Méthode visant à réduire les temps de transition ou de préparation administrative." }
  ];

  const copyDefinition = (term: string, def: string) => {
    navigator.clipboard?.writeText(`${term} : ${def}`);
    setCopiedTerm(term);
    setTimeout(() => setCopiedTerm(null), 2000);
  };

  const filterTerms = (list: { term: string; def: string }[]) => {
    return list.filter(item => 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.def.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredSigles = filterTerms(sigles);
  const filteredDico = filterTerms(dictionnaire);
  const filteredLean = filterTerms(lean);

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 gap-4">
        <div>
          <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">Répertoire Pédagogique</span>
          <h2 className="text-2xl font-bold text-gray-800">Le Grand Lexique Complet</h2>
        </div>
        
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl text-xs bg-white placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-2xs"
            placeholder="Rechercher un terme, un sigle, une notion..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredSigles.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-0.5 rounded-full text-xs font-black">1</span> 
            Répertoire des Sigles et Acronymes ({filteredSigles.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredSigles.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-xs border border-l-4 border-l-blue-500 hover:shadow-md transition-shadow relative group">
                <div className="flex justify-between items-start">
                  <h4 className="font-black text-gray-900 text-base">{item.term}</h4>
                  <button 
                    onClick={() => copyDefinition(item.term, item.def)}
                    className="text-gray-400 hover:text-blue-600 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copier la définition"
                  >
                    {copiedTerm === item.term ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
                <p className="text-xs text-gray-700 mt-1 leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredDico.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-0.5 rounded-full text-xs font-black">2</span> 
            Dictionnaire de la Gestion de Projet ({filteredDico.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredDico.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-xs border border-l-4 border-l-indigo-500 hover:shadow-md transition-shadow relative group">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-900 text-sm">{item.term}</h4>
                  <button 
                    onClick={() => copyDefinition(item.term, item.def)}
                    className="text-gray-400 hover:text-indigo-600 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copier la définition"
                  >
                    {copiedTerm === item.term ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
                <p className="text-xs text-gray-700 mt-1 leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredLean.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
            <span className="bg-green-100 text-green-800 px-3 py-0.5 rounded-full text-xs font-black">3</span> 
            Vocabulaire de l'Amélioration Continue (Lean) ({filteredLean.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredLean.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-xs border border-l-4 border-l-green-500 hover:shadow-md transition-shadow relative group">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-900 text-sm">{item.term}</h4>
                  <button 
                    onClick={() => copyDefinition(item.term, item.def)}
                    className="text-gray-400 hover:text-green-600 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copier la définition"
                  >
                    {copiedTerm === item.term ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
                <p className="text-xs text-gray-700 mt-1 leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredSigles.length === 0 && filteredDico.length === 0 && filteredLean.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-xs">Aucun résultat trouvé pour "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

// --- CONFIGURATION NAVIGATION & MODULES ---

function LayoutDashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

interface ModuleDefinition {
  id: string;
  title: string;
  category: 'core' | 'support' | 'eval';
  icon: React.ComponentType<{ size?: number; className?: string }>;
  component: React.ComponentType;
  badge?: string;
}

const modulesData: ModuleDefinition[] = [
  { id: 'accueil', title: 'Accueil & Intro', category: 'core', icon: Home, component: AccueilContent },
  { id: 'm1', title: 'Mod 1: Suivi des tâches', category: 'core', icon: BarChart, component: Module1Content, badge: "Kanban" },
  { id: 'm2', title: 'Mod 2: Suivi budgétaire', category: 'core', icon: Target, component: Module2Content, badge: "EVM" },
  { id: 'm3', title: 'Mod 3: Outils Suivi-Évaluation', category: 'core', icon: BookOpen, component: Module3Content },
  { id: 'm4', title: 'Mod 4: Approche GAR', category: 'core', icon: LayoutDashboardIcon, component: Module4Content, badge: "Impact" },
  { id: 'm5', title: 'Mod 5: Gestion équipes', category: 'core', icon: Users, component: Module5Content, badge: "RACI" },
  { id: 'm6', title: 'Mod 6: Éthique & Changement', category: 'core', icon: ShieldCheck, component: Module6Content, badge: "PROSCI" },
  { id: 'msupp', title: 'Mod Supp: MoSCoW & PPP', category: 'support', icon: Filter, component: ModSupplementContent, badge: "PIP/PPP" },
  { id: 'lexique', title: 'Lexique (Glossaire)', category: 'support', icon: BookA, component: LexiqueContent },
  { id: 'quiz', title: 'Examen & Certification', category: 'eval', icon: Award, component: QuizSection, badge: "Attestation" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('accueil');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<'normal' | 'large'>('normal');

  // Track completed modules in localStorage
  const [completedModules, setCompletedModules] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('gbeke_completed_modules');
      return saved ? JSON.parse(saved) : ['accueil'];
    } catch {
      return ['accueil'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('gbeke_completed_modules', JSON.stringify(completedModules));
    } catch {
      // ignore
    }
  }, [completedModules]);

  const toggleModuleCompleted = (id: string) => {
    setCompletedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const currentModule = modulesData.find(m => m.id === activeTab) || modulesData[0];
  const ActiveComponent = currentModule.component;
  const isCurrentCompleted = completedModules.includes(activeTab);

  const mainModulesCount = modulesData.filter(m => m.category === 'core').length;
  const completedCoreCount = modulesData.filter(m => m.category === 'core' && completedModules.includes(m.id)).length;
  const progressPercent = Math.round((completedCoreCount / mainModulesCount) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-800 ${zoomLevel === 'large' ? 'text-base' : 'text-sm'}`}>
      
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-2xs z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside 
        className={`fixed md:sticky top-0 left-0 h-screen w-80 bg-blue-950 text-white shadow-2xl transition-transform transform z-50 flex flex-col shrink-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          ${isFullscreen ? "md:hidden" : "md:translate-x-0"}`}
      >
        {/* Brand Header */}
        <div className="p-5 bg-blue-900 border-b border-blue-800 flex justify-between items-center">
          <div>
            <span className="text-[10px] font-black tracking-widest text-amber-400 uppercase">Côte d'Ivoire</span>
            <h1 className="text-lg font-black tracking-tight text-white flex items-center gap-2">
              E-Learning Gbêkê
            </h1>
            <p className="text-blue-300 text-[11px]">Plateforme de formation GAR • 49 Agents</p>
          </div>
          <button 
            className="md:hidden text-white/80 hover:text-white p-1 rounded-lg" 
            onClick={() => setSidebarOpen(false)}
            aria-label="Fermer le menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Learner Progress Bar */}
        <div className="px-5 py-3.5 bg-blue-900/50 border-b border-blue-800/80">
          <div className="flex justify-between items-center text-xs mb-1.5">
            <span className="text-blue-200 font-semibold">Progression du cursus</span>
            <span className="font-black text-amber-400">{progressPercent}%</span>
          </div>
          <div className="w-full bg-blue-950 rounded-full h-2 overflow-hidden border border-blue-800">
            <div 
              className="bg-amber-400 h-full rounded-full transition-all duration-500" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] text-blue-300 mt-1">
            <span>{completedCoreCount} / {mainModulesCount} modules validés</span>
            {progressPercent >= 80 && <span className="text-emerald-400 font-bold">Prêt pour l'examen !</span>}
          </div>
        </div>

        {/* Modules Nav */}
        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
          {modulesData.map((module) => {
            const Icon = module.icon;
            const isActive = activeTab === module.id;
            const isCompleted = completedModules.includes(module.id);
            const isExam = module.id === 'quiz';

            return (
              <button
                key={module.id}
                onClick={() => {
                  setActiveTab(module.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-150 group cursor-pointer
                  ${isActive 
                    ? "bg-blue-600 text-white shadow-md font-bold" 
                    : isExam
                      ? "bg-amber-400/10 text-amber-300 hover:bg-amber-400/20"
                      : "text-blue-100/90 hover:bg-blue-900/70 hover:text-white"
                  }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Icon size={18} className={`shrink-0 ${isActive ? "text-white" : isExam ? "text-amber-400" : "text-blue-300"}`} />
                  <span className="text-xs truncate">{module.title}</span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  {module.badge && (
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                      isActive 
                        ? 'bg-blue-800 text-blue-100' 
                        : isExam
                          ? 'bg-amber-400 text-blue-950 font-black'
                          : 'bg-blue-900/80 text-blue-200'
                    }`}>
                      {module.badge}
                    </span>
                  )}
                  {isCompleted && !isExam && (
                    <CheckCircle2 size={13} className={isActive ? "text-white" : "text-emerald-400"} />
                  )}
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Footer info */}
        <div className="p-4 bg-blue-950 text-[11px] text-blue-400 border-t border-blue-900 flex flex-col gap-1">
          <div className="flex items-center justify-between font-semibold text-blue-200">
            <span>Conseil Régional du Gbêkê</span>
            <span className="text-[10px] bg-blue-900 px-1.5 py-0.5 rounded text-blue-300">Bouaké</span>
          </div>
          <p className="text-[10px] text-blue-400">Consultant : Koffié Fabien Michael</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        
        {/* Top Header bar */}
        <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-3.5 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
          <div className="flex items-center gap-3">
            <button 
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={() => setSidebarOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu size={20} />
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="hidden md:flex p-2 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              title={isFullscreen ? "Quitter le mode lecture" : "Mode lecture plein écran"}
            >
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>

            <div>
              <div className="text-[10px] text-blue-700 font-bold tracking-wider uppercase hidden sm:block">
                Conseil Régional du Gbêkê • Formation GAR
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 truncate">
                {currentModule.title}
              </h2>
            </div>
          </div>

          {/* Quick utility controls */}
          <div className="flex items-center gap-2">
            {/* Zoom toggle */}
            <button
              onClick={() => setZoomLevel(zoomLevel === 'normal' ? 'large' : 'normal')}
              className="text-xs p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center gap-1"
              title="Ajuster la taille du texte"
            >
              {zoomLevel === 'normal' ? <ZoomIn size={15} /> : <ZoomOut size={15} />}
              <span className="hidden sm:inline text-[11px] font-semibold">{zoomLevel === 'normal' ? 'A+' : 'A-'}</span>
            </button>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="text-xs p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center gap-1"
              title="Imprimer cette fiche de cours"
            >
              <Printer size={15} />
              <span className="hidden sm:inline text-[11px] font-semibold">Imprimer</span>
            </button>

            {/* Mark completed toggle button */}
            {activeTab !== 'quiz' && (
              <button
                onClick={() => toggleModuleCompleted(activeTab)}
                className={`text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                  isCurrentCompleted 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-2xs'
                }`}
              >
                <CheckCircle2 size={14} />
                <span className="hidden sm:inline">
                  {isCurrentCompleted ? 'Validé' : 'Marquer comme lu'}
                </span>
              </button>
            )}
          </div>
        </header>

        {/* Scrollable Document Area */}
        <div className={`flex-1 overflow-y-auto p-4 md:p-8 transition-colors ${isFullscreen ? 'bg-white' : 'bg-slate-50'}`}>
          <div className={`mx-auto transition-all duration-200 origin-top ${isFullscreen ? 'w-full max-w-5xl' : 'w-full max-w-4xl'}`}>
            <ActiveComponent />

            {/* Navigation next/prev between modules */}
            <div className="no-print mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 pb-12">
              {(() => {
                const currentIndex = modulesData.findIndex(m => m.id === activeTab);
                const prevModule = currentIndex > 0 ? modulesData[currentIndex - 1] : null;
                const nextModule = currentIndex < modulesData.length - 1 ? modulesData[currentIndex + 1] : null;

                return (
                  <>
                    <div>
                      {prevModule ? (
                        <button
                          onClick={() => {
                            setActiveTab(prevModule.id);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-xs font-semibold text-gray-600 hover:text-blue-700 flex items-center gap-1.5 bg-white border border-gray-200 px-3.5 py-2 rounded-xl transition-colors shadow-2xs"
                        >
                          ← {prevModule.title}
                        </button>
                      ) : <div />}
                    </div>

                    <div className="flex items-center gap-2">
                      {nextModule && (
                        <button
                          onClick={() => {
                            setActiveTab(nextModule.id);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 flex items-center gap-1.5 px-4 py-2 rounded-xl transition-colors shadow-sm"
                        >
                          Module Suivant : {nextModule.title} →
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
