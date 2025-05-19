'use client';

import React, { useEffect, useState } from 'react';

// Client-only Email Input Component for Newsletter
export const ClientNewsletterInput = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="flex-1 h-[50px] bg-gray-100 rounded-md"></div>;

    return (
        <input
            type="email"
            placeholder="Your Email Address"
            className="border border-gray-300 rounded-md px-4 py-3 flex-1 focus:outline-none focus:ring-2 focus:ring-[#5d7a64]"
        />
    );
}; 