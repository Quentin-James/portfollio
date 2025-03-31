import React from 'react';
import { BookOpen, BrainCircuit, Laptop } from "lucide-react";
import ProjectCard from './ProjectCard';

interface ActiveSectionProps {
  activeSection: string;
}

const urls = {
  GithubCsharp: "https://github.com/Quentin-James/Back_C-_exakis",
  GithubAngular: "https://github.com/Quentin-James/Angular_Exercice-exakis",
  GithubReact: "https://github.com/Quentin-James/PronoteProjectFront",
  GithubBash: "https://github.com/Quentin-James/Squidguard-automation/tree/master"
};

const handleClick = (url: string) => {
  window.location.href = url;
};

const ActiveSection: React.FC<ActiveSectionProps> = ({ activeSection }) => {
  return (
    <>
      {activeSection === 'about' && (
        <section className="col-span-2">
          <h2 className="flex items-center text-3xl font-bold mb-6 text-teal-400">
            <BookOpen className="w-8 h-8 mr-2 text-teal-400" />
            À propos de moi
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl p-6">
            <p className="text-gray-100 leading-relaxed">
              Je m'appelle Quentin, je suis étudiant en Bachelor informatique au sein de l'EPSI Nantes.
              Dans le cadre de ma formation, je suis actuellement à la recherche d'une alternance de 1 an en développement informatique pour valider mon bac +3. Mon projet serait ensuite de renouveler cette alternance pour 2 ans, 
              afin de poursuivre ma montée en compétences au sein de l'entreprise qui m'aura initialement formé, et ainsi valider un diplôme de Développeur de niveau bac +5.
            </p>
          </div>
        </section>
      )}

      {activeSection === 'e4' && (
        <section className="col-span-2">
          <h2 className="text-3xl font-bold text-teal-400 mb-8">Projets en vedette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Frontend React avec TypeScript"
              description="Projet frontend React avec du typescript"
              image="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png"
              githubLink={urls.GithubReact}
            />
            <ProjectCard
              title="Frontend Angular"
              description="Projet frontend en corrélation avec le backend C#"
              image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*-acsut0o1dPV_jK7Lu5eXg.png"
              githubLink={urls.GithubAngular}
            />
            <ProjectCard
              title="Backend C#"
              description="Projet C# avec généricité et injections de dépendances"
              image="https://w0.peakpx.com/wallpaper/757/901/HD-wallpaper-c-sharp-black-logo-programming-language-grid-metal-background-c-sharp-artwork-creative-programming-language-signs-c-sharp-logo.jpg"
              githubLink={urls.GithubCsharp}
            />
            <ProjectCard
              title="Automatisation de l'installation de Squidguard"
              description="Un projet d'installation automatique de squidguard"
              image="https://img-c.udemycdn.com/course/750x422/3930400_0bea.jpg"
              githubLink={urls.GithubBash}
            />
          </div>
        </section>
      )}

      {activeSection === 'e5' && (
        <section className="col-span-2">
          <h2 className="flex items-center text-3xl font-bold mb-6 text-teal-400">
            <Laptop className="w-8 h-8 mr-2" />
            Expériences Professionnelles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Stage 2025</h3>
              <p className="text-gray-100">Développement d'une API Web en C# avec un front en React pour faire un site de gestion d'élèves</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Ynova member</h3>
              <p className="text-gray-100">Création d'un rag en python pour entraîner le LLM Mistral</p>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'veille' && (
        <section className="col-span-2">
          <h2 className="flex items-center text-3xl font-bold mb-6 text-teal-400">
            <BrainCircuit className="w-8 h-8 mr-2" />
            Veille Technologique
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Outils de Veille</h3>
              <ul className="list-disc list-inside text-gray-100 space-y-2">
                <li>Feedly pour le suivi des flux RSS</li>
                <li>Twitter pour suivre les experts du domaine</li>
                <li>GitHub pour suivre les tendances de développement</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Dernières Découvertes</h3>
              <div className="space-y-4 text-gray-100">
                <div>
                  <h4 className="font-medium text-white">Intelligence Artificielle</h4>
                  <p className="text-sm">L'IA continue de transformer le développement logiciel avec des assistants de codage et des algorithmes d'optimisation.</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Cybersécurité</h4>
                  <p className="text-sm">Évolution constante des menaces et solutions de sécurité avancées basées sur l'IA.</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Développement Durable</h4>
                  <p className="text-sm">Adoption de pratiques de développement durable et technologies vertes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ActiveSection;