'use client';

import React, { useState, useRef, useEffect } from 'react';

// Define FAQ item type
interface FaqItem {
    question: string;
    answer: string;
    category: string;
}

// FAQ data focused on DigitallyNext
const faqData: FaqItem[] = [
    {
        question: "What is DigitallyNext?",
        answer: "DigitallyNext is a disruptive digital and social media agency specializing in Digital Branding, Demand Generation, Personal/Celebrity Branding, Social Media Management, and comprehensive Digital Marketing Strategies. We work with businesses of all sizes to enhance their online presence and drive growth through digital channels.",
        category: "Company"
    },
    {
        question: "What services does DigitallyNext offer?",
        answer: "DigitallyNext offers a comprehensive range of digital marketing services including Digital Branding, Complete Online Demand Generation, Disruptive Digital Campaigns, Social CRM/Analytics Integration, Influencer & Digital PR, Community Building, Digital Performance Marketing, Viral Marketing, and Campaign Assets Creation.",
        category: "Services"
    },
    {
        question: "How can DigitallyNext help my business?",
        answer: "DigitallyNext can help transform your brand, engage your audience, and drive measurable results through tailored digital solutions. We create strategic digital marketing campaigns, enhance your brand presence across digital platforms, optimize your conversion rates, and provide data-driven insights to continuously improve your digital performance.",
        category: "Business"
    },
    {
        question: "What industries does DigitallyNext work with?",
        answer: "DigitallyNext works with a diverse range of industries including technology, e-commerce, education, healthcare, hospitality, finance, real estate, and more. Our flexible approach allows us to adapt our strategies to the specific needs and challenges of any industry.",
        category: "Company"
    },
    {
        question: "What is Digital Branding?",
        answer: "Digital Branding is the process of developing and establishing your brand's identity, presence, and reputation across digital platforms. At DigitallyNext, we leverage strategic storytelling and innovative design to elevate your digital presence and help you build a lasting digital legacy that resonates with your target audience.",
        category: "Services"
    },
    {
        question: "What is Demand Generation?",
        answer: "Demand Generation is a comprehensive marketing approach focused on driving awareness and interest in your products or services. Our Complete Online Demand Generation solutions are designed to create sustainable growth by implementing strategies that attract qualified prospects and convert them into loyal customers.",
        category: "Services"
    },
    {
        question: "How does DigitallyNext handle Influencer Marketing?",
        answer: "Our Influencer & Digital PR services connect your brand with relevant influencers who can authentically promote your products or services to their engaged audiences. We handle the entire process from influencer identification and vetting to campaign planning, execution, and performance measurement.",
        category: "Services"
    },
    {
        question: "What is Community Building?",
        answer: "Community Building involves creating and nurturing online communities around your brand or industry. We develop engagement strategies that foster connections with your audience, establish your brand as an authority, and create loyal brand advocates who will champion your business.",
        category: "Services"
    },
    {
        question: "What is included in Digital Performance Marketing?",
        answer: "Our Digital Performance Marketing services include SEO, Paid Media, Social Media Optimization, Online Reputation Management, and more. We use data-driven strategies to maximize your ROI, increase your online visibility, and drive conversions across all digital channels.",
        category: "Services"
    },
    {
        question: "How can I measure the success of digital marketing campaigns?",
        answer: "We establish clear KPIs aligned with your business objectives and provide comprehensive analytics and reporting. Our team uses advanced tracking tools to monitor metrics such as website traffic, conversion rates, engagement, lead generation, and ROI to demonstrate the effectiveness of your campaigns.",
        category: "Business"
    },
    {
        question: "How long does it take to see results from digital marketing?",
        answer: "The timeline for seeing results varies depending on your goals, industry, competition, and chosen strategies. Some tactics like paid advertising can show immediate results, while others like SEO and content marketing build momentum over time. We typically recommend a minimum 3-6 month commitment to see meaningful results from a comprehensive digital marketing strategy.",
        category: "Business"
    },
    {
        question: "What makes DigitallyNext different from other agencies?",
        answer: "DigitallyNext stands out through our disruptive approach, strategic thinking, and commitment to delivering measurable results. We combine creativity with data-driven insights, stay ahead of digital trends, and develop customized strategies aligned with your specific business goals rather than offering one-size-fits-all solutions.",
        category: "Company"
    },
    {
        question: "How do I get started with DigitallyNext?",
        answer: "Getting started is easy! Simply reach out through our contact form, email us at info@digitallynext.com, or call us to schedule a consultation. We'll discuss your business goals, challenges, and requirements before developing a tailored strategy to help you achieve your digital marketing objectives.",
        category: "Business"
    },
    {
        question: "Does DigitallyNext offer social media management?",
        answer: "Yes, we provide comprehensive social media management services including strategy development, content creation, posting, community management, engagement, and performance analytics. We can manage all major social platforms and develop a cohesive approach that aligns with your overall marketing strategy.",
        category: "Services"
    },
    {
        question: "What is Viral Marketing?",
        answer: "Viral Marketing includes strategies like meme marketing, viral content creation, and engagement marketing designed to spread rapidly through social sharing. Our viral marketing approach creates highly shareable content that captures attention, generates buzz, and expands your brand reach organically.",
        category: "Services"
    }
];

