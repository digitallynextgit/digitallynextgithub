'use client';

import React, { useState, useRef, useEffect } from 'react';

// Define FAQ item type
interface FaqItem {
    question: string;
    answer: string;
}

// FAQ data based on Deepak Goel's background
const faqData: FaqItem[] = [
    {
        question: "Who is Deepak Goel?",
        answer: "Deepak Goel is a new-gen Indian entrepreneur and digital marketing expert. He is the founder of Digitally Next and iMET Global, focusing on creating a better Digital-Social Media Enabled world. Deepak has extensive experience in digital marketing, personal branding, and entrepreneurship education, having helped numerous businesses establish their digital presence."
    },
    {
        question: "What is Digitally Next?",
        answer: "Digitally Next is a disruptive digital and social media agency founded by Deepak Goel. The company specializes in Digital Branding, Demand Generation, Personal/Celebrity Branding, Social Media Management, and comprehensive Digital Marketing Strategies. Digitally Next works with businesses of all sizes to enhance their online presence and drive growth through digital channels."
    },
    {
        question: "What is iMET Global?",
        answer: "iMET Global is a collaborative center of excellence founded by Deepak Goel that focuses on profitable business-driven up-skilling. It brings industry-specific insights to professionals, entrepreneurs, MSMEs, and startups. iMET Global supports the government's vision of Digital India, Skill India, and Make in India initiatives by providing cutting-edge digital skills training and education."
    },
    {
        question: "What is iSoCIAL?",
        answer: "iSoCIAL is India's growing community of IoT & Big Data professionals founded by Deepak Goel. It currently connects over 34,000 entities and individuals interested in technology and digital innovation. The community provides networking opportunities, knowledge sharing, and professional development for those in the tech industry."
    },
    {
        question: "What services does Digitally Next offer?",
        answer: "Digitally Next offers a range of digital marketing services including Digital Branding, Demand Generation, Personal/Celebrity Branding, Social Media Management, and Digital Marketing Strategy. We help businesses of all sizes - from startups to large corporations - establish and grow their digital presence."
    },
    {
        question: "How can I learn digital marketing skills from Deepak?",
        answer: "Deepak offers various educational opportunities through iMET Global, a collaborative centre of excellence focused on profitable business-driven up-skilling. Our programs provide industry-specific insights for professionals, entrepreneurs, MSMEs, and startups. Visit the training section of our website for more information."
    },
    {
        question: "What is iSoCIAL and how can I join the community?",
        answer: "iSoCIAL is India's growing community of IoT & Big Data professionals, currently connecting over 34,000 entities and individuals. To join, visit our community page where you can register, attend upcoming events, and connect with fellow technology enthusiasts and professionals."
    },
    {
        question: "How does Deepak support the Digital India initiative?",
        answer: "Through iMET Global, Deepak actively supports the government's vision of Digital India, Skill India, and Make in India initiatives by providing digital skills training, fostering innovation, and enabling businesses to thrive in the digital economy. We offer specialized programs aligned with these national priorities."
    },
    {
        question: "Can Deepak help with personal branding?",
        answer: "Absolutely! Personal and celebrity branding is one of our core services at Digitally Next. We help professionals, entrepreneurs, and public figures develop a strong personal brand presence across digital platforms, enhance their visibility, and connect with their target audience effectively."
    },
    {
        question: "What is Deepak's background and experience?",
        answer: "Deepak is a new-gen Indian Entrepreneur working as a catalyst in building a better Digital-Social Media Enabled world. He leads Digitally Next, which disrupts the digital social media agency space, and pioneers iMET Global, which brings profitable business-driven up-skilling insights to the professional education sector."
    },
    {
        question: "How can I contact Deepak for business inquiries?",
        answer: "For business inquiries, please visit our contact page on the website or email us at info@digitallynext.com. For speaking engagements or media inquiries, please include details about your event or publication, and our team will get back to you promptly."
    },
    {
        question: "What digital marketing trends is Deepak focusing on currently?",
        answer: "Deepak is currently focused on emerging technologies like AI-driven marketing, voice search optimization, video marketing, and the integration of IoT with digital marketing strategies. He regularly shares insights on these trends through blog posts and social media."
    },
    {
        question: "What clients has Deepak worked with?",
        answer: "Through Digitally Next, Deepak has worked with a diverse portfolio of clients ranging from startups to established brands across various industries including technology, e-commerce, education, healthcare, and hospitality. His client list includes both B2B and B2C businesses looking to enhance their digital presence."
    },
    {
        question: "Does Deepak offer consulting services?",
        answer: "Yes, Deepak offers consulting services for businesses looking to improve their digital marketing strategies, personal branding, or digital transformation initiatives. His consulting approach is highly personalized, focusing on the unique needs and goals of each client to deliver tangible results and ROI."
    },
    {
        question: "What training programs does iMET Global offer?",
        answer: "iMET Global offers a comprehensive range of training programs focused on digital marketing, entrepreneurship, technology integration, and business development. These include certificate courses, workshops, bootcamps, and custom corporate training programs designed to enhance specific skills and knowledge areas."
    }
];

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        { text: "Hi there! I'm Deepak's virtual assistant. How can I help you today?", isUser: false },
    ]);
    const [searchResults, setSearchResults] = useState<FaqItem[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to the bottom when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
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
                { text: "Hmm... I couldn't find any answers that match that search. Try searching a broader term or keywords. Or you can contact Team Digitally Next for more specific assistance.", isUser: false }
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
            } else {
                setMessages(prev => [
                    ...prev,
                    {
                        text: "I don't have a specific answer for that question. You might want to contact Team Digitally Next for more personalized help.",
                        isUser: false
                    }
                ]);
            }
        }, 500);

        setQuery('');
    };

    return (
        <>
            {/* Chat button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 rounded-full p-4 shadow-lg z-50 flex items-center bg-[#407e84] text-white hover:bg-[#366a70] transition-colors"
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
                    <div className="bg-[#407e84] p-4 rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <span className="font-medium text-white">Deepak Goel Support</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages container */}
                    <div className="flex-1 p-4 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}
                            >
                                <div
                                    className={`inline-block p-3 rounded-lg max-w-[80%] ${message.isUser
                                        ? 'bg-[#407e84] text-white rounded-tr-none'
                                        : 'bg-[#eeddc6] text-gray-800 rounded-tl-none'
                                        }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* FAQ search results */}
                    {searchResults.length > 0 && (
                        <div className="border-t border-gray-200 max-h-[300px] overflow-y-auto">
                            <div className="p-3 bg-gray-50 text-sm font-medium text-gray-700">
                                Frequently Asked Questions
                            </div>
                            {searchResults.map((result, index) => (
                                <button
                                    key={index}
                                    className="p-4 w-full text-left hover:bg-gray-50 border-b border-gray-100 transition-colors"
                                    onClick={() => handleSelectFaq(result)}
                                >
                                    <p className="text-[#407e84] font-medium">{result.question}</p>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input area */}
                    <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4">
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
                                className="w-full p-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#407e84]"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 text-[#407e84]"
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