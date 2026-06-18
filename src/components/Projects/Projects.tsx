import { siteData } from '../../data'
import { Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const { projects } = siteData
  const [filter, setFilter] = useState<string>('all')

  const allTags = projects.items.reduce((acc, project) => {
    project.tags.forEach(tag => {
      if (!acc.includes(tag)) acc.push(tag)
    })
    return acc
  }, [] as string[])

  const filteredProjects = filter === 'all' 
    ? projects.items 
    : projects.items.filter(project => project.tags.includes(filter))

  return (
    <section id="projects" className="px-4 my-[10em] sm:px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-mono transition-all duration-300 ${
              filter === 'all'
                ? 'bg-[#FF6B6B] text-white shadow-[0_0_30px_rgba(255,107,107,0.3)]'
                : 'bg-black/40 text-gray-400 border border-[#FF6B6B]/20 hover:border-[#FF6B6B]/50 hover:text-white hover:bg-[#FF6B6B]/10'
            }`}
          >
            Все проекты
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-mono transition-all duration-300 ${
                filter === tag
                  ? 'bg-[#FF6B6B] text-white shadow-[0_0_30px_rgba(255,107,107,0.3)]'
                  : 'bg-black/40 text-gray-400 border border-[#FF6B6B]/20 hover:border-[#FF6B6B]/50 hover:text-white hover:bg-[#FF6B6B]/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6B6B] via-[#FF8E8E] to-[#FF4757] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 group-hover:blur-2xl"></div>

                <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/5 hover:border-[#FF6B6B]/30 transition-all duration-500 h-full overflow-hidden group-hover:transform group-hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#FF8E8E]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>

                  <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-30">
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#FF6B6B]/30 group-hover:border-[#FF6B6B]/70 transition-colors duration-300"></div>
                  </div>

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-[0_0_30px_rgba(255,107,107,0.1)] group-hover:shadow-[0_0_40px_rgba(255,107,107,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#FF6B6B]/30 hover:bg-[#FF6B6B]/10 transition-all duration-300 hover:scale-110"
                        >
                          <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-[#FF6B6B] transition-colors duration-300" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 font-mono tracking-wide group-hover:text-[#FF6B6B] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed font-light mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300 hover:border-[#FF6B6B]/30 hover:text-[#FF6B6B] transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-[#FF6B6B]/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.stats && (
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                        {project.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-[#FF6B6B] transition-colors duration-300">
                              {stat.value}
                            </div>
                            <div className="text-[8px] sm:text-[10px] text-gray-500 uppercase tracking-wider">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,107,107,0.3)] group-hover:shadow-[0_0_50px_rgba(255,107,107,0.5)] transition-all duration-300">
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 font-mono">Проекты не найдены</p>
          </div>
        )}
      </div>
    </section>
  )
}
