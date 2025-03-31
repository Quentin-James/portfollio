import React from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  githubLink,
}) => {
  return (
    <div className="group bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-6 line-clamp-2">{description}</p>
        
        <a
          href={githubLink}
          className="inline-flex items-center px-4 py-2 rounded-lg bg-teal-500 text-white hover:bg-teal-400 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} className="mr-2" />
          <span>Voir le code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;