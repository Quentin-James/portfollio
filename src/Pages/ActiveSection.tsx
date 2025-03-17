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
      {/* Dynamic Content Sections */}
      {activeSection === 'about' && (
        <section>
          <h2 className="flex items-center text-3xl font-bold mb-6 text-teal-400">
            <BookOpen className="w-8 h-8 mr-2 text-teal-400" />
            À propos de moi
          </h2>
          <div className="bg-transparent rounded-lg shadow-md p-6">
            <p className="text-gray-700 leading-relaxed text-white">
              Je m'appelle Quentin, je suis étudiant en Bachelor informatique au sein de l'EPSI Nantes.
              Dans le cadre de ma formation, je suis actuellement à la recherche d’une alternance de 1 an en développement informatique pour valider mon bac +3. Mon projet serait ensuite de renouveler cette alternance pour 2 ans, 
              afin de poursuivre ma montée en compétences au sein de l’entreprise qui m’aura initialement formé, et ainsi valider un diplôme de Développeur de niveau bac +5.
            </p>
          </div>
        </section>
      )}

      {activeSection === 'e4' && (
        <section className="py-10 -mt-20 border-transparent bg-transparent text-black">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-1 text-white">Projets en vedette</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>
      )}

      {activeSection === 'e5' && (
        <section>
          <h2 className="flex items-center text-3xl font-bold mb-6 text-teal-400">
            <Laptop className="w-8 h-8 mr-2 text-teal-400" />
            Épreuve E5 - Production et fourniture de services
          </h2>
          <div className="space-y-6">
            <div className="bg-transparent p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Stage 2025</h3>
              <p className="text-white">Développement d'une API Web en C# avec un front en React pour faire un site de gestion d'élèves</p>
              
            </div>
            <div className="bg-transparent p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Ynova member</h3>
              <p className="text-white">Création d'un rag en python pour entraîner le LLM Mistral</p>
             
            </div>
          </div>
        </section>
      )}
{activeSection === 'veille' && (
  <section>
    <h2 className="flex items-center text-3xl font-bold mb-6 text-teal-400">
      <BrainCircuit className="w-8 h-8 mr-2 text-teal-400" />
      Veille Technologique
    </h2>
    <div className="space-y-6">
      <div className="bg-transparent p-6 rounded-lg ">
        <h3 className="text-xl font-semibold mb-4 text-teal-400">Outils de Veille</h3>
        <ul className="list-disc pl-6 text-white">
          <li>Feedly pour le suivi des flux RSS</li>
          <li>Twitter pour suivre les experts du domaine</li>
          <li>GitHub pour suivre les tendances de développement</li>
        </ul>
      </div>
      <div className="bg-transparent p-6 rounded-lg  ">
        <h3 className="text-xl font-semibold mb-4 text-teal-400">Dernières Découvertes</h3>
        <div className="space-y-4">
          <article>
            <h4 className="font-medium text-gray-900">Intelligence Artificielle dans le Développement</h4>
            <p className="text-white">
              L'intelligence artificielle (IA) continue de transformer le développement logiciel. Les outils d'IA, tels que les assistants de codage basés sur l'IA, aident les développeurs à écrire du code plus rapidement et avec moins d'erreurs. De plus, les algorithmes d'apprentissage automatique sont de plus en plus utilisés pour optimiser les performances des applications et personnaliser l'expérience utilisateur.
            </p>
          </article>
          <article>
            <h4 className="font-medium text-gray-900">Cybersécurité</h4>
            <p className="text-white">
              La cybersécurité reste une priorité majeure pour les entreprises de toutes tailles. Les menaces évoluent constamment, avec des attaques de plus en plus sophistiquées. Les entreprises investissent dans des solutions de sécurité avancées, telles que la détection des anomalies basée sur l'IA et les systèmes de réponse automatisée aux incidents, pour protéger leurs données et leurs infrastructures.
            </p>
          </article>
          <article>
            <h4 className="font-medium text-gray-900">Développement Durable et Technologie</h4>
            <p className="text-white">
              Le développement durable devient un enjeu crucial dans le domaine technologique. Les entreprises cherchent à réduire leur empreinte carbone en adoptant des pratiques de développement durable, telles que l'utilisation de centres de données écoénergétiques et la mise en œuvre de politiques de recyclage des équipements électroniques. De plus, les technologies vertes, comme les énergies renouvelables et les solutions de gestion de l'énergie, jouent un rôle clé dans la transition vers une économie plus durable.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
)}
    </>
  );
};

export default ActiveSection;