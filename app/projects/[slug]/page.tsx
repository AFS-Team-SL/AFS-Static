import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projectsData: Record<string, {
  title: string;
  category: string;
  year: string;
  image: string;
  client: string;
  location: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  gallery: string[];
}> = {
  "lead-in-water-compliance": {
    title: "Lead in Water Compliance",
    category: "Environmental",
    year: "2024",
    image: "/project1.jpg",
    client: "Federal Agency",
    location: "Washington, DC Metro Area",
    duration: "12 Months",
    overview: "Comprehensive lead testing and compliance program for drinking water systems across multiple federal facilities, ensuring EPA regulatory compliance and maintaining the highest water quality standards for building occupants.",
    challenge: "Federal facilities required comprehensive lead testing program to comply with new EPA Lead and Copper Rule Revisions (LCRR). The challenge involved testing across 50+ buildings with varying plumbing systems, ages, and water sources while maintaining normal facility operations.",
    solution: "AFS implemented a systematic sampling and testing protocol including water quality assessments, corrosion control monitoring, and hazardous materials inspections. Our team developed a comprehensive testing schedule, conducted field sampling using EPA-approved methods, coordinated with certified laboratories, and provided detailed reporting with actionable recommendations.",
    results: [
      "100% EPA regulatory compliance achieved across all facilities",
      "Identified and remediated 12 fixtures exceeding action levels",
      "Developed long-term monitoring and maintenance plan",
      "Provided staff training on lead awareness and prevention",
      "Created comprehensive documentation for regulatory reporting"
    ],
    services: [
      "Water Quality Testing & Analysis",
      "EPA LCRR Compliance Assessment",
      "Fixture Sampling & Documentation",
      "Laboratory Coordination & QA/QC",
      "Regulatory Reporting & Documentation",
      "Staff Training & Awareness Programs"
    ],
    gallery: ["/project1.jpg", "/project1-2.jpg", "/project1-3.jpg"]
  },
  "building-controls-upgrades": {
    title: "Building Controls Upgrades",
    category: "Building Controls",
    year: "2024",
    image: "/project2.jpg",
    client: "Federal Government Facility",
    location: "Multiple Locations, East Coast",
    duration: "18 Months",
    overview: "Complete modernization of building automation systems including JCI Fx and Tridium Niagara platforms, improving energy efficiency and operational control for mission-critical federal facilities.",
    challenge: "Legacy building automation systems were failing, causing inefficient HVAC operations, excessive energy costs, and poor indoor environmental quality. Systems needed upgrading without disrupting critical facility operations 24/7.",
    solution: "AFS executed a phased upgrade approach, replacing outdated pneumatic controls with modern DDC systems, integrating JCI Fx and Niagara platforms for centralized monitoring, and implementing advanced scheduling and optimization algorithms. Our engineering team performed comprehensive evaluations, designed system upgrades, and managed installations during off-peak hours.",
    results: [
      "35% reduction in annual energy consumption",
      "Achieved real-time monitoring across all facilities",
      "Zero operational disruptions during implementation",
      "Improved indoor air quality and occupant comfort",
      "Enhanced predictive maintenance capabilities",
      "Reduced emergency service calls by 60%"
    ],
    services: [
      "Building Automation System Design",
      "JCI Fx & Niagara Platform Integration",
      "Preventative Maintenance Programs",
      "System Commissioning & Optimization",
      "Energy Management & Monitoring",
      "24/7 System Support & Troubleshooting"
    ],
    gallery: ["/project2.jpg", "/project2-2.jpg", "/project2-3.jpg"]
  },
  "foh-industrial-hygiene-surveys": {
    title: "FOH Industrial Hygiene Surveys",
    category: "Safety & Health",
    year: "2023",
    image: "/project3.jpg",
    client: "Field Operations Headquarters",
    location: "Nationwide",
    duration: "Ongoing Program",
    overview: "Comprehensive industrial hygiene surveys for Field Operations Headquarters covering IAQ assessment, exposure monitoring, and safety evaluations across operational facilities nationwide.",
    challenge: "Field operations facilities presented diverse environmental and safety challenges including variable occupancy levels, multiple work processes, potential exposure hazards, and the need for comprehensive baseline assessments without disrupting critical operations.",
    solution: "AFS deployed certified industrial hygienists to conduct thorough on-site assessments including air quality monitoring, noise level measurements, chemical exposure evaluations, and ergonomic assessments. Our team utilized advanced monitoring equipment, conducted comprehensive sampling programs, and provided detailed technical reports with prioritized recommendations.",
    results: [
      "Completed assessments at 25+ facilities nationwide",
      "Identified and mitigated 40+ potential exposure hazards",
      "Achieved OSHA VPP Star recognition for 3 facilities",
      "Implemented comprehensive exposure control programs",
      "Reduced worker compensation claims by 45%",
      "Established ongoing monitoring protocols"
    ],
    services: [
      "Industrial Hygiene Assessments (IAQ)",
      "Exposure Monitoring & Sampling",
      "Hazardous Materials Surveys",
      "Respiratory Protection Programs",
      "OSHA Compliance Evaluations",
      "Employee Health & Safety Training"
    ],
    gallery: ["/project3.jpg", "/project3-2.jpg", "/project3-3.jpg"]
  },
  "gsa-rms-safety-audits": {
    title: "GSA RMS Safety Audits",
    category: "Safety Audits",
    year: "2023",
    image: "/project4.jpg",
    client: "General Services Administration",
    location: "Multiple GSA Facilities",
    duration: "24 Months",
    overview: "Risk Management System (RMS) safety audits for GSA facilities, providing detailed compliance assessments and actionable recommendations for enhanced workplace safety and regulatory compliance.",
    challenge: "GSA facilities required comprehensive RMS audits to identify safety gaps, ensure OSHA compliance, and reduce liability exposure. The scope included diverse facility types from office buildings to specialized operations centers with varying safety requirements.",
    solution: "AFS safety professionals conducted systematic facility inspections using GSA RMS protocols, evaluated safety programs and documentation, interviewed facility management and staff, and assessed compliance with OSHA standards and GSA requirements. Our team provided comprehensive audit reports with prioritized corrective actions and implementation timelines.",
    results: [
      "Completed RMS audits for 18 GSA facilities",
      "Achieved 95%+ compliance scores across facilities",
      "Identified and corrected 200+ safety deficiencies",
      "Developed facility-specific safety improvement plans",
      "Reduced incident rates by 50% within first year",
      "Established quarterly safety audit program"
    ],
    services: [
      "GSA RMS Safety Audits",
      "OSHA Compliance Assessments",
      "Safety Program Development",
      "Incident Investigation & Analysis",
      "Corrective Action Planning",
      "Safety Management Training"
    ],
    gallery: ["/project4.jpg", "/project4-2.jpg", "/project4-3.jpg"]
  }
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <Link href="/#projects" className="text-[#232249] hover:text-[#5b1d1b] font-semibold">
              Return to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#232249] via-[#232249]/70 to-[#232249]/30"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-20 w-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-5 py-2 bg-white text-[#232249] text-sm font-bold uppercase tracking-wider rounded-full shadow-xl">
                {project.category}
              </span>
              <span className="px-5 py-2 bg-gradient-to-r from-[#5b1d1b] to-[#7a2724] text-white text-sm font-bold rounded-full shadow-xl">
                {project.year}
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
              {project.title}
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-[#5b1d1b] to-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Project Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20 -mt-32 relative z-10">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#232249] to-[#2d2a5c] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Client</h3>
              <p className="text-xl font-semibold text-[#232249]" style={{ fontFamily: "'Merriweather', serif" }}>{project.client}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5b1d1b] to-[#7a2724] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Location</h3>
              <p className="text-xl font-semibold text-[#232249]" style={{ fontFamily: "'Merriweather', serif" }}>{project.location}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#232249] to-[#2d2a5c] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Duration</h3>
              <p className="text-xl font-semibold text-[#232249]" style={{ fontFamily: "'Merriweather', serif" }}>{project.duration}</p>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#232249]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#232249]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-[#232249]" style={{ fontFamily: "'Merriweather', serif" }}>
                    Project Overview
                  </h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-[#232249] to-[#5b1d1b] rounded-full mb-6"></div>
                <p className="text-gray-700 leading-[1.8] text-lg">
                  {project.overview}
                </p>
              </div>

              {/* Challenge */}
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#5b1d1b]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#5b1d1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-[#232249]" style={{ fontFamily: "'Merriweather', serif" }}>
                    The Challenge
                  </h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-[#232249] to-[#5b1d1b] rounded-full mb-6"></div>
                <p className="text-gray-700 leading-[1.8] text-lg">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#232249]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#232249]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-[#232249]" style={{ fontFamily: "'Merriweather', serif" }}>
                    Our Solution
                  </h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-[#232249] to-[#5b1d1b] rounded-full mb-6"></div>
                <p className="text-gray-700 leading-[1.8] text-lg">
                  {project.solution}
                </p>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-[#232249] to-[#2d2a5c] p-10 rounded-2xl shadow-lg text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Merriweather', serif" }}>
                    Results Achieved
                  </h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-white to-white/50 rounded-full mb-6"></div>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/95 leading-[1.8] text-lg">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Services Provided */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#232249]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#232249]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#232249]" style={{ fontFamily: "'Merriweather', serif" }}>
                    Services Provided
                  </h3>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-[#232249] to-[#5b1d1b] rounded-full mb-6"></div>
                <ul className="space-y-3">
                  {project.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <svg className="w-5 h-5 text-[#5b1d1b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm font-medium leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#232249] to-[#2d2a5c] p-8 rounded-2xl text-white shadow-xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                    Need Similar Services?
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Let's discuss how we can help achieve your facility management goals.
                  </p>
                  <Link 
                    href="/#contact" 
                    className="inline-block w-full text-center bg-white text-[#232249] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Back to Projects */}
              <Link 
                href="/#projects"
                className="inline-flex items-center gap-2 text-[#232249] font-semibold hover:text-[#5b1d1b] transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'lead-in-water-compliance' },
    { slug: 'building-controls-upgrades' },
    { slug: 'foh-industrial-hygiene-surveys' },
    { slug: 'gsa-rms-safety-audits' },
  ];
}
