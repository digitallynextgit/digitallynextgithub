"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Service options
const services = [
  "360° Performance Marketing",
  "Digital Branding",
  "Complete Online Demand Generation",
  "Influencer Marketing & Digital PR",
  "Personal Branding & Thought Leadership",
  "Online Community Building & Development",
  "Disruptive Digital Campaigns - Meme Marketing",
  "Disruptive Digital Campaigns - Viral Marketing",
  "Disruptive Digital Campaigns - Engagement Marketing",
  "Digital Marketing - Search Engine Optimization (SEO)",
  "Digital Marketing - Paid Media Planning and Optimization",
  "Digital Marketing - Social Media Optimization (SMO)",
  "Digital Marketing - Online Reputation Management (ORM)",
  "Digital Assets - Website/Microsite/Landing Page",
  "Digital Assets - Social Media Setup and Activation",
  "Digital Assets - Content Marketing",
  "Digital Assets - Video Production",
  "Digital Assets - Graphics Design",
  "Digital Assets - Paid Ads Creation",
  "Social CRM/Analytics Integration & Management"
];

// Define types for the form error structure
type FormError = {
  _errors?: string[];
};

type FormErrors = {
  [field: string]: FormError | undefined;
};

interface ConsultationFormProps {
  defaultService?: string;
  hideService?: boolean;
  onSuccessClose?: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ defaultService, hideService, onSuccessClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    company: "",
    designation: "",
    service: defaultService || "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success: boolean | null;
    message: string;
    errors?: FormErrors;
  }>({
    success: null,
    message: ""
  });
  
  // Create a ref for the success message container
  const successRef = useRef<HTMLDivElement>(null);

  // Use useEffect to indicate client-side rendering is active
  // This prevents hydration mismatches with browser extensions
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Scroll to success message when it appears
  useEffect(() => {
    if (formStatus.success && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [formStatus.success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when typing
    if (formStatus.errors && formStatus.errors[name]) {
      setFormStatus(prev => {
        const updatedErrors = { ...prev.errors } as FormErrors;
        updatedErrors[name] = undefined;
        return {
          ...prev,
          errors: updatedErrors
        };
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ success: null, message: "" });
    
    try {
      console.log('Submitting form data:', formData);
      
      // Send form data to our backend
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      console.log('Form submission result:', result);
      
      if (response.ok && result.success) {
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          country: "",
          company: "",
          designation: "",
          service: defaultService || "",
          message: "",
        });
        
        setFormStatus({
          success: true,
          message: result.message || "Thank you for your message. We'll get back to you soon!"
        });
      } else {
        setFormStatus({
          success: false,
          message: result.message || "Failed to submit form. Please try again.",
          errors: result.errors
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        success: false, 
        message: "There was an error submitting your message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Only render the form on the client side to avoid hydration mismatches
  if (!isClient) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#d90429] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Function to get field error message
  const getFieldError = (fieldName: string) => {
    if (formStatus.errors && formStatus.errors[fieldName]) {
      return formStatus.errors[fieldName]._errors?.[0] || "Invalid field";
    }
    return null;
  };

  return (
    <>
      {formStatus.success === true ? (
        <div ref={successRef} className="bg-green-50 p-4 sm:p-6 md:p-8 rounded-xl text-center shadow-lg border-2 border-green-200 ">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 text-green-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800 mb-2 sm:mb-3">Message Sent Successfully!</h3>
          <p className="text-sm sm:text-base md:text-lg text-green-700 mb-4 sm:mb-6">{formStatus.message}</p>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm mb-4 sm:mb-6 max-w-md mx-auto">
            <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">What happens next?</h4>
            <ol className="text-left space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <span>Our team will review your consultation request</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <span>We&apos;ll reach out to you within 1-2 business days</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <span>We&apos;ll schedule a detailed consultation call to discuss your needs</span>
              </li>
            </ol>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setFormStatus({ success: null, message: "" })}
            className="px-5 sm:px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            Send Another Message
          </motion.button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 rounded-xl text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${getFieldError('name') ? 'border-red-500 ring-red-200' : 'border-0 focus:ring-[#d90429]'} shadow-sm transition-all`}
              />
              {getFieldError('name') && (
                <p className="mt-1 text-sm text-red-600">{getFieldError('name')}</p>
              )}
            </div>
            
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 rounded-xl text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${getFieldError('email') ? 'border-red-500 ring-red-200' : 'border-0 focus:ring-[#d90429]'} shadow-sm transition-all`}
              />
              {getFieldError('email') && (
                <p className="mt-1 text-sm text-red-600">{getFieldError('email')}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 rounded-xl text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${getFieldError('phone') ? 'border-red-500 ring-red-200' : 'border-0 focus:ring-[#d90429]'} shadow-sm transition-all`}
              />
              {getFieldError('phone') && (
                <p className="mt-1 text-sm text-red-600">{getFieldError('phone')}</p>
              )}
            </div>
            
            <div>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="City/State"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 rounded-xl text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${getFieldError('city') ? 'border-red-500 ring-red-200' : 'border-0 focus:ring-[#d90429]'} shadow-sm transition-all`}
              />
              {getFieldError('city') && (
                <p className="mt-1 text-sm text-red-600">{getFieldError('city')}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                placeholder="Country"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 rounded-xl text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${getFieldError('country') ? 'border-red-500 ring-red-200' : 'border-0 focus:ring-[#d90429]'} shadow-sm transition-all`}
              />
              {getFieldError('country') && (
                <p className="mt-1 text-sm text-red-600">{getFieldError('country')}</p>
              )}
            </div>
            
            <div>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Company/Organization"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 rounded-xl text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${getFieldError('company') ? 'border-red-500 ring-red-200' : 'border-0 focus:ring-[#d90429]'} shadow-sm transition-all`}
              />
              {getFieldError('company') && (
                <p className="mt-1 text-sm text-red-600">{getFieldError('company')}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                placeholder="Your Designation"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 rounded-xl text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${getFieldError('designation') ? 'border-red-500 ring-red-200' : 'border-0 focus:ring-[#d90429]'} shadow-sm transition-all`}
              />
              {getFieldError('designation') && (
                <p className="mt-1 text-sm text-red-600">{getFieldError('designation')}</p>
              )}
            </div>
            
            {!hideService && (
              <div>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 rounded-xl text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${getFieldError('service') ? 'border-red-500 ring-red-200' : 'border-0 focus:ring-[#d90429]'} shadow-sm transition-all`}
                >
                  <option value="">Select a Service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {getFieldError('service') && (
                  <p className="mt-1 text-sm text-red-600">{getFieldError('service')}</p>
                )}
              </div>
            )}
          </div>
          
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Message"
              className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 rounded-xl text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${getFieldError('message') ? 'border-red-500 ring-red-200' : 'border-0 focus:ring-[#d90429]'} shadow-sm transition-all resize-none`}
            />
            {getFieldError('message') && (
              <p className="mt-1 text-sm text-red-600">{getFieldError('message')}</p>
            )}
          </div>
           
          {formStatus.success === false && formStatus.message && (
            <div className="bg-red-50 p-4 rounded-lg text-red-600 flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              <span>{formStatus.message}</span>
            </div>
          )}
           
          <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto flex items-center justify-center gap-2 py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-bold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d90429] border-0 ${
                isSubmitting
                  ? 'bg-[#f87171] text-white cursor-not-allowed'
                  : 'bg-[#d90429] text-white hover:bg-[#b90323] cursor-pointer'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
                  </svg>
                </>
              )}
            </motion.button>
          </div>
        </form>
      )}
    </>
  );
};

export default ConsultationForm; 
