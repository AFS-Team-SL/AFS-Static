"use client";

import Image from "next/image";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ icon, title, description, image }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200/60 hover:border-[#232249]/30 overflow-hidden h-full flex flex-col touch-manipulation">
      {/* Image Section */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          quality={85}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Refined Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#232249]/90 via-[#232249]/30 to-transparent"></div>
        
        {/* Modern Icon Badge */}
        <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5">
          <div className="inline-flex w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-500">
            <div className="text-[#232249] scale-90 sm:scale-100">
              {icon}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#232249] mb-2 sm:mb-3 leading-snug group-hover:text-[#5b1d1b] transition-colors duration-300" style={{ fontFamily: "'Merriweather', serif" }}>
          {title}
        </h3>
        
        {/* Modern Accent Line */}
        <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-[#5b1d1b] to-[#232249] rounded-full mb-3 sm:mb-4"></div>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-xs sm:text-sm flex-1" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
          {description}
        </p>
      </div>
      
      {/* Refined Bottom Accent */}
      <div className="h-1.5 bg-gradient-to-r from-transparent via-[#232249] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}
