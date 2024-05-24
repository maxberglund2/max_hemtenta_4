"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Status = () => {
  const [available, setAvailable] = useState(false);
  const [color, setColor] = useState("bg-red-500");
  const [location, setLocation] = useState(""); // New state variable for location

  const getTimes = async () => {
    try {
      const res = await axios.get("/time.json").then((res) => {
        checkIfAvailable(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfAvailable = (data: Array<Record<string, string>>) => {

    let currentTime = new Date()
      .toLocaleTimeString()
      .slice(0, 5)
      .replace(":", "");

    for (let obj of data) {
      const keys = Object.keys(obj);
      const values = Object.values(obj);
      if (
        parseInt(currentTime) >= parseInt(keys[0]) &&
        parseInt(currentTime) < parseInt(keys[1])
      ) {
        setAvailable(false);
        setLocation(values[0]);
        return;
      } else {
        setAvailable(true);
        setLocation(values[1]);
      }
    }
  };

  useEffect(() => {
    getTimes();
  });

  useEffect(() => {
    if (available) {
      setColor("bg-green-500");
    } else {
      setColor("bg-red-500");
    }
  }, [available]);

  const handleStatus = () => {
    setAvailable(!available);
  };

  return (
    <div className={color + ` text-white p-4`}>
      <h1 className="text-2xl font-bold">Status</h1>
      <p>Available: {available ? "Yes" : "No"}</p>
      <p>Location: {location}</p> {/* Display location */}
    </div>
  );
};
export default Status;
