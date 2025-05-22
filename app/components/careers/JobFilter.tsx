'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFilter, FaTimes } from 'react-icons/fa'

type FiltersType = {
  search: string;
  type: string;
  department: string;
}

type JobFilterProps = {
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
  jobCount: number;
}

const JobFilter = ({ filters, setFilters, jobCount }: JobFilterProps) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  
  const jobTypes = ['All', 'Full-time', 'Internship']
  const departments = ['All', 'Design', 'Development', 'Marketing', 'Content', 'Human Resources', 'Social Media', 'Media Production', 'Other']
  
  const handleTypeChange = (type: string) => {
    setFilters({...filters, type})
  }
  
  const handleDepartmentChange = (department: string) => {
    setFilters({...filters, department})
  }
  
  const clearFilters = () => {
    setFilters({search: '', type: 'All', department: 'All'})
  }
  
  const hasActiveFilters = filters.type !== 'All' || filters.department !== 'All' || filters.search !== ''
  
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="flex items-center">
          <h3 className="font-semibold mr-3">Filters</h3>
          {hasActiveFilters && (
            <button 
              onClick={clearFilters}
              className="text-sm text-red-600 flex items-center gap-1 hover:text-red-800"
            >
              <FaTimes size={12} />
              Clear all
            </button>
          )}
        </div>
        
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium text-gray-900">{jobCount}</span> positions
        </div>
        
        {/* Mobile filter toggle */}
        <button 
          className="md:hidden mt-2 w-full flex items-center justify-center gap-2 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <FaFilter size={14} />
          {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      {/* Desktop filters - always visible */}
      <div className="hidden md:flex md:flex-wrap gap-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Job Type</h4>
          <div className="flex flex-wrap gap-2">
            {jobTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  filters.type === type
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Department</h4>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => handleDepartmentChange(dept)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  filters.department === dept
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile filters - toggleable */}
      <motion.div 
        initial={false}
        animate={{ 
          height: showMobileFilters ? 'auto' : 0,
          opacity: showMobileFilters ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="pt-4 space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">Job Type</h4>
            <div className="flex flex-wrap gap-2">
              {jobTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeChange(type)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    filters.type === type
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Department</h4>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => handleDepartmentChange(dept)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    filters.department === dept
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          <h4 className="text-sm text-gray-500 mr-2">Active filters:</h4>
          
          {filters.type !== 'All' && (
            <span className="bg-red-100 text-red-800 text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
              Type: {filters.type}
              <button 
                onClick={() => setFilters({...filters, type: 'All'})}
                className="ml-1 hover:opacity-70"
              >
                <FaTimes size={10} />
              </button>
            </span>
          )}
          
          {filters.department !== 'All' && (
            <span className="bg-red-100 text-red-800 text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
              Department: {filters.department}
              <button 
                onClick={() => setFilters({...filters, department: 'All'})}
                className="ml-1 hover:opacity-70"
              >
                <FaTimes size={10} />
              </button>
            </span>
          )}
          
          {filters.search && (
            <span className="bg-red-100 text-red-800 text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
              Search: {filters.search}
              <button 
                onClick={() => setFilters({...filters, search: ''})}
                className="ml-1 hover:opacity-70"
              >
                <FaTimes size={10} />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default JobFilter 