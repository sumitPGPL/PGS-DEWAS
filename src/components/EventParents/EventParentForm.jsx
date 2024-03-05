'use client'
import React, { useState, useEffect } from 'react';
import { getEvent, deleteEvent} from '@/lib/services/events/eventSevices';
import EventForm from '@/components/UploadEvents/EventForm/eventForm';
import EventTable from '@/components/UploadEvents/EventTable/eventTable'
import { getAuthToken } from '@/lib/middleware/apiInceptor';

const NewsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEventList] = useState([]);  // Corrected the name to setEventList
  const [allEvents, setAllEvents] = useState();  // Renamed setEvents to setAllEvents

  const [selectedEventId, setSelectedEventId] = useState(null);
  const fetchEvents = async (page) => {
    try {
      setIsLoading(true);
      const eventData = await getEvent({ limit: 6, page });
  
      console.log('eventData:', eventData);
  
      // Access the events array under the 'data' property
      const eventsArray = Array.isArray(eventData.data) ? eventData.data : [];
      console.log('eventsArray:', eventsArray);
  
      setEventList(eventsArray);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  
  const handleDelete = async (uuid) => {
    try {
      setIsLoading(true);
      await deleteEvent(uuid);
      fetchEvents();
    } catch (error) {
      console.error('Error deleting news:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (uuid) => {
    console.log(events)
    fetchEvents();
    setSelectedEventId(uuid)
  };

  const handleFormSubmit = () => {

    fetchEvents();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken(); // Get authentication token from cookies
        if (!token) {
          router.push('/admin/login'); 
          return;
        }
        setIsLoading(true);
        await fetchEvents();
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="news-page">
      <EventForm onFormSubmit={handleFormSubmit} events={events} selectedEventId={selectedEventId} />
      <EventTable events={events} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};
export default NewsPage;