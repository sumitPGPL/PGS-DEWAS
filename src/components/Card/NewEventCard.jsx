import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const dateConvertor = (startDate) => {
    const dateObject = new Date(startDate);

    // Use dateObject methods to get individual components
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Months are zero-based, so add 1
    const day = dateObject.getDate();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    // Format the date components as a string
    const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year} ${hours}:${minutes}:${seconds}`;

    return formattedDate;

}

export default function NewEventCard({ event }) {
    const router = useRouter();
    const { title, description, thumbNail, location, startDate, endDate, category, uuid, type, registrationRequired
        , capacity,
        registeredParticipants
        , OrganizationUuid } = event
    const newStartDate = dateConvertor(startDate);
    const newEndDate = dateConvertor(endDate);
    return (
        <div className='w-full rounded-xl p-3 bg-bgreen border-2 border-tgreen'>
            <div className='w-full h-60 mx-auto rounded-xl relative overflow-hidden'>
                <img src={event.thumbNail} alt={title}
                    className=' object-cover w-full h-full rounded-xl' />
            </div>
            <div className='w-full  flex flex-col justify-center p-2'>
                <h1 className='text-3xl  font-bold p-2'>{title}</h1>
                <h2 className='px-2 font-semibold text-lg'>From {newStartDate} To {newEndDate}</h2>
                <h3 className='px-2 py-2 font-semibold text-md'>Location : {location}</h3>
                <button
                    className='w-1/3 rounded-md p-2 bg-tgreen outline-none text-white duration-100 hover:text-black ' 

                    onClick={() => {
                        router.push(`/event/details/${uuid}`)
                    }}
                >More Details</button>
            </div>
        </div>
    )
}
