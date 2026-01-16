"use client";

import Image from "next/image";

export default function About() {
  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "15+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      title: "Our Mission",
      description: "To provide innovative, reliable, and cost-effective facility management solutions that exceed our clients' expectations.",
      icon: "🎯",
    },
    {
      title: "Our Vision",
      description: "To be the most trusted and preferred facility management partner, setting industry standards for excellence.",
      icon: "🔭",
    },
    {
      title: "Our Values",
      description: "Integrity, quality, innovation, and customer satisfaction drive everything we do.",
      icon: "⭐",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#232249]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#5b1d1b]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-[#5b1d1b] tracking-wider uppercase px-4 py-1.5 bg-[#5b1d1b]/10 rounded-full">
              About Us
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#232249] mb-6" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", letterSpacing: '-0.02em' }}>
            Agile Facilities Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading provider of comprehensive facility management solutions with excellence in every service
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#232249] to-[#5b1d1b] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
              <Image
                src="/about.jpeg"
                alt="About Agile Facilities Solutions"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#232249]/20 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#232249] mb-4" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", letterSpacing: '-0.01em' }}>
              We Help Facility Owners Achieve Operational Efficiency
            </h3>
            <p className="text-lg text-gray-700 leading-[1.8]" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
              AFS Founder, <span className="font-semibold text-[#232249]">Rushan Abayagunawardena, CEM, CSP</span>, is an experienced built-environment specialist with a demonstrated history of working in the environmental, safety, energy management and facilities services related industry. Rushan is skilled in Project Management, Risk Assessment, Regulatory Compliance and Quality Assurance. He is a Certified Energy Manager and a Certified Safety Professional with a Master's Degree in Engineering Management and a Bachelor's Degree is Industrial Engineering.
            </p>
            <p className="text-lg text-gray-700 leading-[1.8]" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
              He has successfully managed <span className="font-semibold text-[#5b1d1b]">+$100M</span> in services geared towards providing technical expertise on ES&H, Environmental Compliance, Energy Management, and Facilities Operations to federal, state and commercial partners. Led multi-disciplinary teams to focus on customer centric solutions meeting federal, state-specific and international (OCONUS) regulatory body requirements. Develops process and engineering solutions based on best practices to reduce occupational hazards, eliminate waste, and achieve building life cycle cost reduction.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#232249]/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#232249]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#232249] to-[#5b1d1b] bg-clip-text text-transparent mb-2" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100/50 hover:border-[#232249]/10 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#232249]/5 via-transparent to-[#5b1d1b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[#232249] mb-4 group-hover:text-[#5b1d1b] transition-colors duration-500" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
                  {value.title}
                </h3>
                
                {/* Divider */}
                <div className="w-12 h-[3px] bg-gradient-to-r from-[#232249] to-[#5b1d1b] rounded-full mb-4 opacity-40 group-hover:opacity-100 group-hover:w-16 transition-all duration-700"></div>
                
                {/* Description */}
                <p className="text-gray-600 leading-[1.7] text-[15px]">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
