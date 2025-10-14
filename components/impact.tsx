import React from 'react';

interface ImpactProps {
  impact?: {
    coverage?: {
      geographic?: string;
      media?: string;
      publications?: string;
    };
    achievements?: string[];
  };
}

const Impact: React.FC<ImpactProps> = ({ impact }) => {
  if (!impact) return null;

  // Check if there's any meaningful data to display
  const hasCoverageData = impact.coverage && (
    (impact.coverage.geographic && impact.coverage.geographic.trim() !== '') ||
    (impact.coverage.media && impact.coverage.media.trim() !== '') ||
    (impact.coverage.publications && impact.coverage.publications.trim() !== '')
  );
  
  const hasAchievements = impact.achievements && 
    impact.achievements.length > 0 && 
    impact.achievements.some(achievement => achievement.trim() !== '');

  // If no meaningful data, don't render the section
  if (!hasCoverageData && !hasAchievements) {
    return null;
  }

  return (
    <section className="from-red-50 via-white to-red-50 border-2 border-red-200 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-3xl font-black text-gray-900">Impact/Success/RoI</h2>
      </div>

      <div className="space-y-6">
        {impact.coverage && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Coverage</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {impact.coverage.geographic && (
                <div className="bg-white rounded-xl p-4 text-center border-2 border-red-200 shadow-lg">
                  <div className="text-xl font-black" style={{ color: '#00D6E8' }}>
                    {impact.coverage.geographic}
                  </div>
                  <div className="text-sm text-red-600 font-semibold">Geographic Reach</div>
                </div>
              )}
              {impact.coverage.media && (
                <div className="bg-white rounded-xl p-4 text-center border-2 border-red-200 shadow-lg">
                  <div className="text-xl font-black" style={{ color: '#00D6E8' }}>
                    {impact.coverage.media}
                  </div>
                  <div className="text-sm text-red-600 font-semibold">Media Coverage</div>
                </div>
              )}
              {impact.coverage.publications && (
                <div className="bg-white rounded-xl p-4 text-center border-2 border-red-200 shadow-lg">
                  <div className="text-xl font-black" style={{ color: '#00D6E8' }}>
                    {impact.coverage.publications}
                  </div>
                  <div className="text-sm text-red-600 font-semibold">Publications</div>
                </div>
              )}
            </div>
          </div>
        )}

        {impact.achievements && impact.achievements.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border-2 border-red-200 shadow-lg">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Key Achievements</h4>
            <ul className="space-y-2 text-red-700 font-medium">
              {impact.achievements.map((achievement, index) => (
                <li key={index}>• {achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Impact;