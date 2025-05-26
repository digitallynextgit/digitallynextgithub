"use client";
import React, { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  city: z.string().min(1, "City/State is required"),
  country: z.string().min(1, "Country is required"),
  company: z.string().min(1, "Company/Organisation is required"),
  designation: z.string().min(1, "Designation is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

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

interface ConsultationFormProps {
  onSuccess?: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean | null;
    message: string;
  }>({
    success: null,
    message: ""
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmissionStatus({
          success: true,
          message: "Thank you for your interest! Our team will contact you shortly."
        });
        reset();
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setSubmissionStatus({
          success: false,
          message: "Something went wrong. Please try again."
        });
      }
    } catch (err) {
      setSubmissionStatus({
        success: false,
        message: "An error occurred. Please try again."
      });
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[2vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.125vh] md:gap-[2vw]">
          {/* Name Field */}
          <div>
            <label className="block mb-[0.5vh] text-black text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full p-[1.125vh] text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] border text-black border-gray-300 rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-[0.5vh] text-black text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-[1.125vh] text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] border text-black border-gray-300 rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
            {errors.email && (
              <p className="text-red-500 text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block mb-[0.5vh] text-black text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              {...register("phone")}
              className="w-full p-[1.125vh] text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] border text-black border-gray-300 rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* City/State Field */}
          <div>
            <label className="block mb-[0.5vh] text-black text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] font-medium">
              City/State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("city")}
              className="w-full p-[1.125vh] text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] border text-black border-gray-300 rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your city/state"
            />
            {errors.city && (
              <p className="text-red-500 text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] mt-1">{errors.city.message}</p>
            )}
          </div>

          {/* Country Field */}
          <div>
            <label className="block mb-[0.5vh] text-black text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] font-medium">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("country")}
              className="w-full p-[1.125vh] text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] border text-black border-gray-300 rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your country"
            />
            {errors.country && (
              <p className="text-red-500 text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] mt-1">{errors.country.message}</p>
            )}
          </div>

          {/* Company/Organisation Field */}
          <div>
            <label className="block mb-[0.5vh] text-black text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] font-medium">
              Company/Organisation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("company")}
              className="w-full p-[1.125vh] text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] border text-black border-gray-300 rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your company/organisation"
            />
            {errors.company && (
              <p className="text-red-500 text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] mt-1">{errors.company.message}</p>
            )}
          </div>

          {/* Designation Field */}
          <div>
            <label className="block mb-[0.5vh] text-black text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] font-medium">
              Designation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("designation")}
              className="w-full p-[1.125vh] text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] border text-black border-gray-300 rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your designation"
            />
            {errors.designation && (
              <p className="text-red-500 text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] mt-1">{errors.designation.message}</p>
            )}
          </div>

          {/* Service Dropdown */}
          <div>
            <label className="block mb-[0.5vh] text-black text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] font-medium">
              Looking For <span className="text-red-500">*</span>
            </label>
            <select
              {...register("service")}
              className="w-full p-[1.125vh] text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] border text-black border-gray-300 rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] mt-1">{errors.service.message}</p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label className="block mb-[0.5vh] text-black text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] font-medium">
            Message
          </label>
          <textarea
            {...register("message")}
            className="w-full p-[1.125vh] text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] border text-black border-gray-300 rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[15vh]"
            placeholder="Your message"
          />
          {errors.message && (
            <p className="text-red-500 text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue text-white text-[3vw] md:text-[1.2vw] lg:text-[0.9vw] py-[1.5vh] rounded-[0.5vw] hover:bg-opacity-90 transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {/* Submission Status */}
        {submissionStatus.message && (
          <div
            className={`p-3 rounded-[0.5vw] text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] ${
              submissionStatus.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submissionStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ConsultationForm;
