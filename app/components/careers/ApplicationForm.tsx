'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FaUser, FaEnvelope, FaPhone, FaLinkedin, FaCheck, FaSpinner, FaInfoCircle, FaBriefcase, FaExclamationTriangle } from 'react-icons/fa'
import { careersData } from '@/app/data/careers/full-time'
import { internshipPositions } from '@/app/data/careers/internship' 
import toast from 'react-hot-toast'

// Form validation schema
const applicationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  position: z.string().min(1, 'Please select a position'),
  linkedin: z
    .string()
    .min(1, 'LinkedIn profile is required')
    .url('Please enter a valid LinkedIn profile URL'),
  message: z.string().min(10, 'Please tell us about yourself')
})

type ApplicationFormValues = z.infer<typeof applicationSchema>

// Get all positions from both full-time and internship data
const getAvailablePositions = () => {
  const fullTimePositions = careersData.positions.map(pos => ({
    value: pos.id.toString(),
    label: pos.title + (pos.subtitle ? ` (${pos.subtitle})` : ''),
    type: 'Full-time'
  }));
  
  const internshipPositions1 = internshipPositions.map((pos, index) => ({
    value: (1000 + index).toString(),
    label: pos.title,
    type: 'Internship'
  }));
  
  return [
    { value: '', label: 'Select a position', type: '' },
    ...fullTimePositions,
    ...internshipPositions1
  ];
};

type ApplicationFormProps = {
  selectedJobId?: number | null;
}

