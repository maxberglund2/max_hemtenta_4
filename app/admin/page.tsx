"use client";
import React, { useState, FormEvent } from "react";
import axios from "axios";

type TimeData = {
  [key: string]: string;
};

const Page: React.FC = () => {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono p-4">
      <h1 className="text-3xl mb-4">Add New Time Entry</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-wrap">
          <div className="w-1/2 pr-2">
            <label className="block mb-2">Start Time</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              placeholder="HHMM"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block mb-2">End Time</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              placeholder="HHMM"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 pr-2">
            <label className="block mb-2">Description of Start</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              placeholder="Description of Start Time"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block mb-2">Description of End</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              placeholder="Description of End Time"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
