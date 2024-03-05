// NewsCarousel.jsx
'use client'
import { getEvent } from '@/lib/services/events/eventSevices';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const images = [
  'https://placekitten.com/600/300',
  'https://placekitten.com/601/300',
  'https://placekitten.com/602/300',
  // Add more image URLs as needed
];

const NewsCarousel = () => {
  const [newsList, setNewsList] = useState([]);
  const fetchEvents = async () => {
    try {
      
      const newsData = await getEvent({limit:5, page:1});
      setNewsList(newsData);
      console.log(newsData);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      
    }
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = 5;

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(()=>{
    fetchEvents();
  },[])

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden md:h-[375px]">
        {/* Render each carousel item */}
        {newsList?.data?.map((news, index) => (
          <div
            key={index}
            className={`duration-700 ease-linear ${activeIndex === index ? '' : 'opacity-0'}`}
            data-carousel-item={activeIndex === index ? 'active' : undefined}
          >
            <img
              src={news.thumbNail}  // Assuming image filenames start from 1
              className="absolute block w-full   -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              alt={`Slide ${index + 1}`}
            />
            <p className='absolute block text-white bottom-20 font-bold text-xl p-5 text-center'>{news.title}</p>
          </div>
        ))}
      </div>





      {/* Slider controls */}
      <button
        type="button"
        className="font-bold text-[#376dbe] text-2xl absolute top-0 start-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        &lt; {/* Previous button content */}
      </button>

      <button
        type="button"
        className="absolute text-[#376dbe] font-bold text-2xl top-0 end-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        &gt; {/* Next button content */}
      </button>

      <button
       className='p-2 bg-white absolute bottom-5 left-4 rounded-md'>
       <Link href='/events'> Events</Link>
      </button>
    </div>
  );
};

export default NewsCarousel;