const ApplicationForm = ({ selectedJobId }: ApplicationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const errorRef = useRef<HTMLDivElement>(null)
  const availablePositions = getAvailablePositions()
  
  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      position: selectedJobId ? selectedJobId.toString() : ''
    }
  })
  
  // Set the selected job when it changes
  useEffect(() => {
    if (selectedJobId) {
      setValue('position', selectedJobId.toString())
    }
  }, [selectedJobId, setValue])
  
  // Scroll to success or error message when it appears
  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (submitError && errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [submitted, submitError]);
  
  // Get the selected position to show details
  const selectedPosition = watch('position')
  const selectedJob = availablePositions.find(job => job.value === selectedPosition)
  
  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(null)
    setSubmitted(false)
    
    try {
      // Show loading toast
      const loadingToast = toast.loading('Submitting your application...');
      
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      
      const result = await response.json();
      console.log('Form submission result:', result);
      
      // Consider it a success if we get a 200 status OR if success flag is true
      if (response.ok && (response.status === 200 || result.success === true)) {
        const successMessage = result.message || 'Application submitted successfully!';
        setSubmitSuccess(successMessage);
        setSubmitted(true);
        reset();
        toast.success(successMessage);
      } 
      // Handle partial success (email sending failed but application received)
      else if (response.status === 207) {
        const message = result.message || 'Your application was received, but there was an issue sending confirmation emails.';
        setSubmitSuccess(message);
        setSubmitted(true);
        reset();
        toast.success(message);
      }
      // Handle various error cases
      else {
        let errorMessage = '';
        if (response.status === 500 && result.message?.includes('not configured to send emails')) {
          errorMessage = 'The system is temporarily unable to send emails. Your application has been recorded, but confirmation emails could not be sent. Our team will contact you shortly.';
        } else {
          errorMessage = result.message || 'Failed to submit application. Please try again.';
        }
        setSubmitError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('Application submission error:', error);
      const errorMessage = 'Network error. Please check your connection and try again.';
      setSubmitError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }
  
  const handleTryAgain = () => {
    setSubmitError(null);
    setSubmitted(false);
  };
  
  // Success state UI
  if (submitted && submitSuccess) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            ref={successRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-12 rounded-3xl text-center shadow-lg"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                className="flex items-center justify-center"
              >
                <FaCheck className="text-green-600 text-3xl" />
              </motion.div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Application Submitted!
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-6"
            >
              {submitSuccess}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm mb-8"
            >
              <h3 className="font-medium text-lg mb-4">What happens next?</h3>
              
              <ol className="text-left space-y-4">
                {[
                  "Our hiring team will review your application (1-3 business days)",
                  "If your profile matches our requirements, we'll reach out to schedule an initial interview",
                  "The interview process typically involves 2-3 rounds, including technical and cultural fit assessments"
                ].map((step, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                onClick={() => {
                  reset();
                  setSubmitted(false);
                }}
              >
                Submit Another Application
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }
  
  // Error state UI
  if (submitError) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            ref={errorRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-red-50 to-orange-50 p-8 md:p-12 rounded-3xl text-center shadow-lg"
          >
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaExclamationTriangle className="text-red-600 text-3xl" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Application Error</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              {submitError}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
                onClick={handleTryAgain}
              >
                Try Again
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-gray-300 transition-colors"
                onClick={() => window.location.href = '/careers'}
              >
                Back to Careers
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }
  
  // Form submission UI (default state)
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply Now</h2>
            <p className="text-lg text-gray-600">
              Ready to join our team? Fill out the form below and we&apos;ll get back to you soon.
            </p>
          </motion.div>
          
          <form 
            className="bg-white shadow-xl rounded-3xl overflow-hidden"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Form header */}
            <div className="bg-gradient-to-r from-red-900 to-red-700 p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold">Job Application</h3>
              <p className="opacity-80 mt-2">Please fill in all required fields</p>
              
              {selectedJob && selectedJob.value && (
                <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                  <FaBriefcase className="text-white/70" />
                  <div>
                    <p className="text-sm text-white/70">You are applying for:</p>
                    <p className="font-medium">{selectedJob.label}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Form body */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-3">Personal Information</h4>
                
                <div>
                  <label className="block mb-1 text-sm font-medium">Full Name*</label>
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-gray-400">
                      <FaUser />
                    </div>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className={`w-full py-3 px-10 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                      }`}
                      {...register('name')}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium">Email Address*</label>
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-gray-400">
                      <FaEnvelope />
                    </div>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className={`w-full py-3 px-10 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                      }`}
                      {...register('email')}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium">Phone Number*</label>
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-gray-400">
                      <FaPhone />
                    </div>
                    <input
                      type="tel"
                      placeholder="+1 (xxx) xxx-xxxx"
                      className={`w-full py-3 px-10 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                      }`}
                      {...register('phone')}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>
              
              {/* Application Details */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h4 className="text-lg font-semibold mb-3">Application Details</h4>
                
                <div>
                  <label className="block mb-1 text-sm font-medium">Position You&apos;re Applying For*</label>
                  <select
                    className={`w-full py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.position ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    {...register('position')}
                  >
                    {availablePositions.map((position) => (
                      <option key={position.value} value={position.value}>{position.label}</option>
                    ))}
                  </select>
                  {errors.position && (
                    <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium">LinkedIn Profile*</label>
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-gray-400">
                      <FaLinkedin />
                    </div>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      className={`w-full py-3 px-10 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.linkedin ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                      }`}
                      {...register('linkedin')}
                      required
                    />
                  </div>
                  {errors.linkedin && (
                    <p className="mt-1 text-sm text-red-600">{errors.linkedin.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium">Tell us about yourself and why you&apos;re interested*</label>
                  <textarea
                    rows={5}
                    placeholder="Share your experience, skills, and why you'd like to join our team..."
                    className={`w-full py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    {...register('message')}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-700">
                  <p className="flex items-center gap-2">
                    <FaInfoCircle />
                    <span>Please note: You will be asked to provide your resume during the interview process.</span>
                  </p>
                </div>
              </div>
              
              {/* Submit button */}
              <div className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaInfoCircle />
                    <span>All fields marked with * are required</span>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.03 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                    className={`px-8 py-3 rounded-full font-medium flex items-center gap-2 ${
                      isSubmitting ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
                    } text-white transition-colors`}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ApplicationForm