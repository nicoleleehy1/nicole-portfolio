import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, ChevronRight, Building2, Code, Briefcase } from 'lucide-react';
import { experiences } from '@/lib/projects';

const ExperiencesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education' | 'project'>('all');
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  const filteredExperiences = experiences.filter(exp => 
    activeFilter === 'all' || exp.type === activeFilter
  );

  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return <Briefcase className="w-5 h-5" />;
      case 'education': return <Building2 className="w-5 h-5" />;
      case 'project': return <Code className="w-5 h-5" />;
      default: return <Briefcase className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'education': return 'bg-green-100 text-green-800 border-green-200';
      case 'project': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Experiences</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey through my professional development, education, and projects that have shaped my expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-2 shadow-lg border">
            {(['all', 'work', 'education', 'project'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {filter === 'all' ? 'All' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          {/* Experience cards */}
          <div className="space-y-8">
            {filteredExperiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-start transition-all duration-500 ${
                  selectedExperience === exp.id ? 'transform scale-[1.02]' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full border-4 border-blue-400 shadow-lg">
                  {getIcon(exp.type)}
                </div>

                {/* Experience card */}
                <div
                  className="ml-8 flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedExperience(
                    selectedExperience === exp.id ? null : exp.id
                  )}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)}`}>
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</p>
                        <div className="flex items-center gap-4 text-gray-500 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-4 h-4" />
                              View
                            </a>
                          )}
                        </div>
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          selectedExperience === exp.id ? 'rotate-90' : ''
                        }`}
                      />
                    </div>

                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    {/* Collapsible content */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      selectedExperience === exp.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        {exp.technologies && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
          <p className="mb-6 opacity-90">
            Interested in collaborating or learning more about my experience?
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPage;