// src/components/AddToGoogleCalendar.jsx
import React, { useEffect } from "react";
import { gapi } from "gapi-script";

const AddToGoogleCalendar = ({ task }) => {
  const CLIENT_ID = "REACT_APP_GOOGLE_CLIENT_ID";
  const API_KEY = "REACT_APP_GOOGLE_API_KEY";
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const SCOPES = "https://www.googleapis.com/auth/calendar";

  useEffect(() => {
    // Load Google API client library
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .catch((error) => {
          console.error("Error initializing Google API client:", error);
        });
    });
  }, [API_KEY, CLIENT_ID, DISCOVERY_DOCS, SCOPES]);

  const addToCalendar = () => {
    const event = {
      summary: task.title,
      start: {
        dateTime: new Date(task.dueDate).toISOString(),
        timeZone: "America/New_York",
      },
      end: {
        dateTime: new Date(new Date(task.dueDate).getTime() + 30 * 60000).toISOString(),
        timeZone: "America/New_York",
      },
    };

    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        gapi.client.calendar.events
          .insert({
            calendarId: "primary",
            resource: event,
          })
          .then(() => {
            alert("Task added to Google Calendar!");
          })
          .catch((error) => {
            console.error("Error adding event to Google Calendar:", error);
            alert("Failed to add task to Google Calendar. See console for details.");
          });
      });
  };

  return (
    <button onClick={addToCalendar} className="btn btn-secondary">
      Add to Google Calendar
    </button>
  );
};

export default AddToGoogleCalendar;
