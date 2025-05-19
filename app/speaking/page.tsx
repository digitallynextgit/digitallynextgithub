"use client";

import React from 'react';
import Banner from '../components/speaking/Banner';
import Vision from '../components/speaking/Vision';
import Testimonials from '../components/speaking/Testimonials';

const page = () => {
    return (
        <div className="bg-[#ece2d7] min-h-screen">
            <Banner />
            <Vision />
            <Testimonials />
        </div>
    );
};

export default page; 