// Category definitions for FAQ organization
const categories = [
    { id: "company", label: "About DigitallyNext", icon: "🏢" },
    { id: "services", label: "Our Services", icon: "✨" },
    { id: "business", label: "Business Solutions", icon: "💼" },
];

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        { text: "Hi there! I'm the DigitallyNext virtual assistant. How can I help you today?", isUser: false },
    ]);
    const [searchResults, setSearchResults] = useState<FaqItem[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to the bottom when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    // Show FAQ options after initial greeting
    useEffect(() => {
        if (messages.length === 1) {
            setTimeout(() => {
                setMessages(prev => [...prev, { 
                    text: "Please select a topic you'd like to learn more about, or type your question below:", 
                    isUser: false 
                }]);
            }, 500);
        }
    }, [messages]);

    // Search functionality
    const handleSearch = () => {
        if (!query.trim()) return;

        setIsSearching(true);
        const filtered = faqData.filter(item =>
            item.question.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filtered);

        // If no results
        if (filtered.length === 0 && query.length > 3) {
            setMessages([
                ...messages,
                { text: query, isUser: true },
                { text: "I couldn't find any answers that match that search. Try searching a broader term or keywords. Or you can contact our team for more specific assistance.", isUser: false }
            ]);
        }
        setIsSearching(false);
    };

    // Handle clicking a search result
    const handleSelectFaq = (faq: FaqItem) => {
        setMessages([
            ...messages,
            { text: faq.question, isUser: true },
            { text: faq.answer, isUser: false }
        ]);
        setSearchResults([]);
        setQuery('');
        
        // After answering, prompt with more options
        setTimeout(() => {
            setMessages(prev => [...prev, { 
                text: "Can I help you with anything else?", 
                isUser: false 
            }]);
        }, 1000);
    };

    // Handle selecting a category
    const handleSelectCategory = (categoryId: string) => {
        setActiveCategory(categoryId);
        const categoryLabel = categories.find(c => c.id === categoryId)?.label;
        
        setMessages([
            ...messages,
            { text: `I want to learn about ${categoryLabel}`, isUser: true },
        ]);
        
        const categoryFaqs = faqData.filter(
            item => item.category.toLowerCase() === categoryId
        );
        
        setTimeout(() => {
            setMessages(prev => [...prev, { 
                text: `Here are some frequently asked questions about ${categoryLabel}:`, 
                isUser: false 
            }]);
            
            setSearchResults(categoryFaqs);
        }, 500);
    };

    // Handle sending a message
    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        // Add user message
        setMessages([...messages, { text: query, isUser: true }]);

        // Find matching FAQ or provide default response
        const matchingFaq = faqData.find(faq =>
            faq.question.toLowerCase().includes(query.toLowerCase()) ||
            query.toLowerCase().includes(faq.question.toLowerCase().split(' ').slice(0, 3).join(' '))
        );

        setTimeout(() => {
            if (matchingFaq) {
                setMessages(prev => [...prev, { text: matchingFaq.answer, isUser: false }]);
                
                // Prompt with related questions
                setTimeout(() => {
                    const relatedFaqs = faqData
                        .filter(item => 
                            item.category === matchingFaq.category && 
                            item.question !== matchingFaq.question
                        )
                        .slice(0, 3);
                        
                    if (relatedFaqs.length > 0) {
                        setMessages(prev => [...prev, { 
                            text: "You might also be interested in these related questions:", 
                            isUser: false 
                        }]);
                        setSearchResults(relatedFaqs);
                    } else {
                        setMessages(prev => [...prev, { 
                            text: "Is there anything else you'd like to know about DigitallyNext?", 
                            isUser: false 
                        }]);
                    }
                }, 1000);
            } else {
                setMessages(prev => [
                    ...prev,
                    {
                        text: "I don't have a specific answer for that question. You might want to contact our team for more personalized help. In the meantime, here are some popular topics:",
                        isUser: false
                    }
                ]);
                // Show category options after no match
                setActiveCategory(null);
            }
        }, 500);

        setQuery('');
    };

    // Reset conversation
    const handleReset = () => {
        setMessages([
            { text: "Hi there! I'm the DigitallyNext virtual assistant. How can I help you today?", isUser: false },
        ]);
        setSearchResults([]);
        setQuery('');
        setActiveCategory(null);
    };

    return (
        <>
            {/* Chat button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 rounded-full p-4 shadow-lg z-50 flex items-center bg-[#DC3232] text-white hover:bg-[#b82a2a] transition-colors"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </div>
                )}
            </button>

            {/* Chat window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col max-h-[600px] border border-gray-200">
                    {/* Header */}
                    <div className="bg-[#DC3232] p-4 rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <span className="font-medium text-white">DigitallyNext Support</span>
                        </div>
                        <div className="flex items-center">
                            <button onClick={handleReset} className="text-white hover:text-gray-200 mr-3" title="Reset conversation">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages container */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}
                            >
                                <div
                                    className={`inline-block p-3 rounded-lg max-w-[80%] ${message.isUser
                                        ? 'bg-[#DC3232] text-white rounded-tr-none'
                                        : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'
                                        }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                        
                        {/* Category selection */}
                        {!activeCategory && messages.length > 1 && searchResults.length === 0 && (
                            <div className="my-4 grid grid-cols-1 gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleSelectCategory(category.id)}
                                        className="p-3 text-left bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center"
                                    >
                                        <span className="text-xl mr-3">{category.icon}</span>
                                        <span className="font-medium text-[#DC3232]">{category.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* FAQ search results */}
                    {searchResults.length > 0 && (
                        <div className="border-t border-gray-200 max-h-[300px] overflow-y-auto bg-white">
                            <div className="p-3 bg-gray-50 text-sm font-medium text-gray-700 border-b">
                                Select a question to learn more:
                            </div>
                            {searchResults.map((result, index) => (
                                <button
                                    key={index}
                                    className="p-4 w-full text-left hover:bg-gray-50 border-b border-gray-100 transition-colors flex items-start"
                                    onClick={() => handleSelectFaq(result)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#DC3232] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-[#DC3232] font-medium">{result.question}</p>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input area */}
                    <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 bg-white">
                        <div className="relative">
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    if (e.target.value.trim()) {
                                        handleSearch();
                                    } else {
                                        setSearchResults([]);
                                    }
                                }}
                                placeholder="Type your question..."
                                className="w-full p-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC3232]"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 text-[#DC3232]"
                                disabled={isSearching}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default ChatBot; 