import React from 'react';
import { FaEye, FaDollarSign } from 'react-icons/fa';

interface ResultsProps {
  results?: {
    brandRecognition?: {
      percentage?: string;
      title?: string;
      description?: string;
    };
    revenueGrowth?: {
      percentage?: string;
      title?: string;
      description?: string;
    };
  };
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  if (!results) return null;

  // Check if there's any meaningful data to display
  const hasBrandRecognitionData = results.brandRecognition && (
    (results.brandRecognition.percentage && results.brandRecognition.percentage.trim() !== '') ||
    (results.brandRecognition.title && results.brandRecognition.title.trim() !== '') ||
    (results.brandRecognition.description && results.brandRecognition.description.trim() !== '')
  );

  const hasRevenueGrowthData = results.revenueGrowth && (
    (results.revenueGrowth.percentage && results.revenueGrowth.percentage.trim() !== '') ||
    (results.revenueGrowth.title && results.revenueGrowth.title.trim() !== '') ||
    (results.revenueGrowth.description && results.revenueGrowth.description.trim() !== '')
  );

  // If no meaningful data, don't render the section
  if (!hasBrandRecognitionData && !hasRevenueGrowthData) {
    return null;
  }

  return (
    <section className="relative from-red-50 via-white to-red-50 rounded-3xl p-8 shadow-2xl border-2 border-red-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full from-red-400" 
          style={{ background: `linear-gradient(to bottom right, #ef4444, #00D6E8)` }}
        ></div>
        <div className="absolute top-4 left-4 w-32 h-32 bg-white rounded-full opacity-20"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 bg-white rounded-full opacity-15"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-black text-gray-900">Campaign Results & Impact</h2>
        </div>

        {/* Main Results Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Media Recognition Card */}
          {hasBrandRecognitionData && (
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 from-red-500/5 to-red-500/5 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <FaEye className="text-red-600 text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Media Recognition</h3>
                </div>
                <div className="text-center py-4">
                  <div className="text-5xl font-black mb-2" style={{ color: '#00D6E8' }}>
                    {results.brandRecognition?.percentage || ''}
                  </div>
                  <div className="text-lg text-red-600 font-semibold">
                    {results.brandRecognition?.title || ''}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {results.brandRecognition?.description || ''}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Revenue Growth Card */}
          {hasRevenueGrowthData && (
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 from-red-500/5 to-red-500/5 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <FaDollarSign className="text-red-600 text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Revenue Growth</h3>
                </div>
                <div className="text-center py-4">
                  <div className="text-5xl font-black mb-2" style={{ color: '#00D6E8' }}>
                    {results.revenueGrowth?.percentage || ''}
                  </div>
                  <div className="text-lg text-red-600 font-semibold">
                    {results.revenueGrowth?.title || ''}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {results.revenueGrowth?.description || ''}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;