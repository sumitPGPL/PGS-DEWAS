"use client";

import EventForm from "@/components/EventForm/EventForm";
import React from "react";
import { useState } from "react";

export default function page() {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    thumbnail: "",
    location: "",
    startDate: "",
    category: "",
    endDate: "",
    orgId: "",
    type: "",
    registrationRequired: "",
    capacity: "",
    registerParticipants: "",
  });

  const fields = [
    { name: "title", label: "Title", type: "text", placeholder: "Enter title" },
    {
      name: "description",
      label: "Description",
      type: "text",
      placeholder: "Enter description",
    },
    {
      name: "thumbnail",
      label: "Thumbnail",
      type: "file",
      placeholder: "Select thumbnail",
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      placeholder: "Enter location",
    },
    {
      name: "startDate",
      label: "Start Date",
      type: "datetime-local",
      placeholder: "Enter start date",
    },
    {
      name: "category",
      label: "Category",
      type: "text",
      placeholder: "Enter category",
    },
    {
      name: "endDate",
      label: "End Date",
      type: "datetime-local",
      placeholder: "Enter end date",
    },
    {
      name: "orgId",
      label: "School",
      type: "select",
      options: ["Id 1", "Id 2", "Id 3"],
      placeholder: "Select school",
    },
    { name: "type", label: "Type", type: "text", placeholder: "Enter type" },
    {
      name: "registrationRequired",
      label: "Registration Required",
      type: "select",
      options: ["False", "True"],
      placeholder: "Select registration requirement",
    },
    { name: "capacity", label: "Capacity", type: "number", placeholder: "0" },
    {
      name: "registerParticipants",
      label: "Register Participants",
      type: "number",
      placeholder: "0",
    },
  ];

  const onSubmit = async () => {
    try {
    } catch (error) {
      console.log("Form submission failed", error.message);
    }
  };

  return (
    <>
      <EventForm
        fields={fields}
        formData={event}
        setFormData={setEvent}
        onSubmit={onSubmit}
      />
    </>
  );
}
