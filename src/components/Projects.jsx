import React, { useState } from 'react';
import { projectsData } from '/constants/index.js'

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Games', 'Visuals & Audio', 'Software', 'Others'];

    const filteredProjects = projectsData.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen p-8 bg-transparent">
            {/* Search and Filter Section */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-6 text-white">Our Projects</h1>

                {/* Search Bar */}
                <div className="relative mb-8">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="w-full p-4 pl-12 rounded-lg border border-gray-300 bg-white/10 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <svg
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                            }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            className="bg-white/5 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-[1.02] border border-white/10 backdrop-blur-sm"
                        >
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                    <span className="inline-block bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-500/30">
                    {project.category}
                  </span>
                                </div>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="text-blue-400 font-medium hover:text-blue-300 transition-colors flex items-center">
                                    View Project <span className="ml-1">→</span>
                                </div>
                            </div>
                        </a>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        <h3 className="text-xl text-gray-400">No projects found matching your criteria</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;