import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  const getLevelStyles = (level: string) => {
    const baseStyles = "transform transition-all duration-300 hover:scale-105 hover:shadow-lg";
    
    switch (level) {
      case 'Expert':
        return `${baseStyles} bg-gradient-to-br from-purple-600 to-indigo-600 border-purple-400`;
      case 'Advanced':
        return `${baseStyles} bg-gradient-to-br from-teal-600 to-emerald-600 border-teal-400`;
      case 'Intermediate':
        return `${baseStyles} bg-gradient-to-br from-blue-600 to-cyan-600 border-blue-400`;
      default:
        return `${baseStyles} bg-gradient-to-br from-gray-600 to-slate-600 border-gray-400`;
    }
  };

  return (
    <div className={`${getLevelStyles(level)} rounded-xl p-4 border-2 border-opacity-20 backdrop-blur-sm`}>
      <div className="flex flex-col items-center space-y-2 text-white">
        <span className="font-bold text-lg">{name}</span>
        <span className="text-sm opacity-90 bg-black/20 px-3 py-1 rounded-full">{level}</span>
      </div>
    </div>
  );
};

export default SkillBadge;