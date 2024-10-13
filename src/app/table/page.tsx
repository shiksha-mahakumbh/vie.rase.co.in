'use client';
import React from 'react';
import Footer from '../Component/Footer'; // Ensure Footer is a default export
import Header from '../Component/Header'; // Ensure Header is a default export
import CompanyInfo from '../Component/CompanyInfo'; // Ensure CompanyInfo is a default export
import Filter from '../Component/Filter'; // Ensure Filter is a default export

const Page = () => {
  return (
    <div className="bg-white">
      <CompanyInfo />
      <Header />
      <div className="flex flex-row">
        <div className="md:w-1/6"></div>
        <div className="md:w-4/6">
          <Filter />
        </div>
        <div className="md:w-1/6"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
