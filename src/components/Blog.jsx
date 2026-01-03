import React from 'react';



const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4 pt-20">
     
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-20 animate-pulse"></div>
        <div className="relative bg-white p-6 rounded-full shadow-xl border border-gray-100 animate-bounce duration-[2000ms]">
          <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter mb-4 uppercase">
        Startup Sahifasi
      </h2>
      
      <div className="flex items-center gap-2 mb-6">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <p className="text-gray-500 font-medium tracking-widest text-sm uppercase">
          Tez orada qo'shiladi
        </p>
      </div>

      <p className="max-w-md text-gray-400 leading-relaxed italic">
        Biz hozirda 3 kishilik jamoamiz bilan loyihaning so'nggi detallari ustida ishlayapmiz. 
        Katta o'zgarishlarga tayyor turing!
      </p>


      <div className="mt-10 w-full max-w-xs bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div className="bg-blue-600 h-full w-[75%] animate-[progress_3s_ease-in-out_infinite] origin-left"></div>
      </div>
    </div>
  );
};

export default Blog;