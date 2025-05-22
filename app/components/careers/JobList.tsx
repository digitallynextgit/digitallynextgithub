'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLocationArrow, FaBuilding, FaTags, FaArrowRight, FaBriefcase, FaQuoteLeft } from 'react-icons/fa'

type Job = {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
  type: string;
  department: string;
  location: string;
  requirements?: string[];
  jobEssence?: string;
  openings?: string[];
}

type JobListProps = {
  jobs: Job[];
  onApply: (jobId: number) => void;
}

const JobList = ({ jobs, onApply }: JobListProps) => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  
  const toggleJob = (jobId: number) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
    }
  }

  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <motion.div
          key={job.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            layout: { duration: 0.3, ease: "easeOut" }
          }}
          className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md ${
            expandedJob === job.id ? 'border-red-500' : 'border-transparent'
          }`}
        >
          {/* Job header - always visible */}
          <div 
            onClick={() => toggleJob(job.id)}
            className="p-6 cursor-pointer flex items-start gap-5"
          >
            {/* Job icon */}
            <div className="hidden sm:block shrink-0">
              <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={job.icon}
                  alt={job.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback for missing images
                    const target = e.target as HTMLImageElement;
                    target.src = `/images/full-time/2.webp`;
                  }}
                />
              </div>
            </div>
            
            {/* Job info */}
            <div className="flex-grow">
              <div className={`flex flex-wrap items-center gap-2 mb-1 ${expandedJob === job.id ? 'text-red-600' : 'text-gray-900'} transition-colors duration-300`}>
                <h3 className="text-xl font-semibold mr-2">{job.title}</h3>
                {job.subtitle && <span className="text-gray-500 text-sm">({job.subtitle})</span>}
                
                <div className={`ml-auto text-xs font-medium px-3 py-1 rounded-full ${
                  job.type === 'Full-time' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {job.type}
                </div>
              </div>
              
              {/* <p className="text-sm text-gray-600 line-clamp-2">
                {job.description}
              </p>
               */}
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <FaLocationArrow className="text-gray-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaBuilding className="text-gray-400" />
                  <span>{job.department}</span>
                </div>
              </div>
            </div>
            
            {/* Expand/collapse indicator */}
            <div className="shrink-0">
              <motion.div 
                initial={false}
                animate={{ rotate: expandedJob === job.id ? 90 : 0 }}
                className="bg-gray-100 rounded-full p-2 transition-colors duration-300 hover:bg-gray-200"
              >
                <FaArrowRight className={expandedJob === job.id ? "text-red-500" : "text-gray-500"} />
              </motion.div>
            </div>
          </div>
          
          {/* Expanded job details */}
          <AnimatePresence>
            {expandedJob === job.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6"
              >
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-700 mb-5">{job.description}</p>
                  
                  {job.jobEssence && (
                    <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <FaQuoteLeft className="text-red-500" />
                        Job Essence
                      </h4>
                      <p className="text-gray-700 text-sm">{job.jobEssence}</p>
                    </div>
                  )}
                  
                  {job.requirements && job.requirements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                        <FaTags className="text-red-500" />
                        Key Requirements
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {job.openings && job.openings.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                        <FaBriefcase className="text-red-500" />
                        Current Openings
                      </h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {job.openings.map((opening, index) => (
                          <li key={index} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-md">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span>{opening}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-3">
                    <motion.button
                      onClick={() => onApply(job.id)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-2.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
                    >
                      Apply Now
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-2.5 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors"
                      onClick={() => navigator.clipboard.writeText(window.location.href)}
                    >
                      Share Position
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      
      {jobs.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No open positions matching your criteria.</p>
        </div>  
      )}
    </div>
  )
}

export default JobList 