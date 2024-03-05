import moment from "moment";
import Image from "next/image";
import React from "react";
import ImageGallery from "../ImageHomeGallary/ImageHomeGallary";
import EventFormParticular from "./EventFormProvider";

const EventDetail = ({ eventData }) => {
  const {
    title,
    description,
    thumbNail,
    location,
    startDate,
    endDate,
    category,
    uuid,
    type,
    registrationRequired,
    capacity,
    registeredParticipants,
    OrganizationUuid,
    newStartDate,
    newEndDate,
  } = eventData;

  return (
    <>
      <div
        className="w-11/12 mx-auto h-96 flex-col flex justify-center items-center rounded-lg bg-cover bg-center"
        style={{ backgroundImage: "url('/MessageSvg.svg')" }}
      >
        <h1 class="text-5xl text-[#3f80cf] font-extrabold dark:text-white text-center p-5">
          Event
          <small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">
            School
          </small>
        </h1>
        <div className="flex lg:gap-10 md:gap-10 sm:gap-10 flex-col lg:flex-row md:flex-row sm:flex-row text-gray-500">
          <h2>
            <Image
              className="inline "
              src="/location.svg"
              alt="Hero Image"
              width={18}
              height={18}
            />
            <span className="md:text-sm lg:text-sm text-xs sm:text-sm pl-2 group-hover:text-white">
              {location}
            </span>
          </h2>
          <h2>
            <Image
              className="inline"
              src="/hours.svg"
              alt="Hero Image"
              width={20}
              height={20}
            />
            <span className="md:text-sm lg:text-sm text-xs sm:text-sm pl-2 group-hover:text-white">
              From {moment(startDate).format("DD-MM-YYYY")} To{" "}
              {moment(endDate).format("DD-MM-YYYY")}
            </span>
          </h2>
        </div>
      </div>

      <h2
        className="md:text-5xl lg:text-5xl sm:text-5xl text-center   font-black flex justify-center p-15 pb-2
           p-5 my-6"
      >
        {title}
      </h2>
      <div className="w-10/12 flex justify-center items-center mx-auto">
        <div className="w-1/3 mx-auto p-6 text-lg font-semibold ">
          <EventFormParticular />
        </div>

        <main
          className=" w-1/2 mx-auto  h-96 flex flex-col justify-center  p-5  bg-cover bg-center border-2 border-tgreen"
          style={{ backgroundImage: `url(${thumbNail})` }}
        ></main>
      </div>
      <div className="w-9/12 p-4 mx-auto">
        <h1 className="text-2xl font-bold">Description</h1>
        <p>{description}</p>
        </div>

      <section class="flex  items-center justify-center">
        <div
          class="w-11/12 bg-white p-8 rounded-lg shadow-lg"
          style={{ backgroundImage: "url('/MessageSvg.svg')" }}
        >
          <h1 className="w-full mx-auto  text-center text-5xl font-bold p-4 text-tgreen">
            Event Details
          </h1>
          <div className="w-1/3 mx-auto flex flex-col justify-center items-center">
            <table className="min-w-full bg-white ">
              <tbody>
                <tr>
                  <td className="py-2  px-4 border-b border-gray-200 text-left font-semibold">
                    Event Start Date :
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-right">
                    {moment(startDate).format("DD-MM-YYYY")}
                  </td>
                </tr>
                <tr>
                  <td className="py-2  px-4 border-b border-gray-200 text-left font-semibold">
                    Start Time :
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-right">
                    {moment(startDate).format("h:mm:ss A")}
                  </td>
                </tr>
                <tr>
                  <td className="py-2  px-4 border-b border-gray-200 text-left font-semibold">
                    Event End Date :
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-right">
                    {moment(endDate).format("DD-MM-YYYY")}
                  </td>
                </tr>
                <tr>
                  <td className="py-2  px-4 border-b border-gray-200 text-left font-semibold">
                    Start Time :
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-right">
                    {moment(endDate).format("h:mm:ss A")}
                  </td>
                </tr>

                <tr>
                  <td className="py-2  px-4 border-b border-gray-200 text-left font-semibold">
                    location :
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-right">
                    {location}
                  </td>
                </tr>
                <tr>
                  <td className="py-2  px-4 border-b border-gray-200 text-left font-semibold">
                    Capacity :
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-right">
                    {capacity}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className="w-11/12 mx-auto">
        <ImageGallery />
      </div>
    </>
  );
};

export default EventDetail;
