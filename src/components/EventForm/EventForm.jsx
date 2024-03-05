'use client'
import React from 'react';

export default function EventForm({ fields, formData, setFormData, onSubmit }) {
  return (
    <>
      <div className='flex flex-col w-full justify-center items-center bg-[url("/MessageSvg.svg")]'>
        <h1 className='text-center mx-auto w-full my-3 text-4xl font-bold text-tgreen '>Event Details Form</h1>
        <div className='w-11/12 rounded-lg flex flex-col justify-center items-center bg-bgreen opacity-75 p-5'>
          <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 '>
            {fields.map((field) => (
              <div key={field.name} className='w-full flex justify-center py-2 px-4'>
                <label htmlFor={field.name} className={`w-32 md:w-40 lg:w-40 p-2 text-xl font-bold`}>{field.label}</label>
                <input
                  name={field.name}
                  className="w-1/2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                  id={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
          <button
            onClick={onSubmit}
            className="w-40 my-5 mx-auto p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white hover:bg-tgreen">Submit
          </button>
        </div>
      </div>
    </>
  );
}