'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { careersData } from '@/app/data/careers/full-time'
import { internshipPositions } from '@/app/data/careers/internship'
import CareerHero from '../components/careers/CareerHero'
import JobList from '@/app/components/careers/JobList'
import JobFilter from '@/app/components/careers/JobFilter'
import BenefitsSection from '@/app/components/careers/BenefitsSection'
import CultureSection from '@/app/components/careers/CultureSection'
import ApplicationForm from '@/app/components/careers/ApplicationForm'
import TestimonialsCarousel from '@/app/components/careers/TestimonialsCarousel'
import { FaSearch } from 'react-icons/fa'

// Format both job types to have consistent structure
const fullTimeJobs = careersData.positions.map(position => ({
  id: position.id,
  title: position.title,
  subtitle: position.subtitle || '',
  description: position.description,
  icon: position.icon,
  type: 'Full-time',
  department: getDepartment(position.title),
  location: 'Full-Time Roles',
  requirements: position.requirements || [],
  jobEssence: position.jobEssence || '',
  openings: position.openings || []
}))

const internshipJobs = internshipPositions.map((position, index) => ({
  id: 1000 + index,
  title: position.title,
  subtitle: '',
  description: position.description,
  icon: `/images/internship/${index + 1}.webp`,
  type: 'Internship',
  department: getDepartment(position.title),
  location: 'Full-Time Roles',
  requirements: [],
  jobEssence: '',
  openings: []
}))

// Helper function to categorize jobs by department
function getDepartment(title: string) {
  const title_lower = title.toLowerCase()
  if (title_lower.includes('design') || title_lower.includes('visual') || title_lower.includes('graphic')) {
    return 'Design'
  } else if (title_lower.includes('content') || title_lower.includes('story')) {
    return 'Content'
  } else if (title_lower.includes('developer') || title_lower.includes('web')) {
    return 'Development'
  } else if (title_lower.includes('marketing') || title_lower.includes('sales')) {
    return 'Marketing'
  } else if (title_lower.includes('hr') || title_lower.includes('human')) {
    return 'Human Resources'
  } else if (title_lower.includes('video') || title_lower.includes('editor')) {
    return 'Media Production'
  } else if (title_lower.includes('social')) {
    return 'Social Media'
  } else {
    return 'Other'
  }
}

// Combine all jobs
const allJobs = [...fullTimeJobs, ...internshipJobs]

export default function CareersPage() {
  const [jobs, setJobs] = useState(allJobs)
  const [filters, setFilters] = useState({
    search: '',
    type: 'All',
    department: 'All'
  })
  const [activeSection, setActiveSection] = useState('jobs')
  // const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  
  // Filter jobs based on selected filters
  useEffect(() => {
    let filteredJobs = allJobs
    
    if (filters.search) {
      filteredJobs = filteredJobs.filter(
        job => 
          job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          job.description.toLowerCase().includes(filters.search.toLowerCase())
      )
    }
    
    if (filters.type !== 'All') {
      filteredJobs = filteredJobs.filter(job => job.type === filters.type)
    }
    
    if (filters.department !== 'All') {
      filteredJobs = filteredJobs.filter(job => job.department === filters.department)
    }
    
    setJobs(filteredJobs)
  }, [filters])

  // Handle Apply Now button
  const handleApply = (jobId: number) => {
    setSelectedJob(jobId)
    setActiveSection('apply')
  }

  return (
    <div className="overflow-x-hidden bg-[#f9f9f9]">
      {/* Hero Section */}
      <CareerHero />
      
      {/* Navigation Tabs */}
      <div className="sticky top-20 z-30 bg-white shadow-md py-4 px-6 flex justify-center space-x-4 md:space-x-8 border-b">
        {['jobs', 'culture', 'benefits', 'apply'].map((section) => (
          <button
            key={section}
            className={`text-sm md:text-base font-semibold px-3 py-2 rounded-full transition-all duration-300 ${
              activeSection === section 
                ? 'bg-red-600 text-white' 
                : 'hover:bg-gray-100'
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Jobs Section */}
      {activeSection === 'jobs' && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto py-12 px-4 md:px-6"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
            
            {/* Search bar */}
            <div className="relative mb-8">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for positions..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-red-500"
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
              />
            </div>
            
            {/* Filters */}
            <JobFilter 
              filters={filters} 
              setFilters={setFilters} 
              jobCount={jobs.length}
            />
            
            {/* Job listings */}
            <JobList jobs={jobs} onApply={handleApply} />
            
            {jobs.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-600">No positions match your filters</h3>
                <p className="mt-2 text-gray-500">Try adjusting your search criteria</p>
                <button 
                  className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  onClick={() => setFilters({search: '', type: 'All', department: 'All'})}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </motion.section>
      )}
      
      {/* Culture Section */}
      {activeSection === 'culture' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CultureSection />
          <TestimonialsCarousel />
        </motion.div>
      )}
      
      {/* Benefits Section */}
      {activeSection === 'benefits' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BenefitsSection />
        </motion.div>
      )}
      
      {/* Apply Section */}
      {activeSection === 'apply' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ApplicationForm selectedJobId={selectedJob} />
        </motion.div>
      )}
    </div>
  )
} 