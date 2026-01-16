import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.jpg"
          alt="Facility Management"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <div className="inline-block mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-[#5b1d1b] to-white/50 rounded-full"></div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
          Professional Facility Management Solutions
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Excellence in service, reliability in every detail
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-[#5b1d1b] to-[#7a2724] text-white px-10 py-4 rounded-lg hover:from-[#232249] hover:to-[#2d2a5c] transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-[#5b1d1b]/50 transform hover:-translate-y-1"
          >
            Get Started
          </a>
          <a 
            href="#services" 
            className="bg-white/95 backdrop-blur-sm text-[#232249] px-10 py-4 rounded-lg hover:bg-white transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
