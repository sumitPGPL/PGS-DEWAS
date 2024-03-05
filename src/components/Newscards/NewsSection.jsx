'use client'
import { useEffect, useRef, useState } from "react";
import NewsCarousel from "../Carousel/NewsCarousel";
import { getAllNews, deleteNews ,updateNews } from '@/lib/services/news/index';
import Link from "next/link";

export default function LatestNews() {
  const [newsData, setNewsData] = useState([])
  const listRef = useRef(null);

  const fetchNews = async () => {
    try {
     
      const newsDatas = await getAllNews();
      // console.log(newsDatas);
      setNewsData(newsDatas);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      
    }
  };

  useEffect(() => {
    const listElement = listRef.current;
    const autoScroll = () => {
      listElement.scrollTop += 1;
      // console.log('listElement.scrollHeight', listElement.scrollTop + listElement.clientHeight, listElement.scrollHeight,)
      if (listElement.scrollTop + listElement.clientHeight >= listElement.scrollHeight - 1) {
        listElement.scrollTop = 0; // Reset to the top
      }
    };
    let scrollInterval = setInterval(autoScroll, 50);
    listElement.addEventListener('mouseover', () => {
      clearInterval(scrollInterval);
    });
    listElement.addEventListener('mouseout', () => {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, 50);
    });

    return () => clearInterval(scrollInterval);
  }, []);

  useEffect(() => {
    fetchNews();
  }, []);


  return (
    <>
      <div className="w-full flex justify-center items-center flex-col mt-10">
        <h2 className="text-tgreen text-2xl font-bold ">News & Notices</h2>
        <h6 className="text-2xl text-tgreen font-bold ">_________________________</h6>
        <h5 className="text-tgreen text-2xl font-bold ">BE UPDATED ALL THE THIME</h5>
      </div>
      <div className="flex flex-col sm:flex-row w-full mt-10">
        <div className="w-full sm:w-1/2 p-1 h-[350px]">
          <h2 className="text-2xl bg-[#75b6e5] p-2 text-center">Latest Update 2023-24</h2>
          <div className="bg-bgreen w-full mx-auto">
            <NewsCarousel />
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-1 h-[382px]">
          <h2 className="text-2xl bg-[#75b6e5] p-2 text-center">Latest News</h2>
          <div className="bg-bgreen h-full w-full mx-auto">
            <div className="flex mx-auto w-full h-full items-center justify-center">
              <ul ref={listRef} className="flex flex-col bg-bgreen p-2 w-full max-h-[350px] overflow-auto">
                {newsData.map((val, index) => (

                  <NewsList key={index} title={val.title} date={val.publishedDate} image={val.thumbNail} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

const NewsList = ({ title, date, key ,image}) => {
  return (
    <li key={key} className="border-gray-400 flex flex-col mb-2">
      <Link href='/news'>
      <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-3  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <img src={image} className="flex flex-col rounded-md max-w-32 text-2xl  bg-gray-300 text-black justify-center items-center mr-4 " style={{ backgroundImage: "url('news/newspaper.png')" }}>
          
        </img>
        <div className="flex-col pl-0 mr-16">
          <div className="font-medium">{title}</div>
          <div className="text-gray-600 text-sm">{date}</div>
        </div>
        {/* <div className="text-gray-600 text-xs">1-Jan-2024</div> */}
      </div>
      </Link>
    </li>
  )
}

