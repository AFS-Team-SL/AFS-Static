import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Lead in Water Compliance",
      description: "Comprehensive lead testing and compliance program for drinking water systems across federal facilities, ensuring EPA regulatory compliance and water quality standards.",
      category: "Environmental",
      image: "/image003.jpg",
      year: "2024",
      slug: "lead-in-water-compliance",
    },
    {
      title: "Building Controls Upgrades",
      description: "Modernization of building automation systems including JCI Fx and Niagara platforms, improving energy efficiency and operational control for critical facilities.",
      category: "Building Controls",
      image: "/image003.jpg",
      year: "2024",
      slug: "building-controls-upgrades",
    },
    {
      title: "FOH Industrial Hygiene Surveys",
      description: "Field Operations Headquarters industrial hygiene surveys covering IAQ assessment, exposure monitoring, and comprehensive safety evaluations for operational facilities.",
      category: "Safety & Health",
      image: "/image003.jpg",
      year: "2023",
      slug: "foh-industrial-hygiene-surveys",
    },
    {
      title: "GSA RMS Safety Audits",
      description: "Risk Management System safety audits for GSA facilities, providing detailed compliance assessments and actionable recommendations for enhanced workplace safety.",
      category: "Safety Audits",
      image: "/image003.jpg",
      year: "2023",
      slug: "gsa-rms-safety-audits",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#5b1d1b]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#232249]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-[#5b1d1b] tracking-wider uppercase px-4 py-1.5 bg-[#5b1d1b]/10 rounded-full">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#232249] mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering exceptional results across environmental, safety, and facilities management sectors
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                category={project.category}
                image={project.image}
                year={project.year}
                slug={project.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
