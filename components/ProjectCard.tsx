"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  year: string;
  slug: string;
}

export default function ProjectCard({ title, description, category, image, year, slug }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block h-full">
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#232249]/20 overflow-hidden cursor-pointer h-full flex flex-col transform hover:-translate-y-2">
        {/* Image Section */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#232249]/95 via-[#232249]/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
          
          {/* Category Badge */}
          <div className="absolute top-5 right-5">
            <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-[#232249] text-xs font-bold uppercase tracking-wider rounded-full shadow-xl">
              {category}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-5 left-5">
            <span className="px-4 py-2 bg-gradient-to-r from-[#5b1d1b] to-[#7a2724] text-white text-xs font-bold rounded-full shadow-xl">
              {year}
            </span>
          </div>
          
          {/* Title on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight transform group-hover:translate-x-2 transition-transform duration-300" style={{ fontFamily: "'Merriweather', serif" }}>
              {title}
            </h3>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#5b1d1b] via-white to-transparent rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-6" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
            {description}
          </p>
          
          {/* View Details Button */}
          <div className="mt-auto">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#232249]/5 to-transparent rounded-xl border border-[#232249]/10 group-hover:border-[#232249]/20 group-hover:from-[#232249]/10 transition-all duration-300">
              <span className="text-[#232249] font-bold text-sm group-hover:text-[#5b1d1b] transition-colors duration-300">
                View Details
              </span>
              <div className="w-8 h-8 rounded-full bg-[#232249] group-hover:bg-[#5b1d1b] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Accent */}
        <div className="h-2 bg-gradient-to-r from-[#232249] via-[#5b1d1b] to-[#232249] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </Link>
  );
}
