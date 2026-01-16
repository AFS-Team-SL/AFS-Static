import Image from "next/image";

export default function CompanyInfo() {
  const naicsCodes = [
    { code: "541620", label: "Environmental Consulting Services", primary: true },
    { code: "561210", label: "Facilities Support Services", primary: false },
    { code: "562910", label: "Remediation Services", primary: false },
    { code: "541330", label: "Engineering Services", primary: false },
    { code: "238220", label: "Plumbing & HVAC", primary: false },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#232249]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5b1d1b]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-[#232249] to-[#5b1d1b] rounded-full mx-auto"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#232249] mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
            Certifications & Credentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ensuring healthier, safer spaces while optimizing operational efficiency
          </p>
        </div>

        {/* 8(a) Certification - Featured */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative bg-gradient-to-br from-[#5b1d1b] via-[#6b1f1d] to-[#232249] p-1 rounded-xl shadow-xl">
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Image */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden shadow-lg flex-shrink-0 group">
                  <Image
                    src="/image003.jpg"
                    alt="Agile Facilities Solutions"
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    quality={95}
                    priority
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232249]/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5b1d1b] to-[#7a2724] px-3 py-1.5 rounded-full mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-white font-bold text-xs tracking-wide">CERTIFIED</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#232249] mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                    8(a) Business Development Program
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-3">
                    SBA Certified Small Disadvantaged Business
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    With expertise across environmental consulting, facilities support, and engineering services, we deliver comprehensive solutions that meet the highest standards of excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* NAICS Codes Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#232249] to-[#2d2a5c] rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#232249]" style={{ fontFamily: "'Merriweather', serif" }}>
                  NAICS Codes
                </h3>
                <p className="text-sm text-gray-500">Industry Classification</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {naicsCodes.map((item, index) => (
                <div 
                  key={index} 
                  className={`group p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                    item.primary 
                      ? 'border-[#5b1d1b] bg-gradient-to-br from-[#5b1d1b]/10 via-[#5b1d1b]/5 to-transparent shadow-md' 
                      : 'border-gray-200 hover:border-[#232249]/40 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl font-bold text-[#232249] group-hover:text-[#5b1d1b] transition-colors" style={{ fontFamily: "'Merriweather', serif" }}>
                      {item.code}
                    </span>
                    {item.primary && (
                      <span className="px-2.5 py-1 bg-gradient-to-r from-[#5b1d1b] to-[#7a2724] text-white text-[10px] font-bold rounded-full tracking-wider">
                        PRIMARY
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* UEI & CAGE Code Cards */}
          <div className="space-y-8">
            {/* UEI Number */}
            <div className="bg-gradient-to-br from-[#232249] to-[#2d2a5c] p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Merriweather', serif" }}>
                      UEI Number
                    </h3>
                    <p className="text-xs text-white/70">Unique Entity Identifier</p>
                  </div>
                </div>
                <div className="w-16 h-1 bg-white/30 rounded-full mb-4"></div>
                <p className="text-2xl font-bold text-white tracking-widest" style={{ fontFamily: "'Merriweather', serif" }}>
                  D12KU7ZVJJ74
                </p>
              </div>
            </div>

            {/* CAGE Code */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#232249]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5b1d1b]/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5b1d1b]/20 to-[#5b1d1b]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#5b1d1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#232249]" style={{ fontFamily: "'Merriweather', serif" }}>
                      CAGE Code
                    </h3>
                    <p className="text-xs text-gray-500">Commercial & Government</p>
                  </div>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-[#232249] to-[#5b1d1b] rounded-full mb-4"></div>
                <p className="text-2xl font-bold text-[#232249] tracking-widest" style={{ fontFamily: "'Merriweather', serif" }}>
                  9CUU7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
